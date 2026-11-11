import React from "react";
import { Button, HStack, ButtonProps } from "@chakra-ui/react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { FiGlobe, FiGithub } from "react-icons/fi";
import { ProjectLink, ProjectLinkKind } from "@/types";

const META: Record<ProjectLinkKind, { label: string; icon: React.ReactElement }> = {
  playStore: { label: "Google Play", icon: <FaGooglePlay /> },
  appStore: { label: "App Store", icon: <FaApple /> },
  web: { label: "Website", icon: <FiGlobe /> },
  repo: { label: "Code", icon: <FiGithub /> },
};

interface ProjectLinksProps {
  links: ProjectLink[];
  title: string;
  size?: ButtonProps["size"];
}

export default function ProjectLinks({ links, title, size = "sm" }: ProjectLinksProps) {
  return (
    <HStack spacing={2} wrap="wrap" position="relative" zIndex={1}>
      {links.map((link, i) => {
        const meta = META[link.kind];
        const label = link.label ?? meta.label;
        return (
          <Button
            key={link.href}
            as="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            size={size}
            variant={i === 0 ? "brand" : "outlineBrand"}
            leftIcon={meta.icon}
            aria-label={`${title}: ${label} (opens in a new tab)`}
            onClick={(e) => e.stopPropagation()}
          >
            {label}
          </Button>
        );
      })}
    </HStack>
  );
}
