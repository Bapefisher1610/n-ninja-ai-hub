import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  FileText,
  Image,
  Megaphone,
  Network,
  PenLine,
  Rows3,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import openClawChatbot from "@/assets/openclaw-chatbot.png";
import openClawHome from "@/assets/openclaw-homepage.png";
import telegramRecruitmentBot from "@/assets/telegram-recruitment-bot.png";
import n8nWorkflow from "@/assets/zalo-workflow-n8n.png";
import universityCampus from "@/assets/university-campus.jpg";

const tags = [
  "Ninja AI",
  "Recruitment Marketing",
  "n8n Automation",
  "OpenClaw",
  "AI Screening",
  "Facebook Groups",
];

const recruitmentPosters = [
  {
    src: "/assets/recruitment/robotics.png",
    alt: "Poster tuyển thực tập sinh Robotics của Global AI",
    title: "Robotics",
    role: "Main poster",
  },
  {
    src: "/assets/recruitment/fullstack.png",
    alt: "Poster tuyển thực tập sinh Full-stack Developer của Global AI",
    title: "Full-stack",
    role: "Developer track",
  },
  {
    src: "/assets/recruitment/mobile-app.png",
    alt: "Poster tuyển thực tập sinh Mobile App của Global AI",
    title: "Mobile App",
    role: "App track",
  },
];

const highlights = [
  {
    value: "1.000 CV",
    label: "quy mô hồ sơ hệ thống có thể hỗ trợ tiếp nhận và quản lý",
  },
  {
    value: "Schedule -> Log",
    label: "luồng đăng bài có dữ liệu đầu vào, điều kiện duyệt và trạng thái xử lý",
  },
  {
    value: "Rank, Score",
    label: "trường đánh giá giúp ưu tiên nhanh hồ sơ phù hợp",
  },
  {
    value: "PASS/REJECT",
    label: "quyết định sơ bộ dựa trên tiêu chí từng vị trí công nghệ",
  },
];

const workflowSteps = [
  {
    icon: Rows3,
    title: "Đọc Timeline",
    text: "Chuẩn hóa lịch đăng, nội dung tuyển sinh/tuyển dụng và dữ liệu đầu vào trước khi workflow chạy.",
  },
  {
    icon: PenLine,
    title: "Kiểm tra Content",
    text: "Đảm bảo bài viết có thông điệp rõ, CTA cụ thể và phù hợp với nhóm sinh viên, ứng viên IT.",
  },
  {
    icon: ClipboardCheck,
    title: "Kiểm tra Approval",
    text: "Chỉ cho phép đăng khi nội dung đã đạt điều kiện phê duyệt, hạn chế sai lệch thông tin.",
  },
  {
    icon: Megaphone,
    title: "Chọn Group",
    text: "Điều hướng nội dung đến nhóm Facebook phù hợp với từng vị trí Robotics, Full-stack, Mobile App hoặc AI.",
  },
  {
    icon: Network,
    title: "Đăng bài và ghi Log",
    text: "Sau khi đăng, hệ thống ghi lại kết quả và cập nhật trạng thái để theo dõi hiệu quả từng kênh.",
  },
];

const contentBlocks = [
  {
    icon: Target,
    title: "Định vị thương hiệu Ninja AI",
    text: "Tham gia xây dựng thương hiệu từ giai đoạn đầu: xác định định vị, slogan, thông điệp truyền thông và hướng phát triển hình ảnh theo tinh thần AI thực chiến, tối ưu hiệu suất, ứng dụng trực tiếp vào công việc.",
  },
  {
    icon: Sparkles,
    title: "Hệ thống Content Marketing về AI",
    text: "Xây dựng nội dung xoay quanh AI Tools, AI Agent, Automation, Workflow, AI cho Developer, xu hướng công nghệ và mindset trong kỷ nguyên AI; chuyển chủ đề công nghệ phức tạp thành content pillar dễ tiếp cận.",
  },
  {
    icon: Megaphone,
    title: "Marketing cho vị trí công nghệ",
    text: "Triển khai truyền thông tuyển sinh/tuyển dụng cho các vị trí Robotics, Full-stack Developer và Mobile App: phân tích JD, viết content, xây dựng CTA, chuẩn bị hình ảnh, chọn kênh và khung giờ đăng.",
  },
  {
    icon: Workflow,
    title: "Marketing Automation bằng n8n",
    text: "Biến quy trình đăng bài thủ công thành hệ thống có dữ liệu đầu vào, điều kiện kiểm tra, bước phê duyệt, lựa chọn group, ghi log và cập nhật trạng thái rõ ràng.",
  },
  {
    icon: FileSearch,
    title: "AI Screening bằng OpenClaw",
    text: "Ứng dụng AI/OpenClaw để đọc, phân tích, chấm điểm và xếp hạng CV theo kỹ năng công nghệ, kinh nghiệm, dự án, GitHub, học vấn và bằng chứng nổi bật trong hồ sơ.",
  },
];

const screeningFields = [
  ["Rank", "Xếp hạng mức độ phù hợp của hồ sơ theo tiêu chí vị trí"],
  ["Score", "Chấm điểm nhanh để ưu tiên xử lý các CV nổi bật"],
  ["Decision", "Gợi ý PASS/REJECT để rút ngắn vòng sàng lọc ban đầu"],
  ["Strength Evidence", "Tóm tắt bằng chứng nổi bật như dự án, GitHub, kinh nghiệm"],
];

const internalDocs = [
  {
    title: "Rocket OCP",
    type: "Google Drive",
    url: "https://drive.google.com/drive/u/0/folders/17FUw1ou4nyGnkBcTbXL-WJjlLVLPXBdg",
    description: "Thư mục tài liệu tham khảo liên quan đến Rocket OCP và bối cảnh sản phẩm AI Agent.",
  },
  {
    title: "Rocket Global Document",
    type: "Google Sheets",
    url: "https://docs.google.com/spreadsheets/d/1Sld6WuY0x_Yv5xd7Gw-RIvB8-IvwWXU6PnXmIdaeLys/edit?gid=847851875#gid=847851875",
    description: "Bảng dữ liệu/tài liệu Global AI dùng để theo dõi nội dung và thông tin triển khai.",
  },
  {
    title: "Ninja AI marketing plan",
    type: "Google Sheets",
    url: "https://docs.google.com/spreadsheets/d/1VLjOv_PnQKY8P5Dz-H_6-vlv4_LfkGvsLEmVUCQW-II/edit?gid=1052031227#gid=1052031227",
    description: "Kế hoạch marketing cho Ninja AI, phục vụ định hướng thương hiệu và hệ thống nội dung.",
  },
  {
    title: "Timeline tuyển dụng N8N",
    type: "Google Sheets",
    url: "https://docs.google.com/spreadsheets/d/1gqTgQ7tnBYSOFzcL_PHl6FGdy9j3iHXvnSw_Dh1aCNw/edit?gid=1055389108#gid=1055389108",
    description: "Timeline đầu vào cho workflow n8n: lịch đăng, nội dung, trạng thái duyệt và luồng xử lý.",
  },
  {
    title: "OpenClaw lọc kết quả CV",
    type: "Google Sheets",
    url: "https://docs.google.com/spreadsheets/d/14VVsgs5PZFXznwRpMeYYO9izP5y5s4KLffn_xxWfVYM/edit?gid=1446250008#gid=1446250008",
    description: "Bảng kết quả hỗ trợ lọc CV bằng OpenClaw với các trường đánh giá và quyết định sơ bộ.",
  },
  {
    title: "Ninja AI - Tài liệu",
    type: "Google Drive",
    url: "https://drive.google.com/drive/u/0/folders/1OxMaVEZRbhOZ_D3sondoZFVW9TGx6-7l",
    description: "Thư mục tổng hợp tài liệu Ninja AI phục vụ truyền thông, marketing và triển khai nội dung.",
  },
];

const gallery = [
  {
    src: n8nWorkflow,
    alt: "Workflow n8n tự động hóa đăng bài tuyển sinh",
    caption: "Workflow automation dùng để chuẩn hóa lịch đăng, điều kiện kiểm tra và trạng thái xử lý.",
  },
  {
    src: openClawHome,
    alt: "Giao diện OpenClaw phục vụ phân tích dữ liệu tuyển dụng",
    caption: "OpenClaw hỗ trợ đọc và xử lý dữ liệu đầu vào trong quy trình sàng lọc CV.",
  },
  {
    src: openClawChatbot,
    alt: "Màn hình chatbot OpenClaw phân tích hồ sơ ứng viên",
    caption: "AI hỗ trợ tóm tắt, phân tích và tạo bằng chứng nổi bật từ hồ sơ ứng viên.",
  },
  {
    src: telegramRecruitmentBot,
    alt: "Bot Telegram phục vụ thông báo tuyển dụng",
    caption: "Tự động hóa thông báo giúp đội ngũ theo dõi trạng thái hồ sơ và luồng tuyển dụng nhanh hơn.",
  },
];

const AutomatedRecruitmentMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-[#f5f7fb] pt-24 text-[#172033] dark:bg-background dark:text-foreground">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#2f6fed] via-[#12b886] to-[#f0c65f]" />
        <div className="container mx-auto grid min-h-[calc(100vh-5rem)] gap-10 px-4 py-12 md:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-2xl">
            <Button asChild variant="ghost" className="mb-8 px-0 text-[#2559b8] hover:bg-transparent hover:text-[#172033] dark:text-primary">
              <Link to="/#projects">
                <ArrowLeft className="h-4 w-4" />
                Quay lại dự án
              </Link>
            </Button>

            <Badge className="bg-[#2f6fed] text-white hover:bg-[#2f6fed]">Case study Ninja AI</Badge>
            <h1 className="mt-5 font-manrope text-4xl font-extrabold leading-[1.12] tracking-normal md:text-5xl lg:text-6xl">
              Marketing chương trình Ninja AI & Rocket OCP: từ content đến AI screening
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#4d5d73] dark:text-muted-foreground">
              Dự án kết nối thương hiệu Ninja AI, content marketing cho các vị trí công nghệ, automation n8n và OpenClaw để
              biến quy trình tuyển sinh/tuyển dụng thủ công thành một hệ thống có lịch đăng, điều kiện kiểm tra, ghi log,
              trạng thái xử lý và dữ liệu đánh giá CV rõ ràng.
            </p>

            <div className="mt-7 rounded-md border border-[#2f6fed]/20 bg-white/78 p-4 shadow-sm backdrop-blur dark:bg-white/[0.055]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2559b8] dark:text-[#8ab4ff]">
                  Link tham khảo
                </p>
                <span className="text-xs font-semibold text-[#5c6f8c] dark:text-[#c9d7df]">
                  {internalDocs.length} tài liệu
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {internalDocs.map((doc) => (
                  <a
                    key={doc.url}
                    href={doc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-[58px] items-center justify-between gap-3 rounded-md border border-[#2f6fed]/18 bg-white px-3 py-2 text-left transition hover:-translate-y-0.5 hover:border-[#2f6fed]/55 hover:shadow-md dark:bg-[#0d1824]"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold text-[#172033] dark:text-white">
                        {doc.title}
                      </span>
                      <span className="mt-0.5 block text-xs font-semibold text-[#5c6f8c] dark:text-[#c9d7df]">
                        {doc.type}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#2f6fed] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((item) => (
                <span key={item} className="rounded-full border border-[#2f6fed]/30 bg-white/75 px-4 py-2 text-sm font-semibold text-[#2559b8] dark:bg-card dark:text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[840px]">
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative rounded-md border border-[#2f6fed]/20 bg-white/75 p-4 shadow-2xl backdrop-blur dark:bg-card/90"
            >
              <div className="pointer-events-none absolute inset-0 hidden rounded-md bg-[radial-gradient(circle_at_50%_28%,rgba(47,111,237,0.18),transparent_36%),linear-gradient(135deg,rgba(18,184,134,0.1),transparent_42%)] sm:block" />
              <div className="relative z-10 grid gap-4 sm:grid-cols-2 sm:items-start">
                {recruitmentPosters.map((poster, index) => {
                  const placement =
                    index === 0
                      ? "sm:order-2"
                      : index === 1
                        ? "sm:order-1 sm:mt-12"
                        : "sm:order-3 sm:col-span-2 sm:mx-auto sm:mt-1 sm:w-[56%]";
                  const restingRotate = index === 0 ? 1.2 : index === 1 ? -2.2 : 0;

                  return (
                    <motion.figure
                      key={poster.src}
                      initial={{ opacity: 0, y: 34, rotate: restingRotate * 2 }}
                      animate={{ opacity: 1, y: index === 2 ? [0, -6, 0] : 0, rotate: restingRotate }}
                      transition={{
                        opacity: { duration: 0.5, delay: 0.12 + index * 0.08 },
                        y: { duration: index === 2 ? 5.5 : 0.5, repeat: index === 2 ? Infinity : 0, ease: "easeInOut" },
                        rotate: { duration: 0.55, delay: 0.12 + index * 0.08 },
                      }}
                      whileHover={{ y: -10, scale: 1.025, rotate: 0, zIndex: 40 }}
                      className={`group relative overflow-hidden rounded-md border border-[#2f6fed]/20 bg-white p-2 shadow-xl ring-1 ring-white/70 transition ${placement}`}
                    >
                      <img src={poster.src} alt={poster.alt} className="aspect-square w-full rounded-sm object-contain" />
                      <figcaption className="absolute inset-x-2 bottom-2 rounded-sm bg-[#061b47]/90 px-3 py-2 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#9ad0ff]">{poster.role}</span>
                        <span className="mt-1 block text-lg font-extrabold">{poster.title}</span>
                      </figcaption>
                    </motion.figure>
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative z-20 mt-4 rounded-md bg-[#172033] p-5 text-white"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9ad0ff]">Chuỗi vận hành</p>
                <p className="mt-2 text-2xl font-bold">{"Recruitment Marketing -> thu CV -> AI Screening -> Shortlist"}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#081120] text-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.54fr_0.46fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8ab4ff]">Kết quả nổi bật</p>
              <h2 className="mt-3 max-w-4xl font-manrope text-3xl font-extrabold tracking-normal text-white md:text-5xl">
                Dữ liệu tuyển sinh được tổ chức thành luồng xử lý có thể theo dõi, đo lường và mở rộng.
              </h2>
            </div>
            <p className="text-base leading-8 text-[#c9d7df]">
              Điểm mạnh của dự án nằm ở khả năng kết hợp marketing, tư duy automation và AI screening để giảm thao tác thủ công,
              hạn chế bỏ sót hồ sơ và giúp đội tuyển dụng ưu tiên nhanh ứng viên phù hợp.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article key={item.value} className="rounded-md border border-white/12 bg-white/[0.055] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8ab4ff]/55 hover:bg-white/[0.085]">
                <CheckCircle2 className="h-5 w-5 text-[#12b886]" />
                <p className="mt-5 font-manrope text-4xl font-extrabold leading-none text-white">{item.value}</p>
                <p className="mt-3 text-sm font-medium leading-6 text-[#c9d7df]">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Phạm vi đóng góp</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              Không chỉ đăng bài tuyển sinh, dự án xây cả logic nội dung và logic xử lý dữ liệu.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {contentBlocks.map((block) => {
              const Icon = block.icon;

              return (
                <article key={block.title} className="rounded-md border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-7 text-foreground">{block.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{block.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Luồng n8n</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              Từ lịch đăng đến log trạng thái, mọi bước đều có điều kiện xử lý.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
                {"Luồng được mô tả trong file Word theo chuỗi Schedule -> đọc Timeline -> kiểm tra Content -> kiểm tra Approval -> chọn Group -> kiểm tra điều kiện -> đăng bài -> ghi Log -> cập nhật trạng thái."}
            </p>
          </div>

          <div className="grid gap-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className="grid gap-4 rounded-md border border-border bg-card p-5 shadow-sm sm:grid-cols-[72px_minmax(0,1fr)] sm:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#2f6fed]/10 text-[#2f6fed]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Bước {index + 1}</p>
                    <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#172033] text-white">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.46fr_0.54fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8ab4ff]">AI Screening</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              OpenClaw giúp biến CV thành dữ liệu có thể ưu tiên và ra quyết định sơ bộ.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#dce8ee]">
              Hệ thống đọc kỹ năng công nghệ, kinh nghiệm, dự án, GitHub, học vấn và bằng chứng nổi bật để hỗ trợ xếp hạng hồ sơ.
              Nhờ vậy, đội tuyển dụng có thể nhìn nhanh nhóm CV phù hợp thay vì đọc thủ công toàn bộ từ đầu.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {screeningFields.map(([value, label]) => (
              <div key={value} className="rounded-md border border-white/15 bg-white/8 p-6">
                <Bot className="h-5 w-5 text-[#12b886]" />
                <p className="mt-4 font-manrope text-3xl font-extrabold text-[#9ad0ff]">{value}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-[#dce8ee]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden bg-background-secondary">
        <img src={universityCampus} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
        <div className="container relative mx-auto px-4">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Tài liệu nội bộ</p>
              <h2 className="mt-3 font-manrope text-3xl font-extrabold tracking-normal md:text-4xl">
                Các đầu mục tài liệu được dùng để dựng nội dung và chứng minh quy trình triển khai.
              </h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground">
              Các dòng đầu trong file Word có gắn link tham khảo trực tiếp. Phần này giữ đúng tên tài liệu và URL gốc để người xem có thể mở nhanh kế hoạch marketing, timeline n8n và kết quả lọc CV bằng OpenClaw.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {internalDocs.map((doc, index) => (
              <article key={doc.url} className="rounded-md border border-border bg-card/90 p-5 shadow-sm backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-primary">{doc.type}</p>
                <h3 className="mt-2 text-xl font-bold text-foreground">{doc.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {doc.description}
                </p>
                <Button asChild className="mt-5 w-full justify-between">
                  <a href={doc.url} target="_blank" rel="noreferrer">
                    Mở tài liệu
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Hình ảnh dự án</p>
              <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
                Các điểm chạm automation và AI trong quy trình
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Image className="h-4 w-4 text-primary" />
              4 tư liệu hệ thống
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {gallery.map((item) => (
              <figure key={item.caption} className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
                <div className="bg-slate-950 p-3">
                  <img src={item.src} alt={item.alt} className="h-[320px] w-full rounded-sm object-contain" loading="lazy" />
                </div>
                <figcaption className="p-4 text-sm font-medium leading-6 text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-14">
        <div className="container mx-auto flex flex-col items-start justify-between gap-5 rounded-md border border-border bg-card p-6 shadow-sm md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Portfolio</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground">Xem thêm các dự án content marketing khác</h2>
          </div>
          <Button asChild className="btn-scale">
            <Link to="/gioi-thieu/du-an">
              Tất cả dự án
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AutomatedRecruitmentMarketing;
