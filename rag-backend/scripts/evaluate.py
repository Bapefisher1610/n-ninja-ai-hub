from __future__ import annotations

import argparse
import json
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from app.schemas import ChatRequest  # noqa: E402
from app.service import PortfolioRAGService  # noqa: E402


def main() -> None:
    parser = argparse.ArgumentParser(description="Evaluate answer/abstention behavior")
    parser.add_argument(
        "--dataset",
        type=Path,
        default=ROOT / "tests" / "golden_questions.jsonl",
    )
    args = parser.parse_args()

    service = PortfolioRAGService()
    total = 0
    correct_decision = 0
    citation_valid = 0
    answer_cases = 0
    latencies: list[float] = []

    with args.dataset.open("r", encoding="utf-8") as handle:
        for raw_line in handle:
            if not raw_line.strip():
                continue
            item = json.loads(raw_line)
            started = time.perf_counter()
            response = service.answer(ChatRequest(message=item["question"]))
            latency_ms = (time.perf_counter() - started) * 1000
            latencies.append(latency_ms)
            total += 1

            expected = item["expected_decision"]
            passed = response.decision == expected
            correct_decision += int(passed)

            if response.decision == "ANSWER":
                answer_cases += 1
                citation_valid += int(bool(response.citations))

            print(
                json.dumps(
                    {
                        "question": item["question"],
                        "expected": expected,
                        "actual": response.decision,
                        "confidence": response.confidence,
                        "latency_ms": round(latency_ms, 1),
                        "passed": passed,
                    },
                    ensure_ascii=False,
                )
            )

    avg_latency = sum(latencies) / len(latencies) if latencies else 0.0
    metrics = {
        "total": total,
        "decision_accuracy": round(correct_decision / total, 4) if total else 0.0,
        "citation_presence_on_answers": round(citation_valid / answer_cases, 4) if answer_cases else 1.0,
        "avg_latency_ms": round(avg_latency, 1),
    }
    print("\nSUMMARY")
    print(json.dumps(metrics, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
