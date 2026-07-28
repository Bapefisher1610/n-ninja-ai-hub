from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, Field, field_validator


class ChatHistoryMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str = Field(min_length=1, max_length=4000)


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=1200)
    history: list[ChatHistoryMessage] = Field(default_factory=list, max_length=8)
    conversation_id: str | None = Field(default=None, max_length=120)

    @field_validator("message")
    @classmethod
    def clean_message(cls, value: str) -> str:
        value = " ".join(value.split())
        if not value:
            raise ValueError("message cannot be empty")
        return value


class Citation(BaseModel):
    document_id: str
    title: str
    source: str
    section: str | None = None
    excerpt: str
    score: float = Field(ge=0.0, le=1.0)


class ChatResponse(BaseModel):
    answer: str
    decision: Literal["ANSWER", "NO_ANSWER"]
    confidence: float = Field(ge=0.0, le=1.0)
    citations: list[Citation] = Field(default_factory=list)
    standalone_question: str


class RewrittenQuestion(BaseModel):
    standalone_question: str = Field(min_length=1, max_length=1200)


class EvidenceGateResult(BaseModel):
    answerable: bool
    evidence_ids: list[str] = Field(default_factory=list)
    reason: str = Field(default="")


class GroundedAnswerResult(BaseModel):
    answer: str = Field(min_length=1)
    citation_ids: list[str] = Field(default_factory=list)
