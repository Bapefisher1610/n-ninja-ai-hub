import { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import openClawChatbot from "@/assets/openclaw-chatbot.png";
import openClawHome from "@/assets/openclaw-homepage.png";
import telegramRecruitmentBot from "@/assets/telegram-recruitment-bot.png";

const slides = [
  {
    title: "Home page",
    caption: "OpenClaw workspace va assistant flow",
    src: openClawHome,
    alt: "OpenClaw home page with recruitment assistant workflow",
  },
  {
    title: "Chatbot",
    caption: "Email reading va candidate workflow",
    src: openClawChatbot,
    alt: "OpenClaw chatbot reading recent Gmail messages",
  },
  {
    title: "Telegram bot",
    caption: "CV scoring qua Telegram",
    src: telegramRecruitmentBot,
    alt: "Telegram bot scoring an AI Engineer CV",
  },
];

export function OpenClawProjectVisual() {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(248,113,113,0.24),transparent_32%),radial-gradient(circle_at_86%_68%,rgba(59,130,246,0.2),transparent_36%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,1))]" />
      <div className="absolute inset-x-8 top-24 h-px bg-gradient-to-r from-transparent via-red-100/25 to-transparent" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-100">
            Project 03
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            AI Recruitment & CV Assessment
          </h3>
        </div>
        <span className="rounded-full border border-red-100/20 bg-white/10 px-3 py-1 text-xs font-semibold text-red-50 backdrop-blur">
          OpenClaw
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

          <div className="relative grid h-[420px] place-items-center overflow-hidden rounded-2xl bg-[#f6f7f9] p-4">
            <img
              src={activeSlide.src}
              alt={activeSlide.alt}
              className="h-auto max-h-full w-auto max-w-full rounded-xl object-contain shadow-[0_18px_50px_rgba(15,23,42,0.14)]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex min-h-[54px] items-center gap-2 rounded-2xl border px-3 py-2 text-left text-xs font-semibold transition ${
                activeIndex === index
                  ? "border-red-100 bg-white text-slate-950"
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
