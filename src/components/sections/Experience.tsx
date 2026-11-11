"use client";

import React from "react";
import { Box, Text, Icon, HStack, LinkBox, LinkOverlay, Heading, Link } from "@chakra-ui/react";
import { FiArrowUpRight, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PillList } from "@/components/ui/Pill";
import { EXPERIENCES, RESUMES } from "@/data/portfolio";

export default function Experience() {
  return (
    <Box>
      <SectionHeading index="03" title="Experience" subtitle="4+ years across fintech, Web3, travel and edtech." />

      {/* Timeline */}
      <Box as="ol" position="relative" listStyleType="none" m={0} p={0} pl={{ base: 6, md: 9 }}>
        <Box
          aria-hidden
          position="absolute"
          left="5px"
          top={4}
          bottom={4}
          w="2px"
          borderRadius="full"
          bg="border.subtle"
        />
        {EXPERIENCES.map((exp, i) => (
          <Box as="li" key={`${exp.company}-${exp.startDate}`} position="relative" pb={{ base: 6, md: 8 }}>
            <Box
              aria-hidden
              position="absolute"
              left={{ base: "-24px", md: "-36px" }}
              top={{ base: "26px", md: "30px" }}
              w="12px"
              h="12px"
              borderRadius="full"
              bg={i === 0 ? "accent.solid" : "bg.canvas"}
              border="2px solid"
              borderColor={i === 0 ? "accent.solid" : "border.default"}
              boxShadow={i === 0 ? "0 0 0 5px var(--chakra-colors-accent-subtle)" : "none"}
            />
            <Reveal>
              <LinkBox
                as="article"
                className="group"
                p={{ base: 5, md: 7 }}
                borderRadius="2xl"
                border="1px solid"
                borderColor="border.subtle"
                bg="bg.surface"
                boxShadow="card"
                transition="all 0.25s"
                _hover={{ borderColor: "border.accent", boxShadow: "cardHover" }}
              >
                <Text
                  fontFamily="mono"
                  fontSize="xs"
                  fontWeight="500"
                  letterSpacing="0.04em"
                  textTransform="uppercase"
                  color="fg.muted"
                  mb={2}
                >
                  <time>{exp.startDate}</time> — <time>{exp.endDate}</time>
                </Text>
                <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} mb={3} lineHeight="1.3">
                  <LinkOverlay
                    href={exp.link}
                    isExternal
                    _groupHover={{ color: "accent.fg" }}
                    transition="color 0.2s"
                  >
                    {exp.position}
                    <Text as="span" color="fg.muted" fontWeight="500" mx={2}>
                      at
                    </Text>
                    <Text as="span" whiteSpace="nowrap" color="inherit">
                      {exp.company}
                      <Icon
                        as={FiArrowUpRight}
                        ml={1.5}
                        boxSize={4}
                        verticalAlign="-2px"
                        transition="transform 0.2s"
                        _groupHover={{ transform: "translate(3px, -3px)" }}
                        aria-hidden
                      />
                    </Text>
                  </LinkOverlay>
                </Heading>

                {exp.highlight && (
                  <HStack
                    display="inline-flex"
                    spacing={1.5}
                    mb={4}
                    px={3}
                    py={1.5}
                    borderRadius="lg"
                    bg="accent.subtle"
                    color="accent.fg"
                  >
                    <Icon as={FiTrendingUp} boxSize={3.5} aria-hidden />
                    <Text fontSize="xs" fontWeight="bold" color="inherit">
                      {exp.highlight}
                    </Text>
                  </HStack>
                )}

                <Text color="fg.secondary" mb={5} lineHeight="1.75" fontSize={{ base: "sm", md: "md" }} maxW="46rem">
                  {exp.description}
                </Text>
                <PillList items={exp.tools} max={5} />
              </LinkBox>
            </Reveal>
          </Box>
        ))}
      </Box>

      <Link
        href={RESUMES[0].href}
        isExternal
        mt={2}
        ml={{ base: 6, md: 9 }}
        fontWeight="semibold"
        color="fg.default"
        display="inline-flex"
        alignItems="center"
        _hover={{ color: "accent.fg", textDecoration: "none", "& svg": { transform: "translateX(4px)" } }}
      >
        View full résumé
        <Icon as={FiArrowRight} ml={2} transition="transform 0.2s" aria-hidden />
      </Link>
    </Box>
  );
}
