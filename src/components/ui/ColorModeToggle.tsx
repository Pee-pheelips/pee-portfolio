"use client";

import React from "react";
import { IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

/** Sun/moon button that switches between light and dark mode. */
export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip label={label} hasArrow openDelay={300}>
      <IconButton
        aria-label={label}
        icon={isDark ? <FiSun /> : <FiMoon />}
        onClick={toggleColorMode}
        variant="ghost"
        borderRadius="full"
        size="md"
        fontSize="18px"
        color="fg.secondary"
        border="1px solid"
        borderColor="border.subtle"
        _hover={{ color: "accent.fg", borderColor: "border.accent", bg: "accent.subtle" }}
      />
    </Tooltip>
  );
}
