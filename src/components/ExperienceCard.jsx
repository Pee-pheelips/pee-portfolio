import {
  Box,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

export default function ExperienceCard() {
  const experience = [
    {
      position: "Frontend Developer",
      company: "EcoHotels",
      startDate: "NOV '23",
      endDate: "Present",
      link: "https://www.ecohotels.com/",
      tools: [
        "TailwindCSS",
        "TypeScript",
        "Next.js",
        "React",
        "REST API",
        "Framer Motion",
        "React Native",
        "Expo",
      ],
      description:
        "Contributed as part of a collaborative frontend team to build and maintain the EcoHotels web application. Played a key role in implementing technical SEO strategies to improve site visibility and performance.",
    }
    ,
    {
      position: "Frontend Engineer",
      company: "Cragpay",
      startDate: "JAN '22",
      endDate: "OCT '23",
      link: "https://www.cragpay.com/",
      tools: [
        "TypeScript",
        "Chakra UI",
        "Next.js",
        "React",
        "AWS",
        "GraphQL",
        "Framer Motion",
      ],
      description:
        "Built and maintained the core frontend infrastructure, contributed to admin dashboard development, wrote technical documentation, and collaborated across teams to enhance application performance.",
    },
    {
      position: "Frontend Developer",
      company: "Eduvacity",
      startDate: "MAR '23",
      endDate: "SEP '23",
      link: "https://www.eduvacity.com/",
      tools: ["TypeScript", "Next.js", "React.js", "Tailwind CSS", "JSON"],
      description:
        "Collaborated closely with the founder and product owner to enhance application responsiveness. Improved codebase in TypeScript and Tailwind CSS, and contributed to UI/UX design ideas.",
    },
    {
      position: "Frontend Engineer",
      company: "SurePlug",
      startDate: "JUN '23",
      endDate: "SEP '23",
      link: "https://mysureplug.com/",
      tools: ["PHP", "Bootstrap", "Framer Motion", "MySQL"],
      description:
        "Supported the development of a marketplace platform connecting artisans to clients. Contributed to feature design, documentation, and marketing strategy alongside the business team.",
    },
    {
      position: "Frontend Engineer",
      company: "Pinnacle ICTs",
      startDate: "APR '21",
      endDate: "DEC '21",
      link: "https://www.linkedin.com/company/pinnacleicts/about/",
      tools: [
        "TypeScript",
        "Next.js",
        "React.js",
        "Chakra UI",
        "Apollo GraphQL",
        "Figma",
      ],
      description:
        "Contributed to the development of software solutions for startups and organizations. Mentored interns on web technologies and helped onboard new team members into engineering workflows.",
    },
  ];

  const [isHovered, setIsHovered] = useState(experience.map(() => false));

  const handleMouseEnter = (index) => {
    const newHovered = [...isHovered];
    newHovered[index] = true;
    setIsHovered(newHovered);
  };

  const handleMouseLeave = (index) => {
    const newHovered = [...isHovered];
    newHovered[index] = false;
    setIsHovered(newHovered);
  };

  return (
    <Box>
      {experience.map((exp, index) => (
        <Box
          key={index}
          p={{ md: "0", base: "1", lg: "8" }}
          py={{ base: "6", md: "4" }}
          mb={"1rem"}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          cursor={isHovered[index] ? "pointer" : "default"}
          _hover={{
            backgroundColor: "rgba(20, 100, 150, 0.10)",
            boxShadow: "2 1px 32px 1 rgba(75, 255, 248, 0.02)",
            backdropFilter: "blur(2px)",
            borderRadius: "10px",
          }}
        >
          <Link href={exp.link} passHref target="_blank">
            <Flex
              gap={"9px"}
              fontSize={"medium"}
              flexDir={{ base: "column", md: "row" }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              cursor={isHovered[index] ? "pointer" : "default"}
            >
              <Box w={{ base: "full", md: "20%", lg: "20%" }}>
                <Text
                  mb={{ base: "2", md: "0" }}
                  color={isHovered[index] ? "gray.400" : "gray.500"}
                  fontSize={{ base: "md", md: "sm" }}
                >
                  {exp.startDate} - {exp.endDate}
                </Text>
              </Box>

              <Box width={{ base: "100%", md: "75%" }}>
                <Text
                  as="header"
                  fontWeight="semibold"
                  fontSize="lg"
                  color={isHovered[index] ? "#12e193" : "white"}
                  display="inline-flex"
                >
                  {exp.position} · {exp.company}
                  <Box
                    as="span"
                    pl={isHovered[index] ? 1.5 : 1}
                    mt={isHovered[index] ? 0 : 1}
                    mb={-2}
                    verticalAlign="middle"
                  >
                    <Icon as={FiArrowUpRight} />
                  </Box>
                </Text>

                <Text
                  mt="2"
                  mb="4"
                  color={isHovered[index] ? "gray.400" : "gray.500"}
                >
                  {exp.description}
                </Text>

                <Flex gap="5px" wrap="wrap">
                  {exp.tools.map((tool, toolIndex) => (
                    <Box
                      key={toolIndex}
                      w="fit-content"
                      bgColor="#112c3d"
                      px="2"
                      borderRadius="full"
                      py={1}
                    >
                      <Text
                        color="#12e193"
                        fontSize="sm"
                        fontWeight="normal"
                      >
                        {tool}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Link>
        </Box>
      ))}

      <Box padding={{ lg: "5", base: "0" }} display="flex">
        <Link href="/PAUL_Resume.pdf" passHref target="_blank">
          <Text
            fontWeight="semibold"
            color="white"
            display="inline-flex"
            cursor="pointer"
            _hover={{ borderBottom: "1px solid #12e193", marginRight: "1" }}
          >
            View Full Resume
          </Text>
        </Link>
        <Box
          as="span"
          verticalAlign="middle"
          mb={-2}
          mt={1}
          color="white"
          pl={2}
        >
          <Icon as={FiArrowRight} />
        </Box>
      </Box>
    </Box>
  );
}
