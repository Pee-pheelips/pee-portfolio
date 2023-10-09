import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const CursorFollowingBackground = () => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      pointerEvents="none"
    >
      <Box
        width="1000px"
        height="1000px"
        borderRadius="50%"
        background="radial-gradient(circle, #00ccff, #4169e1, #000024, #000020)"
        transform={`translate(${cursorPosition.x - 500}px, ${
          cursorPosition.y - 500
        }px)`}
        style={{
          position: "absolute",
          mixBlendMode: "luminosity",
          opacity: 0.1,
        }}
      />
    </Box>
  );
};

export default CursorFollowingBackground;
