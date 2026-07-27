import { Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { personalInfo, socialLinks } from "@/data/portfolio";

export const ContactSection = () => {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-shell bg-background">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-slate-950 p-8 text-white md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
                Contact
              </p>
              <h2
                id="contact-title"
                className="mt-4 max-w-xl font-poppins text-3xl font-bold leading-tight md:text-5xl"
              >
                Cùng xây dựng một sản phẩm có giá trị.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
                Tôi sẵn sàng trao đổi về cơ hội làm việc, dự án AI, ứng dụng web
                và tự động hóa quy trình.
              </p>
            </div>

            <div className="p-8 md:p-10">
              <SectionHeading
                eyebrow="Trao đổi"
                title="Gửi email là cách chắc chắn nhất để bắt đầu."
                description="Form liên hệ sẽ được thêm khi có backend xử lý thật. Hiện tại các CTA ưu tiên email và CV đã xác thực."
              />

              <div className="mt-8 grid gap-4">
                <a
                  href={socialLinks.email.url}
                  className="flex items-center gap-3 rounded-2xl border border-border p-4 text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                  {personalInfo.email}
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-border p-4 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  {personalInfo.location}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="min-h-11 rounded-full bg-primary px-6 text-primary-foreground">
                  <a href={socialLinks.email.url}>Gửi email</a>
                </Button>
                <Button
                  variant="outline"
                  disabled={!personalInfo.cv.enabled}
                  className="min-h-11 rounded-full px-6"
                  title="TODO: Thêm file CV thật trước khi bật nút tải CV"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Tải CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
