import { Download, Mail, MapPin, Phone } from "lucide-react";
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
                Sẵn sàng trao đổi về content, thương hiệu và tăng trưởng kênh.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
                Phương phù hợp với các vai trò Content Marketing, Branding, Social Media và các dự án cần kết hợp AI tools để tối ưu quy trình nội dung.
              </p>
            </div>

            <div className="p-8 md:p-10">
              <SectionHeading
                eyebrow="Trao đổi"
                title="Email hoặc gọi trực tiếp là cách nhanh nhất để bắt đầu."
                description="Thông tin liên hệ được cập nhật theo CV. Nút tải CV trỏ tới file CV mới trong thư mục public/cv."
              />

              <div className="mt-8 grid gap-4">
                <a
                  href={socialLinks.email.url}
                  className="flex items-center gap-3 rounded-2xl border border-border p-4 text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                  {personalInfo.email}
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 rounded-2xl border border-border p-4 text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  <Phone className="h-5 w-5" />
                  {personalInfo.phone}
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
                  asChild
                  variant="outline"
                  disabled={!personalInfo.cv.enabled}
                  className="min-h-11 rounded-full px-6"
                >
                  <a href={personalInfo.cv.url} download>
                    <Download className="mr-2 h-4 w-4" />
                    Tải CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
