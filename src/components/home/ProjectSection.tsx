import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
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
          description="Các dự án được đóng khung như case study để nhà tuyển dụng nhìn thấy cách Phương nghiên cứu insight, xây dựng nội dung, triển khai kênh và đo tác động."
        />

        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="grid gap-0 lg:grid-cols-[0.46fr_0.54fr]">
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

                  {project.detailUrl !== "/gioi-thieu/du-an" && (
                    <Button asChild className="mt-6 btn-scale">
                      <Link to={project.detailUrl}>
                        Xem chi tiết bài viết
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
