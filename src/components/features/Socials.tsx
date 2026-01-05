"use client";

import { HStack, Icon, Link as ChakraLink, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/portfolio";

export default function Socials() {
    return (
        <HStack spacing={6}>
            {SOCIAL_LINKS.map((link) => (
                <Tooltip key={link.label} label={link.label} hasArrow placement="top">
                    <ChakraLink
                        as={Link}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        color="gray.500"
                        _hover={{ color: "gray.100", transform: "translateY(-2px)" }}
                        transition="all 0.2s"
                    >
                        <Icon as={link.icon} boxSize={6} />
                    </ChakraLink>
                </Tooltip>
            ))}
        </HStack>
    );
}
