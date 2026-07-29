import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/data/portfolio";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Professional stack
          </p>
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Năng lực Content Marketing
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Kỹ năng được nhóm theo cách Phương tạo giá trị trong công việc: nghiên cứu insight, xây dựng câu chuyện thương hiệu, sản xuất nội dung và dùng AI để tăng tốc workflow.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <Card
              key={group.id}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h2 className="font-poppins text-xl font-bold text-foreground">
                {group.title}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
