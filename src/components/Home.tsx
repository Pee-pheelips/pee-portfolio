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
	faMailchimp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "./Navbar/Sidebar";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function () {
	return (
		<>
			<Flex
				display={"column"}
				maxH={"90vh"}
			>
				<Box>
					{" "}
					<Box>
						<Heading
							size={{
								base: "2xl",
								md: "2xl",
							}}
							fontWeight={"extrabold"}
							color={"#e2e8f0"}
						>
							Paul Philip
						</Heading>

						<Text
							fontSize={"xl"}
							mt={"2"}
							color={"white"}
							fontWeight={"semibold"}
						>
							Front End Engineer at
							Cragpay
						</Text>
					</Box>
					<Box mt={"2"}>
						<Text>
							This book could not have
							happened the way it has
							without the unique
							energies.
						</Text>
					</Box>
					{/* ------------------sidebar-------------------- */}
					<SideBar />
				</Box>
				{/* ------------------socials-------------------- */}
				<Box
					alignSelf={"baseline"}
					marginTop={{
						md: "9rem",
						base: "2rem",
					}}
					height={"22px"}
					justifyContent={
						"space-between"
					}
					maxW={"35%"}
					display={"flex"}
				>
					<FontAwesomeIcon
						icon={faGithub}
					/>
					{/* <FontAwesomeIcon icon={faEnvelope} /> */}
					<FontAwesomeIcon
						icon={faWhatsapp}
					/>
					<FontAwesomeIcon
						icon={faTwitter}
					/>
					<FontAwesomeIcon
						icon={faLinkedin}
					/>
				</Box>
			</Flex>
		</>
	);
}
