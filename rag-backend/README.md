# Portfolio RAG Backend

Backend này lấy từ `portfolio-rag-starter.zip` và đã được chỉnh để khớp portfolio hiện tại.

## Luồng xử lý

1. Frontend gửi `POST /api/chat` với câu hỏi và lịch sử hội thoại.
2. Backend viết lại câu hỏi nối tiếp thành câu độc lập.
3. ChromaDB truy xuất record `approved=true` và `visibility=public`.
4. Reranker chọn bằng chứng tốt nhất.
5. Evidence gate chặn câu hỏi ngoài phạm vi hoặc thiếu dữ liệu.
6. LLM chỉ sinh câu trả lời từ context đã truy xuất.
7. Citation validator chỉ cho trả lời khi có document ID hợp lệ.

## Chạy local

Từ root repo:

```powershell
cd D:\ninjaAiHub\n-ninja-ai-hub
python -m venv rag-backend\.venv
.\rag-backend\.venv\Scripts\Activate.ps1
npm run rag:install
Copy-Item rag-backend\.env.example rag-backend\.env
```

Điền `LLM_API_KEY` trong `rag-backend\.env`, sau đó:

```powershell
npm run rag:ingest
npm run rag:dev
```

API sẽ chạy tại:

```text
http://localhost:8001
```

Kiểm tra:

```powershell
curl http://localhost:8001/health
```

## Nối với frontend

Tạo file `.env.local` ở root repo:

```env
VITE_RAG_API_URL=http://localhost:8001
```

Sau đó chạy frontend:

```powershell
npm run dev
```

Nếu backend chưa chạy, chatbot vẫn dùng fallback tĩnh để website không bị lỗi.

## Đánh giá

Sau khi ingest và có `LLM_API_KEY`:

```powershell
npm run rag:evaluate
```

Dataset nằm ở `rag-backend/tests/golden_questions.jsonl`.
