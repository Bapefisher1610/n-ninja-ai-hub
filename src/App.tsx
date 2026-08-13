import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import Index from "./pages/Index";
import AboutSkills from "./pages/About/Skills";
import AboutEducation from "./pages/About/Education";
import AboutProjects from "./pages/About/Projects";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";
import AutomatedRecruitmentMarketing from "./pages/Projects/AutomatedRecruitmentMarketing";
import LamDuyen from "./pages/Projects/LamDuyen";
import ThinhCuongHrm from "./pages/Projects/ThinhCuongHrm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gioi-thieu/ky-nang" element={<AboutSkills />} />
              <Route path="/gioi-thieu/hoc-van" element={<AboutEducation />} />
              <Route path="/gioi-thieu/du-an" element={<AboutProjects />} />
              <Route path="/du-an/lam-duyen" element={<LamDuyen />} />
              <Route path="/du-an/tuyen-sinh-tu-dong" element={<AutomatedRecruitmentMarketing />} />
              <Route path="/du-an/thinh-cuong-hrm" element={<ThinhCuongHrm />} />
              <Route path="/lien-he" element={<Contact />} />
              <Route path="/chinh-sach-bao-mat" element={<PrivacyPolicy />} />
              <Route path="/dieu-khoan-su-dung" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
