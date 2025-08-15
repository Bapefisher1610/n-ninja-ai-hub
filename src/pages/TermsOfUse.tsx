import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfUse = () => {
  const sections = [
    {
      title: "1. Chấp nhận Điều khoản",
      content: [
        "Bằng cách truy cập và sử dụng website Ninja AI Hub, bạn đồng ý tuân thủ các điều khoản và điều kiện sau đây. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng dịch vụ của chúng tôi.",
        "",
        "Chúng tôi có quyền thay đổi, sửa đổi hoặc cập nhật các điều khoản này bất cứ lúc nào mà không cần thông báo trước. Việc tiếp tục sử dụng website sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới."
      ]
    },
    {
      title: "2. Mục đích và Phạm vi Dịch vụ",
      content: [
        "Website Ninja AI Hub cung cấp:",
        "• Thông tin về chương trình đào tạo Ninja AI",
        "• Dịch vụ tư vấn và hướng dẫn về AI và lập trình",
        "• Nền tảng kết nối giữa mentor và học viên",
        "• Chatbot hỗ trợ thông tin (SơnGPT)",
        "• Các tài liệu và resources học tập"
      ]
    },
    {
      title: "3. Quyền và Nghĩa vụ của Người dùng",
      content: [
        "Quyền của người dùng:",
        "• Truy cập miễn phí vào thông tin công khai trên website",
        "• Đăng ký tham gia chương trình Ninja AI",
        "• Nhận hỗ trợ từ team tư vấn",
        "• Yêu cầu chỉnh sửa hoặc xóa thông tin cá nhân",
        "",
        "Nghĩa vụ của người dùng:",
        "• Cung cấp thông tin chính xác và trung thực",
        "• Không sử dụng website cho mục đích bất hợp pháp",
        "• Không spam hoặc gửi thông tin rác",
        "• Tôn trọng bản quyền và sở hữu trí tuệ",
        "• Không can thiệp vào hoạt động bình thường của website"
      ]
    },
    {
      title: "4. Sở hữu Trí tuệ",
      content: [
        "Tất cả nội dung trên website bao gồm:",
        "• Văn bản, hình ảnh, video, audio",
        "• Logo, thương hiệu Ninja AI Hub",
        "• Source code và thiết kế website",
        "• Tài liệu học tập và curriculum",
        "• Chatbot SơnGPT và các tính năng AI",
        "",
        "Đều thuộc quyền sở hữu của Ninja AI Hub hoặc được cấp phép sử dụng hợp pháp. Việc sao chép, phân phối hoặc sử dụng thương mại mà không có sự cho phép là vi phạm bản quyền."
      ]
    },
    {
      title: "5. Chương trình Ninja AI",
      content: [
        "Điều kiện tham gia:",
        "• Hoàn thành đầy đủ quá trình ứng tuyển",
        "• Cam kết thời gian học tập 6 tháng",
        "• Tham gia đầy đủ các hoạt động bắt buộc",
        "• Thanh toán học phí đúng hạn (nếu có)",
        "",
        "Quyền lợi:",
        "• Nhận mentoring 1-1 từ senior developer",
        "• Truy cập tài liệu học tập độc quyền",
        "• Tham gia cộng đồng alumni",
        "• Hỗ trợ tìm việc sau khi hoàn thành",
        "• Nhận certificate và recommendation letter"
      ]
    },
    {
      title: "6. Giới hạn Trách nhiệm",
      content: [
        "Ninja AI Hub không chịu trách nhiệm cho:",
        "• Thiệt hại trực tiếp hoặc gián tiếp do sử dụng website",
        "• Gián đoạn dịch vụ do lỗi kỹ thuật hoặc bảo trì",
        "• Mất mát dữ liệu do lỗi của người dùng",
        "• Nội dung từ các website liên kết bên ngoài",
        "• Kết quả học tập phụ thuộc vào nỗ lực cá nhân",
        "",
        "Tổng trách nhiệm của chúng tôi không vượt quá số tiền bạn đã thanh toán cho dịch vụ (nếu có)."
      ]
    },
    {
      title: "7. Chấm dứt Dịch vụ",
      content: [
        "Chúng tôi có quyền:",
        "• Tạm ngừng hoặc chấm dứt tài khoản vi phạm điều khoản",
        "• Thay đổi hoặc ngừng cung cấp dịch vụ bất cứ lúc nào",
        "• Xóa nội dung vi phạm chính sách",
        "",
        "Người dùng có quyền:",
        "• Ngừng sử dụng dịch vụ bất cứ lúc nào",
        "• Yêu cầu xóa tài khoản và dữ liệu cá nhân",
        "• Rút khỏi chương trình theo quy định"
      ]
    },
    {
      title: "8. Luật áp dụng và Giải quyết Tranh chấp",
      content: [
        "Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam.",
        "",
        "Mọi tranh chấp phát sinh sẽ được giải quyết thông qua:",
        "• Thương lượng trực tiếp giữa các bên",
        "• Hòa giải tại trung tâm hòa giải",
        "• Tòa án có thẩm quyền tại Hà Nội",
        "",
        "Chúng tôi khuyến khích giải quyết tranh chấp một cách hòa bình và thân thiện."
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="section-padding">
        <div className="container-padding max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Điều Khoản Sử Dụng
            </h1>
            <p className="text-lg text-muted-foreground">
              Quy định và điều kiện sử dụng dịch vụ Ninja AI Hub
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Có hiệu lực từ: {new Date().toLocaleDateString('vi-VN')}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="card-warm mb-8">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Điều khoản sử dụng này quy định quyền và nghĩa vụ của người dùng khi 
                  truy cập và sử dụng website Ninja AI Hub cũng như các dịch vụ liên quan. 
                  Vui lòng đọc kỹ trước khi sử dụng để đảm bảo tuân thủ đúng quy định.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <Card className="card-warm">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {section.content.map((line, lineIndex) => (
                        <p 
                          key={lineIndex} 
                          className={`text-muted-foreground ${line === '' ? 'h-2' : ''}`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="mt-12">
            <Card className="card-warm bg-muted/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Thông tin Liên hệ
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nếu bạn có câu hỏi về điều khoản sử dụng, vui lòng liên hệ:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Ninja AI Hub</strong></p>
                  <p>Email: legal@ninjaai.hub</p>
                  <p>Điện thoại: +84 123 456 789</p>
                  <p>Địa chỉ: Hà Nội, Việt Nam</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;