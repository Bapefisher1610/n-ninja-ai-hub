export type ChatHistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

export type RAGCitation = {
  document_id: string;
  title: string;
  source: string;
  section?: string | null;
  excerpt: string;
  score: number;
};

export type RAGChatResponse = {
  answer: string;
  decision: "ANSWER" | "NO_ANSWER";
  confidence: number;
  citations: RAGCitation[];
  standalone_question: string;
};

const API_URL = import.meta.env.VITE_RAG_API_URL ?? "http://localhost:8000";
const REQUEST_TIMEOUT_MS = 12000;

export async function askPortfolioRAG(
  message: string,
  history: ChatHistoryMessage[],
): Promise<RAGChatResponse> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  const response = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history: history.slice(-8) }),
    signal: controller.signal,
  }).finally(() => window.clearTimeout(timeout));

  if (!response.ok) {
    throw new Error(`RAG API returned ${response.status}`);
  }

  return (await response.json()) as RAGChatResponse;
}
