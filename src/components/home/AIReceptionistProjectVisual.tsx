import { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import receptionistChatbot from "@/assets/ai-receptionist-chatbot.png";
import receptionistHome from "@/assets/ai-receptionist-homepage.png";
import receptionistManagement from "@/assets/ai-receptionist-management.png";
import receptionistRegister from "@/assets/ai-receptionist-register.png";

const slides = [
  {
    title: "Chatbot",
    caption: "AI assistant conversation",
    src: receptionistChatbot,
    alt: "AI Receptionist chatbot conversation screen",
    mode: "portrait",
  },
  {
    title: "Homepage",
    caption: "Face check-in va AI assistant",
    src: receptionistHome,
    alt: "AI Receptionist homepage",
    mode: "wide",
  },
  {
    title: "Dang ky",
    caption: "Form dang ky khach tham quan",
    src: receptionistRegister,
    alt: "AI Receptionist visitor registration form",
    mode: "portrait",
  },
  {
    title: "Quan ly",
    caption: "Bang quan ly du lieu vao ra",
    src: receptionistManagement,
    alt: "AI Receptionist visitor management dashboard",
    mode: "wide",
  },
];

export function AIReceptionistProjectVisual() {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(129,140,248,0.34),transparent_34%),radial-gradient(circle_at_86%_62%,rgba(168,85,247,0.24),transparent_36%),linear-gradient(135deg,rgba(30,41,59,0.96),rgba(2,6,23,1))]" />
      <div className="absolute inset-x-8 top-24 h-px bg-gradient-to-r from-transparent via-indigo-200/35 to-transparent" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-200">
            Project 02
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Multimodal AI Receptionist
          </h3>
        </div>
        <span className="rounded-full border border-indigo-200/25 bg-white/10 px-3 py-1 text-xs font-semibold text-indigo-100 backdrop-blur">
          Vision + Voice
        </span>
      </div>

      <div className="relative z-10 mt-7">
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-3 shadow-[0_28px_90px_rgba(15,23,42,0.65)] backdrop-blur">
          <div className="mb-3 flex items-center justify-between gap-3 px-1">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {activeSlide.title}
              </p>
              <p className="truncate text-xs text-indigo-100/75">
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

          <div className="relative grid h-[420px] place-items-center overflow-hidden rounded-2xl bg-[#f4f5fb] p-5">
            <img
              src={activeSlide.src}
              alt={activeSlide.alt}
              className={
                activeSlide.mode === "portrait"
                  ? "h-auto max-h-[350px] w-auto max-w-[82%] rounded-xl object-contain shadow-[0_18px_50px_rgba(15,23,42,0.16)]"
                  : "h-auto max-h-full w-full max-w-full rounded-xl object-contain"
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
                  ? "border-indigo-200 bg-white text-slate-950"
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
