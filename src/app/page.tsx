import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Home";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Experience from "./experience/page";
import About from "./About/page";
export default function Home() {
  return (
    <>
      <Flex
        alignContent={"center"}
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Box
          width={{ base: "100%", md: "28%" }}
          height={"100vh"}
          position={{base:"relative", md:"fixed"}}
        >
          <Hero />
        </Box>
        <Spacer />
        <Box
          width={{ base: "100%", md: "55%" }}
          fontSize={"lg"}
          mt={{ base: "0rem", md: "0" }}
        >
          {/* ---------About-------- */}
          <Box pl={{ md: "10", base: "0" }}>
            <About />
          </Box>

          {/* ----------Experience------- */}
          <Box>
            <Experience />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
