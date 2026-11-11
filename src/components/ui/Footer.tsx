"use client";

import { Box, Text, Link, Flex, Icon } from "@chakra-ui/react";
import { FiArrowUp } from "react-icons/fi";
import Socials from "@/components/features/Socials";
import { SITE } from "@/data/portfolio";

const ext = {
  isExternal: true,
  color: "fg.secondary",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  textDecorationColor: "border.default",
  _hover: { color: "accent.fg", textDecorationColor: "currentColor" },
};

export default function Footer() {
  return (
    <Box as="footer" pt={12} pb={12} borderTop="1px solid" borderColor="border.subtle">
      <Flex
        justify="space-between"
        align={{ base: "start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        gap={8}
      >
        <Box>
          <Text color="fg.muted" fontSize="sm" lineHeight="1.75" maxW="md">
            Designed &amp; built by {SITE.name} with <Link href="https://nextjs.org/" {...ext}>Next.js</Link> and{" "}
            <Link href="https://chakra-ui.com/" {...ext}>Chakra UI</Link>, deployed on{" "}
            <Link href="https://vercel.com/" {...ext}>Vercel</Link>. Set in Plus Jakarta Sans, Inter and JetBrains Mono.
          </Text>
          <Text color="fg.muted" fontSize="xs" mt={3}>
            &copy; {new Date().getFullYear()} {SITE.name}
          </Text>
        </Box>
        <Flex align="center" gap={6}>
          <Box display={{ lg: "none" }}>
            <Socials />
          </Box>
          <Link
            href="#top"
            fontSize="sm"
            fontWeight="semibold"
            color="fg.secondary"
            display="inline-flex"
            alignItems="center"
            gap={1.5}
            whiteSpace="nowrap"
            _hover={{ color: "accent.fg", textDecoration: "none" }}
          >
            Back to top <Icon as={FiArrowUp} aria-hidden />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
