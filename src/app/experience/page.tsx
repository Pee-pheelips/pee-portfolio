import { Box } from "@chakra-ui/react";
import ExperienceCard from "@/components/ExperienceCard";
import HeadingNav from "@/components/Navbar/HeadingNav";

export default function Experience() {
  return (
    <>
      <Box>
        <HeadingNav name={"Experience"} />
        <ExperienceCard />
      </Box>
    </>
  );
}
