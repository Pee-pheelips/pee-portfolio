import {
  Badge,
  Box,
  Flex,
  Icon,
  Spacer,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

export default function ExperienceCard() {
  const experience = [
    {
      position: "Frontend Engineer",
      company: "Cragpay",
      startDate: "2022",
      endDate: "PRESENT",
      tools: [
        "Typescript",
        "ChakraUI",
        "NextJS",
        "React",
        "AWS",
        "GraphQL",
        "Framer motion",
      ],
      descripton:
        "Designed and managed the admin section, write product requirement document, collaborated with other engneers to modify and maintain the web applications.",
    },
    {
      position: "Frontend Developer",
      company: "Eduvacity",
      startDate: "JUL '23",
      endDate: "SEP 23",
      tools: ["Typescript", "NextJs", "ReactJs", "Tailwaind CSS", "JSON"],
      descripton:
        "Team up with other engineers to improve code in Typescript and tailwind CSS Collaborated with the founder and product owner to help maintain and modify app responsiveness. Suggest and implement design concepts and ideas to foster development.",
    },
    {
      position: "Frontend Engineer",
      company: "SurePlug",
      startDate: "JUN 23",
      endDate: "SEP 23",
      tools: ["PHP", "Bootstrap", "Framer motion", "MySQL"],
      descripton:
        "Join a team of engineers to build a marketplace as a solution to empowering artisans by giving them connections to customers. Support in the development process, business, and marketing. Write product documentation on new features (artisans and their referral system ).",
    },
    {
      position: "Frontend Engineer",
      company: "Pinnacle ICTs",
      startDate: "APR 21",
      endDate: "DEC 21",
      tools: [
        "Typescript",
        "NextJS",
        "ReactJS",
        "ChakraUI",
        "Apollo GraphQL",
        "Figma",
      ],
      descripton:
        "Together with a team of engineers, championed building problem-solving products for different organizations and startups. Manage and mentor new interns and Industrial Training(I.T) students on web technologies and tools like ChakraUI, React, and Apollo graphQL. Manage the organization's activities and on-boarding new members by introducing them to their team and tasks.",
    },
  ];
  // Create an array of boolean states, one for each menu item
  const [isHovered, setIsHovered] = useState(experience.map(() => false));

  const handleMouseEnter = (index) => {
    const newHoveredStates = [...isHovered];
    newHoveredStates[index] = true;
    setIsHovered(newHoveredStates);
  };

  const handleMouseLeave = (index) => {
    const newHoveredStates = [...isHovered];
    newHoveredStates[index] = false;
    setIsHovered(newHoveredStates);
  };
  return (
    <>
      <Box>
        {experience.map((experiences, index) => (
          <Box
            key={index}
            p={{ md: "0", base: "1", lg: "8" }}
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
              flexDir={{ base: "column", md: "row" }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              cursor={isHovered[index] ? "pointer" : "none"}
            >
              <Box
                w={{
                  base: "full",
                  md: "20%",
                  lg: "20%",
                }}
              >
                <Text
                  mb={{
                    base: "2",
                    md: "0",
                  }}
                  color={isHovered[index] ? "gray.400" : "gray.500"}
                  fontSize={{ base: "md", md: "sm" }}
                  fontWeight={{
                    base: "normal",
                    md: "normal",
                  }}
                >
                  {experiences.startDate} - {experiences.endDate}
                </Text>
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
                  {experiences.position} . {experiences.company}
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
                  {experiences.descripton}
                </Text>
                <Flex gap={"5px"} wrap={"wrap"}>
                  {experiences.tools?.map((tool, index) => (
                    <Box
                      key={index}
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
            View Full Resume
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
