"use client";

import React from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  Button,
  IconButton,
  Tooltip,
  Icon,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { FiMail, FiCopy, FiCheck, FiMapPin } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ResumeMenu from "@/components/features/ResumeMenu";
import { SITE, SOCIAL_LINKS } from "@/data/portfolio";

export default function Contact() {
  const { onCopy, hasCopied } = useClipboard(SITE.email);
  const toast = useToast();
  const linkedin = SOCIAL_LINKS.find((s) => s.label === "LinkedIn");

  const copy = () => {
    onCopy();
    toast({ title: "Email copied", description: SITE.email, status: "success", duration: 2000, position: "bottom" });
  };

  return (
    <Box>
      <SectionHeading index="05" title="Contact" />
      <Reveal>
        <Box
          position="relative"
          overflow="hidden"
          px={{ base: 6, md: 12 }}
          py={{ base: 10, md: 14 }}
          borderRadius="3xl"
          border="1px solid"
          borderColor="accent.subtleBorder"
          bg="bg.surface"
          boxShadow="card"
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            bgGradient: "linear(135deg, accent.subtle, transparent 65%)",
            pointerEvents: "none",
          }}
        >
          <Box position="relative">
            <Heading as="h3" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="800" lineHeight="1.15" letterSpacing="-0.03em" maxW="xl">
              Let&apos;s build something people love to use.
            </Heading>
            <Text mt={5} color="fg.secondary" maxW="xl" lineHeight="1.75" fontSize={{ base: "md", md: "lg" }}>
              I&apos;m open to frontend and mobile engineering roles — React, Next.js, React Native and Expo. Email is the
              fastest way to reach me.
            </Text>

            <HStack spacing={3} mt={9} wrap="wrap" rowGap={3}>
              <HStack spacing={0}>
                <Button as="a" href={`mailto:${SITE.email}`} variant="brand" leftIcon={<FiMail />} borderRightRadius={0}>
                  <Box as="span" display={{ base: "inline", md: "none" }}>
                    Email me
                  </Box>
                  <Box as="span" display={{ base: "none", md: "inline" }}>
                    {SITE.email}
                  </Box>
                </Button>
                <Tooltip label={hasCopied ? "Copied" : "Copy email"} hasArrow>
                  <IconButton
                    aria-label="Copy email address"
                    icon={hasCopied ? <FiCheck /> : <FiCopy />}
                    variant="brand"
                    borderLeftRadius={0}
                    borderLeft="1px solid rgba(0, 18, 28, 0.15)"
                    onClick={copy}
                  />
                </Tooltip>
              </HStack>
              <ResumeMenu variant="outlineBrand" />
              {linkedin && (
                <Button
                  as="a"
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlineBrand"
                  leftIcon={<FaLinkedin />}
                >
                  LinkedIn
                </Button>
              )}
            </HStack>

            <HStack spacing={2} mt={8} color="fg.muted" fontSize="sm">
              <Icon as={FiMapPin} aria-hidden />
              <Text color="inherit">{SITE.location}</Text>
            </HStack>
          </Box>
        </Box>
      </Reveal>
    </Box>
  );
}
