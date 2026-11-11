"use client";

import React from "react";
import { Box, Link, Text, HStack, List, ListItem } from "@chakra-ui/react";
import { NavItem } from "@/types";
import { useActiveSection } from "./useActiveSection";

interface ScrollSpyProps {
  menuItems: NavItem[];
}

/** Desktop section nav: real anchor links, keyboard accessible, highlights the section in view. */
export default function ScrollSpy({ menuItems }: ScrollSpyProps) {
  const activeId = useActiveSection(menuItems.map((m) => m.id));

  return (
    <Box
      as="nav"
      aria-label="Sections"
      display={{ base: "none", lg: "block" }}
      mt={12}
      sx={{ "@media (max-height: 920px)": { marginTop: "2.25rem" } }}
    >
      <List spacing={2}>
        {menuItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <ListItem key={item.id}>
              <Link
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                display="inline-flex"
                py={1.5}
                className="group"
                _hover={{ textDecoration: "none" }}
              >
                <HStack spacing={4}>
                  <Box
                    w={isActive ? "14" : "6"}
                    h="2px"
                    borderRadius="full"
                    bg={isActive ? "accent.fg" : "border.default"}
                    transition="all 0.3s ease"
                    _groupHover={{ w: "14", bg: "fg.default" }}
                  />
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    letterSpacing="0.18em"
                    textTransform="uppercase"
                    color={isActive ? "fg.default" : "fg.muted"}
                    transition="color 0.3s ease"
                    _groupHover={{ color: "fg.default" }}
                  >
                    {item.title}
                  </Text>
                </HStack>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
