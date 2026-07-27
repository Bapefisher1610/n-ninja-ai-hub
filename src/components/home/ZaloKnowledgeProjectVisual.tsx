import { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import zaloChatbotResult from "@/assets/zalo-chatbot-result.png";
import zaloCredentials from "@/assets/zalo-credentials.png";
import zaloPromptChatbot from "@/assets/zalo-prompt-chatbot.png";
import zaloWorkflowN8n from "@/assets/zalo-workflow-n8n.png";

const slides = [
  {
    title: "Workflow n8n",
    caption: "Zalo trigger, AI Agent va MySQL tools",
    src: zaloWorkflowN8n,
    alt: "n8n workflow for Zalo internal knowledge chatbot",
    mode: "wide",
  },
  {
    title: "Credentials",
    caption: "Zalo, Gemini, MySQL va n8n credentials",
    src: zaloCredentials,
    alt: "Credentials used by Zalo chatbot workflow",
    mode: "wide",
  },
  {
    title: "Prompt agent",
    caption: "System prompt va tool configuration",
    src: zaloPromptChatbot,
    alt: "AI Agent prompt configuration for Zalo chatbot",
    mode: "portrait",
  },
  {
    title: "Zalo chat",
    caption: "Ket qua tra loi tren ung dung Zalo",
    src: zaloChatbotResult,
    alt: "Zalo chatbot response for training roadmap question",
    mode: "wide",
  },
];

export function ZaloKnowledgeProjectVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative min-h-[560px] overflow-hidden bg-slate-950 p-5 text-white sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(14,165,233,0.25),transparent_34%),radial-gradient(circle_at_86%_64%,rgba(34,197,94,0.2),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,1))]" />
      <div className="absolute inset-x-8 top-24 h-px bg-gradient-to-r from-transparent via-sky-100/25 to-transparent" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-100">
            Project 04
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Zalo Internal Knowledge Chatbot
          </h3>
        </div>
        <span className="rounded-full border border-sky-100/20 bg-white/10 px-3 py-1 text-xs font-semibold text-sky-50 backdrop-blur">
          n8n + Zalo
        </span>
      </div>

      <div className="relative z-10 mt-7">
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-3 shadow-[0_28px_90px_rgba(15,23,42,0.65)] backdrop-blur">
          <div className="mb-3 flex items-center justify-between gap-3 px-1">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {activeSlide.title}
              </p>
              <p className="truncate text-xs text-slate-300">
                {activeSlide.caption}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative grid h-[420px] place-items-center overflow-hidden rounded-2xl bg-[#f6f8fb] p-4">
            <img
              src={activeSlide.src}
              alt={activeSlide.alt}
              className={
                activeSlide.mode === "portrait"
                  ? "h-auto max-h-[370px] w-auto max-w-[82%] rounded-xl object-contain shadow-[0_18px_50px_rgba(15,23,42,0.14)]"
                  : "h-auto max-h-full w-auto max-w-full rounded-xl object-contain shadow-[0_18px_50px_rgba(15,23,42,0.14)]"
              }
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex min-h-[54px] items-center gap-2 rounded-2xl border px-3 py-2 text-left text-xs font-semibold transition ${
                activeIndex === index
                  ? "border-sky-100 bg-white text-slate-950"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              <ImageIcon className="h-4 w-4 shrink-0" />
              <span className="truncate">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
