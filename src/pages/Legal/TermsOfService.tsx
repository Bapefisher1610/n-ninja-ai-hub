import { Card } from "@/components/ui/card";
import { personalInfo } from "@/data/portfolio";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background-secondary py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Terms
          </p>
          <h1 className="font-poppins text-4xl font-bold text-foreground md:text-5xl">
            Điều khoản sử dụng
          </h1>
          <p className="mt-4 text-muted-foreground">
            Cập nhật lần cuối: 28/07/2026
          </p>
        </div>

        <Card className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground">1. Mục đích website</h2>
              <p className="mt-3 leading-8">
                Website này giới thiệu portfolio cá nhân của <strong>{personalInfo.name}</strong>, bao gồm thông tin học vấn, kinh nghiệm, dự án, kỹ năng và thông tin liên hệ công khai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">2. Sử dụng nội dung</h2>
              <p className="mt-3 leading-8">
                Nội dung trên website được cung cấp cho mục đích tham khảo tuyển dụng, hợp tác và trao đổi nghề nghiệp. Vui lòng không sao chép hoặc sử dụng lại nội dung cá nhân khi chưa có sự đồng ý.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">3. Độ chính xác thông tin</h2>
              <p className="mt-3 leading-8">
                Thông tin được biên tập theo CV đã cung cấp. Nếu phát hiện nội dung cần cập nhật, vui lòng liên hệ qua email {personalInfo.email}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">4. Chatbot</h2>
              <p className="mt-3 leading-8">
                Chatbot portfolio hỗ trợ trả lời nhanh dựa trên dữ liệu công khai. Câu trả lời có thể cần được kiểm chứng lại bằng CV hoặc trao đổi trực tiếp khi dùng cho quyết định tuyển dụng.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
