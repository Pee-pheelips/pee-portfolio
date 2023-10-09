"use client";

import Hero from "../components/Home";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Experience from "./experience/page";
// import About from "./About/page";
import Projects from "./projects/page";
import Footer from "../components/Footer";
export default function Home() {
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
          <Hero />
        </Box>
        <Spacer />
        <Box
          width={{ base: "100%", md: "100%", lg: "55%" }}
          fontSize={"lg"}
          mt={{ base: "0rem", md: "0" }}
          position={"relative"}
        >
          {/* ---------About-------- */}
          <Box
            pl={{ md: "0", base: "0", lg: "10" }}
            mt={{ md: "5rem", base: "7rem", lg: "auto" }}
          >
            {/* <About name={"about"} /> */}
          </Box>

          {/* ----------Experience------- */}
          <Box marginTop={{ md: "7rem", base: "5rem" }}>
            <Experience id="experience" />
          </Box>
          {/* ------Projects------- */}
          <Box marginTop={{ md: "7rem", base: "5rem" }} mb={"2rem"}>
            <Projects id="project" />
          </Box>

          <Box>
            <Footer />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
