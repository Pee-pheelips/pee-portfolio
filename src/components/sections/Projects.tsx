"use client";

import { Box, VStack, Text, Icon, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ProjectItem from "@/components/features/ProjectItem";
import HeadingNav from "@/components/Navbar/HeadingNav";
import { PROJECTS } from "@/data/portfolio";

export default function Projects() {
    return (
        <Box as="section" id="project">
            <HeadingNav name="Projects" />
            <VStack spacing={4} align="stretch" mt={4}>
                {PROJECTS.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </VStack>

            <Box mt={6} px={{ base: 4, md: 8 }}>
                <ChakraLink
                    as={Link}
                    href="https://github.com/Pee-pheelips"
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
                    View Full Project Archive
                    <Icon as={FiArrowRight} ml={2} transition="transform 0.2s" />
                </ChakraLink>
            </Box>
        </Box>
    );
}
