import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import Index from "./pages/Index";
import AboutSkills from "./pages/About/Skills";
import AboutEducation from "./pages/About/Education";
import AboutProjects from "./pages/About/Projects";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gioi-thieu/ky-nang" element={<AboutSkills />} />
              <Route path="/gioi-thieu/hoc-van" element={<AboutEducation />} />
              <Route path="/gioi-thieu/du-an" element={<AboutProjects />} />
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
