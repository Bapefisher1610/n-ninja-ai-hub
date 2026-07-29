import { useEffect } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { personalInfo, socialLinks } from "@/data/portfolio";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: socialLinks.email.url,
  },
  {
    icon: Phone,
    label: "Điện thoại",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: "Khu vực",
    value: personalInfo.location,
    href: null,
  },
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background-secondary py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Contact
          </p>
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Liên hệ với Phạm Thu Phương
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Phương sẵn sàng trao đổi về cơ hội Content Marketing, Branding, Social Media và các dự án cần kết hợp AI tools trong quy trình nội dung.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <Card className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 break-words text-lg font-bold text-foreground">
                  {item.value}
                </p>
              </Card>
            );

            return item.href ? (
              <a key={item.label} href={item.href}>
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-950 p-8 text-white md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
                Quick note
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight">
                Một email rõ brief sẽ giúp bắt đầu nhanh hơn.
              </h2>
              <p className="mt-5 leading-8 text-white/75">
                Có thể gửi ngắn gọn về vị trí, mục tiêu nội dung, kênh truyền thông và kỳ vọng tăng trưởng. Phương sẽ phản hồi qua email hoặc số điện thoại trong CV.
              </p>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-foreground">Gợi ý nội dung email</h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                <p>Vị trí hoặc dự án cần trao đổi.</p>
                <p>Kênh chính: TikTok, Facebook, website, cộng đồng hoặc tuyển dụng.</p>
                <p>Mục tiêu: tăng nhận diện, tuyển sinh, tuyển dụng, chuyển đổi hoặc xây dựng thương hiệu cá nhân/doanh nghiệp.</p>
              </div>
              <Button asChild className="mt-8 rounded-full bg-primary px-6 text-primary-foreground">
                <a href={socialLinks.email.url}>
                  Gửi email
                  <Send className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
