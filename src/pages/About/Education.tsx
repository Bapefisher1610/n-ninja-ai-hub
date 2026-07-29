import { Award, Calendar, GraduationCap, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const languageItems = [
  { name: "English", level: "IELTS 6.0" },
  { name: "Chinese", level: "Giao tiếp cơ bản" },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-background-secondary py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Education
          </p>
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Học vấn và ngôn ngữ
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Thông tin được cập nhật theo CV Content Marketing của Phạm Thu Phương, tập trung vào nền tảng Digital Marketing và khả năng giao tiếp phục vụ công việc nội dung.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  FPT University
                </h2>
                <p className="mt-2 font-semibold text-primary">Digital Marketing</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2">
                    <Calendar className="h-4 w-4" />
                    Theo CV
                  </span>
                  <span className="rounded-full border border-border px-4 py-2">
                    GPA: 8.1/10
                  </span>
                </div>
                <p className="mt-6 leading-8 text-muted-foreground">
                  Nền tảng học tập xoay quanh nghiên cứu thị trường, hành vi khách hàng, xây dựng thương hiệu, truyền thông tích hợp và triển khai nội dung trên các kênh số.
                </p>
              </div>
            </div>
          </Card>

          <Card className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Languages className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Ngôn ngữ</h2>
            </div>
            <div className="space-y-4">
              {languageItems.map((item) => (
                <div key={item.name} className="rounded-2xl border border-border p-4">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.level}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-muted p-4">
              <Award className="mt-1 h-5 w-5 text-primary" />
              <p className="text-sm leading-7 text-muted-foreground">
                Khả năng ngoại ngữ hỗ trợ nghiên cứu tài liệu, theo dõi xu hướng quốc tế và làm việc với nội dung đa nguồn.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary">Digital Marketing</Badge>
              <Badge variant="secondary">Insight</Badge>
              <Badge variant="secondary">Branding</Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
