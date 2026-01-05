"use client";

import React from "react";
import { Text, Box, VStack } from "@chakra-ui/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ABOUT_CONTENT } from "@/data/portfolio";

export default function About() {
    return (
        <Box as="section">
            <SectionHeading name="About" />
            <VStack align="start" spacing={4} mt={4}>
                {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                    <Text
                        key={index}
                        fontSize="lg"
                        lineHeight="tall"
                        color="gray.400"
                    >
                        {paragraph}
                    </Text>
                ))}
            </VStack>
        </Box>
    );
}
