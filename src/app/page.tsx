import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Hero from "@/components/features/Hero";
import MobileNav from "@/components/features/MobileNav";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

const SECTIONS = [
  { id: "about", Component: About },
  { id: "skills", Component: Skills },
  { id: "experience", Component: Experience },
  { id: "projects", Component: Projects },
  { id: "contact", Component: Contact },
];

export default function Home() {
  return (
    <Box id="top" position="relative" zIndex={1}>
      <MobileNav />

      <Container maxW="90rem" px={{ base: 6, md: 12, xl: 16 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
          justify="space-between"
          gap={{ base: 0, lg: 14, xl: 20 }}
        >
          {/* Left: sticky intro + nav on desktop */}
          <Box
            as="header"
            w={{ base: "100%", lg: "36%", xl: "34%" }}
            flexShrink={0}
            position={{ lg: "sticky" }}
            top={0}
            h={{ lg: "100vh" }}
            overflowY={{ lg: "auto" }}
            pt={{ base: 6, md: 10, lg: 16, "2xl": 24 }}
            pb={{ base: 4, lg: 12 }}
            sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
          >
            <Hero />
          </Box>

          {/* Right: content, capped at a comfortable reading width */}
          <Box as="main" w="100%" maxW={{ lg: "50rem", xl: "54rem" }} pt={{ base: 16, lg: 24 }}>
            {SECTIONS.map(({ id, Component }) => (
              <Box
                as="section"
                key={id}
                id={id}
                mb={{ base: 24, md: 32, lg: 40 }}
                scrollMarginTop={{ base: "88px", lg: "64px" }}
              >
                <Component />
              </Box>
            ))}
            <Footer />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
