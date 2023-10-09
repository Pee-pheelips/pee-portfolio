"use client";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import CursorFollowingBackground from "../../src/components/CursorEffect";

function Providers({ children }) {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          margin: 0,
          padding: 0,
          bgColor: "#000020",
          color: "gray.500",
        },
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <CursorFollowingBackground />
      {children}
    </ChakraProvider>
  );
}

export default Providers;
