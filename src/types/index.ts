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
  /** One measurable result, shown as a highlighted pill. */
  highlight?: string;
}

export type Platform = "mobile" | "web";

export type ProjectLinkKind = "web" | "playStore" | "appStore" | "repo";

export interface ProjectLink {
  kind: ProjectLinkKind;
  href: string;
  /** Optional override for the button text. */
  label?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Short one-line pitch shown under the title. */
  tagline: string;
  img: string;
  platforms: Platform[];
  /** What you did on it, e.g. "Feature upgrade". Shown as a badge. */
  role?: string;
  /** Small status note, e.g. "iOS coming soon". */
  note?: string;
  description: string;
  highlights: string[];
  tools: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  icon: IconType;
  items: string[];
}

export interface ResumeOption {
  label: string;
  description: string;
  href: string;
}
