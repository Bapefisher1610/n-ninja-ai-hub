import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navigation, personalInfo, socialLinks } from "@/data/portfolio";
import logoImage from "@/assets/ninjaai.png";

const Footer = () => {
  const enabledSocials = Object.entries(socialLinks).filter(
    ([key, link]) => key !== "email" && link.enabled
  );

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logoImage}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-2xl object-cover"
              />
              <div>
                <p className="font-poppins font-bold text-foreground">
                  {personalInfo.name}
                </p>
                <p className="text-sm text-muted-foreground">{personalInfo.role}</p>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Portfolio cá nhân tập trung vào AI application, full-stack web và
              tự động hóa quy trình doanh nghiệp.
            </p>
            <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
              <a href={socialLinks.email.url} className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-foreground">Điều hướng</h2>
            <ul className="mt-4 grid gap-2">
              {navigation.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-foreground">Kết nối</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={socialLinks.email.url}
                aria-label="Gửi email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
              {enabledSocials.map(([key, link]) => {
                const Icon = key === "github" ? Github : Linkedin;
                return (
                  <a
                    key={key}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <Button
              variant="outline"
              className="mt-6 rounded-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Lên đầu trang
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/chinh-sach-bao-mat" className="hover:text-primary">
              Chính sách bảo mật
            </Link>
            <Link to="/dieu-khoan-su-dung" className="hover:text-primary">
              Điều khoản
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
