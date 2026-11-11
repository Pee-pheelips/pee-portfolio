"use client";

import React from "react";
import { Text, Box, VStack, SimpleGrid } from "@chakra-ui/react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ABOUT_CONTENT } from "@/data/portfolio";

export default function About() {
  return (
    <Box>
      <SectionHeading index="01" title="About" />
      <Reveal>
        <VStack align="start" spacing={6} maxW="46rem">
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <Text key={index} fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" color="fg.secondary">
              {paragraph}
            </Text>
          ))}
        </VStack>
      </Reveal>

      <Reveal delay={0.1}>
        <SimpleGrid as="dl" columns={2} spacing={{ base: 3, md: 4 }} mt={12}>
          {ABOUT_CONTENT.stats.map((stat) => (
            <Box
              key={stat.label}
              px={{ base: 5, md: 6 }}
              py={{ base: 5, md: 6 }}
              borderRadius="2xl"
              border="1px solid"
              borderColor="border.subtle"
              bg="bg.surface"
              boxShadow="card"
              display="flex"
              flexDirection="column-reverse"
              justifyContent="flex-end"
            >
              <Text as="dt" fontSize="sm" color="fg.muted" mt={2} lineHeight="1.45">
                {stat.label}
              </Text>
              <Text
                as="dd"
                fontFamily="heading"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="800"
                letterSpacing="-0.03em"
                color="accent.fg"
                lineHeight="1"
                m={0}
              >
                {stat.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Reveal>
    </Box>
  );
}
