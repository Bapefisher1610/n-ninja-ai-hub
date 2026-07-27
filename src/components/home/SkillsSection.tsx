import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/data/portfolio";

const angleStep = 360 / skillGroups.length;

export const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? skillGroups.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === skillGroups.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-shell overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Tech stack"
          title="Năng lực và công nghệ"
          description="Không dùng progress bar phần trăm. Các nhóm kỹ năng được đặt theo phạm vi công việc thật: từ UI, API, AI đến workflow doanh nghiệp."
          align="center"
        />

        <div className="relative left-1/2 mt-12 h-[500px] w-screen -translate-x-1/2 overflow-hidden md:h-[530px]">
          <div className="absolute inset-x-[16vw] top-[46%] h-48 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-[47%] h-[260px] w-[72vw] max-w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-primary/20" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-[12vw] bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-[12vw] bg-gradient-to-l from-background to-transparent" />

          <div
            className="relative h-full w-full"
            style={{
              perspective: "1550px",
              perspectiveOrigin: "50% 42%",
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ rotateY: -activeIndex * angleStep }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {skillGroups.map((group, index) => (
                <SkillCylinderCard
                  key={group.id}
                  group={group}
                  index={index}
                  activeIndex={activeIndex}
                  onSelect={() => setActiveIndex(index)}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={goToPrevious}
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-foreground shadow-md transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
            aria-label="Xem nhóm kỹ năng trước"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {skillGroups.map((group, index) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-border"
                }`}
                aria-label={`Chọn nhóm kỹ năng ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-foreground shadow-md transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
            aria-label="Xem nhóm kỹ năng tiếp theo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

type SkillCylinderCardProps = {
  group: (typeof skillGroups)[number];
  index: number;
  activeIndex: number;
  onSelect: () => void;
};

const SkillCylinderCard = ({
  group,
  index,
  activeIndex,
  onSelect,
}: SkillCylinderCardProps) => {
  const rawOffset = index - activeIndex;
  const midpoint = skillGroups.length / 2;
  let offset = rawOffset;

  if (offset > midpoint) offset -= skillGroups.length;
  if (offset < -midpoint) offset += skillGroups.length;

  const isActive = offset === 0;
  const distance = Math.abs(offset);
  const isVisible = distance <= 1;

  return (
    <article
      onClick={onSelect}
      className={`absolute left-1/2 top-[46%] min-h-[360px] w-[min(76vw,340px)] cursor-pointer overflow-hidden rounded-[1.35rem] border bg-card p-5 shadow-[0_24px_70px_hsl(var(--foreground)/0.1)] md:min-h-[380px] md:w-[360px] md:p-6 ${
        isActive ? "border-primary/35" : "border-border"
      } ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
      style={{
        opacity: isActive ? 1 : isVisible ? 0.34 : 0,
        filter: isActive ? "blur(0px)" : "blur(0.7px)",
        transform: `translate(-50%, -50%) rotateY(${index * angleStep}deg) translateZ(clamp(270px, 30vw, 430px))`,
        zIndex: isActive ? 20 : 10 - distance,
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
        transition: "opacity 520ms ease, filter 520ms ease, border-color 520ms ease",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary opacity-80" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
          Skill Group {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 text-balance font-vietnam text-[1.55rem] font-extrabold leading-tight text-foreground md:text-[1.75rem]">
          {group.title}
        </h3>
      </div>

      <div className="relative mt-5 flex flex-wrap content-start gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="max-w-full rounded-full border border-border bg-background px-2.5 py-1.5 text-[11px] font-semibold leading-none text-muted-foreground shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>

    </article>
  );
};
