import { useEffect, useMemo, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navigation, personalInfo } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import logoImage from "@/assets/ninjaai.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const sectionNavigation = useMemo(
    () => navigation.filter((item) => item.sectionId),
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sectionNavigation.forEach((item) => {
      const section = document.getElementById(item.sectionId ?? "");
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname, sectionNavigation]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/70 bg-background/88 shadow-sm backdrop-blur-xl"
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all ${isScrolled ? "h-16" : "h-20"}`}>
          <Link
            to="/"
            className="flex items-center gap-3 rounded-full pr-2 text-foreground transition hover:text-primary"
            aria-label="Về trang chủ portfolio của Chu Tiến Sơn"
          >
            <img
              src={logoImage}
              alt=""
              className="h-10 w-10 rounded-2xl object-cover"
              width={40}
              height={40}
            />
            <span className="hidden font-poppins text-base font-bold sm:block">
              Chu Tiến Sơn
            </span>
          </Link>

          <nav aria-label="Điều hướng trang chủ" className="hidden items-center gap-1 lg:flex">
            {sectionNavigation.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => scrollToSection(item.sectionId ?? "home")}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeSection === item.sectionId && location.pathname === "/"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.sectionId && location.pathname === "/" && (
                  <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {personalInfo.cv.enabled ? (
              <Button asChild className="hidden rounded-full bg-primary px-5 text-primary-foreground sm:inline-flex">
                <a href={personalInfo.cv.url} download>
                  <Download className="mr-2 h-4 w-4" />
                  Tải CV
                </a>
              </Button>
            ) : (
              <Button
                disabled
                className="hidden rounded-full bg-primary px-5 text-primary-foreground sm:inline-flex"
                title="TODO: Thêm CV thật vào public/cv/chu-tien-son-cv.pdf"
              >
                <Download className="mr-2 h-4 w-4" />
                CV
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full lg:hidden"
              aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((value) => !value)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background/96 shadow-xl backdrop-blur-xl lg:hidden">
          <nav className="container mx-auto grid gap-1 px-4 py-4" aria-label="Điều hướng mobile">
            {sectionNavigation.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => scrollToSection(item.sectionId ?? "home")}
                className="min-h-11 rounded-2xl px-4 text-left text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
