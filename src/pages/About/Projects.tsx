import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
              className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm"
            >
              <div className="grid lg:grid-cols-[0.46fr_0.54fr]">
                <div className="relative min-h-[240px] bg-slate-950 p-8 text-white">
                  <div className="portfolio-project-grid absolute inset-0 opacity-45" />
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
