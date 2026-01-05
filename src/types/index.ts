import { IconType } from "react-icons";

export interface NavItem {
  id: string;
  title: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  link: string;
  tools: string[];
  description: string;
}

export interface Project {
  title: string;
  img: string;
  link: string;
  tools: string[];
  description: string;
}
