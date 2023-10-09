"use client";
// app/providers.tsx
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import CursorFollowingBackground from "@src/components/CursorEffect";

export function Providers({ children }: { children: React.ReactNode }) {
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
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <CursorFollowingBackground />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
