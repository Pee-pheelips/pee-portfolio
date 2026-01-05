"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const CursorFollowingBackground: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Use semantic tokens or color mode value
  // In light mode, a subtle gray or blue tint might be better than pure transparent
  const gradientColor = useColorModeValue(
    "rgba(29, 78, 216, 0.05)", // Light mode: very subtle blue
    "rgba(29, 78, 216, 0.15)"  // Dark mode: original effect
  );

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      pointerEvents="none"
      zIndex={-1}
      background={`radial-gradient(600px at ${position.x}px ${position.y}px, ${gradientColor}, transparent 80%)`}
      transition="background 0.2s"
    />
  );
};

export default CursorFollowingBackground;
