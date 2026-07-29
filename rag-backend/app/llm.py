from __future__ import annotations

import json
from functools import lru_cache
from typing import Any, TypeVar

from openai import OpenAI
from pydantic import BaseModel, ValidationError

from .config import get_settings
from .schemas import EvidenceGateResult, GroundedAnswerResult, RewrittenQuestion

T = TypeVar("T", bound=BaseModel)


class LLMService:
    def __init__(self) -> None:
        self.settings = get_settings()
        self.client = OpenAI(
            api_key=self.settings.llm_api_key or "missing-key",
            base_url=self.settings.llm_base_url,
            timeout=self.settings.llm_timeout_seconds,
        )

    def _json_call(
        self,
        *,
        system_prompt: str,
        user_prompt: str,
        schema: type[T],
        temperature: float = 0.0,
    ) -> T:
        if not self.settings.llm_api_key:
            raise RuntimeError("LLM_API_KEY is required for grounded answer generation")

        response = self.client.chat.completions.create(
            model=self.settings.chat_model,
            temperature=temperature,
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
        )
        content = response.choices[0].message.content or "{}"
        try:
            payload: dict[str, Any] = json.loads(content)
            return schema.model_validate(payload)
        except (json.JSONDecodeError, ValidationError) as exc:
            raise RuntimeError(f"LLM returned invalid structured output: {content}") from exc

    def rewrite_question(self, message: str, history_text: str) -> RewrittenQuestion:
        if not history_text.strip():
            return RewrittenQuestion(standalone_question=message)
        return self._json_call(
            system_prompt=(
                "Bạn là module viết lại câu hỏi cho hệ thống truy xuất tài liệu. "
                "Chỉ biến câu hỏi mới thành một câu hỏi độc lập dựa trên lịch sử hội thoại. "
                "Không trả lời câu hỏi, không thêm dữ kiện mới. "
                "Trả JSON có trường standalone_question."
            ),
            user_prompt=f"LỊCH SỬ:\n{history_text}\n\nCÂU HỎI MỚI:\n{message}",
            schema=RewrittenQuestion,
        )

    def judge_evidence(self, question: str, context: str) -> EvidenceGateResult:
        return self._json_call(
            system_prompt=(
                "Bạn là cổng kiểm tra bằng chứng của chatbot portfolio. "
                "Chỉ đánh dấu answerable=true khi tài liệu được cung cấp chứa đủ dữ kiện trực tiếp "
                "để trả lời câu hỏi mà không cần kiến thức bên ngoài hoặc suy đoán. "
                "Câu hỏi ngoài hồ sơ, CV, kỹ năng, dự án, kinh nghiệm, học vấn và thông tin liên hệ "
                "công khai phải là false. Không dựa vào keyword cố định; đánh giá theo ý nghĩa "
                "và bằng chứng. Trả JSON: answerable, evidence_ids, reason. "
                "evidence_ids chỉ được dùng ID xuất hiện trong context."
            ),
            user_prompt=f"CÂU HỎI:\n{question}\n\nTÀI LIỆU TRUY XUẤT:\n{context}",
            schema=EvidenceGateResult,
        )

    def generate_grounded_answer(self, question: str, context: str) -> GroundedAnswerResult:
        return self._json_call(
            system_prompt=(
                "Bạn là Phương Portfolio Assistant trong portfolio của Phạm Thu Phương. "
                "Chỉ trả lời bằng thông tin có trong TÀI LIỆU TRUY XUẤT. "
                "Không dùng kiến thức nền, không suy đoán, không bịa thành tích, thời gian, công nghệ "
                "hay số liệu. Viết tự nhiên, ngắn gọn, ưu tiên tiếng Việt theo ngôn ngữ người hỏi. "
                "Mỗi ý quan trọng phải được hỗ trợ bởi ít nhất một document ID. "
                "Trả JSON gồm answer và citation_ids; citation_ids chỉ lấy từ các ID trong context."
            ),
            user_prompt=f"CÂU HỎI:\n{question}\n\nTÀI LIỆU TRUY XUẤT:\n{context}",
            schema=GroundedAnswerResult,
            temperature=0.1,
        )


@lru_cache(maxsize=1)
def get_llm_service() -> LLMService:
    return LLMService()
