import { useState } from "react";
import { 
  Target, 
  BookOpen, 
  Route, 
  Sparkles, 
  Users, 
  Trophy, 
  Send,
  CheckCircle,
  Clock,
  Code2,
  Brain,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const NinjaAI = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mục tiêu rõ ràng",
      description: "Đào tạo AI Developer chuyên nghiệp với kỹ năng thực tế cao"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Phương pháp hiện đại",
      description: "Learning by doing kết hợp mentoring 1-1 từ senior developer"
    },
    {
      icon: <Route className="h-8 w-8" />,
      title: "Lộ trình khoa học",
      description: "4 giai đoạn từ cơ bản đến thành thạo, phù hợp mọi trình độ"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Công nghệ mới nhất",
      description: "Học các framework và tools AI tiên tiến nhất hiện nay"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cộng đồng mạnh",
      description: "Kết nối với network developer và alumni tại các công ty lớn"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Cam kết chất lượng",
      description: "95% học viên có việc làm hoặc thăng tiến trong vòng 6 tháng"
    }
  ];

  const timeline = [
    {
      phase: "Giai đoạn 1",
      duration: "2 tháng",
      title: "Nền tảng cơ bản",
      description: "Python, Mathematics for ML, Git, Linux basics",
      icon: <Code2 className="h-6 w-6" />
    },
    {
      phase: "Giai đoạn 2", 
      duration: "2 tháng",
      title: "Machine Learning",
      description: "Supervised/Unsupervised Learning, Deep Learning cơ bản",
      icon: <Brain className="h-6 w-6" />
    },
    {
      phase: "Giai đoạn 3",
      duration: "1.5 tháng", 
      title: "Dự án thực tế",
      description: "Xây dựng ứng dụng AI end-to-end với team",
      icon: <Zap className="h-6 w-6" />
    },
    {
      phase: "Giai đoạn 4",
      duration: "0.5 tháng",
      title: "Internship",
      description: "Thực tập tại các công ty partner hoặc dự án thực tế",
      icon: <Trophy className="h-6 w-6" />
    }
  ];

  const requirements = [
    "Có đam mê với công nghệ và AI",
    "Có kiến thức cơ bản về lập trình (bất kỳ ngôn ngữ nào)",
    "Có khả năng tự học và làm việc nhóm",
    "Cam kết học tập nghiêm túc trong 6 tháng",
    "Có laptop cấu hình từ trung bình trở lên"
  ];

  const outputs = [
    "Thành thạo Python và các thư viện ML/DL",
    "Hiểu sâu về Machine Learning và Deep Learning",
    "Có thể xây dựng ứng dụng AI từ đầu đến cuối",
    "Kỹ năng làm việc nhóm và quản lý dự án",
    "Portfolio với 3-5 dự án AI thực tế",
    "Certification và letter of recommendation"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Thiếu thông tin",
        description: "Vui lòng điền đầy đủ thông tin để ứng tuyển.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Gửi thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong vòng 48h. Cảm ơn bạn đã quan tâm!",
    });

    setFormData({ name: "", email: "", phone: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-padding">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Chương trình Thực tập sinh
              <span className="text-gradient block mt-2">Ninja AI</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Chương trình đào tạo toàn diện 6 tháng, biến bạn từ người mới bắt đầu 
              thành AI Developer chuyên nghiệp với kỹ năng thực tế cao.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="btn-hero" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                Ứng tuyển ngay
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tại Sao Chọn Ninja AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chương trình được thiết kế dựa trên kinh nghiệm thực tế và nhu cầu thị trường
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="card-warm card-hover h-full">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lộ Trình Thực Tập
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4 giai đoạn học tập được thiết kế khoa học để đảm bảo hiệu quả tối đa
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {timeline.map((phase, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <Card className="card-warm card-hover">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                            {phase.icon}
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{phase.phase}</p>
                            <CardTitle className="text-lg">{phase.title}</CardTitle>
                          </div>
                        </div>
                        <div className="flex items-center text-secondary">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">{phase.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Outputs */}
      <section className="section-padding bg-muted/30">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <Card className="card-warm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Users className="h-6 w-6 mr-3 text-primary" />
                    Đối Tượng Phù Hợp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="card-warm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Trophy className="h-6 w-6 mr-3 text-secondary" />
                    Kết Quả Đạt Được
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {outputs.map((output, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{output}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-background" id="apply">
        <div className="container-padding">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sẵn Sàng Bắt Đầu Hành Trình?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Điền thông tin để nhận tư vấn chi tiết và lịch phỏng vấn
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="max-w-md mx-auto">
            <Card className="card-warm">
              <CardHeader>
                <CardTitle className="text-center">Đơn Ứng Tuyển</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nhập họ và tên"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Nhập email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="btn-secondary w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Gửi CV & Đơn ứng tuyển
                  </Button>
                </form>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Chúng tôi sẽ liên hệ với bạn trong vòng 48 giờ
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default NinjaAI;