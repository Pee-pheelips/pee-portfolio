import React from "react";
import { HStack, Heading, Text, Box, Flex } from "@chakra-ui/react";

interface SectionHeadingProps {
  index: string;
  title: string;
  /** One short line under the title. */
  subtitle?: string;
  /** Optional element shown on the right (e.g. filters). */
  children?: React.ReactNode;
}

export default function SectionHeading({ index, title, subtitle, children }: SectionHeadingProps) {
  return (
    <Flex
      justify="space-between"
      align={{ base: "start", md: "end" }}
      direction={{ base: "column", md: "row" }}
      gap={5}
      mb={{ base: 8, md: 10 }}
    >
      <Box>
        <HStack spacing={3} align="center" mb={2}>
          <Text as="span" fontFamily="mono" fontSize="xs" fontWeight="600" letterSpacing="0.1em" color="accent.fg" aria-hidden>
            {index}
          </Text>
          <Box w="32px" h="1px" bg="border.default" aria-hidden />
        </HStack>
        <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} lineHeight="1.2">
          {title}
        </Heading>
        {subtitle && (
          <Text mt={2} color="fg.muted" fontSize={{ base: "sm", md: "md" }}>
            {subtitle}
          </Text>
        )}
      </Box>
      {children}
    </Flex>
  );
}
