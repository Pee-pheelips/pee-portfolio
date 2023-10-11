"use client"; // Not a standard JavaScript comment, check if this is a specific code directive

// Importing React and required components
import React from "react";
import Hero from "../components/Home";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Experience from "./experience/page";
import About from "./About/page";
import Projects from "./projects/page";
import Footer from "../components/Footer";

export default function Home() {
  const ListItems = [
    { id: "about", title: "ABOUT" },
    { id: "experience", title: "EXPERIENCE" },
    { id: "project", title: "PROJECTS" },
  ];
  return (
    <>
      <Flex
        alignContent={"center"}
        flexDir={{
          base: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Box
          width={{ base: "100%", md: "100%", lg: "28%" }}
          position={{ base: "relative", md: "relative", lg: "fixed" }}
        >
          <Hero ListItems={ListItems} />
        </Box>
        <Spacer />
        <Box
          width={{ base: "100%", md: "100%", lg: "55%" }}
          fontSize={"lg"}
          mt={{ base: "0rem", md: "0" }}
          position={"relative"}
        >
          {/* About Section */}
          <Box
            id={"about"}
            pl={{ md: "0", base: "0", lg: "10" }}
            mt={{ md: "5rem", base: "7rem", lg: "auto" }}
          >
            {/* <About name={"about"} /> */}
            <About />
          </Box>

          {/* Experience Section */}
          <Box marginTop={{ md: "7rem", base: "5rem" }} id="experience">
            <Experience />
          </Box>

          {/* Projects Section */}
          <Box
            marginTop={{ md: "7rem", base: "5rem" }}
            mb={"2rem"}
            id="project"
          >
            <Projects />
          </Box>

          {/* Footer */}
          <Box>
            <Footer />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
