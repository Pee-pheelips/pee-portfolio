import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Providers from "./providers";

export default function RootLayout({ children }) {
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
