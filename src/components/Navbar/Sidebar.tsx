import { VStack, Box, Spacer, Flex, HStack, color } from "@chakra-ui/react";

export default function SideBar() {
	const menu = ["ABOUT", "EXPERIENCE", "PROJECTS", "BLOG"];

	return (
		<>
			<Flex
				display={{ base: "none", md: "flex" }}
				mt={"20"}
				flexDir={"column"}
				justifyContent={"space-evenly"}
				fontSize={"sm"}
				fontWeight={"bold"}
			>
				{menu.map((menuList: any, index: number) => (
					<Flex key={index} mt={"4"}>
						<Box
							display={"flex"}
							alignItems={"center"}
							_hover={{ color: "white" }}
						>
							<Box
								as="div"
								bgColor={"gray.500"}
								_hover={{ bgColor: "white" }}
								width={"7"}
								height={"1px"}
								mr={"2"}
							></Box>
							{menuList}
						</Box>
					</Flex>
				))}
			</Flex>
		</>
	);
}
