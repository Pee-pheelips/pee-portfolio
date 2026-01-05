"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import CursorFollowingBackground from "@/components/ui/CursorEffect";
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={theme}>
            <CursorFollowingBackground />
            {children}
        </ChakraProvider>
    );
}
