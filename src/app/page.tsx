import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Home";
import {
	Container,
	Heading,
	Box,
	Text,
	useColorMode,
	Button,
	Flex,
	Spacer,
} from "@chakra-ui/react";
export default function Home() {
	return (
		<>
			<Flex alignContent={"center"} flexDir={{ base: "column", md: "row" }}>
				<Box width={{ base: "100%", md: "40%" }}>
					<Hero />
				</Box>
				<Spacer/>
				<Box width={{ base: "100%", md: "50%" }} fontSize={"lg"}>
					<Text><Text as={"span"} color={"white"} fontWeight={"semibold"}>Advertising agency</Text> I decided to try my hand at creating custom Tumblr
					themes and tumbled head first into the rabbit hole of coding and web
					development. Fast-forward to today, and I've had the privilege of
					building software for an <Text as={"span"} color={"white"} fontWeight={"semibold"}>advertising agency</Text>, a start-up, a student-led
					design studio, and a huge corporation.</Text>
					<Text mt={"3"}> 2012, I decided to try my hand at creating custom Tumblr
					themes and tumbled head first into the rabbit hole of coding and web
					development. Fast-forward to today, and I've had the privilege of 
					<Text as={"span"} color={"white"} fontWeight={"semibold"}> building software</Text> for an advertising agency, a start-up, a student-led
					design studio, and a huge corporation.</Text>
					<Text mt={"3"}>Back in 2012, I decided to try my hand at <Text as={"span"} color={"white"} fontWeight={"semibold"}>creating custom</Text> Tumblr
					themes and <Text as={"span"} color={"white"} fontWeight={"semibold"}> Tumblr</Text> head first into the rabbit hole of coding and web
					development. Fast-forward to today, and I've had the privilege of
					building software for an advertising agency, a start-up, a student-led
					design studio, and a huge corporation.</Text>
				</Box>
			</Flex>
		</>
	);
}
