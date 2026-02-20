import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { NavItem, SocialLink, Experience, Project } from "@/types";

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
    label: "Twitter",
    href: "https://twitter.com/PPheelips",
    icon: FaTwitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/paul-philip-1a19121a3/",
    icon: FaLinkedin,
  },
];

export const NAV_ITEMS: NavItem[] = [
  { id: "about", title: "ABOUT" },
  { id: "experience", title: "EXPERIENCE" },
  { id: "project", title: "PROJECTS" },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Frontend Engineer with 4+ years of experience building resilient, high-performance web and mobile applications — specializing at the intersection of architecture, design, and engineering using React and React Native.",
    "I've worked with startups and established organizations to ship production-ready software, with a sharp focus on type safety, modular component design, and state management to keep systems maintainable as they scale.",
    "I champion engineering best practices through documentation and mentorship, and take pride in bridging design intent with technical execution to deliver user experiences that are both thoughtful and impactful.",
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    position: "Frontend Engineer",
    company: "EcoHotels",
    startDate: "NOV '23",
    endDate: "DEC '25",
    link: "https://www.ecohotels.com/",
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
      "Leading frontend initiatives for a global travel platform. Responsible for architecting SEO-optimized hotel booking flows, and optimizing Core Web Vitals to improve search rankings and user retention.",
  },
  {
    position: "Frontend Engineer",
    company: "Cragpay",
    startDate: "JAN '22",
    endDate: "OCT '23",
    link: "https://www.cragpay.com/",
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
      "Developed the frontend infrastructure for a fintech platform. Built secure administrative dashboards, implemented complex GraphQL data-fetching patterns.",
  },
  {
    position: "Frontend Developer",
    company: "Eduvacity",
    startDate: "MAR '23",
    endDate: "SEP '23",
    link: "https://www.eduvacity.com/",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Refactored legacy educational interfaces, responsive components and email templates. Enhanced application performance by optimizing asset loading to reduce runtime errors.",
  },
  {
    position: "Frontend Engineer",
    company: "SurePlug",
    startDate: "JUN '23",
    endDate: "SEP '23",
    link: "https://mysureplug.com/",
    tools: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    description:
      "Engineered a service marketplace connecting clients with skilled artisans. Focused on improving conversion rates through UI/UX refinements and streamlining the service booking lifecycle.",
  },
  {
    position: "Software Engineer",
    company: "Pinnacle ICTs",
    startDate: "APR '21",
    endDate: "DEC '21",
    link: "https://www.linkedin.com/company/pinnacleicts/about/",
    tools: ["React", "Next.js", "Chakra UI", "GraphQL", "Figma"],
    description:
      "Delivered custom software solutions for diverse clients. Established engineering workflows for the frontend team and provided mentorship to other developers on modern JavaScript patterns and UI design principles.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Rown",
    img: "/rown.jpeg",
    link: "https://rown.xyz/",
    tools: [
      "Typescript",
      "React Native",
      "Expo",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "React-Native-Reanimated",
      "React-Native-Passkey",
    ],
    description:
      "Rown is a non-custodial crypto wallet that lets you send and spend stablecoins (USDC, USDT, DAI) as a single balance across chains, signed up with just a phone number, with full control of your funds.",
  },

  {
    title: "Mollateral",
    img: "/mollateral.png",
    link: "https://www.mollateral.com/",
    tools: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Wagmi",
      "Viem",
      "Web3",
    ],
    description:
      "An on-chain credit protocol enabling secure, decentralized lending. Implemented complex wallet integrations and real-time blockchain event listeners for a seamless Web3 financial experience.",
  },
  {
    title: "Ziyad",
    img: "/ziyad.jpeg",
    link: "https://www.getziyad.com/",
    tools: [
      "TypeScript",
      "Next.js",
      "Chakra UI",
      "Apollo GraphQL",
      "React",
    ],
    description:
      "A Non-interest coorporative banking. Unlock efficiency and security with Ziyad, your all-in-one digital banking solution tailored for Non-Interest Cooperatives and NFI.",
  },
  {
    title: "EnovateLab",
    img: "/enovateLab.png",
    link: "https://enovatelab.vercel.app/",
    tools: ["Next.js", "Chakra UI", "GraphQL", "URQL"],
    description:
      "A scalable educational ecosystem connecting investors with mentored startups. Designed a modular component library to maintain visual consistency across diverse dashboard views.",
  },
  {
    title: "Ramznetwork",
    img: "/ramznetwork.jpg",
    link: "https://ramznetwork-client.vercel.app/",
    tools: ["Next.js", "Chakra UI", "Apollo GraphQL", "ReactJS"],
    description:
      "A decentralized freelance marketplace connecting talent with global clients. Integrated cryptocurrency payment rails (USDT) to facilitate secure, borderless transactions, functioning as a Web3 alternative to traditional platforms like Upwork.",
  },
  {
    title: "Enterprise Slack Clone",
    img: "/slackclone.png",
    link: "https://github.com/Pee-pheelips/slack-clone",
    tools: ["React", "Material UI", "Firebase", "Context API"],
    description:
      "A high-fidelity real-time communication platform. Engineered a scalable message-delivery system using Firebase and implemented complex workspace/channel navigation logic.",
  },
  {
    title: "Speech Synthesis Engine",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*yDgVdq8--I5pUyGodlzswg.jpeg",
    link: "https://github.com/Pee-pheelips/",
    tools: ["Typed JavaScript", "Web Speech API", "CSS Grid"],
    description:
      "A browser-native text-to-speech utility with multi-language support and pitch modulation. Focused on accessibility (A11y) and performant DOM manipulation.",
  },
];
