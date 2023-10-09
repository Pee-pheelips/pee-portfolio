// CursorFollowingBackground.js
import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const CursorFollowingBackground = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const { scrollX, scrollY } = window;
      setCursorPosition({ x: clientX + scrollX, y: clientY + scrollY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      position="absolute" // Change from "absolute" to "fixed"
      top={cursorPosition.y + "px"}
      left={cursorPosition.x + "px"}
      width="1000px"
      height="1000px"
      borderRadius="50%"
      background="radial-gradient(circle, #87ceeb, #00bfff, #0000cd, #000010)"
      transform="translate(-50%, -50%)"
      pointerEvents="none"
      mixBlendMode="luminosity"
      opacity="0.1"
    />
  );
};

export default CursorFollowingBackground;
