"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  HStack,
  IconButton,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { FiCheckCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Project } from "@/types";
import { PillList } from "@/components/ui/Pill";
import PlatformBadges from "./PlatformBadges";
import ProjectLinks from "./ProjectLinks";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  position?: string;
}

export default function ProjectModal({ project, onClose, onPrev, onNext, position }: ProjectModalProps) {
  // Left/right arrow keys move between projects while the dialog is open.
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onPrev, onNext]);

  return (
    <Modal
      isOpen={!!project}
      onClose={onClose}
      size={{ base: "full", md: "2xl" }}
      scrollBehavior="inside"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent mx={{ md: 4 }} borderRadius={{ base: 0, md: "2xl" }}>
        {project && (
          <>
            <ModalCloseButton
              zIndex={2}
              top={3}
              right={3}
              bg="rgba(0, 0, 32, 0.7)"
              color="#ffffff"
              borderRadius="full"
              _hover={{ bg: "rgba(0, 0, 32, 0.9)" }}
            />
            <ModalBody p={0}>
              <Box position="relative" sx={{ aspectRatio: "16 / 9" }} bg="bg.placeholder">
                <Image
                  src={project.img}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                <Box position="absolute" bottom={3} left={4}>
                  <PlatformBadges platforms={project.platforms} />
                </Box>
              </Box>

              <Box px={{ base: 6, md: 10 }} py={{ base: 7, md: 9 }}>
                <HStack spacing={3} align="center" wrap="wrap">
                  <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800">
                    {project.title}
                  </Heading>
                  {project.role && (
                    <Badge borderRadius="full" px={2.5} py={1} bg="accent.subtle" color="accent.fg" border="1px solid" borderColor="accent.subtleBorder" fontSize="0.65rem">
                      {project.role}
                    </Badge>
                  )}
                </HStack>
                <Text color="fg.muted" fontWeight="medium" mt={1.5}>
                  {project.tagline}
                </Text>

                <Text mt={6} color="fg.secondary" lineHeight="1.8">
                  {project.description}
                </Text>

                {project.highlights.length > 0 && (
                  <>
                    <Text mt={9} mb={4} fontSize="xs" fontWeight="bold" letterSpacing="0.15em" textTransform="uppercase" color="fg.muted">
                      What I did
                    </Text>
                    <List spacing={4}>
                      {project.highlights.map((h) => (
                        <ListItem key={h} display="flex" alignItems="flex-start" color="fg.secondary" lineHeight="1.7">
                          <ListIcon as={FiCheckCircle} color="accent.fg" mt="5px" mr={3} />
                          <span>{h}</span>
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}

                <Text mt={9} mb={4} fontSize="xs" fontWeight="bold" letterSpacing="0.15em" textTransform="uppercase" color="fg.muted">
                  Tech stack
                </Text>
                <PillList items={project.tools} />

                {project.note && (
                  <Text mt={6} fontSize="sm" color="fg.muted">
                    {project.note}
                  </Text>
                )}
              </Box>
            </ModalBody>

            <ModalFooter
              borderTop="1px solid"
              borderColor="border.subtle"
              px={{ base: 6, md: 10 }}
              py={5}
            >
              <Flex w="full" justify="space-between" align="center" gap={3} wrap="wrap">
                <ProjectLinks links={project.links} title={project.title} size="md" />
                <HStack spacing={1}>
                  {position && (
                    <Text fontSize="xs" color="fg.muted" mr={2} aria-live="polite">
                      {position}
                    </Text>
                  )}
                  <IconButton
                    aria-label="Previous project"
                    icon={<FiChevronLeft />}
                    variant="ghost"
                    color="fg.default"
                    onClick={onPrev}
                    isDisabled={!onPrev}
                    _hover={{ bg: "bg.muted" }}
                  />
                  <IconButton
                    aria-label="Next project"
                    icon={<FiChevronRight />}
                    variant="ghost"
                    color="fg.default"
                    onClick={onNext}
                    isDisabled={!onNext}
                    _hover={{ bg: "bg.muted" }}
                  />
                </HStack>
              </Flex>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
