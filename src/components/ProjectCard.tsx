"use client";
import { Badge, Box, Flex, Icon, Text, Image } from "@chakra-ui/react";

import { useState } from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

export default function ProjectCard() {
  const projects = [
    {
      position: "Frontend Engineer",
      company: "Cragpay",
      img: "/cragpay.jpg",
      tools: [
        "Typescript",
        "ChakraUI",
        "NextJs",
        "React",
        "AWS",
        "GraphQL",
        "Framer motion",
      ],
      descripton:
        "This job description template is designed to showcase your professional experience as a software engineer. Feel free to customize it by adding specific details, metrics, or achievements that highlight your unique contributions and skills.",
    },
    {
      position: "Frontend Engineer",
      company: "Cragpay",
      img: "/cragpay.jpg",

      descripton:
        "This job description template is designed to showcase your professional experience as a software engineer. Feel free to customize it by adding specific details, metrics, or achievements that highlight your unique contributions and skills.",
    },
    {
      position: "Frontend Engineer",
      company: "Cragpay",
      img: "/cragpay.jpg",
      tools: [
        "Typescript",
        "ChakraUI",
        "NextJs",
        "React",
        "AWS",
        "GraphQL",
        "Framer motion",
      ],
      descripton:
        "This job description template is designed to showcase your professional experience as a software engineer. Feel free to customize it by adding specific details, metrics, or achievements that highlight your unique contributions and skills.",
    },
    {
      position: "Frontend Engineer",
      company: "Cragpay",
      img: "/cragpay.jpg",
      tools: [
        "Typescript",
        "ChakraUI",
        "NextJs",
        "React",
        "AWS",
        "GraphQL",
        "Framer motion",
      ],
      descripton:
        "This job description template is designed to showcase your professional experience as a software engineer. Feel free to customize it by adding specific details, metrics, or achievements that highlight your unique contributions and skills.",
    },
  ];
  // Create an array of boolean states, one for each menu item
  const [isHovered, setIsHovered] = useState(projects.map(() => false));

  const handleMouseEnter = (index: any) => {
    const newHoveredStates = [...isHovered];
    newHoveredStates[index] = true;
    setIsHovered(newHoveredStates);
  };

  const handleMouseLeave = (index: any) => {
    const newHoveredStates = [...isHovered];
    newHoveredStates[index] = false;
    setIsHovered(newHoveredStates);
  };
  return (
    <>
      <Box>
        {projects.map((project, index) => (
          <Box
            key={index}
            p={{ lg: "8", base: "1", md: "0" }}
            py={{ base: "6", md: "4" }}
            mb={"1rem"}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            cursor={isHovered[index] ? "pointer" : "none"}
            _hover={{
              backgroundColor: " rgba( 20, 100, 150, 0.10 )",
              boxShadow: "2 1px 32px 1 rgba(75, 255, 248, 0.02)",
              backdropFilter: "Blur (2px)",
              borderRadius: "10px",
            }}
          >
            <Flex
              gap={"9px"}
              fontSize={"medium"}
              flexDir={{ base: "column-reverse", md: "row" }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              cursor={isHovered[index] ? "pointer" : "none"}
            >
              <Box
                w={{
                  base: "auto",
                  md: "20%",
                }}
                pr={{ md: "4", base: "0" }}
                mt={{ md: "1", lg: "2", base: "1" }}
              >
                <Image
                  src={project.img}
                  height={{ md: "70", base: "120" }}
                  width={{ md: "100", base: "120" }}
                  alt="project"
                />
              </Box>

              <Box
                width={{
                  base: "100%",
                  md: "75%",
                }}
              >
                <Text
                  as={"header"}
                  fontWeight={"semibold"}
                  fontSize={"lg"}
                  color={isHovered[index] ? "#12e193" : "white"}
                  display={"inline-flex"}
                >
                  {project.position} . {project.company}
                  <Box
                    as="span"
                    pl={isHovered[index] ? 1.5 : 1}
                    mt={isHovered[index] ? 0 : 1}
                    mb={-2}
                    verticalAlign={"middle"}
                  >
                    <Icon as={FiArrowUpRight} />
                  </Box>
                </Text>

                <Text
                  mt={"2"}
                  mb="4"
                  color={isHovered[index] ? "gray.400" : "gray.500"}
                >
                  {project.descripton}
                </Text>
                <Flex gap={"5px"} wrap={"wrap"}>
                  {project.tools?.map((tool) => (
                    <Box
                      w={"fit-content"}
                      bgColor={"#112c3d"}
                      px={"2"}
                      borderRadius={"full"}
                      py={1}
                    >
                      <Text
                        color={"#12e193"}
                        fontSize={"sm"}
                        fontWeight={"normal"}
                      >
                        {tool}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}

        <Box padding={{ lg: "5", base: "0" }} display={"flex"}>
          <Text
            fontWeight={"semibold"}
            color={"white"}
            display={"inline-flex"}
            cursor={"pointer"}
            _hover={{ borderBottom: "1px solid #12e193", marginRight: "1" }}
          >
            {" "}
            View Full Project Archive
          </Text>
          <Box
            as="span"
            verticalAlign={"middle"}
            mb={-2}
            mt={1}
            color={"white"}
            pl={2}
          >
            <Icon as={FiArrowRight} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
