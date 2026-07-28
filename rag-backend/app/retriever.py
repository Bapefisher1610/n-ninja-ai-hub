from __future__ import annotations

import math
import os
from functools import lru_cache

os.environ.setdefault("TRANSFORMERS_NO_TF", "1")
os.environ.setdefault("TRANSFORMERS_NO_FLAX", "1")
os.environ.setdefault("USE_TF", "0")
os.environ.setdefault("USE_FLAX", "0")

from sentence_transformers import CrossEncoder

from .config import get_settings
from .vector_store import PortfolioVectorStore, RetrievedDocument


class PortfolioRetriever:
    def __init__(self) -> None:
        self.settings = get_settings()
        self.store = PortfolioVectorStore()
        self.reranker: CrossEncoder | None = None
        if self.settings.enable_reranker:
            self.reranker = CrossEncoder(self.settings.reranker_model)

    @staticmethod
    def _sigmoid(value: float) -> float:
        if value >= 0:
            z = math.exp(-value)
            return 1.0 / (1.0 + z)
        z = math.exp(value)
        return z / (1.0 + z)

    def retrieve(self, question: str) -> list[RetrievedDocument]:
        candidates = self.store.query(question, self.settings.retrieval_top_k)
        if not candidates:
            return []

        if self.reranker is not None:
            pairs = [(question, candidate.text) for candidate in candidates]
            raw_scores = self.reranker.predict(pairs, show_progress_bar=False)
            for candidate, raw_score in zip(candidates, raw_scores):
                rerank_score = self._sigmoid(float(raw_score))
                candidate.rerank_score = rerank_score
                candidate.final_score = (0.35 * candidate.dense_score) + (0.65 * rerank_score)

        candidates.sort(key=lambda item: item.final_score, reverse=True)
        return candidates[: self.settings.rerank_top_n]


@lru_cache(maxsize=1)
def get_retriever() -> PortfolioRetriever:
    return PortfolioRetriever()
