import React from "react";
import { Text, Box } from "@chakra-ui/react";
import HeadingNav from "../../components/Navbar/HeadingNav";

export default function About() {
  return (
    <>
      <Box>
        <HeadingNav name={"About"} />
        <Text>
          In{" "}
          <Text as="span"  fontWeight="semibold">
            2020
          </Text>
          , I joined{" "}
          <Text as="span" fontWeight="semibold">
            PinnacleICTs
          </Text>
          , marking the official start of my professional career in software development. That experience gave me my first exposure to building production-level software and collaborating in a structured team environment.
        </Text>

        <Text mt="3">
          Since then, I’ve had the opportunity to work on projects for{" "}
          <Text as="span" fontWeight="">
            students, startups, and corporate clients
          </Text>
          . These engagements have sharpened my expertise in{" "}
          <Text as="span" color="white" fontWeight="semibold">
            JavaScript, TypeScript
          </Text>{" "}
          and{" "}
          <Text as="span" color="white" fontWeight="semibold">
            React and NextJS
          </Text>
          , enabling me to deliver{" "}
          <Text as="span" fontWeight="semibold">
            scalable and high-quality solutions
          </Text>{" "}
          across various domains.
        </Text>

        <Text mt="3">
          I am deeply passionate about continuous learning and take pride in my
          ability to adapt and grow in this fast-paced industry. My focus
          remains on building impactful, user-centered software while striving
          for technical excellence.
        </Text>
      </Box>
    </>
  );
}
