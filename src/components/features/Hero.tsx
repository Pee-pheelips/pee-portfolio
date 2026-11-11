"use client";

import { Heading, Text, Box, Flex, HStack, Button, Icon, Link, Stack } from "@chakra-ui/react";
import { FiMail, FiSmartphone, FiMonitor, FiArrowRight } from "react-icons/fi";
import ScrollSpy from "./ScrollSpy";
import Socials from "./Socials";
import ResumeMenu from "./ResumeMenu";
import ColorModeToggle from "@/components/ui/ColorModeToggle";
import { requestProjectFilter, ProjectFilter } from "./projectFilter";
import { NAV_ITEMS, SITE, AVAILABILITY } from "@/data/portfolio";

const SHORTCUTS: { filter: ProjectFilter; label: string; stack: string; icon: typeof FiSmartphone }[] = [
  { filter: "mobile", label: "Mobile apps", stack: "React Native · Expo", icon: FiSmartphone },
  { filter: "web", label: "Web apps", stack: "React · Next.js", icon: FiMonitor },
];

function AvailabilityBadge() {
  if (!AVAILABILITY.open) return null;
  return (
    <HStack
      display="inline-flex"
      spacing={2}
      px={3}
      py={1.5}
      borderRadius="full"
      border="1px solid"
      borderColor="accent.subtleBorder"
      bg="accent.subtle"
    >
      <Box position="relative" w="8px" h="8px" aria-hidden>
        <Box
          position="absolute"
          inset={0}
          borderRadius="full"
          bg="accent.solid"
          sx={{
            "@keyframes ping": { "75%, 100%": { transform: "scale(2.4)", opacity: 0 } },
            animation: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
          }}
        />
        <Box position="absolute" inset={0} borderRadius="full" bg="accent.solid" />
      </Box>
      <Text fontSize="xs" fontWeight="semibold" color="accent.fg">
        {AVAILABILITY.label}
      </Text>
    </HStack>
  );
}

export default function Hero() {
  return (
    <Flex direction="column" justify="space-between" h="full" gap={12}>
      <Box>
        <Flex justify="space-between" align="center" mb={{ base: 8, lg: 10 }}>
          <AvailabilityBadge />
          <Box display={{ base: "none", lg: "block" }}>
            <ColorModeToggle />
          </Box>
        </Flex>

        <Heading
          as="h1"
          fontSize={{ base: "4xl", sm: "5xl", xl: "6xl" }}
          fontWeight="800"
          lineHeight="1.05"
          letterSpacing="-0.035em"
        >
          {SITE.name}
        </Heading>

        <Text
          as="p"
          fontFamily="heading"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="600"
          color="fg.default"
          mt={3}
        >
          Frontend{" "}
          <Text as="span" color="accent.fg">
            &amp;
          </Text>{" "}
          Mobile Engineer
        </Text>

        <Text color="fg.secondary" mt={5} fontSize={{ base: "md", md: "lg" }} maxW="28rem" lineHeight="1.75">
          {SITE.intro}
        </Text>

        {/* What I build: jumps to the matching project filter */}
        <Stack direction={{ base: "column", sm: "row" }} spacing={3} mt={9} aria-label="What I build">
          {SHORTCUTS.map((s) => (
            <Link
              key={s.filter}
              href="#projects"
              onClick={() => requestProjectFilter(s.filter)}
              display="flex"
              alignItems="center"
              gap={3}
              px={4}
              py={3}
              borderRadius="xl"
              border="1px solid"
              borderColor="border.subtle"
              bg="bg.surface"
              boxShadow="card"
              transition="all 0.2s"
              _hover={{
                textDecoration: "none",
                borderColor: "border.accent",
                bg: "bg.surfaceHover",
                "& .arrow": { transform: "translateX(3px)", opacity: 1 },
              }}
            >
              <Icon as={s.icon} boxSize={5} color="accent.fg" aria-hidden />
              <Box lineHeight="1.3" flex={{ base: 1, sm: "initial" }}>
                <Text fontSize="sm" fontWeight="semibold" color="fg.default">
                  {s.label}
                </Text>
                <Text fontFamily="mono" fontSize="11px" color="fg.muted" mt={0.5}>
                  {s.stack}
                </Text>
              </Box>
              <Icon
                className="arrow"
                as={FiArrowRight}
                boxSize={4}
                color="accent.fg"
                opacity={0.5}
                transition="all 0.2s"
                aria-hidden
              />
            </Link>
          ))}
        </Stack>

        <HStack spacing={3} mt={8} wrap="wrap" rowGap={3}>
          <ResumeMenu />
          <Button as="a" href={`mailto:${SITE.email}`} variant="outlineBrand" leftIcon={<FiMail />}>
            Email me
          </Button>
        </HStack>

        <ScrollSpy menuItems={NAV_ITEMS} />
      </Box>

      <Box display={{ base: "none", lg: "block" }}>
        <Socials />
      </Box>
    </Flex>
  );
}
