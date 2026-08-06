import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, CheckCircle2, FileText, Image, Megaphone, Sparkles, Table2, Target } from "lucide-react";
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
  {
    value: "Top 30",
    label: "dự án khởi nghiệp sáng tạo tại FPT University",
  },
  {
    value: "50 triệu",
    label: "giá trị đầu tư nhận được để tiếp tục phát triển",
  },
  {
    value: "3.500+",
    label: "lượt tiếp cận mỗi tháng trên các kênh social",
  },
  {
    value: "6-8%",
    label: "engagement trung bình trên Facebook và TikTok",
  },
  {
    value: "30 triệu+",
    label: "doanh thu sau 4 tháng triển khai",
  },
];

const strategyBlocks = [
  {
    icon: Target,
    title: "Cá nhân hóa lựa chọn",
    text: "Khách hàng có thể hình dung và lựa chọn chiếc áo dài phù hợp với vóc dáng, phong cách cá nhân, mục đích sử dụng và từng sự kiện cụ thể.",
  },
  {
    icon: Sparkles,
    title: "Trải nghiệm công nghệ",
    text: "AI thử áo, hình ảnh sản phẩm 360 độ và hệ thống tùy chọn giúp quá trình tư vấn, đặt may trở nên trực quan, thuận tiện và cá nhân hóa hơn.",
  },
  {
    icon: Megaphone,
    title: "Chiều sâu văn hóa",
    text: "Mỗi thiết kế được gửi gắm câu chuyện về lịch sử, vẻ đẹp người phụ nữ Việt Nam, phong tục, vùng miền và bản sắc dân tộc.",
  },
];

const evidenceLinks = [
  {
    title: "Bài viết nội dung Lam Duyên",
    type: "Google Docs",
    description: "Tài liệu Google Docs tổng hợp nội dung trình bày, câu chuyện thương hiệu và định hướng truyền thông.",
    url: "https://docs.google.com/document/d/1N0A_N2gcTKU1tbzYZePxMiWmKVYDK7XQz-Qx8VCScPQ/edit?tab=t.z4sphmso7mo8",
    icon: FileText,
  },
  {
    title: "Bảng dữ liệu triển khai 1",
    type: "Google Sheets",
    description: "Google Sheets lưu dữ liệu phục vụ quá trình theo dõi, phân tích và chứng minh hiệu quả dự án.",
    url: "https://docs.google.com/spreadsheets/d/1QtQO_Nz9UiC4LjpprZTvVaK1UBGX3x95DALWwexw8CA/edit?gid=1087614076#gid=1087614076",
    icon: Table2,
  },
  {
    title: "Bảng dữ liệu triển khai 2",
    type: "Google Sheets",
    description: "Google Sheets bổ sung dữ liệu vận hành, nội dung hoặc kết quả liên quan đến dự án Lam Duyên.",
    url: "https://docs.google.com/spreadsheets/d/1F-3oHoWgJw71W016ZfzULHT2Oe1qE8VONFojGTJAqT8/edit?gid=872084949#gid=872084949",
    icon: Table2,
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
              Lam Duyên: áo dài Việt trong trải nghiệm thời trang số
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#3f6259] dark:text-muted-foreground">
              Lam Duyên không chỉ tạo nên những thiết kế áo dài đẹp, mà còn xây dựng một trải nghiệm
              thời trang mới dựa trên sự giao thoa giữa văn hóa Việt Nam, thiết kế hiện đại và công nghệ.
              Trong dự án, Phương tham gia xây dựng định hướng thương hiệu, câu chuyện nội dung và các
              điểm chạm social để biến ý tưởng sản phẩm thành một thương hiệu có sức lan tỏa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Áo dài Việt", "AI thử áo", "Sản phẩm 360 độ", "Cá nhân hóa", "Văn hóa Việt"].map((item) => (
                <span key={item} className="rounded-full border border-[#57bfa6]/35 bg-white/70 px-4 py-2 text-sm font-semibold text-[#276653] dark:bg-card dark:text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lam-duyen-visual-stage mx-auto grid w-full max-w-[740px] items-center gap-5 rounded-md p-5 sm:grid-cols-[269px_minmax(0,1fr)]">
            <figure className="lam-duyen-visual-card mx-auto aspect-[269/420] w-[269px] overflow-hidden rounded-md bg-white">
              <img
                src="/assets/lam-duyen/lam-duyen-03.png"
                alt="Trang Facebook Lam Duyên"
                className="block h-auto w-[269px]"
              />
            </figure>

            <div className="grid gap-5">
              <figure className="lam-duyen-visual-card overflow-hidden rounded-md bg-white">
                <img
                  src="/assets/lam-duyen/lam-duyen-11.png"
                  alt="Poster preorder Vải Áo Ai Thu"
                  className="aspect-square w-full object-cover"
                />
              </figure>
              <figure className="lam-duyen-visual-card overflow-hidden rounded-md bg-white">
                <img
                  src="/assets/lam-duyen/lam-duyen-10.png"
                  alt="Ảnh khách hàng mặc áo dài Lam Duyên"
                  className="aspect-[16/10] w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#07111c] text-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#57bfa6]">Thành tích nổi bật</p>
              <h2 className="mt-3 max-w-4xl font-manrope text-3xl font-extrabold tracking-normal text-white md:text-5xl">
              Dự án có cả câu chuyện thương hiệu, trải nghiệm công nghệ và kết quả kinh doanh rõ ràng.
              </h2>
            </div>
            <p className="text-base leading-8 text-[#c9d7df]">
              Những con số này cho thấy Lam Duyên không chỉ dừng ở ý tưởng sản phẩm, mà đã có tín hiệu thị trường,
              năng lực truyền thông và kết quả triển khai thực tế.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_1.4fr]">
            <div className="relative overflow-hidden rounded-md border border-[#57bfa6]/35 bg-[#10281f] p-8 shadow-2xl">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#57bfa6]/18" />
              <CheckCircle2 className="h-6 w-6 text-[#f3d58f]" />
              <p className="mt-8 font-manrope text-6xl font-extrabold leading-none text-[#f3d58f] md:text-7xl">
                Top 30
              </p>
              <p className="mt-5 max-w-sm text-lg font-semibold leading-8 text-white">
                dự án khởi nghiệp sáng tạo tại FPT University
              </p>
              <div className="mt-8 h-px bg-white/15" />
              <p className="mt-5 text-sm leading-7 text-[#c9d7df]">
                Cột mốc giúp Lam Duyên chứng minh tiềm năng thương hiệu, tính khả thi của sản phẩm và khả năng kể
                câu chuyện áo dài theo hướng hiện đại.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.slice(1).map((item) => (
                <div key={item.value} className="rounded-md border border-white/12 bg-white/[0.045] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#57bfa6]/45 hover:bg-white/[0.07]">
                  <CheckCircle2 className="h-5 w-5 text-[#57bfa6]" />
                  <p className="mt-5 font-manrope text-4xl font-extrabold leading-none text-white">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-[#c9d7df]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[
              "Brand story có chiều sâu văn hóa",
              "Trải nghiệm số: AI thử áo + sản phẩm 360 độ",
              "Social content có khả năng chuyển hóa sang tư vấn và bán hàng",
            ].map((item) => (
              <div key={item} className="rounded-md border border-[#57bfa6]/20 bg-[#57bfa6]/8 px-5 py-4 text-sm font-semibold leading-6 text-[#baf3df]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-background-secondary">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Tổng quan</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              Không chỉ bán mẫu áo có sẵn, Lam Duyên kiến tạo sản phẩm phù hợp với từng người mặc.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Thông qua các ứng dụng như AI thử áo, hình ảnh sản phẩm 360 độ và khả năng tùy chọn kiểu dáng,
              màu sắc, chất liệu, khách hàng có thể dễ dàng hình dung và lựa chọn chiếc áo dài phù hợp với
              vóc dáng, phong cách cá nhân, mục đích sử dụng cũng như từng sự kiện cụ thể.
            </p>
            <p>
              Mỗi thiết kế còn được gửi gắm một câu chuyện về lịch sử, vẻ đẹp của người phụ nữ Việt Nam và
              bản sắc dân tộc, tạo nên chiều sâu văn hóa và giá trị cảm xúc khác biệt.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Điểm khác biệt</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              Truyền thống được tiếp nối bằng tư duy sáng tạo và công nghệ hiện đại
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
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f3d58f]">Tinh túy dự án</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              Điểm mạnh của Lam Duyên nằm ở cách nối truyền thống, trải nghiệm số và hiệu quả truyền thông.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Văn hóa", "gìn giữ cấu trúc và tinh thần áo dài truyền thống"],
              ["Công nghệ", "làm rõ sản phẩm bằng AI thử áo và hình ảnh 360 độ"],
              ["Cá nhân", "tạo thiết kế phù hợp với dấu ấn riêng của người mặc"],
              ["Ứng dụng", "đồng hành trong công sở, trường học, lễ hội và đời sống"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-md border border-white/15 bg-white/8 p-6">
                <p className="font-manrope text-3xl font-extrabold text-[#f3d58f]">{value}</p>
                <p className="mt-2 text-sm font-medium text-[#dce8ee]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="container mx-auto px-4">
          <div className="rounded-md border border-primary/15 bg-[#07111c] p-5 shadow-2xl md:p-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#57bfa6]">Tài liệu minh chứng</p>
              <h2 className="mt-3 font-manrope text-3xl font-extrabold tracking-normal text-white md:text-4xl">
                Các file tham khảo giúp người xem kiểm chứng chiều sâu triển khai của dự án.
              </h2>
            </div>
            <p className="text-base leading-8 text-[#c9d7df]">
              Bộ tài liệu gồm phần nội dung trình bày và các bảng dữ liệu liên quan đến quá trình làm dự án Lam Duyên.
              Người xem có thể mở trực tiếp để xem thêm bối cảnh, dữ liệu và cách triển khai.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {evidenceLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <article key={item.url} className="group relative overflow-hidden rounded-md border border-white/12 bg-white/[0.055] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#57bfa6]/55 hover:bg-white/[0.085] hover:shadow-[0_22px_55px_hsl(166_74%_48%_/_0.18)]">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#57bfa6]/10 transition group-hover:bg-[#57bfa6]/18" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#57bfa6]/14 text-[#57bfa6] ring-1 ring-[#57bfa6]/25">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-bold text-[#dce8ee]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#f3d58f]">{item.type}</p>
                  <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#c9d7df]">{item.description}</p>
                  <Button asChild className="mt-6 w-full justify-between bg-[#57bfa6] text-[#07111c] hover:bg-[#7be4c8]">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      Mở tài liệu
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </article>
              );
            })}
          </div>
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
