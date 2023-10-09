import { Box, Flex, Image } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex
        justifyItems={"center"}
        my={"4rem"}
        pl={{ base: "0", md: "0", lg: "2" }}
      >
        <Box>
          Built with ❤ using chakraUI, Typescript & NextJs by yours truly
        </Box>
      </Flex>
    </>
  );
}
