"use client";

import React from "react";
import { Box, SimpleGrid, HStack, Icon, Heading } from "@chakra-ui/react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PillList } from "@/components/ui/Pill";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <Box>
      <SectionHeading index="02" title="Skills" subtitle="The tools I use to ship on web and mobile." />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 5 }}>
        {SKILLS.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <Box
              h="full"
              p={{ base: 6, md: 7 }}
              borderRadius="2xl"
              border="1px solid"
              borderColor="border.subtle"
              bg="bg.surface"
              boxShadow="card"
              transition="border-color 0.2s"
              _hover={{ borderColor: "border.accent" }}
            >
              <HStack spacing={3} mb={5}>
                <Box p={2} borderRadius="lg" bg="accent.subtle" display="inline-flex">
                  <Icon as={group.icon} color="accent.fg" boxSize={4} aria-hidden />
                </Box>
                <Heading as="h3" fontSize="md">
                  {group.title}
                </Heading>
              </HStack>
              <PillList items={group.items} />
            </Box>
          </Reveal>
        ))}
      </SimpleGrid>
    </Box>
  );
}
