"use client";

import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box as="footer" py={12} px={{ base: 4, md: 8 }}>
            <Text color="gray.500" fontSize="sm" lineHeight="relaxed">
                Built with{" "}
                <ChakraLink as={Link} href="https://nextjs.org/" isExternal color="gray.300">
                    Next.js
                </ChakraLink>{" "}
                and{" "}
                <ChakraLink as={Link} href="https://chakra-ui.com/" isExternal color="gray.300">
                    Chakra UI
                </ChakraLink>
                . Deployed with{" "}
                <ChakraLink as={Link} href="https://vercel.com/" isExternal color="gray.300">
                    Vercel
                </ChakraLink>
                . The typography is set in the{" "}
                <ChakraLink as={Link} href="https://fonts.google.com/specimen/Inter" isExternal color="gray.300">
                    Inter
                </ChakraLink>{" "}
                typeface.
            </Text>
            <Text color="gray.600" fontSize="xs" mt={4}>
                &copy; {currentYear} Philip Paul. All rights reserved.
            </Text>
        </Box>
    );
}
