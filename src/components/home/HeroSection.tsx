import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { evidenceItems, personalInfo, socialLinks, techBadges } from "@/data/portfolio";
import ptpPortrait from "@/assets/ptp-portrait.png";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="portfolio-hero relative isolate overflow-hidden pt-28 md:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary)/0.16),transparent_30%),radial-gradient(circle_at_84%_12%,hsl(var(--accent)/0.15),transparent_28%)]" />
      <div className="portfolio-grid absolute inset-0 -z-10 opacity-60" />

      <div className="container mx-auto grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-12 px-4 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-primary/20 bg-card/80 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            {personalInfo.openToWork ? "Open to Work" : "Portfolio"}
            <span className="text-border">/</span>
            {personalInfo.location}
          </motion.div>

          <motion.h1
            id="home-title"
            variants={item}
            className="text-balance font-vietnam text-[clamp(2.5rem,5.8vw,5.6rem)] font-black leading-[1.08] text-foreground"
          >
            Xin chào, tôi là{" "}
            <span className="portfolio-name-gradient block pt-2 font-black">
              {personalInfo.name}.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-xl font-semibold text-primary md:text-2xl"
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group min-h-11 rounded-full bg-primary px-6 text-primary-foreground shadow-green hover:bg-primary-dark"
            >
              Khám phá dự án
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            {personalInfo.cv.enabled ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-11 rounded-full border-primary/30 px-6"
              >
                <a href={personalInfo.cv.url} download>
                  <Download className="mr-2 h-4 w-4" />
                  Tải CV
                </a>
              </Button>
            ) : (
              <Button size="lg" variant="outline" disabled className="min-h-11 rounded-full px-6">
                <Download className="mr-2 h-4 w-4" />
                Tải CV
              </Button>
            )}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground"
          >
            {socialLinks.email.enabled && (
              <a
                href={socialLinks.email.url}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 transition hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </a>
            )}
            {Object.entries(socialLinks)
              .filter(([key, link]) => key !== "email" && link.enabled)
              .map(([key, link]) => (
                <a
                  key={key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-card px-4 py-2 transition hover:border-primary/50 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 grid max-w-2xl grid-cols-1 gap-3 md:grid-cols-[1.45fr_1fr_1fr]"
          >
            {evidenceItems.map((evidence) => (
              <div
                key={evidence.label}
                className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {evidence.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-foreground md:text-base">
                  {evidence.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[440px] lg:mr-0"
        >
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-card p-3 shadow-xl md:p-4">
            <div className="relative overflow-hidden rounded-[1.65rem] border border-border bg-slate-950">
              <img
                src={ptpPortrait}
                alt={`Chân dung ${personalInfo.name}`}
                width={1024}
                height={1792}
                className="h-auto max-h-[620px] w-full object-contain"
                loading="eager"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/20 bg-slate-950/72 p-4 text-white shadow-2xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">
                  Content Marketing
                </p>
                <p className="mt-1 text-sm leading-6 text-white/85">
                  Brand story, insight và AI workflow được đặt chung trong một luồng marketing.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {techBadges.slice(0, 6).map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.05 }}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {badge.label}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <a
        href="#journey"
        aria-label="Cuộn tới phần học vấn"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur transition hover:text-primary md:flex"
      >
        Cuộn để khám phá
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
};
