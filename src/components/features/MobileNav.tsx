"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  Link,
  Button,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu, FiMail } from "react-icons/fi";
import Socials from "./Socials";
import ResumeMenu from "./ResumeMenu";
import ColorModeToggle from "@/components/ui/ColorModeToggle";
import { useActiveSection } from "./useActiveSection";
import { NAV_ITEMS, SITE, AVAILABILITY } from "@/data/portfolio";

/** Sticky top bar with a slide-out menu, shown below the lg breakpoint. */
export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeTitle = NAV_ITEMS.find((n) => n.id === activeId)?.title;

  return (
    <Box
      display={{ base: "block", lg: "none" }}
      position="sticky"
      top={0}
      zIndex={20}
      transition="background 0.25s, border-color 0.25s"
      bg={scrolled ? "bg.nav" : "transparent"}
      backdropFilter={scrolled ? "saturate(140%) blur(12px)" : "none"}
      borderBottom="1px solid"
      borderColor={scrolled ? "border.subtle" : "transparent"}
    >
      <Flex h="64px" px={{ base: 6, md: 12 }} align="center" justify="space-between">
        <Link href="#top" display="flex" alignItems="center" gap={3} _hover={{ textDecoration: "none" }} aria-label="Back to top">
          <Flex borderRadius="lg" w="34px" h="34px" flexShrink={0} bg="#000" align="center" justify="center">
            <Image src="/logo.png" alt="" width={20} height={21} />
          </Flex>
          <Box lineHeight="1.2" opacity={scrolled ? 1 : 0} transform={scrolled ? "none" : "translateY(4px)"} transition="all 0.25s">
            <Text fontFamily="heading" fontWeight="700" color="fg.default" fontSize="sm">
              {SITE.name}
            </Text>
            <Text fontSize="xs" color="accent.fg" aria-live="polite">
              {activeTitle}
            </Text>
          </Box>
        </Link>

        <HStack spacing={2}>
          <ColorModeToggle />
          <IconButton
            aria-label="Open menu"
            icon={<FiMenu />}
            variant="ghost"
            borderRadius="full"
            color="fg.default"
            fontSize="20px"
            onClick={onOpen}
            _hover={{ bg: "bg.muted" }}
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={3} mr={2} color="fg.default" />
          <DrawerBody pt={20} pb={10} px={7} display="flex" flexDirection="column">
            <VStack as="nav" aria-label="Sections" align="stretch" spacing={1}>
              {NAV_ITEMS.map((item, i) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onClose}
                  aria-current={activeId === item.id ? "location" : undefined}
                  display="flex"
                  alignItems="baseline"
                  gap={4}
                  py={2.5}
                  fontFamily="heading"
                  fontSize="2xl"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  color={activeId === item.id ? "accent.fg" : "fg.default"}
                  _hover={{ textDecoration: "none", color: "accent.fg" }}
                >
                  <Text as="span" fontSize="xs" color="fg.muted" fontFamily="body" fontWeight="semibold">
                    0{i + 1}
                  </Text>
                  {item.title}
                </Link>
              ))}
            </VStack>

            <Divider my={8} borderColor="border.subtle" />

            <VStack align="stretch" spacing={3}>
              {AVAILABILITY.open && (
                <Text fontSize="sm" color="accent.fg" fontWeight="semibold" mb={1}>
                  ● {AVAILABILITY.label}
                </Text>
              )}
              <ResumeMenu label="Download résumé" w="full" />
              <Button as="a" href={`mailto:${SITE.email}`} variant="outlineBrand" leftIcon={<FiMail />}>
                Email me
              </Button>
            </VStack>

            <Box mt="auto" pt={10}>
              <Socials />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
