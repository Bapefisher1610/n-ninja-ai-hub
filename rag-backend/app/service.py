from __future__ import annotations

from .config import get_settings
from .llm import get_llm_service
from .retriever import get_retriever
from .schemas import ChatRequest, ChatResponse, Citation
from .vector_store import RetrievedDocument

NO_ANSWER_TEXT = (
    "Tôi chưa tìm thấy thông tin đủ tin cậy trong CV hoặc portfolio của Chu Tiến Sơn "
    "để trả lời câu hỏi này. Bạn có thể hỏi về kinh nghiệm, kỹ năng, dự án, học vấn "
    "hoặc thông tin liên hệ công khai của Sơn."
)


class PortfolioRAGService:
    def __init__(self) -> None:
        self.settings = get_settings()
        self.retriever = get_retriever()
        self.llm = get_llm_service()

    @staticmethod
    def _history_to_text(request: ChatRequest) -> str:
        selected = request.history[-6:]
        return "\n".join(f"{item.role}: {item.content}" for item in selected)

    def _format_context(self, documents: list[RetrievedDocument]) -> str:
        blocks: list[str] = []
        used_chars = 0
        for document in documents:
            metadata = document.metadata
            block = (
                f"[DOCUMENT_ID={document.document_id}]\n"
                f"TITLE: {metadata.get('title', 'Không có tiêu đề')}\n"
                f"SECTION: {metadata.get('section', '')}\n"
                f"SOURCE: {metadata.get('source', '')}\n"
                f"EVIDENCE_SCORE: {document.final_score:.4f}\n"
                f"CONTENT:\n{document.text.strip()}\n"
            )
            if used_chars + len(block) > self.settings.max_context_chars:
                break
            blocks.append(block)
            used_chars += len(block)
        return "\n---\n".join(blocks)

    @staticmethod
    def _citation_from_document(document: RetrievedDocument) -> Citation:
        metadata = document.metadata
        excerpt = document.text.strip()
        if len(excerpt) > 260:
            excerpt = excerpt[:257].rstrip() + "..."
        return Citation(
            document_id=document.document_id,
            title=str(metadata.get("title", "Nguồn portfolio")),
            source=str(metadata.get("source", "portfolio")),
            section=str(metadata.get("section", "")) or None,
            excerpt=excerpt,
            score=round(document.final_score, 4),
        )

    def answer(self, request: ChatRequest) -> ChatResponse:
        history_text = self._history_to_text(request)
        rewritten = self.llm.rewrite_question(request.message, history_text)
        question = rewritten.standalone_question.strip()

        documents = self.retriever.retrieve(question)
        if not documents or documents[0].final_score < self.settings.min_evidence_score:
            return ChatResponse(
                answer=NO_ANSWER_TEXT,
                decision="NO_ANSWER",
                confidence=round(documents[0].final_score, 4) if documents else 0.0,
                citations=[],
                standalone_question=question,
            )

        context = self._format_context(documents)
        gate = self.llm.judge_evidence(question, context)
        available_ids = {document.document_id for document in documents}
        gate_ids = [item for item in gate.evidence_ids if item in available_ids]

        if not gate.answerable or not gate_ids:
            return ChatResponse(
                answer=NO_ANSWER_TEXT,
                decision="NO_ANSWER",
                confidence=round(documents[0].final_score, 4),
                citations=[],
                standalone_question=question,
            )

        answer_result = self.llm.generate_grounded_answer(question, context)
        citation_ids = [item for item in answer_result.citation_ids if item in available_ids]
        if not citation_ids:
            return ChatResponse(
                answer=NO_ANSWER_TEXT,
                decision="NO_ANSWER",
                confidence=round(documents[0].final_score, 4),
                citations=[],
                standalone_question=question,
            )

        document_by_id = {document.document_id: document for document in documents}
        citations = [self._citation_from_document(document_by_id[item]) for item in citation_ids]
        confidence = sum(item.score for item in citations) / len(citations)

        return ChatResponse(
            answer=answer_result.answer.strip(),
            decision="ANSWER",
            confidence=round(confidence, 4),
            citations=citations,
            standalone_question=question,
        )
