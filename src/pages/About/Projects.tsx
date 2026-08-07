import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background-secondary py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Case studies
          </p>
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Dự án tiêu biểu
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Các dự án được lấy theo CV Content Marketing, ưu tiên branding, social media, nghiên cứu insight, triển khai chiến dịch và ứng dụng AI/automation vào vận hành marketing.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm"
            >
              <div className="grid lg:grid-cols-[0.46fr_0.54fr]">
                <div className={`relative overflow-hidden bg-slate-950 text-white ${project.coverImages?.length ? "min-h-[420px] p-5" : "min-h-[240px] p-8"}`}>
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
                        <h2 className="mt-2 text-3xl font-bold">{project.title}</h2>
                      </div>
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
                          <h2 className="mt-3 text-3xl font-bold">{project.title}</h2>
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
                      ["Bài toán", project.problem],
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
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
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
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
