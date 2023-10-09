import React from "react";
import { Text, Box } from "@chakra-ui/react";
import HeadingNav from "@src/components/Navbar/HeadingNav";

interface AboutProps {
  name?: string;
}

const About: React.FC<AboutProps> = ({ name }) => {
  return (
    <>
      <Box id={name} key={name}>
        <HeadingNav name={"About"} />
        <Text>
          <Text as={"span"} color={"white"} fontWeight={"semibold"}>
            Advertising agency
          </Text>{" "}
          I decided to try my hand at creating custom Tumblr themes and tumbled
          head first into the rabbit hole of coding and web development.
          Fast-forward to today, and had the privilege of building software for
          an advertising agency, a start-up, a student-led design studio, and a
          huge corporation.
        </Text>
        <Text mt={"3"}>
          {" "}
          2012, I decided to try my hand at creating custom Tumblr themes and
          tumbled head first into the rabbit hole of coding and web development.
          Fast-forward to today, and had the privilege of building software for
          an advertising agency, a start-up, a student-led design studio, and a
          huge corporation.
        </Text>
      </Box>
    </>
  );
};

export default About;
