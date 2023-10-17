import React from "react";
import { Text, Box } from "@chakra-ui/react";
import HeadingNav from "../../components/Navbar/HeadingNav";

export default function About() {
  return (
    <>
      <Box>
        <HeadingNav name={"About"} />
        <Text>
          In late 2017, I made a deliberate decision to delve into the world of
          programming, and it seemed as though the universe conspired in my
          favor. I found an opportunity to expand my knowledge and skills. I
          embarked on this journey by joining{" "}
          <Text as={"span"} color={"white"} fontWeight={"semibold"}>
            {" "}
            Cixel consulting
          </Text>{" "}
          , where I laid the foundations of web design. As time progressed, in
          2019 during my industrial training, I began to explore Python, with a
          particular focus on Django. <br />
          However, 2020 brought about a major turning point when the COVID-19
          pandemic led to lockdowns. Shortly after this challenging period, I
          joined{" "}
          <Text as="span" color={"white"} fontWeight={"semibold"}>
            PinnacleICTs
          </Text>
          , marking the beginning of my professional journey in the field of
          software development. where i first got my{" "}
          <Text as={"span"} color={"white"} fontWeight={"semibold"}>
            {" "}
            work experience
          </Text>{" "}
          . Fast-forward to today, and had the privilege of building software
          for an students, various start-ups, and a other corporation. These
          experiences have not only enriched my professional journey but have
          equipped me to excel in advanced Javascript and React
        </Text>
        <Text mt={"3"}>
          {" "}
          Today, I take immense pride in my ability to deliver{" "}
          <Text as={"span"} color={"white"} fontWeight={"semibold"}>
            {" "}
            high quality
          </Text>{" "}
          software solutions to a wide range of clients and projects. I&apos;m
          committed to the relentless pursuit of excellence in this dynamic and
          ever-evolving field.
        </Text>
      </Box>
    </>
  );
}
