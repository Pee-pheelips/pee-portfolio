import { Box, Flex, Image } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex justifyItems={"center"}>
        <Box>
          <Image src={"/logo.png"} width={8} height={10} alt="logo" />
        </Box>

        <Box>Built with ❤ using chakraUI, Typescript & NextJs</Box>
      </Flex>
    </>
  );
}
