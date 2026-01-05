"use client";

import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface SectionHeadingProps {
    name: string;
}

export default function SectionHeading({ name }: SectionHeadingProps) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 100;
            setIsSticky(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box
            display={{ lg: "none" }} // Only show on mobile/tablet where the main nav is not fixed
            position="sticky"
            top={0}
            zIndex={10}
            bg={isSticky ? "rgba(0, 0, 32, 0.8)" : "transparent"}
            backdropFilter={isSticky ? "blur(8px)" : "none"}
            py={4}
            mb={4}
            transition="all 0.2s"
        >
            <Text
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="widest"
                color="gray.100"
            >
                {name}
            </Text>
        </Box>
    );
}
