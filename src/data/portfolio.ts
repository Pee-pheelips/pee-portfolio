import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSmartphone, FiMonitor, FiDatabase, FiTool } from "react-icons/fi";
import {
  NavItem,
  SocialLink,
  Experience,
  Project,
  SkillGroup,
  ResumeOption,
} from "@/types";

export const SITE = {
  name: "Paul Philip",
  role: "Frontend & Mobile Engineer",
  url: "https://paulfolio-delta.vercel.app",
  email: "philipupaul@gmail.com",
  location: "Nigeria · Remote (WAT, UTC+1)",
  intro:
    "I build fast, accessible web and mobile apps with React, Next.js and React Native — from fintech dashboards to crypto wallets on Google Play.",
};

/** Set `open` to false to hide the "Open to work" badge. */
export const AVAILABILITY = {
  open: true,
  label: "Open to frontend & mobile roles",
};

export const RESUMES: ResumeOption[] = [
  {
    label: "Web & Mobile résumé",
    description: "Full-stack frontend: React, Next.js, React Native",
    href: "/Paul_Philip_Resume.pdf",
  },
  {
    label: "Mobile résumé",
    description: "React Native & Expo roles",
    href: "/Paul_Philip_Resume_Mobile.pdf",
  },
  {
    label: "Frontend résumé",
    description: "React & Next.js web roles",
    href: "/Paul_Philip_Resume_Frontend.pdf",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:philipupaul@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    href: "https://github.com/Pee-pheelips",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/paul-philip-1a19121a3/",
    icon: FaLinkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/PPheelips",
    icon: FaXTwitter,
  },
];

export const NAV_ITEMS: NavItem[] = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Frontend & Mobile Engineer with 4+ years of experience building resilient, high-performance web and mobile applications — working at the intersection of architecture, design and engineering with React and React Native.",
    "I've worked with startups and established organizations to ship production-ready software, with a sharp focus on type safety, modular component design and state management that keeps systems maintainable as they scale.",
    "I champion engineering best practices through documentation and mentorship, and take pride in bridging design intent with technical execution.",
  ],
  stats: [
    { value: "4+", label: "Years shipping production apps" },
    { value: "2", label: "Mobile apps live on Google Play" },
    { value: "98+", label: "GTmetrix score at EcoHotels" },
    { value: "7", label: "Chains in one balance (Rown)" },
  ],
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Mobile",
    icon: FiSmartphone,
    items: [
      "React Native",
      "Expo",
      "EAS Build & Submit",
      "Expo Router",
      "React Navigation",
      "Reanimated",
      "NativeWind",
      "Passkeys & biometrics",
      "Play Store deployment",
    ],
  },
  {
    title: "Web",
    icon: FiMonitor,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Chakra UI",
      "Framer Motion",
      "Core Web Vitals",
      "Accessibility",
    ],
  },
  {
    title: "Data & APIs",
    icon: FiDatabase,
    items: [
      "REST",
      "GraphQL",
      "Apollo",
      "URQL",
      "Firebase",
      "SQLite",
      "PostgreSQL",
      "Wagmi & Viem",
    ],
  },
  {
    title: "Tools",
    icon: FiTool,
    items: [
      "Git & GitHub",
      "Vercel",
      "Postman",
      "Xcode",
      "Android Studio",
      "Figma",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    position: "Frontend Engineer",
    company: "EcoHotels",
    startDate: "NOV '23",
    endDate: "DEC '25",
    link: "https://www.ecohotels.com/",
    highlight: "98+ GTmetrix performance score",
    tools: [
      "Next.js",
      "TypeScript",
      "React Native",
      "Expo",
      "TailwindCSS",
      "REST API",
      "Context API",
      "Framer Motion",
    ],
    description:
      "Built SEO-optimized, multi-locale hotel booking flows for a global travel platform, and optimized Core Web Vitals to improve search rankings and user retention.",
  },
  {
    position: "Frontend Engineer",
    company: "Cragpay",
    startDate: "JAN '22",
    endDate: "OCT '23",
    link: "https://www.cragpay.com/",
    highlight: "30% fewer frontend bugs",
    tools: [
      "Next.js",
      "TypeScript",
      "Chakra UI",
      "GraphQL",
      "Apollo",
      "AWS",
      "Framer Motion",
      "Recoil",
    ],
    description:
      "Built the frontend infrastructure for a fintech platform: secure merchant and admin dashboards, complex GraphQL data-fetching patterns, and integration testing that cut regressions.",
  },
  {
    position: "Frontend Developer",
    company: "Eduvacity",
    startDate: "MAR '23",
    endDate: "SEP '23",
    link: "https://www.eduvacity.com/",
    highlight: "20% faster page rendering",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Refactored legacy education interfaces into reusable, responsive components and optimized asset loading to speed up rendering and reduce runtime errors.",
  },
  {
    position: "Frontend Engineer",
    company: "SurePlug",
    startDate: "JUN '23",
    endDate: "SEP '23",
    link: "https://mysureplug.com/",
    tools: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    description:
      "Engineered a service marketplace connecting clients with skilled artisans, improving conversion through UI/UX refinements and a streamlined booking flow.",
  },
  {
    position: "Software Engineer",
    company: "Pinnacle ICTs",
    startDate: "APR '21",
    endDate: "DEC '21",
    link: "https://www.linkedin.com/company/pinnacleicts/about/",
    tools: ["React", "Next.js", "Chakra UI", "GraphQL", "Figma"],
    description:
      "Delivered custom software for diverse clients, established frontend team workflows, and mentored developers on modern JavaScript patterns and UI design principles.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "rown",
    title: "Rown",
    tagline: "Send crypto like a text message",
    img: "/rown.jpeg",
    platforms: ["mobile", "web"],
    note: "iOS coming soon",
    featured: true,
    description:
      "A non-custodial crypto wallet that lets you send and spend stablecoins (USDC, USDT, DAI) as a single balance across chains — signed up with just a phone number, with full control of your funds.",
    highlights: [
      "Built the React Native & Expo mobile app (live on Google Play) and the Next.js web app.",
      "Unified stablecoin balances across 7 chains, with most transfers settling in under 30 seconds.",
      "Seedless phone-number sign-up and recovery, passkeys, and a per-transaction private mode.",
    ],
    tools: [
      "React Native",
      "Expo",
      "TypeScript",
      "Next.js",
      "Reanimated",
      "Passkeys",
      "TailwindCSS",
      "Framer Motion",
    ],
    links: [
      { kind: "playStore", href: "https://play.google.com/store/apps/details?id=xyz.rown" },
      { kind: "web", href: "https://www.rown.xyz/" },
    ],
  },
  {
    slug: "thriftexpert",
    title: "ThriftExpert",
    tagline: "Cooperative savings, loans & dividends",
    img: "/thriftexpert.jpg",
    platforms: ["mobile", "web"],
    role: "Feature upgrade",
    featured: true,
    description:
      "A cooperative management platform for thrift societies. I delivered a major upgrade to the live mobile app and web admin — adding access control, loan and dividend engines, and compliance features to the existing codebase.",
    highlights: [
      "Role-based access control at platform and cooperative level, with maker-checker rules and dual approval for high-risk actions.",
      "Loan workflow (apply → review → approve → disburse → repay) with four interest models and guarantor tracking.",
      "Dividend engine with surplus calculation and a compute → approve → publish → pay workflow.",
      "Biometric and two-factor login, KYC verification, reversal-only records and read-only audit logs.",
    ],
    tools: ["React Native", "Web admin", "REST APIs", "RBAC", "KYC", "2FA & biometrics"],
    links: [
      { kind: "playStore", href: "https://play.google.com/store/apps/details?id=com.thriftexpert.mobile" },
      { kind: "web", href: "https://www.thriftexpert.org/" },
    ],
  },
  {
    slug: "mollateral",
    title: "Mollateral",
    tagline: "On-chain credit protocol",
    img: "/mollateral.png",
    platforms: ["web"],
    description:
      "An on-chain credit protocol enabling secure, decentralized lending, with complex wallet integrations and real-time blockchain event listeners for a seamless Web3 experience.",
    highlights: [
      "Wallet connection and transaction flows built on Wagmi and Viem.",
      "Real-time blockchain event listeners for live on-chain updates.",
    ],
    tools: ["Next.js", "TypeScript", "Wagmi", "Viem", "TailwindCSS", "Web3"],
    links: [{ kind: "web", href: "https://www.mollateral.com/" }],
  },
  {
    slug: "ziyad",
    title: "Ziyad",
    tagline: "Non-interest cooperative banking",
    img: "/ziyad.jpeg",
    platforms: ["web"],
    description:
      "An all-in-one digital banking solution tailored for non-interest cooperatives and non-interest financial institutions (NFIs).",
    highlights: [],
    tools: ["Next.js", "TypeScript", "Chakra UI", "Apollo GraphQL", "React"],
    links: [{ kind: "web", href: "https://www.getziyad.com/" }],
  },
  {
    slug: "enovatelab",
    title: "EnovateLab",
    tagline: "Startup & investor ecosystem",
    img: "/enovateLab.png",
    platforms: ["web"],
    description:
      "A scalable educational ecosystem connecting investors with mentored startups, built on a modular component library that keeps diverse dashboard views visually consistent.",
    highlights: [
      "Modular component library shared across every dashboard view.",
      "GraphQL data fetching with URQL.",
    ],
    tools: ["Next.js", "Chakra UI", "GraphQL", "URQL"],
    links: [{ kind: "web", href: "https://enovatelab.vercel.app/" }],
  },
  {
    slug: "ramznetwork",
    title: "Ramznetwork",
    tagline: "Web3 freelance marketplace",
    img: "/ramznetwork.jpg",
    platforms: ["web"],
    description:
      "A decentralized freelance marketplace connecting talent with global clients — a Web3 alternative to platforms like Upwork, with crypto payment rails (USDT) for secure, borderless transactions.",
    highlights: [
      "Integrated USDT payment rails for secure, borderless transactions.",
    ],
    tools: ["Next.js", "Chakra UI", "Apollo GraphQL", "React"],
    links: [{ kind: "web", href: "https://ramznetwork-client.vercel.app/" }],
  },
  {
    slug: "slack-clone",
    title: "Enterprise Slack Clone",
    tagline: "Real-time team chat",
    img: "/slackclone.png",
    platforms: ["web"],
    description:
      "A high-fidelity real-time communication platform with a scalable message-delivery system on Firebase and workspace/channel navigation.",
    highlights: [
      "Real-time message delivery with Firebase.",
      "Workspace and channel navigation managed with Context API.",
    ],
    tools: ["React", "Material UI", "Firebase", "Context API"],
    links: [{ kind: "repo", href: "https://github.com/Pee-pheelips/slack-clone" }],
  },
  {
    slug: "speech-synthesis",
    title: "Speech Synthesis Engine",
    tagline: "Browser-native text-to-speech",
    img: "/speech-synthesis.jpg",
    platforms: ["web"],
    description:
      "A browser-native text-to-speech utility with multi-language support and pitch modulation, built with a focus on accessibility and performant DOM updates.",
    highlights: [
      "Multi-language support and pitch modulation via the Web Speech API.",
      "Built with accessibility (a11y) and performant DOM updates in mind.",
    ],
    tools: ["JavaScript", "Web Speech API", "CSS Grid"],
    links: [{ kind: "repo", href: "https://github.com/Pee-pheelips/" }],
  },
];
