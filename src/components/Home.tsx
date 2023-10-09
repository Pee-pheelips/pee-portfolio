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

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import MenuList from "./Navbar/Sidebar";

const ListItems = [
  { id: "about", title: "ABOUT" },
  { id: "experience", title: "EXPERIENCE" },
  { id: "project", title: "PROJECTS" },
];

export default function Home() {
  const iconHover = { cursor: "pointer", color: "white" };
  return (
    <>
      <Box minH={{ lg: "50vh", base: "18vh", md: "18vh" }}>
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
                Front End Engineer at Cragpay
              </Text>
            </Box>
            <Box mt={"2"}>
              <Text>
                This book could not have happened the way it has without the
                unique energies.
              </Text>
            </Box>
            {/* ------------------sidebar-------------------- */}
            <Box>
              <MenuList menuItems={ListItems} />
            </Box>
          </Box>
          {/* ------------------socials-------------------- */}
          <Box bottom={"0"} mt={{ base: "8", md: "8", lg: "0" }}>
            <HStack gap={"20px"}>
              <Icon as={FaEnvelope} _hover={iconHover} boxSize={7} />
              <Icon as={FaGithub} _hover={iconHover} boxSize={7} />
              <Icon as={FaTwitter} _hover={iconHover} boxSize={7} />
              <Icon as={FaLinkedin} _hover={iconHover} boxSize={7} />
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
