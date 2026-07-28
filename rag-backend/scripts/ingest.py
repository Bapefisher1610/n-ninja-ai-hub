from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from app.vector_store import PortfolioVectorStore  # noqa: E402


REQUIRED_METADATA = {
    "title",
    "section",
    "source",
    "visibility",
    "approved",
    "updated_at",
}


def load_records(path: Path) -> list[dict[str, Any]]:
    records: list[dict[str, Any]] = []
    seen_ids: set[str] = set()

    with path.open("r", encoding="utf-8") as handle:
        for line_number, raw_line in enumerate(handle, start=1):
            if not raw_line.strip():
                continue
            payload = json.loads(raw_line)
            record_id = str(payload.get("id", "")).strip()
            text = str(payload.get("text", "")).strip()
            metadata = dict(payload.get("metadata") or {})

            if not record_id or not text:
                raise ValueError(f"Line {line_number}: id and text are required")
            if record_id in seen_ids:
                raise ValueError(f"Line {line_number}: duplicate id {record_id}")
            missing = REQUIRED_METADATA - metadata.keys()
            if missing:
                raise ValueError(f"Line {line_number}: missing metadata {sorted(missing)}")
            if metadata["visibility"] != "public" or metadata["approved"] is not True:
                # Fail closed: only explicitly approved public records are indexed.
                continue

            seen_ids.add(record_id)
            records.append({"id": record_id, "text": text, "metadata": metadata})

    return records


def main() -> None:
    parser = argparse.ArgumentParser(description="Ingest approved portfolio records into ChromaDB")
    parser.add_argument(
        "--input",
        type=Path,
        default=ROOT / "data" / "portfolio_seed.jsonl",
    )
    args = parser.parse_args()

    records = load_records(args.input)
    count = PortfolioVectorStore().upsert(records)
    print(f"Indexed {count} approved public records from {args.input}")


if __name__ == "__main__":
    main()
