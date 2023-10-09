import { Text } from "@chakra-ui/react";
export default function HeadingNav({ name }: any) {
  return (
    <>
      <Text
        textTransform={"uppercase"}
        fontSize={"sm"}
        mt={"2"}
        color={"white"}
        fontWeight={"semibold"}
        mb="1rem"
        display={{ md: "block", base: "block", lg: "none" }}
      >
        {name}
      </Text>
    </>
  );
}
