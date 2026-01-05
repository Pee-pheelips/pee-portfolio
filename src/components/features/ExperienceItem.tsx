"use client";

import { Box, Flex, Icon, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Experience } from "@/types";

interface ExperienceItemProps {
    experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ChakraLink
            as={Link}
            href={experience.link}
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
            <Flex gap={4} direction={{ base: "column", md: "row" }}>
                <Box w={{ base: "full", md: "25%" }}>
                    <Text
                        color={isHovered ? "gray.100" : "gray.500"}
                        fontSize="sm"
                        fontWeight="medium"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        transition="color 0.2s"
                    >
                        {experience.startDate} — {experience.endDate}
                    </Text>
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
                        {experience.position} · {experience.company}
                        <Icon
                            as={FiArrowUpRight}
                            ml={1}
                            transform={isHovered ? "translate(4px, -4px)" : "none"}
                            transition="transform 0.2s"
                        />
                    </Text>

                    <Text color={isHovered ? "gray.100" : "gray.400"} mb={4} lineHeight="relaxed">
                        {experience.description}
                    </Text>

                    <Flex gap={2} wrap="wrap">
                        {experience.tools.map((tool) => (
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
