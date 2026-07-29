import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "@/data/portfolio";

const detailLabels = [
  ["Bài toán", "problem"],
  ["Giải pháp", "solution"],
  ["Tác động", "impact"],
] as const;

export const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? experiences.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === experiences.length - 1 ? 0 : current + 1,
    );
  };

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    const midpoint = experiences.length / 2;

    if (offset > midpoint) offset -= experiences.length;
    if (offset < -midpoint) offset += experiences.length;

    return offset;
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-shell overflow-hidden bg-background-secondary"
    >
      <div className="container mx-auto px-4">
        <div className="relative">
          <SectionHeading
            eyebrow="Kinh nghiệm"
            title="Kinh nghiệm tạo tác động truyền thông"
            description="Các mảng công việc được trình bày theo bài toán, giải pháp và tác động để thấy rõ cách Phương triển khai nội dung, kênh và chiến dịch."
            align="center"
          />
        </div>
      </div>

      <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 px-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[18vw] bg-gradient-to-r from-background-secondary via-background-secondary/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[18vw] bg-gradient-to-l from-background-secondary via-background-secondary/80 to-transparent" />

        <div className="relative h-[610px] overflow-hidden md:h-[590px]">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              offset={getOffset(index)}
              isActive={index === activeIndex}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="relative z-30 mt-4 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={goToPrevious}
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-foreground shadow-md transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
            aria-label="Xem kinh nghiệm trước"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {experiences.map((experience, index) => (
              <button
                key={experience.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-border"
                }`}
                aria-label={`Chọn kinh nghiệm ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goToNext}
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-foreground shadow-md transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
            aria-label="Xem kinh nghiệm tiếp theo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

type ExperienceCardProps = {
  experience: (typeof experiences)[number];
  index: number;
  offset: number;
  isActive: boolean;
  onSelect: () => void;
};

const ExperienceCard = ({
  experience,
  index,
  offset,
  isActive,
  onSelect,
}: ExperienceCardProps) => {
  const isVisible = Math.abs(offset) <= 1;
  const side = offset === 0 ? 0 : offset > 0 ? 1 : -1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      animate={{
        x: `calc(-50% + ${side * 44}vw)`,
        scale: isActive ? 1 : 0.52,
        opacity: isVisible ? (isActive ? 1 : 0.62) : 0,
        filter: isActive ? "blur(0px)" : "blur(0.2px)",
      }}
      transition={{
        duration: 0.72,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.32 },
      }}
      onClick={onSelect}
      className={`group absolute left-1/2 top-0 w-[min(88vw,860px)] overflow-hidden rounded-[1.25rem] border bg-card p-5 shadow-[0_24px_70px_hsl(var(--foreground)/0.08)] md:p-6 ${
        isActive
          ? "border-primary/28 opacity-100 shadow-[0_30px_86px_hsl(var(--foreground)/0.14)]"
          : "cursor-pointer border-border shadow-[0_18px_52px_hsl(var(--foreground)/0.08)]"
      } ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
      style={{ zIndex: isActive ? 10 : 4 - Math.abs(offset) }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary opacity-80" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/16" />

      <div className="relative flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
            Experience {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-poppins text-2xl font-bold tracking-tight text-foreground md:text-[2rem]">
            {experience.company}
          </h3>
          <p className="mt-1 text-sm font-semibold text-primary">
            {experience.role}
          </p>
        </div>
        <span className="w-fit rounded-full border border-border bg-background-secondary px-3 py-1.5 text-xs font-semibold text-muted-foreground">
          {experience.period}
        </span>
      </div>

      <div className="relative mt-5 grid gap-3">
        {detailLabels.map(([label, key]) => (
          <div
            key={label}
            className="rounded-[1rem] border border-transparent bg-muted/55 p-4 transition group-hover:border-primary/10 group-hover:bg-card-secondary"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              {label}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {experience[key]}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold text-foreground shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};
