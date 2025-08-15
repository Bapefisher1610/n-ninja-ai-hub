import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Thu thập thông tin",
      content: [
        "Chúng tôi thu thập thông tin cá nhân khi bạn:",
        "• Đăng ký tham gia chương trình Ninja AI",
        "• Liên hệ với chúng tôi qua form hoặc email",
        "• Sử dụng chatbot SơnGPT trên website",
        "• Truy cập và sử dụng các tính năng của website"
      ]
    },
    {
      title: "2. Thông tin được thu thập",
      content: [
        "Thông tin cá nhân:",
        "• Họ và tên",
        "• Địa chỉ email",
        "• Số điện thoại",
        "• Thông tin học vấn và kinh nghiệm (nếu có)",
        "",
        "Thông tin kỹ thuật:",
        "• Địa chỉ IP",
        "• Loại trình duyệt",
        "• Thời gian truy cập",
        "• Trang được xem"
      ]
    },
    {
      title: "3. Mục đích sử dụng",
      content: [
        "Chúng tôi sử dụng thông tin để:",
        "• Xử lý đơn ứng tuyển chương trình Ninja AI",
        "• Liên hệ và tư vấn cho ứng viên",
        "• Cải thiện chất lượng dịch vụ và website",
        "• Gửi thông tin về chương trình và cơ hội học tập",
        "• Đảm bảo an ninh và bảo mật website"
      ]
    },
    {
      title: "4. Chia sẻ thông tin",
      content: [
        "Chúng tôi cam kết:",
        "• Không bán, trao đổi thông tin cá nhân với bên thứ ba",
        "• Chỉ chia sẻ khi có sự đồng ý của bạn",
        "• Có thể chia sẻ với đối tác khi cần thiết cho chương trình",
        "• Tuân thủ yêu cầu pháp lý khi được yêu cầu"
      ]
    },
    {
      title: "5. Bảo mật thông tin",
      content: [
        "Biện pháp bảo mật:",
        "• Mã hóa dữ liệu khi truyền tải",
        "• Lưu trữ an toàn trên server được bảo vệ",
        "• Giới hạn quyền truy cập chỉ cho nhân viên ủy quyền",
        "• Cập nhật định kỳ các biện pháp bảo mật",
        "• Sao lưu dữ liệu định kỳ"
      ]
    },
    {
      title: "6. Quyền của người dùng",
      content: [
        "Bạn có quyền:",
        "• Yêu cầu xem thông tin cá nhân được lưu trữ",
        "• Yêu cầu chỉnh sửa hoặc cập nhật thông tin",
        "• Yêu cầu xóa thông tin cá nhân",
        "• Rút lại sự đồng ý xử lý thông tin",
        "• Khiếu nại về việc xử lý thông tin không đúng"
      ]
    },
    {
      title: "7. Cookie và công nghệ theo dõi",
      content: [
        "Website sử dụng:",
        "• Cookie để cải thiện trải nghiệm người dùng",
        "• Analytics để hiểu hành vi sử dụng",
        "• Local storage để lưu trữ tạm thời",
        "• Bạn có thể tắt cookie trong cài đặt trình duyệt"
      ]
    },
    {
      title: "8. Thời gian lưu trữ",
      content: [
        "Thời gian lưu trữ thông tin:",
        "• Thông tin ứng viên: 2 năm từ khi ứng tuyển",
        "• Dữ liệu liên hệ: 1 năm từ lần liên hệ cuối",
        "• Log truy cập: 6 tháng",
        "• Có thể lưu trữ lâu hơn nếu có yêu cầu pháp lý"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="section-padding">
        <div className="container-padding max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Chính Sách Bảo Mật
            </h1>
            <p className="text-lg text-muted-foreground">
              Ninja AI Hub cam kết bảo vệ thông tin cá nhân của bạn
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="card-warm mb-8">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Chính sách bảo mật này mô tả cách Ninja AI Hub ("chúng tôi", "của chúng tôi") 
                  thu thập, sử dụng, và bảo vệ thông tin cá nhân của bạn khi sử dụng website 
                  và dịch vụ của chúng tôi. Bằng cách sử dụng website, bạn đồng ý với các 
                  điều khoản trong chính sách này.
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
                  Liên hệ về Chính sách Bảo mật
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, 
                  vui lòng liên hệ với chúng tôi:
                </p>
                <div className="space-y-2 text-sm">
                  <p>Email: privacy@ninjaai.hub</p>
                  <p>Địa chỉ: Hà Nội, Việt Nam</p>
                  <p>Điện thoại: +84 123 456 789</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;