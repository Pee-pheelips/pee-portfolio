"use client";

import React from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text, Icon, Badge, chakra } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { Project } from "@/types";
import { PillList } from "@/components/ui/Pill";
import PlatformBadges from "./PlatformBadges";
import ProjectLinks from "./ProjectLinks";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  /** Featured cards span both columns with a wider preview. */
  wide?: boolean;
}

export default function ProjectCard({ project, onOpen, wide = false }: ProjectCardProps) {
  return (
    <Flex
      as="article"
      className="group"
      direction="column"
      position="relative"
      h="full"
      borderRadius="2xl"
      border="1px solid"
      borderColor="border.subtle"
      bg="bg.surface"
      boxShadow="card"
      overflow="hidden"
      transition="border-color 0.25s, transform 0.25s, box-shadow 0.25s"
      _hover={{ borderColor: "border.accent", transform: "translateY(-3px)", boxShadow: "cardHover" }}
      _focusWithin={{ borderColor: "border.accent" }}
    >
      {/* Preview */}
      <Box
        position="relative"
        flexShrink={0}
        w="full"
        sx={{ aspectRatio: wide ? "16 / 8" : "16 / 10" }}
        bg="bg.placeholder"
        overflow="hidden"
        borderBottom="1px solid"
        borderColor="border.subtle"
      >
        <Image
          src={project.img}
          alt={`${project.title} preview`}
          fill
          sizes={wide ? "(max-width: 1024px) 100vw, 760px" : "(max-width: 768px) 100vw, 380px"}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <Box position="absolute" inset={0} bgGradient="linear(to-t, bg.scrim, transparent 50%)" aria-hidden />
        <Box position="absolute" top={4} left={4}>
          <PlatformBadges platforms={project.platforms} />
        </Box>
      </Box>

      {/* Content */}
      <Flex direction="column" px={{ base: 6, md: 7 }} pt={{ base: 6, md: 7 }} pb={{ base: 6, md: 7 }} gap={4} flex={1}>
        <Box>
          <Flex align="center" gap={3} wrap="wrap">
            <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} lineHeight="1.3">
              {/* The title button stretches over the whole card (except the links) to open details. */}
              <chakra.button
                type="button"
                onClick={() => onOpen(project)}
                textAlign="left"
                sx={{ font: "inherit" }}
                letterSpacing="inherit"
                transition="color 0.2s"
                _groupHover={{ color: "accent.fg" }}
                _after={{ content: '""', position: "absolute", inset: 0, zIndex: 0 }}
                _focusVisible={{ outline: "none" }}
                aria-haspopup="dialog"
              >
                {project.title}
              </chakra.button>
            </Heading>
            {project.role && (
              <Badge
                px={2.5}
                py={0.5}
                borderRadius="full"
                bg="accent.subtle"
                color="accent.fg"
                border="1px solid"
                borderColor="accent.subtleBorder"
                fontSize="0.65rem"
                letterSpacing="wide"
              >
                {project.role}
              </Badge>
            )}
          </Flex>
          <Text fontSize="sm" color="fg.muted" fontWeight="medium" mt={1.5}>
            {project.tagline}
          </Text>
        </Box>

        <Text color="fg.secondary" lineHeight="1.7" fontSize="sm" noOfLines={wide ? 3 : 2} maxW={wide ? "48rem" : undefined}>
          {project.description}
        </Text>

        <PillList items={project.tools} max={wide ? 5 : 3} />

        <Flex mt="auto" pt={3} align="center" justify="space-between" gap={3} wrap="wrap">
          <ProjectLinks links={project.links} title={project.title} />
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="fg.muted"
            display="inline-flex"
            alignItems="center"
            gap={1}
            _groupHover={{ color: "accent.fg" }}
            transition="color 0.2s"
            aria-hidden
          >
            Details
            <Icon as={FiArrowRight} transition="transform 0.2s" _groupHover={{ transform: "translateX(3px)" }} />
          </Text>
        </Flex>
        {project.note && (
          <Text fontSize="xs" color="fg.muted" mt={-1}>
            {project.note}
          </Text>
        )}
      </Flex>
    </Flex>
  );
}
