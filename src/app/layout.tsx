import React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ColorModeScript } from "@chakra-ui/react";
import Providers from "./providers";
import theme from "@/theme";
import { SITE } from "@/data/portfolio";

// Self-hosted variable fonts: no request to Google at build or run time.
const heading = localFont({
  src: "../fonts/PlusJakartaSans-Variable.woff2",
  weight: "200 800",
  variable: "--font-heading",
  display: "swap",
});

const body = localFont({
  src: "../fonts/Inter-Variable.woff2",
  weight: "100 900",
  variable: "--font-body",
  display: "swap",
});

const mono = localFont({
  src: "../fonts/JetBrainsMono-Variable.woff2",
  weight: "100 800",
  variable: "--font-mono",
  display: "swap",
});

const title = `${SITE.name} — ${SITE.role}`;
const description =
  "Frontend & Mobile Engineer building fast, accessible web and mobile apps with React, Next.js, React Native and Expo. Projects across fintech, Web3 and SaaS.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    "Frontend Engineer",
    "Mobile Engineer",
    "React Native Developer",
    "React",
    "Next.js",
    "Expo",
    "TypeScript",
    "Paul Philip",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: {
    type: "website",
    url: SITE.url,
    title,
    description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#000020" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
