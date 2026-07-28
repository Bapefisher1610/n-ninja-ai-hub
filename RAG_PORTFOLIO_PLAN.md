# Kế Hoạch Chatbot RAG Cho Portfolio Chu Tiến Sơn

## Mục Tiêu

Sơn AI Assistant giúp nhà tuyển dụng hỏi tự nhiên về hồ sơ, học vấn, kinh nghiệm, dự án, kỹ năng, CV và thông tin liên hệ công khai của Chu Tiến Sơn.

Chatbot phải:

- Chỉ trả lời từ CV/portfolio đã duyệt.
- Không dùng logic keyword `if/contains` làm nguồn trả lời chính.
- Không suy đoán hoặc dùng kiến thức nền để bịa thêm dữ kiện.
- Từ chối khi không có bằng chứng đủ mạnh.
- Trả kèm nguồn tham chiếu.
- Có bộ golden questions để đo hành vi trả lời và từ chối.

## Kiến Trúc

```text
React Chat UI
  -> FastAPI /api/chat
  -> Question Rewriter
  -> ChromaDB Retrieval
  -> Multilingual Reranker
  -> Evidence Score Gate
  -> LLM Evidence Judge
  -> Grounded Answer Generator
  -> Citation Validator
  -> Answer / NO_ANSWER
```

## Dữ Liệu

Dữ liệu được chuẩn hóa thành `rag-backend/data/portfolio_seed.jsonl`.

Mỗi record cần có:

- `id`
- `text`
- `metadata.title`
- `metadata.section`
- `metadata.source`
- `metadata.visibility = public`
- `metadata.approved = true`
- `metadata.updated_at`

Không index địa chỉ riêng tư, token, API key, dữ liệu nội bộ công ty hoặc số liệu chưa được xác minh.

## API Contract

Request:

```json
{
  "message": "Sơn có kinh nghiệm RAG như thế nào?",
  "history": [
    { "role": "user", "content": "Hãy kể về AI Receptionist" }
  ]
}
```

Response:

```json
{
  "answer": "Nội dung trả lời dựa trên bằng chứng...",
  "decision": "ANSWER",
  "confidence": 0.86,
  "citations": [
    {
      "document_id": "project-ai-receptionist-solution-002",
      "title": "Multimodal AI Receptionist - Solution",
      "source": "CV và portfolio đã duyệt",
      "section": "Technical Solution and Result",
      "excerpt": "...",
      "score": 0.86
    }
  ],
  "standalone_question": "Sơn có kinh nghiệm RAG như thế nào?"
}
```

Ngoài phạm vi:

```json
{
  "answer": "Tôi chưa tìm thấy thông tin đủ tin cậy...",
  "decision": "NO_ANSWER",
  "confidence": 0.18,
  "citations": [],
  "standalone_question": "Giá Bitcoin hiện tại là bao nhiêu?"
}
```

## Chạy Local

```powershell
cd D:\ninjaAiHub\n-ninja-ai-hub
python -m venv rag-backend\.venv
.\rag-backend\.venv\Scripts\Activate.ps1
npm run rag:install
Copy-Item rag-backend\.env.example rag-backend\.env
```

Điền `LLM_API_KEY`, sau đó:

```powershell
npm run rag:ingest
npm run rag:dev
```

Frontend:

```powershell
Copy-Item .env.example .env.local
npm run dev
```

## Kiểm Thử

```powershell
npm run rag:evaluate
```

Bộ test nằm ở `rag-backend/tests/golden_questions.jsonl`, gồm câu hỏi đúng phạm vi, ngoài phạm vi và câu gài hallucination.
