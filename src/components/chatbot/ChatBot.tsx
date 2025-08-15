import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Xin chào! Tôi là SơnGPT. Tôi có thể giúp bạn tìm hiểu về Chu Tiến Sơn và chương trình Ninja AI. Bạn muốn hỏi gì?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestions = [
    "Chương trình Ninja AI là gì?",
    "Chu Tiến Sơn là ai?",
    "Cách ứng tuyển như thế nào?",
    "Lộ trình học tập ra sao?",
  ];

  const botResponses: { [key: string]: string } = {
    default: "Cảm ơn bạn đã quan tâm! Để được tư vấn chi tiết, vui lòng liên hệ trực tiếp với chúng tôi qua email hoặc số điện thoại.",
    "ninja ai": "Chương trình Ninja AI là chương trình đào tạo thực tập sinh toàn diện về AI và lập trình. Chương trình kéo dài 6 tháng với lộ trình từ cơ bản đến nâng cao.",
    "chu tiến sơn": "Chu Tiến Sơn là lập trình viên, nhà sáng lập và mentor với nhiều năm kinh nghiệm trong lĩnh vực công nghệ và AI.",
    "ứng tuyển": "Để ứng tuyển, bạn có thể điền form trên trang Ninja AI hoặc gửi CV qua email. Chúng tôi sẽ liên hệ lại trong vòng 48h.",
    "lộ trình": "Lộ trình học tập gồm 4 giai đoạn: Cơ bản (2 tháng), Nâng cao (2 tháng), Thực hành dự án (1.5 tháng), và Internship (0.5 tháng).",
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = botResponses.default;

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowerText.includes(key) && key !== "default") {
          response = value;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-hero"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-card border border-border rounded-xl shadow-hero z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">SơnGPT</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                      message.isBot
                        ? "bg-muted text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted text-foreground px-3 py-2 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                      <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-7"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Nhập câu hỏi..."
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage(inputValue);
                    }
                  }}
                />
                <Button
                  size="icon"
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};