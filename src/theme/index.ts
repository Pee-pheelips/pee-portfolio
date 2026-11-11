import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

/*
 * Light & dark mode
 * -----------------
 * Every color in the UI comes from the semantic tokens below. Each token has a
 * light value (`default`) and a dark value (`_dark`), so components never
 * hard-code colors and switch automatically with the color-mode toggle.
 *
 * Dark is the default look; the visitor's choice is remembered in localStorage.
 */
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,

  /*
   * Fonts are self-hosted with next/font/local (app/layout.tsx) and exposed as
   * CSS variables. Plus Jakarta Sans for headings, Inter for body text,
   * JetBrains Mono for small technical details (tags, dates, section numbers).
   */
  fonts: {
    heading: "var(--font-heading), 'Plus Jakarta Sans', system-ui, sans-serif",
    body: "var(--font-body), 'Inter', system-ui, -apple-system, sans-serif",
    mono: "var(--font-mono), 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  },

  semanticTokens: {
    colors: {
      // Surfaces
      "bg.canvas": { default: "#f6f7fb", _dark: "#000020" },
      "bg.surface": { default: "#ffffff", _dark: "rgba(255, 255, 255, 0.03)" },
      "bg.surfaceHover": { default: "#f2fbf7", _dark: "rgba(18, 225, 147, 0.05)" },
      "bg.elevated": { default: "#ffffff", _dark: "#070b2e" },
      "bg.muted": { default: "#eef1f6", _dark: "rgba(255, 255, 255, 0.06)" },
      "bg.nav": { default: "rgba(246, 247, 251, 0.85)", _dark: "rgba(0, 0, 32, 0.8)" },
      "bg.placeholder": { default: "#e2e8f0", _dark: "#0a0f35" },
      "bg.overlay": { default: "rgba(15, 23, 42, 0.35)", _dark: "rgba(0, 0, 20, 0.7)" },
      "bg.scrim": { default: "rgba(15, 23, 42, 0.10)", _dark: "rgba(0, 0, 32, 0.5)" },

      // Lines
      "border.subtle": { default: "rgba(15, 23, 42, 0.08)", _dark: "rgba(255, 255, 255, 0.08)" },
      "border.default": { default: "rgba(15, 23, 42, 0.16)", _dark: "rgba(255, 255, 255, 0.18)" },
      "border.accent": { default: "rgba(5, 150, 105, 0.4)", _dark: "rgba(18, 225, 147, 0.35)" },

      // Text
      // Light mode text is tinted toward the brand navy so it still feels like "you".
      "fg.default": { default: "#0b1033", _dark: "#f1f5f9" },
      "fg.secondary": { default: "#3a4562", _dark: "#cbd5e1" },
      "fg.muted": { default: "#545e78", _dark: "#94a3b8" },

      // Neutral tags: mint is reserved for actions, the active state and results.
      "tag.bg": { default: "#eceff6", _dark: "rgba(255, 255, 255, 0.06)" },
      "tag.fg": { default: "#3a4562", _dark: "#b4c0d3" },

      // Brand accent (mint). Text uses a deeper green in light mode for contrast.
      "accent.solid": { default: "#12e193", _dark: "#12e193" },
      "accent.solidHover": { default: "#0fcf86", _dark: "#3cf0ab" },
      "accent.onSolid": { default: "#00121c", _dark: "#00121c" },
      "accent.fg": { default: "#047857", _dark: "#12e193" },
      "accent.subtle": { default: "rgba(16, 185, 129, 0.10)", _dark: "rgba(18, 225, 147, 0.10)" },
      "accent.subtleBorder": { default: "rgba(5, 150, 105, 0.25)", _dark: "rgba(18, 225, 147, 0.25)" },
    },
    shadows: {
      card: { default: "0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 1px rgba(15, 23, 42, 0.03)", _dark: "none" },
      cardHover: {
        default: "0 20px 40px -24px rgba(15, 23, 42, 0.25)",
        _dark: "0 20px 44px -26px rgba(18, 225, 147, 0.45)",
      },
    },
  },

  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      "@media (prefers-reduced-motion: reduce)": {
        html: { scrollBehavior: "auto" },
      },
      body: {
        margin: 0,
        padding: 0,
        bg: "bg.canvas",
        color: "fg.secondary",
        fontSize: "md",
        lineHeight: "1.7",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        transition: "background-color 0.25s ease, color 0.25s ease",
      },
      "::selection": {
        background: "accent.subtle",
        color: "fg.default",
      },
      ":focus-visible": {
        outline: "2px solid",
        outlineColor: "accent.fg",
        outlineOffset: "3px",
        borderRadius: "6px",
      },
      "::-webkit-scrollbar": { width: "10px" },
      "::-webkit-scrollbar-track": { background: "transparent" },
      "::-webkit-scrollbar-thumb": {
        background: "rgba(18, 225, 147, 0.25)",
        borderRadius: "10px",
        border: "3px solid transparent",
        backgroundClip: "content-box",
      },
    },
  },

  components: {
    Heading: {
      baseStyle: {
        color: "fg.default",
        fontWeight: "700",
        letterSpacing: "-0.02em",
      },
    },
    Text: {
      baseStyle: {
        color: "fg.secondary",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "full",
      },
      sizes: {
        md: { h: "44px", px: 5, fontSize: "sm" },
        sm: { h: "34px", px: 3.5, fontSize: "sm" },
      },
      variants: {
        brand: {
          bg: "accent.solid",
          color: "accent.onSolid",
          _hover: { bg: "accent.solidHover", transform: "translateY(-1px)" },
          _active: { transform: "translateY(0)" },
        },
        outlineBrand: {
          border: "1px solid",
          borderColor: "border.default",
          color: "fg.default",
          bg: "transparent",
          _hover: {
            borderColor: "accent.fg",
            color: "accent.fg",
            bg: "accent.subtle",
          },
        },
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: "bg.elevated",
          border: "1px solid",
          borderColor: "border.subtle",
          borderRadius: "2xl",
        },
        overlay: {
          bg: "bg.overlay",
          backdropFilter: "blur(6px)",
        },
      },
    },
    Drawer: {
      baseStyle: {
        dialog: { bg: "bg.elevated" },
        overlay: { bg: "bg.overlay", backdropFilter: "blur(4px)" },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          bg: "bg.elevated",
          borderColor: "border.subtle",
          boxShadow: "lg",
          py: 2,
        },
        item: {
          bg: "transparent",
          _hover: { bg: "bg.muted" },
          _focus: { bg: "bg.muted" },
        },
      },
    },
    Tooltip: {
      baseStyle: {
        bg: "fg.default",
        color: "bg.canvas",
        borderRadius: "md",
        px: 2.5,
        py: 1,
        fontSize: "xs",
        "--popper-arrow-bg": "colors.fg.default",
      },
    },
  },
});

export default theme;
