from __future__ import annotations

from functools import lru_cache
from pathlib import Path
from typing import ClassVar

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    backend_root: ClassVar[Path] = Path(__file__).resolve().parents[1]

    model_config = SettingsConfigDict(
        env_file=backend_root / ".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "Portfolio RAG API"
    environment: str = "development"

    # OpenAI-compatible endpoint. Works with OpenRouter or another compatible provider.
    llm_api_key: str = Field(default="", alias="LLM_API_KEY")
    llm_base_url: str = Field(default="https://openrouter.ai/api/v1", alias="LLM_BASE_URL")
    chat_model: str = Field(default="google/gemini-2.5-flash", alias="CHAT_MODEL")
    llm_timeout_seconds: float = Field(default=45.0, alias="LLM_TIMEOUT_SECONDS")

    chroma_path: Path = Field(default=backend_root / "storage" / "chroma", alias="CHROMA_PATH")
    collection_name: str = Field(default="portfolio_public_v1", alias="COLLECTION_NAME")

    # Light enough for local development on an 8 GB machine.
    embedding_model: str = Field(
        default="intfloat/multilingual-e5-small",
        alias="EMBEDDING_MODEL",
    )
    reranker_model: str = Field(
        default="BAAI/bge-reranker-v2-m3",
        alias="RERANKER_MODEL",
    )
    enable_reranker: bool = Field(default=True, alias="ENABLE_RERANKER")

    retrieval_top_k: int = Field(default=12, alias="RETRIEVAL_TOP_K")
    rerank_top_n: int = Field(default=5, alias="RERANK_TOP_N")
    min_evidence_score: float = Field(default=0.52, alias="MIN_EVIDENCE_SCORE")
    max_context_chars: int = Field(default=12000, alias="MAX_CONTEXT_CHARS")

    cors_origins: str = Field(
        default="http://localhost:5173,https://portfolio-son-chu.vercel.app",
        alias="CORS_ORIGINS",
    )

    @property
    def cors_origin_list(self) -> list[str]:
        return [item.strip() for item in self.cors_origins.split(",") if item.strip()]


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()
