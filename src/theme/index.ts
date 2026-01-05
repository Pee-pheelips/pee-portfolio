import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Syne', sans-serif",
    body: "'Syne', sans-serif",
  },
  colors: {
    brand: {
      primary: "#12e193", // Mint green
      background: "#000020", // Deep blue/black
      text: {
        primary: "gray.100",
        secondary: "gray.400",
        muted: "gray.500",
      },
      card: {
        hover: "rgba(20, 100, 150, 0.10)",
        border: "rgba(255, 255, 255, 0.1)",
      },
      pill: {
        bg: "rgba(18, 225, 147, 0.1)",
        text: "brand.primary",
      },
    },
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        bg: "brand.background",
        color: "brand.text.secondary",
        fontFamily: "'Syne', sans-serif",
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        background: "brand.background",
      },
      "::-webkit-scrollbar-thumb": {
        background: "rgba(18, 225, 147, 0.2)",
        borderRadius: "10px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "rgba(18, 225, 147, 0.4)",
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: "container.xl",
      },
    },
    Heading: {
      baseStyle: {
        color: "brand.text.primary",
      },
    },
    Text: {
      baseStyle: {
        color: "brand.text.secondary",
      },
    },
  },
});

export default theme;
