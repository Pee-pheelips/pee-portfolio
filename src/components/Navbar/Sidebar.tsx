import { VStack, Box, Spacer, Flex } from "@chakra-ui/react";

export default function SideBar() {
	return (
		<>
			<Flex
				mt={"20"}
				flexDir={"column"}
				justifyContent={"space-evenly"}
				fontSize={"sm"}
				fontWeight={"bold"}
			>
				<Box>ABOUT</Box>

				<Box mt={"4"}>EXPERIENCE</Box>

				<Box mt={"4"}>PROJECTS</Box>

				<Box mt={"4"}>BLOG</Box>
			</Flex>
		</>
	);
}
