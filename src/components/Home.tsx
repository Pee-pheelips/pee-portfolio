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

export default function () {
  const iconColor = "white";
  return (
    <>
      <Flex display={"column"} flex={1}>
        <Box>
          {" "}
          <Box>
            <Heading
              size={{
                base: "xl",
                md: "2xl",
                lg: "3xl",
              }}
              fontWeight={"bold"}
              color={"#e2e8f0"}
            >
              PHILIP PAUL
            </Heading>

            <Text
              fontSize={"x-large"}
              mt={"2"}
              color={"white"}
              fontWeight={"semibold"}
            >
              Front End Engineer at Cragpay
            </Text>
          </Box>
          <Box mt={"2"}>
            <Text>
              This book could not have happened the way it has without the
              unique energies.
            </Text>
          </Box>
          {/* ------------------sidebar-------------------- */}
          <SideBar />
        </Box>
        {/* ------------------socials-------------------- */}
        <HStack marginTop={"2rem"} position={"relative"} bottom={"0"}>
          <FontAwesomeIcon icon={faGithub} />
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
        </HStack>
      </Flex>
    </>
  );
}
