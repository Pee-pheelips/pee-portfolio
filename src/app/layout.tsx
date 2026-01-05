import React from "react";
import type { Metadata } from "next";
import { Box, Container, ColorModeScript } from "@chakra-ui/react";
import Providers from "./providers";
import theme from "@/theme";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Philip Paul | Front End Engineer",
  description: "Passionate about building intuitive interfaces and solving complex problems with clean, scalable code.",
  keywords: ["Front End Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={syne.className}>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <Box fontSize={{ base: "md", md: "lg" }}>
            <Container
              maxW={{
                base: "container.xl",
                md: "6xl",
                lg: "7xl",
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
