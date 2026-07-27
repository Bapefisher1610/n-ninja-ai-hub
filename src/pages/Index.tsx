import { useEffect } from "react";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { HeroSection } from "@/components/home/HeroSection";
import { JourneySection } from "@/components/home/JourneySection";
import { ProjectSection } from "@/components/home/ProjectSection";
import { SkillsSection } from "@/components/home/SkillsSection";

const Index = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <JourneySection />
      <ExperienceSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
