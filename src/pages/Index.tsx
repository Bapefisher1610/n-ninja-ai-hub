import { Link } from "react-router-dom";
import { Code, Palette, TrendingUp, Brain, ArrowRight, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

const Index = () => {
  const strengths = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Lập trình",
      description: "Chuyên môn sâu về Frontend, Backend và Mobile Development"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Thiết kế",
      description: "UI/UX Design và Visual Identity với tư duy sáng tạo"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Marketing",
      description: "Digital Marketing và Growth Hacking cho sản phẩm công nghệ"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Artificial Intelligence",
      description: "Machine Learning, Deep Learning và AI Applications"
    }
  ];

  const stats = [
    { number: "5+", label: "Năm kinh nghiệm" },
    { number: "100+", label: "Dự án hoàn thành" },
    { number: "50+", label: "Thực tập sinh đào tạo" },
    { number: "10+", label: "Công nghệ thành thạo" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/a01734ff-14c4-4b0b-91a5-eb8038fee2cd.png')",
            filter: "brightness(0.3)"
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        <div className="container-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <AnimatedSection className="text-center lg:text-left">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Chu Tiến Sơn
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Lập Trình Viên, Nhà Sáng Lập & Mentor
              </motion.p>
              <motion.p 
                className="text-lg text-white/80 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Với tầm nhìn tạo ra những sản phẩm công nghệ có ý nghĩa, tôi đồng hành cùng 
                các bạn trẻ trong hành trình chinh phục thế giới AI và lập trình.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button asChild className="btn-hero">
                  <Link to="/chuong-trinh/ninja-ai">
                    Khám phá Ninja AI
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="lg:flex justify-end">
              <div className="grid grid-cols-2 gap-4 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
                  >
                    <div className="text-3xl font-bold text-secondary">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thế Mạnh Nổi Bật
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kết hợp đa dạng kỹ năng từ technical đến creative, tạo nên sự khác biệt 
              trong từng dự án và sản phẩm.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="card-warm card-hover h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {strength.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {strength.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dự Án Tiêu Biểu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những sản phẩm công nghệ đã được phát triển và triển khai thành công.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="card-warm overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-teal p-8 lg:p-12 flex items-center">
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Ninja AI Platform
                    </h3>
                    <p className="text-white/90 mb-6">
                      Nền tảng đào tạo AI toàn diện với hệ thống học tập thông minh, 
                      theo dõi tiến độ và mentor 1-1. Đã đào tạo thành công hơn 50 
                      thực tập sinh trở thành AI Developer.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        <span>5.0 Rating</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>50+ Students</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        <span>95% Success</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex items-center justify-center bg-gradient-warm">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-muted-foreground">
                      Khám phá thêm về chương trình và cách thức hoạt động
                    </p>
                    <Button asChild className="btn-secondary mt-4">
                      <Link to="/chuong-trinh/ninja-ai">
                        Tìm hiểu thêm
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Work Style & Contact Section */}
      <section className="section-padding bg-background" id="contact">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Phong Cách Làm Việc
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Luôn đặt chất lượng sản phẩm và trải nghiệm người dùng lên hàng đầu</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Áp dụng phương pháp Agile và Design Thinking trong mọi dự án</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Mentoring tận tâm với từng cá nhân, phát triển kỹ năng toàn diện</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Liên tục học hỏi và cập nhật công nghệ mới nhất</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                <p className="text-lg font-medium text-foreground mb-2">
                  "Thành công không phải là đích đến, mà là hành trình của sự học hỏi không ngừng."
                </p>
                <p className="text-sm text-muted-foreground">- Chu Tiến Sơn</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Kết Nối Với Tôi
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">chutienson@ninjaai.hub</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sở thích</h3>
                  <p className="text-muted-foreground">
                    Đọc sách công nghệ, chơi cờ vua, du lịch khám phá và chia sẻ kiến thức 
                    qua các workshop, seminar về AI và lập trình.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mục tiêu</h3>
                  <p className="text-muted-foreground">
                    Góp phần đào tạo thế hệ developer Việt Nam có tư duy sáng tạo và 
                    kỹ năng vững chắc, sẵn sàng cạnh tranh trên thị trường quốc tế.
                  </p>
                </div>
                
                <Card className="card-warm p-6">
                  <h4 className="font-semibold text-foreground mb-4">
                    Bạn muốn hợp tác hoặc tìm hiểu thêm?
                  </h4>
                  <Button asChild className="btn-hero w-full">
                    <Link to="/chuong-trinh/ninja-ai">
                      Tham gia Ninja AI ngay
                    </Link>
                  </Button>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;