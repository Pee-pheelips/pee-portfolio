import HeadingNav from "@/components/Navbar/HeadingNav";
import { Text, Box } from "@chakra-ui/react";
export default function About() {
  return (
    <>
      <Box>
        <HeadingNav name={"About"} />
        <Text>
          <Text as={"span"} color={"white"} fontWeight={"semibold"}>
            Advertising agency
          </Text>{" "}
          I decided to try my hand at creating custom Tumblr themes and tumbled
          head first
          <Text as={"span"} color={"white"} fontWeight={"semibold"}>
            advertising agency
          </Text>
          , a start-up, a student-led design studio, and a huge corporation.
        </Text>
        <Text mt={"3"}>
          {" "}
          2012, I decided to try my hand at reating custom Tumblr themes and
          tumbled head first into the rabbit hole
          <Text as={"span"} color={"white"} fontWeight={"semibold"}>
            {" "}
            building software
          </Text>{" "}
          for an advertising agency, a start-up, a student-led design studio,
          and a huge corporation.
        </Text>
        <Text mt={"3"}>
          Back in 2012, I decided to try my hand at student-led design studio
          <Text as={"span"} color={"white"} fontWeight={"semibold"}>
            creating custom
          </Text>{" "}
          Tumblr themes and{" "}
          <Text as={"span"} color={"white"} fontWeight={"semibold"}>
            {" "}
            Tumblr
          </Text>{" "}
          head first into the rabbit hole of coding and web development.
          Fast-forward to today, and I've had the privilege of building software
          for an advertising agency, a start-up, a , and a huge corporation.
        </Text>
      </Box>
    </>
  );
}
