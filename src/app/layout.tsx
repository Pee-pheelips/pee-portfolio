// app/layout.tsx
"use client";
import { useState } from "react";
import { Box, Container, ColorModeScript, theme } from "@chakra-ui/react";
import { Providers } from "./providers";
import CursorFollowingBackground from "@/components/CursorEffect";
// import Theme from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          
          <Box
            fontSize={{
              base: "normal",
              md: "lg",
            }}
          >
            <Container
              maxW={{
                md: "6xl",
                lg: "7xl",
                base: "container.xl",
              }}
              pt={{
                base: "40px",
                md: "85px",
              }}
            >
              {children}
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
