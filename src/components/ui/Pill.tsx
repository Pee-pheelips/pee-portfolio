import React from "react";
import { Box, BoxProps, Flex, Tooltip } from "@chakra-ui/react";

interface PillProps extends BoxProps {
  muted?: boolean;
}

export const Pill = React.forwardRef<HTMLDivElement, PillProps>(function Pill(
  { children, muted = false, ...rest },
  ref
) {
  return (
    <Box
      ref={ref}
      as="span"
      display="inline-block"
      bg={muted ? "transparent" : "tag.bg"}
      color={muted ? "fg.muted" : "tag.fg"}
      border="1px solid"
      borderColor={muted ? "border.subtle" : "transparent"}
      px={2.5}
      py="4px"
      borderRadius="md"
      fontFamily="mono"
      fontSize="11.5px"
      fontWeight="500"
      lineHeight="1.4"
      whiteSpace="nowrap"
      {...rest}
    >
      {children}
    </Box>
  );
});

/** A wrapped list of tags, optionally capped with a "+N" overflow chip. */
export function PillList({ items, max }: { items: string[]; max?: number }) {
  const shown = max ? items.slice(0, max) : items;
  const hidden = max ? items.slice(max) : [];

  return (
    <Flex as="ul" columnGap={2} rowGap={2} wrap="wrap" m={0} p={0} listStyleType="none" aria-label="Technologies">
      {shown.map((item) => (
        <Box as="li" key={item}>
          <Pill>{item}</Pill>
        </Box>
      ))}
      {hidden.length > 0 && (
        <Box as="li">
          <Tooltip label={hidden.join(", ")} hasArrow placement="top">
            <Pill muted tabIndex={0} aria-label={`${hidden.length} more: ${hidden.join(", ")}`}>
              +{hidden.length}
            </Pill>
          </Tooltip>
        </Box>
      )}
    </Flex>
  );
}
