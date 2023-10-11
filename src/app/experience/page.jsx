"use client";
import { Box } from "@chakra-ui/react";
import ExperienceCard from "../../components/ExperienceCard";
import HeadingNav from "../../components/Navbar/HeadingNav";

const Experience = () => {
  return (
    <>
      <Box>
        <HeadingNav name={"Experience"} />
        <ExperienceCard />
      </Box>
    </>
  );
};

export default Experience;
