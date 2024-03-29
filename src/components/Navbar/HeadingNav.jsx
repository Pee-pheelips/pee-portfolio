"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function HeadingNav({ name }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 200; // Adjust this threshold as needed
      const scrollY = window.scrollY;

      if (scrollY > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundColor = isSticky ? "rgba(0, 0, 30, 0.2)" : "transparent";

  return (
    <Box display={{ md: "block", base: "block", lg: "none" }}>
      <div
        className="sticky-heading"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          paddingBottom: "1rem",
          paddingTop: "1rem",
          backgroundColor: backgroundColor,
          backdropFilter: isSticky ? "blur(10px)" : "none", // Apply blur only when sticky
        }}
      >
        <Text
          textTransform={"uppercase"}
          fontSize={"sm"}
          mt={"2"}
          color={"white"}
          fontWeight={"semibold"}
          mb="1rem"
        >
          {name}
        </Text>
      </div>
    </Box>
  );
}
