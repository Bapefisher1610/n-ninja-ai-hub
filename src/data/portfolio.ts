import {
  Blocks,
  Bot,
  BrainCircuit,
  Code2,
  DatabaseZap,
  FileCheck2,
  GitBranch,
  Layers3,
  LineChart,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  Experience,
  NavigationItem,
  PersonalInfo,
  Project,
  SkillGroup,
  Strength,
  TimelineItem,
} from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Chu Tiến Sơn",
  shortName: "Sơn",
  role: "Applied AI Engineer",
  location: "Hà Nội, Việt Nam",
  email: "sonchu1610203@gmail.com",
  phone: "0363410150",
  headline:
    "Tôi xây dựng các hệ thống AI kết nối dữ liệu nội bộ, hội thoại đa kênh và quy trình vận hành thực tế.",
  summary:
    "Tập trung vào RAG Chatbot, Slot Value, Function Calling, LLM Agent và workflow automation. Các dự án của tôi kết hợp Python, FastAPI, ChromaDB, webhook, API nền tảng và cơ chế kiểm soát như schema validation, re-ranking, decision policy và human fallback.",
  openToWork: true,
  cv: {
    label: "Tải CV",
    url: "/cv/chu-tien-son-ai-engineer.pdf",
    enabled: true,
  },
};

export const socialLinks = {
  email: {
    label: "Email",
    url: `mailto:${personalInfo.email}`,
    enabled: true,
  },
  github: {
    label: "GitHub",
    url: "https://github.com/Bapefisher1610",
    enabled: true,
  },
  linkedin: {
    label: "LinkedIn",
    url: "[LINKEDIN_URL]",
    enabled: false,
  },
};

export const navigation: NavigationItem[] = [
  { label: "Trang chủ", href: "/", sectionId: "home" },
  { label: "Kinh nghiệm", href: "/#experience", sectionId: "experience" },
  { label: "Dự án", href: "/#projects", sectionId: "projects" },
  { label: "Kỹ năng", href: "/#skills", sectionId: "skills" },
  { label: "Học vấn", href: "/#journey", sectionId: "journey" },
  { label: "Liên hệ", href: "/#contact", sectionId: "contact" },
];

export const evidenceItems = [
  { label: "Core", value: "RAG Chatbot + Slot Value + Function Calling" },
  { label: "Automation", value: "LLM Agents" },
  { label: "Systems", value: "API + Workflow" },
];

export const strengths: Strength[] = [
  {
    id: "real-workflows",
    icon: Workflow,
    title: "AI systems connected to real workflows",
    description:
      "Kết nối AI với webhook, REST API, cơ sở dữ liệu, chatbot và quy trình nghiệp vụ thay vì chỉ dừng ở demo model.",
  },
  {
    id: "controlled-rag",
    icon: ShieldCheck,
    title: "Reliable RAG and controlled responses",
    description:
      "Thiết kế truy xuất bằng ChromaDB, chunk ID, cosine similarity, re-ranking, slot-value và decision policy để giảm hallucination.",
  },
  {
    id: "hybrid-automation",
    icon: FileCheck2,
    title: "Hybrid AI automation",
    description:
      "Kết hợp parser, regex, JSON Schema validation và LLM Agent để tự động hóa nhưng vẫn kiểm soát được kết quả.",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "humg",
    period: "2021 - 2026",
    organization: "Hanoi University of Mining and Geology",
    role: "Information Technology - GPA 3.17/4.0",
    description:
      "Xây dựng nền tảng về lập trình, cơ sở dữ liệu, thuật toán, AI và phát triển ứng dụng.",
    type: "education",
    skills: ["Information Technology", "SQL", "Python", "Web development"],
  },
  {
    id: "certificates",
    period: "2023 - 2024",
    organization: "Certificates",
    role: "Google Data Analytics, MOS Word 2019, MOS Excel 2019",
    description:
      "Google Data Analytics hỗ trợ trực tiếp cho định hướng dữ liệu/AI; MOS được giữ như chứng chỉ bổ trợ.",
    type: "certificate",
    skills: ["Data analytics", "Excel", "Word"],
  },
  {
    id: "iot-challenge",
    period: "04/2025 - 06/2025",
    organization: "IoT Challenge 2025",
    role: "Computer Vision contributor",
    description:
      "Ứng dụng YOLOv3 và OpenCV để phát hiện phương tiện, thu thập luồng giao thông và hỗ trợ lựa chọn vị trí bán lẻ tiềm năng.",
    type: "project",
    skills: ["YOLOv3", "OpenCV", "Computer Vision", "Edge optimization"],
  },
  {
    id: "rocket-global",
    period: "07/2025 - 12/2025",
    organization: "Rocket Global",
    role: "AI Engineer Intern",
    description:
      "Phát triển và kiểm thử REST API theo yêu cầu nghiệp vụ, hỗ trợ debug, cải thiện chất lượng code và tối ưu ứng dụng GenAI Agent.",
    type: "work",
    skills: ["REST API", "Debugging", "GenAI Agent", "Teamwork"],
  },
  {
    id: "ai-receptionist",
    period: "12/2025 - 03/2026",
    organization: "Graduation Project",
    role: "AI Engineer & System Integrator",
    description:
      "Xây dựng AI Receptionist đa phương thức kết hợp nhận diện khuôn mặt, chatbot RAG nội bộ, TTS, session, queue và quản lý khách ra vào.",
    type: "project",
    skills: ["YOLOv8", "ArcFace", "FastAPI", "RAG", "TTS"],
  },
  {
    id: "global-ai",
    period: "03/2026 - 08/2026",
    organization: "Global AI",
    role: "AI Agent Fresher",
    description:
      "Thực hành AI technologies trong recruitment workflow, Odoo HRM business workflow, debugging, teamwork và progress reporting.",
    type: "work",
    skills: ["OpenClaw", "Odoo HRM", "LLM tools", "Workflow"],
  },
  {
    id: "recruitment-pipeline",
    period: "03/2026 - 05/2026",
    organization: "Global AI / OpenClaw",
    role: "AI CTV / Automation Engineer",
    description:
      "Xây dựng 10-stage CV screening pipeline, parser đa định dạng, rubric theo JD, schema-validated JSON scoring và global reranking.",
    type: "project",
    skills: ["LLM Agents", "JSON Schema", "Google Sheets", "Supabase"],
  },
  {
    id: "agri-chatbot",
    period: "06/2026 - Hiện tại",
    organization: "Remote Project",
    role: "AI Engineer",
    description:
      "Phát triển Agricultural support chatbot tích hợp Facebook Messenger, Slot-Value, ChromaDB, RAG, re-ranking và human fallback.",
    type: "work",
    skills: ["Facebook Messenger API", "ChromaDB", "Slot-Value", "RAG"],
  },
];

export const experiences: Experience[] = [
  {
    id: "rocket-global",
    company: "Rocket Global",
    role: "AI Engineer Intern",
    period: "07/2025 - 12/2025",
    problem:
      "Công ty cần một kênh chatbot trên Zalo để nhân sự và ứng viên có thể hỏi nhanh các thông tin nội bộ như quy trình ứng tuyển, lộ trình học tập, mentor, học phí, học bổng và chương trình đào tạo.",
    solution:
      "Xây dựng workflow chatbot bằng n8n: tin nhắn Zalo đi vào webhook, truy vấn tri thức lưu trong MySQL, gọi AI Agent sinh câu trả lời theo prompt kiểm soát phạm vi, sau đó gửi phản hồi lại qua Zalo API.",
    impact:
      "Tạo nền tảng chatbot tri thức nội bộ có thể triển khai thực tế với Docker Compose cho n8n + MySQL, cấu hình credentials, webhook integration và khuyến nghị vận hành production.",
    technologies: ["n8n", "Zalo API", "MySQL", "Webhook", "AI Agent", "Docker Compose"],
  },
  {
    id: "global-ai-agent",
    company: "Global AI",
    role: "AI Agent Fresher",
    period: "03/2026 - 08/2026",
    problem:
      "Quy trình tuyển dụng cần một chatbot/AI Agent hỗ trợ tự động đọc yêu cầu, xử lý CV, phản hồi thông tin ứng viên và giảm thao tác thủ công cho đội tuyển dụng.",
    solution:
      "Tìm hiểu nghiệp vụ tuyển dụng thực tế tại công ty, sau đó thiết kế flow OpenClaw kết nối nhiều nền tảng như Google Sheets, Gmail, Google Docs, Google Drive và các skill riêng cho từng bước: tiếp nhận yêu cầu, đọc CV, tạo đánh giá, lưu kết quả và hỗ trợ phản hồi ứng viên.",
    impact:
      "Tạo nền tảng cho hệ thống recruitment automation có thể tích hợp vào quy trình thực tế: chatbot tiếp nhận yêu cầu, hỗ trợ đánh giá CV theo vị trí, chuyển kết quả cho người phụ trách và liên kết với hiểu biết HRM/Odoo.",
    technologies: ["OpenClaw", "Recruitment Chatbot", "LLM Agents", "LLM Routing", "Odoo HRM", "Codex"],
  },
  {
    id: "remote-agriculture",
    company: "Remote Project",
    role: "AI Engineer",
    period: "06/2026 - Hiện tại",
    problem:
      "Người dùng đặt câu hỏi nông nghiệp theo nhiều cách khác nhau; chatbot cần hiểu ngữ cảnh và chỉ trả lời khi có đủ bằng chứng dữ liệu.",
    solution:
      "Tích hợp Facebook Messenger API, duy trì Slot states, chuẩn hóa alias, tạo ChromaDB filters, truy xuất bằng chunk ID/cosine similarity và re-ranking.",
    impact:
      "Tạo luồng chatbot có decision policy giữa LLM answer và human fallback, phù hợp hơn cho nghiệp vụ cần kiểm soát độ tin cậy.",
    technologies: ["Facebook Messenger API", "Slot-Value", "ChromaDB", "RAG", "LLM"],
  },
];

export const projects: Project[] = [
  {
    id: "agricultural-assistant",
    number: "01",
    title: "Agricultural Knowledge Assistant",
    description:
      "Chatbot hỗ trợ kiến thức nông nghiệp tích hợp Facebook Messenger, Slot-Value và RAG trên ChromaDB.",
    problem:
      "Câu hỏi nông nghiệp có nhiều cách diễn đạt; hệ thống cần hiểu cây trồng, bệnh, triệu chứng hoặc mục đích sử dụng và không trả lời khi thiếu bằng chứng.",
    role: "AI Engineer",
    solution:
      "Tích hợp Messenger webhook, trích xuất slot/entity, chuẩn hóa alias, duy trì slot state, tạo ChromaDB filter, truy xuất bằng chunk ID/cosine similarity, re-ranking và decision policy.",
    result:
      "Có cơ chế chuyển sang human agent khi dữ liệu không đủ tin cậy, giúp kiểm soát hallucination tốt hơn chatbot gọi LLM trực tiếp.",
    technologies: ["Facebook Messenger API", "Slot-Value", "ChromaDB", "RAG", "Re-ranking", "Human fallback"],
    detailUrl: "/gioi-thieu/du-an",
  },
  {
    id: "ai-receptionist",
    number: "02",
    title: "Multimodal AI Receptionist",
    description:
      "Hệ thống lễ tân AI thời gian thực kết hợp nhận diện khuôn mặt, chatbot nội bộ, giọng nói và quản lý khách ra vào.",
    problem:
      "Front desk cần nhận diện nhiều người, tránh chào lặp, tránh âm thanh chồng và vẫn trả lời theo tri thức nội bộ.",
    role: "AI Engineer & System Integrator",
    solution:
      "Xây pipeline YOLOv8, MediaPipe FaceMesh, ArcFace ONNX, cosine similarity; domain-restricted RAG chatbot; FastAPI backend; session, queue và 5-minute cooldown.",
    result:
      "Hỗ trợ phản hồi âm thanh dưới 3 giây mỗi lượt, browser-based enrollment, face registration và access logging với SQLite/MySQL.",
    technologies: ["YOLOv8", "MediaPipe", "ArcFace ONNX", "FastAPI", "RAG", "TTS"],
    detailUrl: "/gioi-thieu/du-an",
  },
  {
    id: "recruitment-pipeline",
    number: "03",
    title: "AI Recruitment & CV Assessment Pipeline",
    description:
      "Pipeline kết hợp xử lý xác định và LLM Agent để đọc CV, tạo rubric theo JD, chấm điểm, xếp hạng và lưu kết quả tuyển dụng.",
    problem:
      "Quy trình screening CV cần xử lý nhiều định dạng, giảm phụ thuộc vào suy luận tự do của LLM và có phân luồng review rõ ràng.",
    role: "AI CTV / Automation Engineer",
    solution:
      "Dùng Poppler/pypdf/python-docx/docx2txt/antiword, regex extraction, dynamic JD-based rubric, JSON Schema validation, PASS/REJECT/manual-review routing và global reranking.",
    result:
      "10-stage screening pipeline, hỗ trợ tối đa 50 CVs/worker, Google Sheets reporting, Google Drive archiving và schema-validated JSON scoring.",
    technologies: ["Python", "LLM Agents", "JSON Schema", "Regex", "Google Sheets API", "Supabase"],
    detailUrl: "/gioi-thieu/du-an",
  },
  {
    id: "zalo-knowledge-chatbot",
    number: "04",
    title: "Zalo Internal Knowledge Chatbot",
    description:
      "Chatbot kiến thức nội bộ trên Zalo sử dụng n8n, MySQL, webhook và AI Agent.",
    problem:
      "Doanh nghiệp cần trả lời kiến thức nội bộ qua Zalo nhưng vẫn kiểm soát domain response và triển khai được trên môi trường thực tế.",
    role: "AI Engineer Intern",
    solution:
      "Thiết kế message flow: inbound Zalo messages trigger webhooks, query MySQL-backed knowledge, gọi AI Agent và trả kết quả qua Zalo API.",
    result:
      "Chuẩn bị Docker Compose cho n8n + MySQL, credential setup, webhook integration, HTTPS reverse proxy recommendation, retry handling và outbound normalization.",
    technologies: ["n8n", "Zalo API", "MySQL", "Docker Compose", "Webhook", "AI Agent"],
    detailUrl: "/gioi-thieu/du-an",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-engineering",
    title: "AI Engineering",
    skills: [
      "LLM integration",
      "RAG",
      "LLM Agents",
      "Prompt engineering",
      "Slot-Value extraction",
      "Embedding & cosine similarity",
      "Re-ranking",
      "Structured output",
      "JSON Schema validation",
      "Human fallback",
    ],
  },
  {
    id: "backend-data",
    title: "AI Backend & Data",
    skills: [
      "Python",
      "FastAPI",
      "REST API",
      "Webhook",
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "ChromaDB",
      "Docker Compose",
    ],
  },
  {
    id: "automation-integration",
    title: "Automation & Integration",
    skills: [
      "n8n",
      "Facebook Messenger API",
      "Zalo API",
      "Google Drive API",
      "Google Sheets API",
      "Telegram chatbot",
      "Workflow automation",
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    skills: ["OpenCV", "YOLO", "MediaPipe", "ArcFace", "ONNX", "TensorFlow", "PyTorch"],
  },
  {
    id: "supporting-tools",
    title: "Supporting Tools",
    skills: ["Node.js", "JavaScript", "Pandas", "NumPy", "Scikit-learn", "Regex", "Document parsing"],
  },
];

export const techBadges = [
  { label: "RAG", icon: BrainCircuit },
  { label: "LLM Agents", icon: Bot },
  { label: "ChromaDB", icon: DatabaseZap },
  { label: "FastAPI", icon: Code2 },
  { label: "n8n", icon: Workflow },
  { label: "Computer Vision", icon: LineChart },
  { label: "Odoo/HRM", icon: Blocks },
  { label: "Webhook", icon: GitBranch },
  { label: "Schema", icon: Layers3 },
];
