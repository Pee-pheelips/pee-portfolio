import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const CursorFollowingBackground = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Smoothly animate position using requestAnimationFrame
      animationFrameId = requestAnimationFrame(() => {
        if (circleRef.current) {
          circleRef.current.style.transform = `translate(${clientX - 500}px, ${
            clientY - 500
          }px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      pointerEvents="none"
      zIndex={0}
    >
      <Box
        ref={circleRef}
        w="1000px"
        h="1000px"
        borderRadius="full"
        bg="radial-gradient(circle, #00ccff, #4169e1, #000024, #000020)"
        position="absolute"
        opacity={0.1}
        mixBlendMode="luminosity"
        willChange="transform"
      />
    </Box>
  );
};

export default CursorFollowingBackground;
