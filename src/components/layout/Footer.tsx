import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-xl text-primary mb-4">
              Ninja AI Hub
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Nơi khởi đầu hành trình trở thành một lập trình viên AI chuyên nghiệp 
              cùng Chu Tiến Sơn và chương trình Ninja AI.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Về Chu Tiến Sơn
                </Link>
              </li>
              <li>
                <Link 
                  to="/chuong-trinh/ninja-ai" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Chương trình Ninja AI
                </Link>
              </li>
              <li>
                <Link 
                  to="/chinh-sach-bao-mat" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link 
                  to="/dieu-khoan-su-dung" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">chutienson@ninjaai.hub</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">+84 123 456 789</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Ninja AI Hub. All rights reserved. 
            Được phát triển với ❤️ bởi Chu Tiến Sơn.
          </p>
        </div>
      </div>
    </footer>
  );
};