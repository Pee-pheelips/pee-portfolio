"use client";
import { Box } from "@chakra-ui/react";
import ExperienceCard from "../../components/ExperienceCard";
import HeadingNav from "../../components/Navbar/HeadingNav";

const Experience = ({ id }) => {
  return (
    <>
      <Box id={id}>
        <HeadingNav name={"Experience"} />
        <ExperienceCard />
      </Box>
    </>
  );
};

export default Experience;
