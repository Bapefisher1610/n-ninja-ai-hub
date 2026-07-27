import { ReactNode } from "react";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import ChatBot from "./ChatBot";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;
