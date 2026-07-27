import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { AgriculturalProjectVisual } from "./AgriculturalProjectVisual";
import { AIReceptionistProjectVisual } from "./AIReceptionistProjectVisual";
import { OpenClawProjectVisual } from "./OpenClawProjectVisual";
import { ZaloKnowledgeProjectVisual } from "./ZaloKnowledgeProjectVisual";
import { projects } from "@/data/portfolio";

export const ProjectSection = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-shell bg-background-secondary"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Case studies"
          title="Dự án tiêu biểu"
          description="Các dự án được đóng khung như case study để nhà tuyển dụng nhìn thấy cách Sơn tiếp cận vấn đề, vai trò và hướng giải pháp."
        />

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="grid gap-0 lg:grid-cols-[0.46fr_0.54fr]">
                {project.id === "agricultural-assistant" ? (
                  <AgriculturalProjectVisual />
                ) : project.id === "ai-receptionist" ? (
                  <AIReceptionistProjectVisual />
                ) : project.id === "recruitment-pipeline" ? (
                  <OpenClawProjectVisual />
                ) : project.id === "zalo-knowledge-chatbot" ? (
                  <ZaloKnowledgeProjectVisual />
                ) : (
                  <div className="relative min-h-[260px] overflow-hidden bg-slate-950 p-8 text-white">
                    <div className="portfolio-project-grid absolute inset-0 opacity-45" />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <span className="font-poppins text-7xl font-black text-white/10">
                        {project.number}
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">
                          {project.role}
                        </p>
                        <h3 className="mt-3 text-3xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <p className="text-lg font-semibold leading-8 text-foreground">
                    {project.description}
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {[
                      ["Vấn đề", project.problem],
                      ["Giải pháp", project.solution],
                      ["Kết quả", project.result],
                      ["Vai trò", project.role],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-border p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                          {label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
