"use client";
import HeadingNav from "../../components/Navbar/HeadingNav";
import ProjectCard from "../../components/ProjectCard";
import { Box } from "@chakra-ui/react";

const Project = ({ id }) => {
  return (
    <>
      <Box id={id}>
        {" "}
        <HeadingNav name={"Project"} />
        <ProjectCard />
      </Box>
    </>
  );
};

export default Project;
