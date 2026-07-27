import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./SectionHeading";
import { timeline } from "@/data/portfolio";

export const JourneySection = () => {
  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="section-shell bg-background-secondary"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Hành trình"
          title="Hành trình học tập và phát triển"
          description="Một timeline trung thực về nền tảng học tập, hướng chuyển dịch sang AI và các mốc đang cần bổ sung dữ liệu xác nhận."
        />

        <div className="relative mt-12 space-y-6 lg:ml-8">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border lg:block" />
          {timeline.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
              className="relative rounded-3xl border border-border bg-card p-6 shadow-sm lg:ml-12"
            >
              <span className="absolute -left-[3.25rem] top-8 hidden h-4 w-4 rounded-full border-4 border-background-secondary bg-primary lg:block" />
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <Badge variant="secondary" className="mb-3 capitalize">
                    {event.type}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground">{event.organization}</h3>
                  <p className="mt-1 font-medium text-primary">{event.role}</p>
                </div>
                <p className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
                  {event.period}
                </p>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {event.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {event.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
