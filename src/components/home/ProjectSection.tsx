import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
                <div className={`relative overflow-hidden bg-slate-950 text-white ${project.coverImages?.length ? "min-h-[420px] p-5" : "min-h-[260px] p-8"}`}>
                  {project.coverImages?.length ? (
                    <div className="relative z-10 flex h-full min-h-[380px] flex-col gap-4">
                      <Carousel opts={{ align: "start", loop: true }} className="min-w-0">
                        <CarouselContent className="-ml-0">
                          {project.coverImages.map((image, index) => (
                            <CarouselItem key={image} className="pl-0">
                              <figure className="overflow-hidden rounded-md border border-white/15 bg-black/80 p-2 shadow-lg">
                                <img
                                  src={image}
                                  alt={`${project.coverAlt ?? project.title} ${index + 1}`}
                                  className="h-[250px] w-full object-contain sm:h-[300px] lg:h-[260px] xl:h-[300px]"
                                  loading="lazy"
                                />
                              </figure>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-3 top-1/2 h-9 w-9 border-white/20 bg-black/65 text-white hover:bg-black/85 hover:text-white disabled:opacity-40" />
                        <CarouselNext className="right-3 top-1/2 h-9 w-9 border-white/20 bg-black/65 text-white hover:bg-black/85 hover:text-white disabled:opacity-40" />
                        <div className="mt-3 flex justify-center gap-2">
                          {project.coverImages.map((image) => (
                            <span key={image} className="h-1.5 w-8 rounded-full bg-white/35" />
                          ))}
                        </div>
                      </Carousel>
                      <div className="rounded-md border border-white/10 bg-slate-950/88 p-5 backdrop-blur">
                        <span className="font-poppins text-5xl font-black text-white/12">
                          {project.number}
                        </span>
                        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-emerald-200">
                          {project.role}
                        </p>
                        <h3 className="mt-2 text-3xl font-bold">{project.title}</h3>
                      </div>
                      {project.links?.some((link) => link.enabled) && (
                        <div className="px-1">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                            2 bài viết nổi bật của kênh
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.links
                              .filter((link) => link.enabled)
                              .map((link) => (
                                <a
                                  key={link.url}
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:border-emerald-200/60 hover:bg-emerald-300/20"
                                >
                                  {link.label}
                                  <ArrowUpRight className="h-4 w-4" />
                                </a>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      {project.coverImage && (
                        <img
                          src={project.coverImage}
                          alt={project.coverAlt ?? project.title}
                          className={`absolute inset-0 h-full w-full bg-slate-950 transition duration-500 group-hover:scale-105 ${
                            project.coverFit === "contain" ? "object-contain p-3" : "object-cover"
                          }`}
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
                      <div className={`portfolio-project-grid absolute inset-0 ${project.coverImage ? "opacity-15" : "opacity-45"}`} />
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
                    </>
                  )}
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
