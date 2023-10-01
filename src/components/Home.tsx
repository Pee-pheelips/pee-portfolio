"use strict";
import {
	Heading,
	Text,
	Box,
	Flex,
	Spacer,
	HStack,
	Stack,
} from "@chakra-ui/react";
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "./Navbar/Sidebar";

export default function () {
	return (
		<>
			<Flex alignItems={"center"}>
				<Box>
					{" "}
					<Box>
						<Heading size={{ base: "4xl", md: "2xl" }} color={"white"}>
							Paul Philip
						</Heading>

						<Text
							fontSize={"xl"}
							mt={"4"}
							color={"white"}
							fontWeight={"semibold"}
						>
							Front End Engineer at Cragpay
						</Text>
					</Box>
					<Box mt={"2"}>
						<Text fontSize={"lg"}>
							This book could not have happened the way it has without the
							unique energies and perspectives of Tom
						</Text>
					</Box>
					{/* ------------------sidebar-------------------- */}
					<SideBar />
					{/* ------------------socials-------------------- */}
					<Flex
						alignContent={"center"}
						height={"30px"}
						justifyContent={"space-between"}
						maxW={"40%"}
						mt={"40"}
					>
						<FontAwesomeIcon icon={faGithub} fontSize={"2xs"} />
						<FontAwesomeIcon icon={faWhatsapp} />
						<FontAwesomeIcon icon={faTwitter} />
						<FontAwesomeIcon icon={faLinkedin} />
					</Flex>
				</Box>
			</Flex>
		</>
	);
}
