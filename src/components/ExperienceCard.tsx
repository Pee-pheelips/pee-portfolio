"use client";
import {
	Badge,
	Box,
	Flex,
	Spacer,
	Tab,
	TabList,
	Tabs,
	Text,
} from "@chakra-ui/react";

export default function ExperienceCard() {
	
	const experience = [
		{
			position: "Frontend Engineer",
			company: "Cragpay",
			startDate: "2018",
			endDate: "2022",
			tools: ["Typescript", "ChakraUI", "NextJs", "React", "AWS", "GraphQL", "Framer motion"],
			descripton:
				"This job description template is designed to showcase your professional experience as a software engineer. Feel free to customize it by adding specific details, metrics, or achievements that highlight your unique contributions and skills.",
		},
		{
			position: "Frontend Developer",
			company: "Eduvacity",
			startDate: "DEC '18",
			endDate: "2022",
			tools: ["Typescript", "NextJs", "ReactJs", "JSON"],
			descripton:
				"This job description template is designed to showcase your professional experience as a software engineer. Feel free to customize it by adding specific details, metrics, or achievements that highlight your unique contributions and skills.",
		},
		{
			position: "Frontend Engineer",
			company: "SurePlug",
			startDate: "2018",
			endDate: "2022",
			tools: ["PHP", "Bootstrap", "MySQL"],
			descripton:
				"This job description template is designed to showcase your professional experience as a software engineer. Feel free to customize it by adding specific details, metrics, or achievements that highlight your unique contributions and skills.",
		},
		{
			position: "Frontend Engineer",
			company: "Pinnacle ICTs",
			startDate: "2021",
			endDate: "2022",
			tools: ["Typescript", "NextJs", "ReactJs", "JSON"],
			descripton:
				"This job description template is designed to showcase your professional experience as a software engineer. Feel free to customize it by adding specific details, metrics, or achievements that highlight your unique contributions and skills.",
		},
	];
	return (
		<>
			{experience.map((experiences) => (
				<Box
					p={{ md: "8", base: "1" }}
					py={{ base: "6", md: "4" }}
					mb={"1rem"}
					_hover={{
						backgroundColor: " rgba( 20, 100, 150, 0.10 )",
						boxShadow:"2 1px 32px 1 rgba(75, 255, 248, 0.02)",
						backdropFilter: "Blur (2px)",
						borderRadius: "10px",
					}}
				>
					<Flex justifyContent={"space-between"} fontSize={"medium"} flexDir={{base:"column", md:"row"}}>
						<Box
							w={{
								base: "auto",
								md: "20%",
							}}
						
						>
							<Text
								mb={{
									base: "2",
									md: "0",
								}}
								fontSize={{base:"md", md:"sm"}}
								fontWeight={{
									base: "normal",
									md: "normal",
								}}
							>
								{experiences.startDate} - {experiences.endDate}
							</Text>
						</Box>
						<Spacer />
						<Box
							width={{
								base: "100%",
								md: "75%",
							}}
						>
							<Text
								as={"header"}
								fontWeight={"semibold"}
								fontSize={"lg"}
								color={"white"}
							>
								{experiences.position} . {experiences.company}
							</Text>
							<Text mt={"2"} mb="4">
								{experiences.descripton}
							</Text>
							<Flex gap={"5px"} wrap={"wrap"}>
								{experiences.tools?.map((tool) => (
									<Box
										w={"fit-content"}
										bgColor={"#132c3d"}
										px={"2"}
										borderRadius={"full"}
										py={1}
									>
										<Text
											color={"#47b3ae"}
											fontSize={"sm"}
											fontWeight={"semibold"}
										>
											{tool}
										</Text>
									</Box>
								))}
							</Flex>
						</Box>
					</Flex>
				</Box>
			))}
		</>
	);
}
