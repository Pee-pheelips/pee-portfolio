import React from "react";
import { Text, Box } from "@chakra-ui/react";
import HeadingNav from "../../components/Navbar/HeadingNav";

export default function About() {
  return (
    <>
      <Box>
        <HeadingNav name={"About"} />
        <Text>
          It was early 2016 and i decided to learn programming, the law of
          attraction happen universe sent me access where i could learn. I
          applied to
          <Text as={"span"} color={"white"} fontWeight={"semibold"}>
            {" "}
            Cixel consulting
          </Text>{" "}
          where i learned basics of web design. Fast forward to 2019 during my
          industrial training started leaning python(Django). 2020 COVID
          happened the lockdown, joined{" "}
          <Text as="span" color={"white"} fontWeight={"semibold"}>
            PinnacleICTs
          </Text>
          where i first got my work experience. Fast-forward to today, and had
          the privilege of building software for an advertising agency, a
          start-up, a student-led design studio, and a huge corporation.
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
}
