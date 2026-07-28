from __future__ import annotations

import logging

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .config import get_settings
from .schemas import ChatRequest, ChatResponse
from .service import PortfolioRAGService
from .vector_store import PortfolioVectorStore

settings = get_settings()
logger = logging.getLogger(__name__)
app = FastAPI(title=settings.app_name, version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)


@app.get("/health")
def health() -> dict[str, object]:
    store = PortfolioVectorStore()
    return {
        "status": "ok",
        "collection": settings.collection_name,
        "documents": store.count(),
    }


@app.post("/api/chat", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
    try:
        return PortfolioRAGService().answer(request)
    except Exception as exc:
        logger.exception("RAG chat request failed")
        raise HTTPException(status_code=500, detail="RAG service is temporarily unavailable") from exc
