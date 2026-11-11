"use client";

import { HStack, Icon, Link, Tooltip } from "@chakra-ui/react";
import { SOCIAL_LINKS } from "@/data/portfolio";

export default function Socials({ size = 5 }: { size?: number }) {
  return (
    <HStack as="ul" listStyleType="none" spacing={4} m={0} p={0} aria-label="Social links">
      {SOCIAL_LINKS.map((link) => {
        const external = link.href.startsWith("http");
        return (
          <li key={link.label}>
            <Tooltip label={link.label} hasArrow placement="top" openDelay={200}>
              <Link
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                color="fg.muted"
                display="inline-flex"
                p={1.5}
                _hover={{ color: "accent.fg", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                <Icon as={link.icon} boxSize={size} />
              </Link>
            </Tooltip>
          </li>
        );
      })}
    </HStack>
  );
}
