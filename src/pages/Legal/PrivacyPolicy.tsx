import { Card } from "@/components/ui/card";
import { personalInfo } from "@/data/portfolio";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background-secondary py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Privacy
          </p>
          <h1 className="font-poppins text-4xl font-bold text-foreground md:text-5xl">
            Chính sách bảo mật
          </h1>
          <p className="mt-4 text-muted-foreground">
            Cập nhật lần cuối: 28/07/2026
          </p>
        </div>

        <Card className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground">1. Phạm vi</h2>
              <p className="mt-3 leading-8">
                Website này là portfolio cá nhân của <strong>{personalInfo.name}</strong>, dùng để giới thiệu hồ sơ, kinh nghiệm, dự án và thông tin liên hệ công khai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">2. Dữ liệu liên hệ</h2>
              <p className="mt-3 leading-8">
                Khi bạn chủ động gửi email hoặc gọi điện, thông tin bạn cung cấp chỉ được dùng để phản hồi nội dung trao đổi, cơ hội công việc hoặc hợp tác liên quan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">3. Chatbot portfolio</h2>
              <p className="mt-3 leading-8">
                Chatbot chỉ nên được dùng để hỏi về thông tin đã duyệt trong CV và portfolio. Không gửi API key, mật khẩu, thông tin nhạy cảm hoặc dữ liệu cá nhân không cần thiết qua chatbot.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">4. Liên hệ</h2>
              <p className="mt-3 leading-8">
                Nếu cần yêu cầu cập nhật hoặc gỡ thông tin, vui lòng liên hệ qua email: {personalInfo.email}.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
