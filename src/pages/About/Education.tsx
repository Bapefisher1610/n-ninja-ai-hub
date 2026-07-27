import { Award, Calendar, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const certificates = [
  { date: "02/12/2024", name: "Google Data Analytics" },
  { date: "17/03/2024", name: "Microsoft Excel Specialist 2019" },
  { date: "02/04/2023", name: "Microsoft Word Specialist 2019" },
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
            Học vấn và chứng chỉ
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Thông tin được lấy theo CV AI Engineer. GPA được đặt tại trang học
            vấn, không đưa lên hero để tránh làm loãng định vị Applied AI.
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
                  Hanoi University of Mining and Geology
                </h2>
                <p className="mt-2 font-semibold text-primary">
                  Information Technology
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2">
                    <Calendar className="h-4 w-4" />
                    2021 - 2026
                  </span>
                  <span className="rounded-full border border-border px-4 py-2">
                    GPA: 3.17/4.0
                  </span>
                </div>
                <p className="mt-6 leading-8 text-muted-foreground">
                  Nền tảng học tập liên quan trực tiếp tới lập trình, cơ sở dữ
                  liệu, AI, backend API và phát triển ứng dụng phục vụ các dự án
                  RAG chatbot, automation và Computer Vision.
                </p>
              </div>
            </div>
          </Card>

          <Card className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Certificates</h2>
            </div>
            <div className="space-y-4">
              {certificates.map((certificate) => (
                <div
                  key={certificate.name}
                  className="rounded-2xl border border-border p-4"
                >
                  <p className="text-sm font-semibold text-primary">
                    {certificate.date}
                  </p>
                  <p className="mt-1 font-medium text-foreground">
                    {certificate.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary">Data Analytics</Badge>
              <Badge variant="secondary">Excel</Badge>
              <Badge variant="secondary">Word</Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
