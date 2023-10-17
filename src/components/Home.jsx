import {
  Heading,
  Text,
  Box,
  Flex,
  Spacer,
  HStack,
  Stack,
  Icon,
} from "@chakra-ui/react";

import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import MenuList from "./Navbar/Sidebar";
import Link from "next/link";

export default function Hero({ ListItems }) {
  const iconHover = { cursor: "pointer", color: "white" };
  return (
    <>
      <Box minH={{ lg: "40vh", base: "18vh", md: "18vh" }}>
        <Flex display={"column"} gap={"10px"}>
          <Box minH={{ md: "0", lg: "79vh", base: "0" }}>
            {" "}
            <Box>
              <Heading
                size={{
                  base: "xl",
                  md: "2xl",
                  lg: "3xl",
                }}
                fontWeight={"bold"}
                color={"#e2e8f0"}
              >
                PHILIP PAUL
              </Heading>

              <Text
                fontSize={"x-large"}
                mt={"2"}
                color={"white"}
                fontWeight={"semibold"}
              >
                Front End Engineer
              </Text>
            </Box>
            <Box mt={"2"}>
              <Text>Passionate about solving complex problems</Text>
            </Box>
            {/* ------------------sidebar-------------------- */}
            <Box>
              <MenuList menuItems={ListItems} />
            </Box>
          </Box>
          {/* ------------------socials-------------------- */}
          <Box bottom={"0"} mt={{ base: "8", md: "8", lg: "0" }}>
            <HStack gap={"20px"}>
              <Link href="mailto:philipupaul@gmail.com">
                <Icon as={FaEnvelope} _hover={iconHover} boxSize={7} />
              </Link>
              <Link href={"https://github.com/Pee-pheelips"} target="_blank">
                <Icon as={FaGithub} _hover={iconHover} boxSize={7} />
              </Link>
              <Link href={"https://twitter.com/PPheelips"} target="_blank">
                <Icon as={FaTwitter} _hover={iconHover} boxSize={7} />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/paul-philip-1a19121a3/"}
                target="_blank"
              >
                <Icon as={FaLinkedin} _hover={iconHover} boxSize={7} />
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
