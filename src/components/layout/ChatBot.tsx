import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { personalInfo, projects, skillGroups } from "@/data/portfolio";
import "./ChatBot.css";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
}

const quickQuestions = [
  "Sơn có kinh nghiệm về AI và RAG như thế nào?",
  "Các dự án nổi bật của Sơn là gì?",
  "Sơn đã làm việc với Odoo/ERP chưa?",
  "Tôi có thể tải CV ở đâu?",
  "Làm thế nào để liên hệ với Sơn?",
];

const createPortfolioResponse = (question: string) => {
  const normalized = question.toLowerCase();

  if (normalized.includes("rag") || normalized.includes("ai")) {
    return "Sơn định vị là Applied AI Engineer, tập trung vào chatbot RAG, LLM Agents, Knowledge Base, Slot-Value, ChromaDB và workflow automation. Điểm mạnh là kết nối AI với dữ liệu, API và quy trình thật thay vì chỉ gọi model.";
  }

  if (normalized.includes("dự án") || normalized.includes("project")) {
    return `Một số dự án nổi bật đang được trình bày gồm: ${projects
      .map((project) => project.title)
      .join(", ")}. Bạn có thể cuộn tới phần Dự án tiêu biểu để xem từng case study.`;
  }

  if (normalized.includes("odoo") || normalized.includes("erp")) {
    return "Trong CV, Sơn đã làm việc và tìm hiểu Odoo tại Global AI, đặc biệt là HRM business workflows và Odoo standards. Đây là nền tảng bổ trợ cho hướng AI automation trong hệ thống doanh nghiệp.";
  }

  if (normalized.includes("cv")) {
    return personalInfo.cv.enabled
      ? `Bạn có thể tải CV tại nút Tải CV trên header hoặc phần liên hệ: ${personalInfo.cv.url}`
      : "CV đang được cập nhật. Hiện tại nút CV được để trạng thái disabled để tránh tạo liên kết giả. Sơn cần thêm file CV thật vào public/cv/chu-tien-son-cv.pdf trước khi bật tải CV.";
  }

  if (normalized.includes("liên hệ") || normalized.includes("email")) {
    return `Bạn có thể liên hệ Sơn qua email: ${personalInfo.email}. Đây là kênh liên hệ đã được cấu hình trực tiếp trong portfolio.`;
  }

  if (normalized.includes("kỹ năng") || normalized.includes("skill")) {
    return `Các nhóm kỹ năng chính gồm: ${skillGroups
      .map((group) => group.title)
      .join(", ")}. Portfolio nhóm theo năng lực giải quyết vấn đề, không liệt kê dàn trải kiểu biết mỗi thứ một ít.`;
  }

  return "Tôi có thể giúp bạn tìm nhanh thông tin về kinh nghiệm, kỹ năng, dự án, CV và cách liên hệ với Chu Tiến Sơn. Hãy hỏi theo một trong các gợi ý bên dưới hoặc nhập câu hỏi riêng.";
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Xin chào! Tôi có thể giúp bạn tìm hiểu nhanh về kinh nghiệm, kỹ năng và các dự án của Chu Tiến Sơn.",
      isUser: false,
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      isUser: true,
    };
    const assistantMessage: Message = {
      id: `assistant-${Date.now()}`,
      content: createPortfolioResponse(content),
      isUser: false,
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setInputValue("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(inputValue);
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
                  Portfolio helper
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
                  className={`max-w-[82%] rounded-2xl p-3 text-sm leading-6 ${
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
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
                    onClick={() => sendMessage(question)}
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
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Hỏi về kinh nghiệm, dự án, CV..."
                className="min-h-11 flex-1 rounded-full"
              />
              <Button
                type="submit"
                size="icon"
                aria-label="Gửi tin nhắn"
                className="h-11 w-11 rounded-full bg-primary text-primary-foreground"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
