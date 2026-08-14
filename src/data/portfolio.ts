import {
  BarChart3,
  Bot,
  BrainCircuit,
  Clapperboard,
  FileCheck2,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Sparkles,
  Target,
  Users,
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
  name: "Phạm Thu Phương",
  shortName: "Phương",
  role: "Content Marketing",
  location: "Sơn Tây, Hà Nội",
  email: "phamphuong220803@gmail.com",
  phone: "0981852632",
  headline:
    "Tôi xây dựng nội dung thương hiệu, phát triển kênh truyền thông và triển khai chiến dịch marketing dựa trên insight khách hàng.",
  summary:
    "Tập trung vào Content Marketing, Branding, Social Media, TikTok growth, nghiên cứu thị trường và ứng dụng AI/n8n/OpenClaw để tự động hóa một phần quy trình tuyển sinh, sản xuất nội dung và quản lý dữ liệu ứng viên.",
  openToWork: true,
  cv: {
    label: "Tải CV",
    url: "/cv/pham-thu-phuong-content-marketing.pdf",
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
    url: "",
    enabled: false,
  },
  linkedin: {
    label: "LinkedIn",
    url: "",
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
  { label: "Core", value: "Content Marketing + Branding + Insight" },
  { label: "Growth", value: "TikTok 1.600+ followers sau hơn 1 tháng" },
  { label: "Automation", value: "AI tools + n8n + OpenClaw" },
];

export const strengths: Strength[] = [
  {
    id: "brand-story",
    icon: PenTool,
    title: "Brand story and content direction",
    description:
      "Xây dựng câu chuyện thương hiệu, định vị sản phẩm và hệ thống nội dung có tính nhất quán cho social media.",
  },
  {
    id: "market-insight",
    icon: Search,
    title: "Market research and customer insight",
    description:
      "Nghiên cứu thị trường, phân tích xu hướng, khảo sát người tiêu dùng và chuyển insight thành thông điệp truyền thông.",
  },
  {
    id: "ai-marketing",
    icon: Bot,
    title: "AI-assisted marketing workflow",
    description:
      "Sử dụng ChatGPT, Gemini, NotebookLM, n8n và OpenClaw để tăng tốc viết nội dung, tạo hình ảnh, đăng bài và hỗ trợ sàng lọc CV.",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "fpt-university",
    period: "2021 - 2026",
    organization: "FPT University",
    role: "Digital Marketing - GPA 8.1/10",
    description:
      "Nền tảng học tập về Digital Marketing, nghiên cứu thị trường, truyền thông thương hiệu, hành vi khách hàng và triển khai chiến dịch marketing tích hợp.",
    type: "education",
    skills: ["Digital Marketing", "Branding", "Market Research", "IMC"],
  },
  {
    id: "next-marketer",
    period: "06/2024",
    organization: "The Next Marketer 2024",
    role: "Top 10 toàn cuộc thi",
    description:
      "Cuộc thi do Dược phẩm Hoa Linh và Đại học FPT phối hợp tổ chức; thực hiện nghiên cứu thị trường, khảo sát hơn 100 người tiêu dùng và đề xuất thông điệp truyền thông cho sản phẩm Nước tăng lực Hồng Mã.",
    type: "certificate",
    skills: ["Consumer Survey", "Insight", "Brand Message", "Market Analysis"],
  },
  {
    id: "adsplus",
    period: "08/2024 - 12/2024",
    organization: "Công ty Cổ phần AdsPlus",
    role: "Nhân viên Kinh doanh",
    description:
      "Hỗ trợ triển khai hơn 5 chiến dịch quảng cáo cho khách hàng SME, phối hợp xây dựng nội dung bám sát mục tiêu truyền thông và theo dõi dữ liệu chiến dịch để đề xuất điều chỉnh.",
    type: "work",
    skills: ["SME Ads", "Content Coordination", "Campaign Data", "Consulting"],
  },
  {
    id: "lam-duyen",
    period: "01/2025 - 12/2025",
    organization: "Dự án khởi nghiệp Lam Duyên",
    role: "Branding and Content Marketing",
    description:
      "Dự án áo dài Lam Duyên lọt Top 30 dự án khởi nghiệp sáng tạo tại Đại học FPT và được đầu tư 50 triệu đồng; xây dựng branding, định hướng truyền thông và hệ thống nội dung nền tảng.",
    type: "project",
    skills: ["Brand Strategy", "Social Content", "Gen Z Insight", "Revenue Growth"],
  },
  {
    id: "global-ai",
    period: "02/2026 - Nay",
    organization: "Công ty Cổ phần Global AI",
    role: "Marketing",
    description:
      "Xây dựng thương hiệu cá nhân, phát triển kênh TikTok về công nghệ, AI và chuyển đổi số, triển khai Marketing chương trình Ninja AI & Rocket OCP và hỗ trợ vận hành HRM trên nền tảng Odoo.",
    type: "work",
    skills: ["TikTok Growth", "AI Content", "n8n", "OpenClaw", "Odoo HRM"],
  },
];

export const experiences: Experience[] = [
  {
    id: "global-ai-brand-channel",
    company: "Global AI",
    role: "Marketing",
    period: "02/2026 - Nay",
    problem:
      "Công ty cần phát triển thương hiệu cá nhân và kênh truyền thông gần gũi để chia sẻ kiến thức về công nghệ, AI và chuyển đổi số.",
    solution:
      "Xây dựng và phát triển kênh TikTok chia sẻ kiến thức, đồng thời xây dựng nội dung cho kênh TikTok văn phòng “Gờ Aaa” theo hướng hài hước, gần gũi với môi trường công sở.",
    impact:
      "Kênh TikTok đạt hơn 1.600 followers sau hơn một tháng; nội dung được theo dõi qua lượt tiếp cận, tương tác và tốc độ tăng trưởng kênh.",
    technologies: ["TikTok", "Content Strategy", "Caption", "Short Video", "Trend Research"],
  },
  {
    id: "global-ai-recruitment-marketing",
    company: "Marketing chương trình Ninja AI & Rocket OCP",
    role: "Marketing",
    period: "02/2026 - Nay",
    problem:
      "Hoạt động tuyển sinh cho các vị trí Fullstack Developer, AI Engineer và các vị trí công nghệ cần tăng tốc sản xuất nội dung, đăng bài và quản lý lượng lớn CV.",
    solution:
      "Sử dụng n8n để tự động hóa quy trình viết nội dung, tạo hình ảnh và đăng bài tuyển sinh trên các hội nhóm Facebook; ứng dụng OpenClaw để tự động đọc, xử lý và hỗ trợ sàng lọc CV theo tiêu chí từng vị trí.",
    impact:
      "Hỗ trợ tiếp nhận và quản lý lên đến 1.000 CV, giảm thời gian xử lý thủ công, hạn chế bỏ sót hồ sơ và theo dõi nguồn ứng viên, tỷ lệ phản hồi, trạng thái hồ sơ theo từng kênh.",
    technologies: ["n8n", "OpenClaw", "Facebook Groups", "AI Content", "CV Screening"],
  },
  {
    id: "global-ai-hrm-odoo",
    company: "Dự án hỗ trợ vận hành HRM - Tập đoàn Thịnh Cường",
    role: "Marketing and Customer Insight Support",
    period: "02/2026 - Nay",
    problem:
      "Khách hàng cần được hỗ trợ sử dụng phần mềm HRM trên Odoo, đồng thời sản phẩm cần hiểu rõ phản hồi và khó khăn người dùng trong vận hành.",
    solution:
      "Tiếp nhận phản hồi, hướng dẫn xử lý vấn đề trong quá trình vận hành, nghiên cứu hành vi, nhu cầu và khó khăn người dùng để đề xuất cải thiện tài liệu hướng dẫn, nội dung truyền thông và trải nghiệm sản phẩm.",
    impact:
      "Nắm rõ nghiệp vụ Odoo HRM như nhân sự, hợp đồng, chấm công, nghỉ phép, tăng ca và tiền lương; đóng góp dữ liệu insight để cải thiện trải nghiệm khách hàng.",
    technologies: ["Odoo HRM", "User Research", "Customer Feedback", "Documentation", "Product Experience"],
  },
  {
    id: "adsplus-sme-campaigns",
    company: "AdsPlus",
    role: "Nhân viên Kinh doanh",
    period: "08/2024 - 12/2024",
    problem:
      "Khách hàng SME cần triển khai chiến dịch quảng cáo có nội dung bám sát mục tiêu truyền thông và đúng nhóm khách hàng.",
    solution:
      "Tham gia hỗ trợ hơn 5 chiến dịch quảng cáo, phối hợp xây dựng nội dung, theo dõi dữ liệu chiến dịch, đánh giá hiệu quả tiếp cận và đề xuất điều chỉnh.",
    impact:
      "Rèn luyện khả năng tư vấn khách hàng, phân tích nhu cầu, phối hợp triển khai chiến dịch và tối ưu nội dung dựa trên dữ liệu.",
    technologies: ["SME Marketing", "Ads Campaign", "Customer Consulting", "Performance Tracking"],
  },
];

export const projects: Project[] = [
  {
    id: "lam-duyen-branding",
    number: "01",
    title: "Dự án thương hiệu áo dài Lam Duyên",
    description:
      "Xây dựng thương hiệu áo dài Lam Duyên từ giai đoạn nền tảng, kết hợp brand story, nghiên cứu thị trường, insight Gen Z và hệ thống nội dung social media.",
    problem:
      "Lam Duyên cần hình ảnh thương hiệu rõ ràng, nhất quán về giá trị văn hóa và thẩm mỹ, đồng thời phải chứng minh tiềm năng kinh doanh để phát triển dài hạn trong nhóm khách hàng trẻ.",
    role: "Branding and Content Marketing",
    solution:
      "Phân tích xu hướng thị trường, hành vi người tiêu dùng Gen Z và insight về áo dài hiện đại; xây dựng brand story, định vị thương hiệu, chiến lược truyền thông, hệ thống nội dung nền tảng và triển khai social content trên Facebook, TikTok.",
    result:
      "Đạt hơn 3.500 lượt tiếp cận/tháng, engagement trung bình 6-8% trên Facebook và TikTok, doanh thu hơn 30 triệu đồng sau 4 tháng; dự án lọt Top 30 khởi nghiệp sáng tạo tại FPT University và được đầu tư 50 triệu đồng.",
    technologies: ["Brand Story", "Brand Positioning", "Facebook", "TikTok", "Gen Z Insight", "Startup Branding"],
    detailUrl: "/du-an/lam-duyen",
    coverImage: "/assets/lam-duyen/lam-duyen-cover.png",
    coverAlt: "Poster preorder bo suu tap ao dai Vai Ao Ai Thu cua Lam Duyen",
  },
  {
    id: "global-ai-company-marketing",
    number: "02",
    title: "Marketing Công ty Cổ phần Global AI",
    description:
      "Xây dựng nội dung truyền thông cho Global AI, tập trung vào thương hiệu cá nhân, kênh TikTok công nghệ, AI, chuyển đổi số và nội dung văn phòng gần gũi.",
    problem:
      "Công ty cần phát triển kênh truyền thông có tính nhận diện, dễ tiếp cận với người trẻ và truyền tải được kiến thức về công nghệ, AI, chuyển đổi số theo cách gần gũi hơn.",
    role: "Marketing",
    solution:
      "Lên ý tưởng, viết caption, viết kịch bản video ngắn, tối ưu nội dung theo trend TikTok; đồng thời xây dựng nội dung cho kênh TikTok văn phòng “Gờ Aaa” theo phong cách hài hước, gần gũi với môi trường công sở.",
    result:
      "Kênh TikTok chia sẻ kiến thức công nghệ, AI và chuyển đổi số đạt hơn 1.600 followers sau hơn 1 tháng; hiệu quả nội dung được theo dõi qua reach, engagement và tốc độ tăng trưởng kênh.",
    technologies: ["TikTok Growth", "Short Video Script", "Caption", "Trend Research", "AI Content", "Office Content"],
    detailUrl: "/gioi-thieu/du-an",
    links: [
      { label: "Bài nổi bật 01", url: "https://www.tiktok.com/@globalai.vn0", enabled: true },
      { label: "Bài nổi bật 02", url: "https://www.tiktok.com/@globalai.vn", enabled: true },
    ],
    coverImages: ["/assets/global-ai/global-ai-tiktok.png", "/assets/global-ai/go-aaaaa-tiktok.png"],
    coverAlt: "Anh dai dien kenh TikTok Global AI va Go Aaaaa",
  },
  {
    id: "automated-recruitment-marketing",
    number: "03",
    title: "Marketing chương trình Ninja AI & Rocket OCP",
    description:
      "Ứng dụng AI tools, n8n và OpenClaw vào quy trình marketing tuyển sinh cho các vị trí công nghệ.",
    problem:
      "Tuyển sinh các vị trí Fullstack Developer, AI Engineer và vị trí công nghệ cần nội dung đều đặn, đăng bài đa kênh và quản lý số lượng CV lớn.",
    role: "Marketing",
    solution:
      "Tự động hóa viết nội dung, tạo hình ảnh và đăng bài lên hội nhóm Facebook bằng n8n; dùng OpenClaw hỗ trợ đọc, xử lý và sàng lọc CV theo tiêu chí vị trí.",
    result:
      "Hỗ trợ quản lý lên đến 1.000 CV, theo dõi nguồn ứng viên, tỷ lệ phản hồi, trạng thái hồ sơ và hiệu quả từng kênh tuyển sinh.",
    technologies: ["n8n", "OpenClaw", "AI Tools", "Facebook Groups", "Recruitment Marketing"],
    detailUrl: "/du-an/tuyen-sinh-tu-dong",
    coverImages: [
      "/assets/recruitment/robotics.png",
      "/assets/recruitment/fullstack.png",
      "/assets/recruitment/mobile-app.png",
    ],
    coverAlt: "Poster tuyen thuc tap sinh Robotics, Full-stack Developer va Mobile App cua Global AI",
  },
  {
    id: "thinh-cuong-hrm-operations",
    number: "04",
    title: "Dự án hỗ trợ vận hành HRM - Tập đoàn Thịnh Cường",
    description:
      "Hỗ trợ khách hàng vận hành phần mềm HRM trên Odoo, kết hợp tiếp nhận phản hồi người dùng, phân tích nhu cầu và cải thiện tài liệu, nội dung hướng dẫn.",
    problem:
      "Khách hàng cần sử dụng hệ thống HRM ổn định trong các nghiệp vụ nhân sự như hồ sơ nhân viên, hợp đồng, chấm công, nghỉ phép, tăng ca và lương; đồng thời đội sản phẩm cần hiểu rõ pain point thực tế của người dùng.",
    role: "Marketing and Customer Insight Support",
    solution:
      "Tiếp nhận phản hồi, hướng dẫn xử lý vấn đề trong quá trình sử dụng Odoo HRM, nghiên cứu hành vi và nhu cầu người dùng, tổng hợp insight để cải thiện tài liệu hướng dẫn, nội dung truyền thông và trải nghiệm sản phẩm.",
    result:
      "Góp phần làm rõ vấn đề người dùng gặp trong vận hành HRM, hỗ trợ cải thiện trải nghiệm khách hàng và giúp nội dung hướng dẫn sát hơn với nghiệp vụ thực tế.",
    technologies: ["Odoo HRM", "Customer Feedback", "User Research", "Documentation", "Product Experience"],
    detailUrl: "/du-an/thinh-cuong-hrm",
    coverImage: "/assets/hrm/hrm1.png",
    coverAlt: "Man hinh tong quan he thong HRM Odoo",
    coverFit: "contain",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "content-branding",
    title: "Content and Branding",
    skills: [
      "Content Marketing",
      "Brand Story",
      "Brand Positioning",
      "IMC Planning",
      "Caption Writing",
      "Short Video Script",
      "Social Content System",
    ],
  },
  {
    id: "market-research",
    title: "Market Research and Insight",
    skills: [
      "Market Research",
      "Trend Analysis",
      "Customer Insight",
      "Consumer Survey",
      "Target Audience",
      "Brand Audit",
      "Campaign Evaluation",
    ],
  },
  {
    id: "social-growth",
    title: "Social Media Growth",
    skills: [
      "TikTok Channel Growth",
      "Facebook Content",
      "Engagement Tracking",
      "Reach Analysis",
      "Community Posting",
      "Trend Optimization",
    ],
  },
  {
    id: "ai-automation",
    title: "AI and Automation Tools",
    skills: [
      "ChatGPT",
      "Gemini",
      "NotebookLM",
      "Flow",
      "Grok",
      "n8n",
      "OpenClaw",
      "AI-assisted Content",
    ],
  },
  {
    id: "creative-tools",
    title: "Creative and Operation Tools",
    skills: [
      "Canva",
      "CapCut",
      "Odoo HRM",
      "Customer Feedback",
      "Documentation",
      "Campaign Coordination",
    ],
  },
];

export const techBadges = [
  { label: "Content", icon: PenTool },
  { label: "Branding", icon: Palette },
  { label: "Insight", icon: BrainCircuit },
  { label: "TikTok", icon: Clapperboard },
  { label: "AI Tools", icon: Sparkles },
  { label: "n8n", icon: Workflow },
  { label: "OpenClaw", icon: FileCheck2 },
  { label: "Social", icon: Megaphone },
  { label: "Analytics", icon: BarChart3 },
  { label: "Audience", icon: Users },
  { label: "Strategy", icon: Target },
];
