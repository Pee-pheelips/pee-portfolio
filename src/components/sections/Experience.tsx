"use client";

import { Box, VStack, Text, Icon, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ExperienceItem from "@/components/features/ExperienceItem";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCES } from "@/data/portfolio";

export default function Experience() {
    return (
        <Box as="section" id="experience">
            <SectionHeading name="Experience" />
            <VStack spacing={4} align="stretch" mt={4}>
                {EXPERIENCES.map((exp, index) => (
                    <ExperienceItem key={index} experience={exp} />
                ))}
            </VStack>

            <Box mt={6} px={{ base: 4, md: 8 }}>
                <ChakraLink
                    as={Link}
                    href="/PAUL_Resume.pdf"
                    target="_blank"
                    fontWeight="bold"
                    color="gray.100"
                    display="inline-flex"
                    alignItems="center"
                    _hover={{
                        color: "brand.primary",
                        "& svg": { transform: "translateX(4px)" },
                    }}
                >
                    View Full Resume
                    <Icon as={FiArrowRight} ml={2} transition="transform 0.2s" />
                </ChakraLink>
            </Box>
        </Box>
    );
}
