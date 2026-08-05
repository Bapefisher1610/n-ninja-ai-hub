import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Image, Megaphone, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

const gallery = [
  {
    src: "/assets/lam-duyen/lam-duyen-04.png",
    alt: "Bài đăng bộ sưu tập Vải Áo Ai Thu của Lam Duyên",
    caption: "Ra mắt bộ sưu tập Vải Áo Ai Thu trên Facebook",
  },
  {
    src: "/assets/lam-duyen/lam-duyen-05.png",
    alt: "Thiết kế nội dung Trung Thu của Lam Duyên",
    caption: "Ấn phẩm mùa vụ cho chiến dịch Trung Thu",
  },
  {
    src: "/assets/lam-duyen/lam-duyen-06.png",
    alt: "Workshop Hoa sắc Việt của Lam Duyên",
    caption: "Recap workshop và không gian trưng bày sản phẩm",
  },
  {
    src: "/assets/lam-duyen/lam-duyen-07.png",
    alt: "Hoạt động truyền thông ngoài trời của Lam Duyên",
    caption: "Truyền thông trực tiếp tại khuôn viên FPT",
  },
  {
    src: "/assets/lam-duyen/lam-duyen-08.png",
    alt: "Bộ ảnh lan tỏa vẻ đẹp áo dài Việt của Lam Duyên",
    caption: "Bộ ảnh kể chuyện về áo dài trong đời sống trẻ",
  },
  {
    src: "/assets/lam-duyen/lam-duyen-11.png",
    alt: "Poster preorder bộ sưu tập Vải Áo Ai Thu",
    caption: "Poster preorder với QR điều hướng tư vấn",
  },
];

const highlights = [
  "Top 30 dự án khởi nghiệp sáng tạo tại FPT University",
  "Được đầu tư 50 triệu đồng để tiếp tục phát triển",
  "Hơn 30 triệu đồng doanh thu sau 4 tháng triển khai",
  "Engagement trung bình 6-8% trên Facebook và TikTok",
];

const strategyBlocks = [
  {
    icon: Target,
    title: "Định vị thương hiệu",
    text: "Lam Duyên được xây theo tinh thần áo dài hiện đại: giữ chất Việt, nhưng giao tiếp bằng ngôn ngữ thị giác gần với Gen Z.",
  },
  {
    icon: Sparkles,
    title: "Brand story",
    text: "Câu chuyện thương hiệu xoay quanh ký ức, sự duyên dáng và cảm giác tự tin khi người trẻ mặc áo dài trong những khoảnh khắc đời thường.",
  },
  {
    icon: Megaphone,
    title: "Social content",
    text: "Nội dung được chia thành các tuyến: bộ sưu tập, hậu trường, workshop, mùa vụ, ưu đãi và recap hoạt động để tạo nhịp xuất hiện đều đặn.",
  },
];

const LamDuyen = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-[#f4fbf7] pt-24 text-[#15352d] dark:bg-background dark:text-foreground">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#57bfa6] via-[#f3d58f] to-[#e78aa0]" />
        <div className="container mx-auto grid min-h-[calc(100vh-5rem)] gap-10 px-4 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <Button asChild variant="ghost" className="mb-8 px-0 text-[#276653] hover:bg-transparent hover:text-[#15352d] dark:text-primary">
              <Link to="/#projects">
                <ArrowLeft className="h-4 w-4" />
                Quay lại dự án
              </Link>
            </Button>

            <Badge className="bg-[#57bfa6] text-white hover:bg-[#57bfa6]">Case study Lam Duyên</Badge>
            <h1 className="mt-5 font-manrope text-4xl font-extrabold leading-[1.12] tracking-normal md:text-5xl lg:text-6xl">
              Áo dài Việt được kể lại bằng ngôn ngữ của Gen Z
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#3f6259] dark:text-muted-foreground">
              Lam Duyên là dự án thương hiệu áo dài được xây từ nền tảng branding, nghiên cứu thị trường,
              insight khách hàng trẻ và hệ thống nội dung social media. Vai trò chính: định hướng thương hiệu,
              xây dựng câu chuyện, triển khai nội dung và đo hiệu quả truyền thông.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Branding", "Content Marketing", "Gen Z Insight", "Facebook", "TikTok"].map((item) => (
                <span key={item} className="rounded-full border border-[#57bfa6]/35 bg-white/70 px-4 py-2 text-sm font-semibold text-[#276653] dark:bg-card dark:text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[0.74fr_1fr] gap-4">
            <div className="flex min-h-[440px] items-center justify-center overflow-hidden rounded-md bg-white p-3 shadow-xl">
              <img
                src="/assets/lam-duyen/lam-duyen-03.png"
                alt="Trang Facebook Lam Duyên"
                className="h-full max-h-[620px] w-full object-contain"
              />
            </div>
            <div className="space-y-4 pt-10">
              <img
                src="/assets/lam-duyen/lam-duyen-11.png"
                alt="Poster preorder Vải Áo Ai Thu"
                className="aspect-square w-full rounded-md object-cover shadow-lg"
              />
              <img
                src="/assets/lam-duyen/lam-duyen-10.png"
                alt="Ảnh khách hàng mặc áo dài Lam Duyên"
                className="aspect-[4/3] w-full rounded-md object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item} className="rounded-md border border-border bg-card p-5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <p className="mt-4 text-sm font-semibold leading-7 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-background-secondary">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Bài toán</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              Tạo một thương hiệu áo dài vừa có chất văn hóa, vừa đủ gần với khách hàng trẻ.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Lam Duyên cần nhiều hơn một bộ nhận diện đẹp. Dự án cần chứng minh được tiềm năng kinh doanh,
              tạo niềm tin với người mặc trẻ và giữ sự nhất quán giữa sản phẩm, hình ảnh, bài đăng, workshop
              và các điểm chạm bán hàng.
            </p>
            <p>
              Cách triển khai tập trung vào nghiên cứu xu hướng áo dài hiện đại, insight Gen Z, hành vi tiêu
              dùng trên social media và cách biến mỗi bộ ảnh thành một mẩu chuyện có thể kéo người xem đi từ
              nhận biết đến nhắn tin tư vấn.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Chiến lược triển khai</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              Từ brand story đến lịch nội dung có thể vận hành
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {strategyBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <article key={block.title} className="rounded-md border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{block.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{block.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#15352d] text-white dark:bg-slate-950">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f3d58f]">Kết quả</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              Kết quả đủ để chứng minh dự án có sức sống ngoài bản kế hoạch.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["3.500+", "lượt tiếp cận mỗi tháng"],
              ["6-8%", "engagement trung bình"],
              ["30 triệu+", "doanh thu sau 4 tháng"],
              ["50 triệu", "giá trị đầu tư nhận được"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-md border border-white/15 bg-white/8 p-6">
                <p className="font-poppins text-4xl font-black text-[#f3d58f]">{value}</p>
                <p className="mt-2 text-sm font-medium text-white/75">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Hình ảnh dự án</p>
              <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
                Các điểm chạm nội dung của Lam Duyên
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Image className="h-4 w-4 text-primary" />
              6 tư liệu truyền thông
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
                <img src={item.src} alt={item.alt} className="aspect-square w-full object-cover" loading="lazy" />
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

export default LamDuyen;
