import chatMobile from "@/assets/agri-chat-mobile.svg";
import adminInbox from "@/assets/agri-admin-inbox.svg";
import analyticsDashboard from "@/assets/agri-analytics-dashboard.svg";

export const AgriculturalProjectVisual = () => {
  return (
    <div className="relative min-h-[560px] overflow-hidden bg-slate-950 p-5 text-white md:p-7">
      <div className="portfolio-project-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.26),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.18),transparent_32%)]" />

      <div className="relative z-10 mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-200">
            Project 01
          </p>
          <h3 className="mt-2 max-w-xs text-2xl font-bold leading-tight">
            Agricultural Knowledge Assistant
          </h3>
        </div>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
          Messenger + RAG
        </span>
      </div>

      <div className="relative z-10 h-[438px]">
        <div className="absolute left-[20%] top-0 w-[78%] overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl shadow-black/40">
          <img
            src={adminInbox}
            alt="Admin Inbox Messenger của Agricultural Knowledge Assistant"
            className="block aspect-[1900/930] w-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="absolute bottom-0 right-0 w-[74%] overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl shadow-black/45">
          <img
            src={analyticsDashboard}
            alt="Dashboard phân tích chatbot Agricultural Knowledge Assistant"
            className="block aspect-[1914/922] w-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="absolute bottom-4 left-0 w-[34%] min-w-[132px] overflow-hidden rounded-[1.35rem] border border-white/20 bg-white shadow-2xl shadow-black/50 ring-4 ring-slate-950">
          <img
            src={chatMobile}
            alt="Giao diện chat mobile của trợ lý kỹ thuật nông nghiệp"
            className="block aspect-[368/548] w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
