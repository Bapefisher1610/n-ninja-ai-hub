from __future__ import annotations

from dataclasses import dataclass
from typing import Any

import chromadb

from .config import get_settings
from .embeddings import get_embedding_service


@dataclass(slots=True)
class RetrievedDocument:
    document_id: str
    text: str
    metadata: dict[str, Any]
    dense_score: float
    rerank_score: float | None = None
    final_score: float = 0.0


class PortfolioVectorStore:
    def __init__(self) -> None:
        settings = get_settings()
        chroma_path = settings.chroma_path
        if not chroma_path.is_absolute():
            chroma_path = settings.backend_root / chroma_path
        chroma_path.mkdir(parents=True, exist_ok=True)
        self.client = chromadb.PersistentClient(path=str(chroma_path))
        self.collection = self.client.get_or_create_collection(
            name=settings.collection_name,
            metadata={"hnsw:space": "cosine"},
        )
        self.embedding_service = get_embedding_service()

    def upsert(self, records: list[dict[str, Any]]) -> int:
        if not records:
            return 0
        ids = [record["id"] for record in records]
        documents = [record["text"] for record in records]
        metadatas = [record["metadata"] for record in records]
        embeddings = self.embedding_service.embed_documents(documents)
        self.collection.upsert(
            ids=ids,
            documents=documents,
            metadatas=metadatas,
            embeddings=embeddings,
        )
        return len(records)

    def reset(self) -> None:
        settings = get_settings()
        try:
            self.client.delete_collection(settings.collection_name)
        except Exception:
            pass
        self.collection = self.client.get_or_create_collection(
            name=settings.collection_name,
            metadata={"hnsw:space": "cosine"},
        )

    def query(self, question: str, top_k: int) -> list[RetrievedDocument]:
        query_embedding = self.embedding_service.embed_query(question)
        result = self.collection.query(
            query_embeddings=[query_embedding],
            n_results=top_k,
            where={
                "$and": [
                    {"approved": True},
                    {"visibility": "public"},
                ]
            },
            include=["documents", "metadatas", "distances"],
        )

        ids = (result.get("ids") or [[]])[0]
        documents = (result.get("documents") or [[]])[0]
        metadatas = (result.get("metadatas") or [[]])[0]
        distances = (result.get("distances") or [[]])[0]

        output: list[RetrievedDocument] = []
        for doc_id, text, metadata, distance in zip(ids, documents, metadatas, distances):
            similarity = max(0.0, min(1.0, 1.0 - float(distance)))
            output.append(
                RetrievedDocument(
                    document_id=str(doc_id),
                    text=str(text),
                    metadata=dict(metadata or {}),
                    dense_score=similarity,
                    final_score=similarity,
                )
            )
        return output

    def count(self) -> int:
        return self.collection.count()
