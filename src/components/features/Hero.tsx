"use client";

import { Heading, Text, Box, Flex, HStack } from "@chakra-ui/react";
import ScrollSpy from "./ScrollSpy";
import Socials from "./Socials";
import { NAV_ITEMS } from "@/data/portfolio";

export default function Hero() {
    return (
        <Flex
            direction="column"
            justify="space-between"
            h={{ lg: "calc(100vh - 170px)" }} // Viewport height minus RootLayout padding
            position={{ base: "relative", lg: "fixed" }}
            w={{ lg: "30%" }}
        >
            <Box>
                <Heading
                    as="h1"
                    size={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                    color="gray.100"
                    letterSpacing="tight"
                >
                    Paul Philip
                </Heading>

                <Text
                    fontSize="2xl"
                    fontWeight="semibold"
                    color="gray.200"
                    mt={3}
                >
                    Frontend & Mobile Engineer
                </Text>

                <Text
                    color="gray.400"
                    mt={6}
                    fontSize="lg"
                    maxW="sm"
                    lineHeight="tall"
                >
                    I build pixel-perfect, accessible digital experiences — architecting scalable frontend systems where performance meets aesthetic precision.        </Text>
                <ScrollSpy menuItems={NAV_ITEMS} />
            </Box>

            <Box mt={{ base: 8, lg: 0 }}>
                <Socials />
            </Box>
        </Flex>
    );
}
