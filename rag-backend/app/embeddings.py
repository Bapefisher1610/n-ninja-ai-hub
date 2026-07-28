from __future__ import annotations

import os
from functools import lru_cache

import numpy as np

os.environ.setdefault("TRANSFORMERS_NO_TF", "1")
os.environ.setdefault("TRANSFORMERS_NO_FLAX", "1")
os.environ.setdefault("USE_TF", "0")
os.environ.setdefault("USE_FLAX", "0")

from sentence_transformers import SentenceTransformer

from .config import get_settings


class EmbeddingService:
    def __init__(self, model_name: str):
        self.model_name = model_name
        self.model = SentenceTransformer(model_name)

    def _prefix(self, text: str, kind: str) -> str:
        # E5 models are trained with query:/passage: prefixes.
        if "e5" in self.model_name.lower():
            return f"{kind}: {text}"
        return text

    def embed_query(self, text: str) -> list[float]:
        vector = self.model.encode(
            self._prefix(text, "query"),
            normalize_embeddings=True,
            show_progress_bar=False,
        )
        return np.asarray(vector, dtype=np.float32).tolist()

    def embed_documents(self, texts: list[str]) -> list[list[float]]:
        prepared = [self._prefix(text, "passage") for text in texts]
        vectors = self.model.encode(
            prepared,
            normalize_embeddings=True,
            show_progress_bar=False,
            batch_size=16,
        )
        return np.asarray(vectors, dtype=np.float32).tolist()


@lru_cache(maxsize=1)
def get_embedding_service() -> EmbeddingService:
    settings = get_settings()
    return EmbeddingService(settings.embedding_model)
