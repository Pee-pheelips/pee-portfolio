"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Box, Flex, Text, HStack } from "@chakra-ui/react";
import { NavItem } from "@/types";

interface ScrollSpyProps {
    menuItems: NavItem[];
}

export default function ScrollSpy({ menuItems }: ScrollSpyProps) {
    const [activeId, setActiveId] = useState<string>("about");
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Focus on the upper-middle of the viewport
            threshold: 0,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        menuItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [menuItems]);

    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset for better centering
                behavior: "smooth",
            });
        }
    }, []);

    return (
        <Flex
            display={{ base: "none", lg: "flex" }}
            mt={20}
            flexDir="column"
            gap={8}
        >
            {menuItems.map((item) => {
                const isActive = activeId === item.id;
                const isHovered = hoveredId === item.id;
                const isHighlighted = isActive || isHovered;

                return (
                    <HStack
                        key={item.id}
                        spacing={4}
                        cursor="pointer"
                        onClick={() => scrollToSection(item.id)}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <Box
                            w={isHighlighted ? "16" : "8"}
                            h="1px"
                            bg={isHighlighted ? "gray.100" : "gray.500"}
                            transition="all 0.3s ease-in-out"
                        />
                        <Text
                            fontSize="sm"
                            fontWeight="bold"
                            letterSpacing="widest"
                            color={isHighlighted ? "gray.100" : "gray.500"}
                            transition="all 0.3s ease-in-out"
                            textTransform="uppercase"
                        >
                            {item.title}
                        </Text>
                    </HStack>
                );
            })}
        </Flex>
    );
}
