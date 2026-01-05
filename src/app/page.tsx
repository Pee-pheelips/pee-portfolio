import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Hero from "@/components/features/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/ui/Footer";

export default function Home() {
    return (
        <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            gap={{ base: 12, lg: 5 }}
        >
            {/* Left Column: Fixed/Sticky Header */}
            <Box
                as="header"
                w={{ base: "100%", lg: "30%" }}
            >
                <Hero />
            </Box>

            {/* Right Column: Scrollable Content */}
            <Box
                as="main"
                w={{ base: "100%", lg: "55%" }}
            >
                <Box id="about" mb={{ base: 24, lg: 32 }} scrollMarginTop="100px">
                    <About />
                </Box>

                <Box id="experience" mb={{ base: 24, lg: 32 }} scrollMarginTop="100px">
                    <Experience />
                </Box>

                <Box id="project" mb={{ base: 24, lg: 32 }} scrollMarginTop="100px">
                    <Projects />
                </Box>

                <Footer />
            </Box>
        </Flex>
    );
}
