"use client";
import { Box } from "@chakra-ui/react";
import ExperienceCard from "../../components/ExperienceCard";
import HeadingNav from "../../components/Navbar/HeadingNav";

import React from "react";

interface Section1Props {
  id: string;
}

const Experience: React.FC<Section1Props> = ({ id }) => {
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
