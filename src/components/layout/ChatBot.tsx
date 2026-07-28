import { FormEvent, useEffect, useRef, useState } from "react";
import { AlertCircle, Loader2, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { personalInfo, projects, skillGroups } from "@/data/portfolio";
import {
  askPortfolioRAG,
  type ChatHistoryMessage,
  type RAGCitation,
} from "@/lib/chatbot-api";
import "./ChatBot.css";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  citations?: RAGCitation[];
  confidence?: number;
  usedFallback?: boolean;
}

const quickQuestions = [
  "Sơn có kinh nghiệm về AI và RAG như thế nào?",
  "Các dự án nổi bật của Sơn là gì?",
  "Hãy mô tả dự án AI Receptionist.",
  "OpenClaw Recruiting Automation giải quyết bài toán gì?",
  "Tôi có thể liên hệ với Sơn bằng cách nào?",
];

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const createFallbackResponse = (question: string) => {
  const normalized = normalizeText(question);

  if (normalized.includes("du an") || normalized.includes("project")) {
    return `Một số dự án nổi bật trong portfolio gồm: ${projects
      .map((project) => project.title)
      .join(", ")}. Khi bật RAG backend, chatbot sẽ trả lời chi tiết hơn và kèm nguồn tham chiếu.`;
  }

  if (normalized.includes("cv") || normalized.includes("lien he") || normalized.includes("email")) {
    return `Bạn có thể liên hệ Sơn qua email ${personalInfo.email}. CV hiện được đặt tại ${personalInfo.cv.url}.`;
  }

  if (normalized.includes("skill") || normalized.includes("ky nang") || normalized.includes("cong nghe")) {
    return `Các nhóm năng lực chính gồm: ${skillGroups
      .map((group) => group.title)
      .join(", ")}.`;
  }

  if (normalized.includes("rag") || normalized.includes("ai") || normalized.includes("chatbot")) {
    return "Sơn tập trung vào RAG Chatbot, Slot-Value, Function Calling, LLM Agent và workflow automation. Các dự án thường kết nối AI với dữ liệu, API, webhook và cơ chế kiểm soát như re-ranking, schema validation, decision policy và human fallback.";
  }

  return "Backend RAG hiện chưa phản hồi, nên tôi chỉ có thể trả lời nhanh bằng dữ liệu portfolio tĩnh. Bạn có thể hỏi về kinh nghiệm, kỹ năng, dự án, CV hoặc thông tin liên hệ công khai của Sơn.";
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Xin chào! Tôi là Sơn AI Assistant. Khi RAG backend được bật, tôi sẽ trả lời dựa trên CV và portfolio đã duyệt, kèm nguồn tham chiếu.",
      isUser: false,
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toApiHistory = (items: Message[]): ChatHistoryMessage[] =>
    items
      .filter((item) => item.id !== "welcome")
      .map((item) => ({
        role: item.isUser ? "user" : "assistant",
        content: item.content,
      }));

  const sendMessage = async (rawContent: string) => {
    const content = rawContent.trim();
    if (!content || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      isUser: true,
    };

    const previousMessages = messages;
    setMessages((current) => [...current, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await askPortfolioRAG(content, toApiHistory(previousMessages));
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          content: response.answer,
          isUser: false,
          citations: response.citations,
          confidence: response.confidence,
        },
      ]);
    } catch (error) {
      console.warn("Portfolio RAG API unavailable, using static fallback.", error);
      setMessages((current) => [
        ...current,
        {
          id: `assistant-fallback-${Date.now()}`,
          content: createFallbackResponse(content),
          isUser: false,
          usedFallback: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(inputValue);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          aria-label="Mở Sơn AI Assistant"
          className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-green transition hover:-translate-y-1 hover:bg-primary-dark md:bottom-6 md:right-6"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card
          role="dialog"
          aria-label="Sơn AI Assistant"
          className="chatbot-window fixed bottom-4 right-3 z-50 flex flex-col overflow-hidden rounded-3xl border bg-card/95 shadow-xl backdrop-blur-xl md:bottom-6 md:right-6"
        >
          <div className="flex items-center justify-between border-b border-border bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <h2 className="font-semibold">Sơn AI Assistant</h2>
                <p className="text-xs text-primary-foreground/80">
                  Grounded portfolio RAG
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Đóng chatbot"
              onClick={() => setIsOpen(false)}
              className="h-9 w-9 rounded-full text-primary-foreground hover:bg-white/15"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[86%] rounded-2xl p-3 text-sm leading-6 ${
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>

                  {message.usedFallback && (
                    <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-2 text-[11px] leading-5 text-amber-800">
                      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span>Đang dùng fallback tĩnh vì RAG API chưa phản hồi.</span>
                    </div>
                  )}

                  {!message.isUser && typeof message.confidence === "number" && (
                    <p className="mt-2 text-[11px] font-medium text-muted-foreground">
                      Độ tin cậy: {Math.round(message.confidence * 100)}%
                    </p>
                  )}

                  {!message.isUser && Boolean(message.citations?.length) && (
                    <details className="mt-3 border-t border-border/70 pt-2">
                      <summary className="cursor-pointer text-xs font-semibold text-primary">
                        Xem nguồn tham chiếu ({message.citations?.length})
                      </summary>
                      <div className="mt-2 space-y-2">
                        {message.citations?.map((citation) => (
                          <div
                            key={citation.document_id}
                            className="rounded-xl border border-border bg-background/70 p-2"
                          >
                            <p className="text-xs font-semibold">
                              {citation.title}
                            </p>
                            <p className="mt-1 text-[11px] text-muted-foreground">
                              {citation.source}
                              {citation.section ? ` / ${citation.section}` : ""}
                            </p>
                            <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                              {citation.excerpt}
                            </p>
                          </div>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-muted p-3 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Đang truy xuất dữ liệu và kiểm tra bằng chứng...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="border-t border-border bg-muted/30 px-4 py-3">
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                Câu hỏi gợi ý
              </p>
              <div className="grid gap-2">
                {quickQuestions.map((question) => (
                  <Button
                    key={question}
                    type="button"
                    variant="secondary"
                    size="sm"
                    disabled={isLoading}
                    onClick={() => void sendMessage(question)}
                    className="h-auto justify-start rounded-2xl p-2 text-left text-xs"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="border-t border-border p-4">
            <div className="flex items-center gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                disabled={isLoading}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Hỏi về kinh nghiệm, dự án, kỹ năng..."
                className="min-h-11 flex-1 rounded-full"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !inputValue.trim()}
                aria-label="Gửi tin nhắn"
                className="h-11 w-11 rounded-full bg-primary text-primary-foreground"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
