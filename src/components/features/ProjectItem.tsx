"use client";

import { Box, Flex, Icon, Text, Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "@/types";

interface ProjectItemProps {
    project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ChakraLink
            as={Link}
            href={project.link}
            target="_blank"
            display="block"
            p={{ base: 4, md: 6, lg: 8 }}
            borderRadius="xl"
            transition="all 0.3s"
            _hover={{
                backgroundColor: "rgba(20, 100, 150, 0.10)",
                backdropFilter: "blur(4px)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            textDecoration="none !important"
        >
            <Flex gap={6} direction={{ base: "column-reverse", md: "row" }} align={{ md: "start" }}>
                <Box
                    w={{ base: "full", md: "25%" }}
                    mt={{ base: 2, md: 1 }}
                    h="120px"
                    position="relative"
                    borderRadius="md"
                    overflow="hidden"
                    border="2px solid rgba(255, 255, 255, 0.1)"
                >
                    <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        style={{ objectFit: "cover" }}
                    />
                </Box>

                <Box flex={1}>
                    <Text
                        as="h3"
                        fontWeight="bold"
                        fontSize="lg"
                        color={isHovered ? "brand.primary" : "gray.100"}
                        display="inline-flex"
                        alignItems="center"
                        mb={2}
                    >
                        {project.title}
                        <Icon
                            as={FiArrowUpRight}
                            ml={1}
                            transform={isHovered ? "translate(4px, -4px)" : "none"}
                            transition="transform 0.2s"
                        />
                    </Text>

                    <Text color={isHovered ? "gray.100" : "gray.400"} mb={4} lineHeight="relaxed">
                        {project.description}
                    </Text>

                    <Flex gap={2} wrap="wrap">
                        {project.tools.map((tool) => (
                            <Box
                                key={tool}
                                bgColor="rgba(18, 225, 147, 0.1)"
                                px={3}
                                py={1}
                                borderRadius="full"
                            >
                                <Text color="brand.primary" fontSize="xs" fontWeight="semibold">
                                    {tool}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </ChakraLink>
    );
}
