import { LucideIcon } from "lucide-react";

export interface LinkConfig {
  label: string;
  url: string;
  enabled: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  sectionId?: string;
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  headline: string;
  summary: string;
  openToWork: boolean;
  cv: LinkConfig;
}

export interface Strength {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  id: string;
  period: string;
  organization: string;
  role: string;
  description: string;
  type: "education" | "work" | "project" | "certificate";
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  problem: string;
  role: string;
  solution: string;
  result: string;
  technologies: string[];
  detailUrl: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}
