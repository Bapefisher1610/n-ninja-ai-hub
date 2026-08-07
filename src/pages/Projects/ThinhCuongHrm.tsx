import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  Image,
  MessageSquareText,
  Network,
  Table2,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const evidenceLinks = [
  {
    title: "Chương trình training app/web HRM",
    type: "Google Sheets",
    description:
      "Bảng theo dõi chương trình đào tạo App/Web HRM, phục vụ chuẩn bị nội dung, agenda và điều phối triển khai.",
    url: "https://docs.google.com/spreadsheets/d/16Uhyd15GfL8ls0pBBelDH_VSeYe6kw4GmYXymopSLOs/edit?gid=0#gid=0",
    icon: Table2,
  },
  {
    title: "Phiếu tiếp nhận yêu cầu khách hàng",
    type: "Google Sheets",
    description:
      "Biểu mẫu tiếp nhận, phân loại và theo dõi yêu cầu, câu hỏi, phản hồi của khách hàng trong quá trình sử dụng HRM.",
    url: "https://docs.google.com/spreadsheets/d/10TZIaLGK4KqoTfauXRotBFaFXgi88Md32A3VcmJgCfE/edit?gid=305752604#gid=305752604",
    icon: ClipboardList,
  },
  {
    title: "HRM HDSD Web/App",
    type: "Google Drive",
    description:
      "Thư mục tài liệu hướng dẫn sử dụng Web/App HRM, dùng để hỗ trợ người dùng tra cứu nghiệp vụ và thao tác hệ thống.",
    url: "https://drive.google.com/drive/u/0/folders/174Xd4EIp6ZXB5hUsUki9ZLxD85XluotW",
    icon: FileText,
  },
];

const contributionBlocks = [
  {
    icon: FileText,
    title: "Xây dựng nội dung truyền thông và hướng dẫn sử dụng HRM",
    text: "Tìm hiểu các nghiệp vụ của hệ thống HRM như chấm công, phân ca, nghỉ phép, tăng ca, hợp đồng, bảng công và bảng lương; sau đó chuyển hóa thành nội dung đơn giản, rõ ràng và phù hợp với người dùng. Trực tiếp tham gia xây dựng slide đào tạo, tài liệu hướng dẫn, bộ câu hỏi Q&A và nội dung truyền thông cho App/Web HRM.",
  },
  {
    icon: GraduationCap,
    title: "Tổ chức và hỗ trợ triển khai đào tạo người dùng",
    text: "Tham gia xuyên suốt quá trình tổ chức chương trình đào tạo, từ chuẩn bị nội dung, sắp xếp agenda, truyền thông chương trình, hỗ trợ điều phối đến tổng hợp câu hỏi sau đào tạo. Góp phần giúp nhân viên hiểu đúng quy trình và sử dụng hệ thống HRM hiệu quả hơn.",
  },
  {
    icon: MessageSquareText,
    title: "Tiếp nhận và phân tích phản hồi người dùng",
    text: "Ghi nhận, phân loại và tổng hợp các câu hỏi, lỗi thường gặp và khó khăn của người dùng trong quá trình sử dụng hệ thống. Từ dữ liệu phản hồi, xác định các vấn đề nổi bật để bổ sung tài liệu hướng dẫn, cải thiện nội dung truyền thông và đề xuất nâng cao trải nghiệm người dùng.",
  },
  {
    icon: Network,
    title: "Phối hợp hiệu quả giữa các bộ phận",
    text: "Đóng vai trò cầu nối giữa người dùng, bộ phận Nhân sự, IT, Admin và đội ngũ vận hành. Có khả năng truyền đạt đúng vấn đề, theo dõi tiến độ xử lý và phản hồi lại người dùng một cách rõ ràng, giúp hạn chế sai lệch thông tin và rút ngắn thời gian hỗ trợ.",
  },
  {
    icon: UsersRound,
    title: "Tư duy Marketing sản phẩm và lấy người dùng làm trung tâm",
    text: "Không chỉ thực hiện truyền thông, mà còn tham gia vào quá trình triển khai và cải tiến sản phẩm HRM. Luôn tập trung vào nhu cầu thực tế của người dùng, mức độ dễ hiểu của tài liệu, sự thuận tiện khi thao tác và hiệu quả tiếp nhận hệ thống trong doanh nghiệp.",
  },
];

const hrmModules = [
  "Chấm công",
  "Phân ca",
  "Nghỉ phép",
  "Tăng ca",
  "Hợp đồng",
  "Bảng công",
  "Bảng lương",
];

const hrmScreenshots = [
  {
    src: "/assets/hrm/hrm1.png",
    alt: "Man hinh tong quan cac module HRM tren Odoo",
    caption: "Tổng quan hệ thống HRM trên Odoo",
    span: "wide",
  },
  {
    src: "/assets/hrm/hrm2.png",
    alt: "Danh sach yeu cau sua cong trong module diem danh",
    caption: "Luồng yêu cầu sửa công và trạng thái phê duyệt",
    span: "wide",
  },
  {
    src: "/assets/hrm/hrm3.png",
    alt: "Danh sach nhan vien va bo loc cong ty phong ban",
    caption: "Quản lý hồ sơ nhân viên theo công ty, phòng ban",
    span: "wide",
  },
  {
    src: "/assets/hrm/hrm4.jpg",
    alt: "Giao dien mobile app HRM Thinh Cuong",
    caption: "Trải nghiệm App HRM trên mobile",
    span: "phone",
  },
  {
    src: "/assets/hrm/hrm5.png",
    alt: "Lich trinh theo nguon luc trong he thong HRM",
    caption: "Lịch trình theo nguồn lực và dữ liệu phân ca",
    span: "wide",
  },
  {
    src: "/assets/hrm/hrm6.png",
    alt: "Bang thong tin lich nghi trong module nghi phep",
    caption: "Module nghỉ phép và trạng thái phê duyệt",
    span: "wide",
  },
];

const HrmScreenshotShowcase = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const selected = hrmScreenshots[current] ?? hrmScreenshots[0];

  return (
    <section className="section-shell overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Hình ảnh hệ thống</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              Lướt qua các màn hình nghiệp vụ HRM đã hỗ trợ vận hành
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <Image className="h-4 w-4 text-primary" />
            {current + 1}/{hrmScreenshots.length} màn hình Web/App
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-md border border-primary/15 bg-[#07111c] p-3 shadow-2xl md:p-5"
        >
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#69d6c5] to-transparent opacity-70" />
          <Carousel setApi={setApi} opts={{ align: "center", loop: true }} className="min-w-0">
            <CarouselContent>
              {hrmScreenshots.map((item, index) => (
                <CarouselItem key={item.src}>
                  <figure className="overflow-hidden rounded-md border border-white/12 bg-black/70">
                    <div className="flex min-h-[280px] items-center justify-center p-2 sm:min-h-[360px] lg:min-h-[520px]">
                      <motion.img
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        initial={{ opacity: 0.65, scale: 0.985 }}
                        animate={{ opacity: index === current ? 1 : 0.8, scale: index === current ? 1 : 0.985 }}
                        transition={{ duration: 0.35 }}
                        className={`max-h-[620px] w-full rounded-sm object-contain ${
                          item.span === "phone" ? "h-[620px] w-auto max-w-full" : "h-auto"
                        }`}
                        loading="lazy"
                      />
                    </div>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 h-10 w-10 border-white/20 bg-black/70 text-white hover:bg-black hover:text-white disabled:opacity-40" />
            <CarouselNext className="right-4 h-10 w-10 border-white/20 bg-black/70 text-white hover:bg-black hover:text-white disabled:opacity-40" />
          </Carousel>

          <div className="mt-5 grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <motion.div
              key={selected.caption}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-md border border-white/10 bg-white/[0.06] p-5 text-white"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#69d6c5]">
                Màn hình {String(current + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-bold">{selected.caption}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c9d7df]">
                Các ảnh minh họa nghiệp vụ thực tế giúp nhà tuyển dụng nhìn rõ phạm vi Phương đã tham gia: hiểu module, hỗ trợ người dùng và chuyển phản hồi thành tài liệu hướng dẫn.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {hrmScreenshots.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  className={`group overflow-hidden rounded-md border p-1 transition ${
                    index === current
                      ? "border-[#69d6c5] bg-[#69d6c5]/16 shadow-[0_0_0_1px_rgba(105,214,197,0.35)]"
                      : "border-white/12 bg-white/[0.055] hover:border-white/35"
                  }`}
                  aria-label={`Xem màn hình ${index + 1}`}
                >
                  <img
                    src={item.src}
                    alt=""
                    className="h-16 w-full rounded-sm object-cover opacity-75 transition group-hover:opacity-100"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ThinhCuongHrm = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-[#eef7f5] pt-24 text-[#15352d] dark:bg-background dark:text-foreground">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#2f8f83] via-[#f0c65f] to-[#3a6ea5]" />
        <div className="container mx-auto grid min-h-[calc(100vh-5rem)] gap-10 px-4 py-12 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-2xl">
            <Button asChild variant="ghost" className="mb-8 px-0 text-[#276653] hover:bg-transparent hover:text-[#15352d] dark:text-primary">
              <Link to="/#projects">
                <ArrowLeft className="h-4 w-4" />
                Quay lại dự án
              </Link>
            </Button>

            <Badge className="bg-[#2f8f83] text-white hover:bg-[#2f8f83]">Case study HRM</Badge>
            <h1 className="mt-5 font-manrope text-4xl font-extrabold leading-[1.12] tracking-normal md:text-5xl lg:text-6xl">
              Hỗ trợ vận hành HRM: đưa nghiệp vụ nhân sự đến gần người dùng hơn
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#3f6259] dark:text-muted-foreground">
              Dự án tập trung vào hỗ trợ khách hàng sử dụng hệ thống HRM trên Odoo, đồng thời chuyển phản hồi thực tế của người dùng
              thành tài liệu hướng dẫn, nội dung đào tạo và insight cải thiện trải nghiệm sản phẩm.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {hrmModules.map((item) => (
                <span key={item} className="rounded-full border border-[#2f8f83]/35 bg-white/70 px-4 py-2 text-sm font-semibold text-[#276653] dark:bg-card dark:text-foreground">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-md border border-[#2f8f83]/25 bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-white/[0.055]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#276653] dark:text-[#69d6c5]">
                  Tài liệu tham khảo
                </p>
                <span className="text-xs font-semibold text-[#5b746d] dark:text-[#c9d7df]">
                  3 link
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                {evidenceLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex min-h-[68px] items-center gap-3 rounded-md border border-[#2f8f83]/20 bg-white px-3 py-2 text-left transition hover:-translate-y-0.5 hover:border-[#2f8f83]/55 hover:shadow-md dark:bg-[#0d1824]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#2f8f83]/12 text-[#276653] dark:text-[#69d6c5]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-bold text-[#15352d] dark:text-white">
                          {item.title}
                        </span>
                        <span className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-[#5b746d] dark:text-[#c9d7df]">
                          Mở file
                          <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[680px]">
            <div className="rounded-md border border-[#2f8f83]/20 bg-white p-5 shadow-2xl dark:bg-card">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Đào tạo", "Chuẩn bị nội dung, agenda và Q&A sau training"],
                  ["Hướng dẫn", "Biến nghiệp vụ HRM thành tài liệu dễ hiểu"],
                  ["Phản hồi", "Ghi nhận lỗi, câu hỏi và khó khăn thường gặp"],
                  ["Phối hợp", "Kết nối Nhân sự, IT, Admin và vận hành"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-md border border-[#2f8f83]/15 bg-[#f7fbfa] p-5 dark:bg-background">
                    <CheckCircle2 className="h-5 w-5 text-[#2f8f83]" />
                    <h2 className="mt-4 text-xl font-bold text-[#15352d] dark:text-foreground">{title}</h2>
                    <p className="mt-2 text-sm leading-7 text-[#5b746d] dark:text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md bg-[#15352d] p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0c65f]">Vai trò</p>
                <p className="mt-3 text-2xl font-bold">Marketing and Customer Insight Support</p>
                <p className="mt-3 text-sm leading-7 text-[#dce8ee]">
                  Tập trung vào truyền thông nội bộ, tài liệu hướng dẫn, hỗ trợ đào tạo và tổng hợp insight từ người dùng thực tế.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#07111c] text-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#69d6c5]">Nội dung triển khai</p>
              <h2 className="mt-3 max-w-4xl font-manrope text-3xl font-extrabold tracking-normal text-white md:text-5xl">
                Từ nghiệp vụ HRM phức tạp đến tài liệu, đào tạo và phản hồi dễ hành động.
              </h2>
            </div>
            <p className="text-base leading-8 text-[#c9d7df]">
              Trọng tâm của dự án là giúp người dùng hiểu đúng quy trình, thao tác thuận tiện hơn và giúp đội sản phẩm nhìn rõ các điểm nghẽn
              trong quá trình vận hành thực tế.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-5">
            {contributionBlocks.map((block, index) => {
              const Icon = block.icon;

              return (
                <article key={block.title} className="rounded-md border border-white/12 bg-white/[0.055] p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#69d6c5]/55 hover:bg-white/[0.085] lg:col-span-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#69d6c5]/14 text-[#69d6c5] ring-1 ring-[#69d6c5]/25">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-bold text-[#dce8ee]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-7 text-white">{block.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c9d7df]">{block.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-background-secondary">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Tổng quan</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
              HRM không chỉ là phần mềm, mà là trải nghiệm làm việc hằng ngày của nhân viên và bộ phận nhân sự.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Khi triển khai hệ thống HRM, nội dung hướng dẫn cần bám sát ngôn ngữ và tình huống sử dụng thực tế của người dùng. Vì vậy,
              dự án không dừng ở việc truyền đạt tính năng, mà còn phải ghi nhận phản hồi, phân loại vấn đề và bổ sung tài liệu theo nhu cầu.
            </p>
            <p>
              Vai trò của Phương nằm ở giao điểm giữa marketing sản phẩm, hỗ trợ khách hàng và nghiên cứu insight: làm rõ nghiệp vụ,
              chuyển hóa thành nội dung dễ hiểu, đồng thời phản hồi lại đội vận hành những điểm người dùng còn vướng.
            </p>
          </div>
        </div>
      </section>

      <HrmScreenshotShowcase />

      <section className="hidden">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Hình ảnh hệ thống</p>
              <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight md:text-4xl">
                Các màn hình nghiệp vụ HRM trong quá trình hỗ trợ vận hành
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Image className="h-4 w-4 text-primary" />
              6 màn hình Web/App
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {hrmScreenshots.map((item) => (
              <figure
                key={item.src}
                className={`overflow-hidden rounded-md border border-border bg-card shadow-sm ${
                  item.span === "phone" ? "lg:col-span-4" : "lg:col-span-8"
                }`}
              >
                <div className={`bg-slate-950 p-3 ${item.span === "phone" ? "flex justify-center" : ""}`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`rounded-sm object-contain ${
                      item.span === "phone"
                        ? "max-h-[640px] w-auto"
                        : "aspect-[16/7.5] w-full"
                    }`}
                    loading="lazy"
                  />
                </div>
                <figcaption className="border-t border-border p-4 text-sm font-medium leading-6 text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="container mx-auto px-4">
          <div className="rounded-md border border-primary/15 bg-[#07111c] p-5 shadow-2xl md:p-8">
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#69d6c5]">Tài liệu tham khảo</p>
                <h2 className="mt-3 font-manrope text-3xl font-extrabold tracking-normal text-white md:text-4xl">
                  Các file giúp người xem kiểm chứng quá trình đào tạo, tiếp nhận yêu cầu và hướng dẫn sử dụng HRM.
                </h2>
              </div>
              <p className="text-base leading-8 text-[#c9d7df]">
                Ba tài liệu dưới đây được lấy từ file nội dung portfolio, giữ đúng tên hiển thị và đường dẫn gốc để người xem mở trực tiếp.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {evidenceLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article key={item.url} className="group relative overflow-hidden rounded-md border border-white/12 bg-white/[0.055] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#69d6c5]/55 hover:bg-white/[0.085]">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#69d6c5]/10 transition group-hover:bg-[#69d6c5]/18" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#69d6c5]/14 text-[#69d6c5] ring-1 ring-[#69d6c5]/25">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-bold text-[#dce8ee]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#f0c65f]">{item.type}</p>
                    <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#c9d7df]">{item.description}</p>
                    <Button asChild className="mt-6 w-full justify-between bg-[#69d6c5] text-[#07111c] hover:bg-[#91ecde]">
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

export default ThinhCuongHrm;
