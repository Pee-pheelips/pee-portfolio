"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Box, Grid, HStack, Text, Icon, Link, chakra } from "@chakra-ui/react";
import { AnimatePresence, motion, LayoutGroup, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiGrid, FiSmartphone, FiMonitor } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/features/ProjectCard";
import ProjectModal from "@/components/features/ProjectModal";
import { onProjectFilterRequest, ProjectFilter } from "@/components/features/projectFilter";
import { PROJECTS } from "@/data/portfolio";
import { Project } from "@/types";

const FILTERS: { id: ProjectFilter; label: string; icon: typeof FiGrid }[] = [
  { id: "all", label: "All", icon: FiGrid },
  { id: "mobile", label: "Mobile", icon: FiSmartphone },
  { id: "web", label: "Web", icon: FiMonitor },
];

const countFor = (f: ProjectFilter) =>
  f === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.platforms.includes(f)).length;

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const reduce = useReducedMotion();

  // Hero shortcuts ("Mobile apps" / "Web apps") switch the filter from outside.
  useEffect(() => onProjectFilterRequest(setFilter), []);

  const visible = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.platforms.includes(filter))),
    [filter]
  );

  const openIndex = visible.findIndex((p) => p.slug === openSlug);
  const openProject = openIndex >= 0 ? visible[openIndex] : null;
  const onOpen = useCallback((p: Project) => setOpenSlug(p.slug), []);
  const onPrev = openIndex > 0 ? () => setOpenSlug(visible[openIndex - 1].slug) : undefined;
  const onNext =
    openIndex >= 0 && openIndex < visible.length - 1 ? () => setOpenSlug(visible[openIndex + 1].slug) : undefined;

  return (
    <Box>
      <SectionHeading index="04" title="Projects" subtitle="Mobile apps on Google Play and production web apps.">
        {/* Filter: segmented control */}
        <LayoutGroup id="project-filter">
          <HStack
            role="group"
            aria-label="Filter projects by platform"
            spacing={1}
            p={1}
            borderRadius="full"
            border="1px solid"
            borderColor="border.subtle"
            bg="bg.surface"
            boxShadow="card"
            flexShrink={0}
          >
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <chakra.button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  aria-controls="project-grid"
                  onClick={() => setFilter(f.id)}
                  position="relative"
                  display="inline-flex"
                  alignItems="center"
                  gap={1.5}
                  px={{ base: 3, md: 4 }}
                  py={1.5}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="semibold"
                  color={active ? "accent.onSolid" : "fg.secondary"}
                  transition="color 0.2s"
                  _hover={{ color: active ? "accent.onSolid" : "fg.default" }}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 9999,
                        background: "var(--chakra-colors-accent-solid)",
                        zIndex: 0,
                      }}
                    />
                  )}
                  <Icon as={f.icon} boxSize={3.5} position="relative" zIndex={1} aria-hidden />
                  <Text as="span" position="relative" zIndex={1} color="inherit">
                    {f.label}
                  </Text>
                  <Text as="span" position="relative" zIndex={1} fontSize="xs" opacity={0.7} color="inherit">
                    {countFor(f.id)}
                  </Text>
                </chakra.button>
              );
            })}
          </HStack>
        </LayoutGroup>
      </SectionHeading>

      <Grid
        id="project-grid"
        aria-live="polite"
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 5, md: 6 }}
        sx={{ "@media (min-width: 48em)": { "& > .is-featured": { gridColumn: "span 2" } } }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              className={project.featured ? "is-featured" : undefined}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} onOpen={onOpen} wide={project.featured} />
            </motion.div>
          ))}
        </AnimatePresence>
      </Grid>

      <Link
        href="https://github.com/Pee-pheelips"
        isExternal
        mt={10}
        fontWeight="semibold"
        color="fg.default"
        display="inline-flex"
        alignItems="center"
        _hover={{ color: "accent.fg", textDecoration: "none", "& svg": { transform: "translateX(4px)" } }}
      >
        More on GitHub
        <Icon as={FiArrowRight} ml={2} transition="transform 0.2s" aria-hidden />
      </Link>

      <ProjectModal
        project={openProject}
        onClose={() => setOpenSlug(null)}
        onPrev={onPrev}
        onNext={onNext}
        position={openProject ? `${openIndex + 1} / ${visible.length}` : undefined}
      />
    </Box>
  );
}
