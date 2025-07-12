"use client";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import CursorFollowingBackground from "../../src/components/CursorEffect";

const theme = extendTheme({
   fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        bgColor: "#000020",
        color: "gray.500",
        fontFamily: "'Prompt', sans-serif",
      },
    },
  },
});

function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <CursorFollowingBackground />
      {children}
    </ChakraProvider>
  );
}

export default Providers;
