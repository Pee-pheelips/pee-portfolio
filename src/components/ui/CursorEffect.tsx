"use client";

import React, { useEffect, useRef } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

/**
 * Soft spotlight that follows the cursor.
 * Updates CSS variables directly instead of React state, so moving the mouse
 * never re-renders the app. Disabled on touch devices.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const glow = useColorModeValue(
    "radial-gradient(600px circle at var(--x, 50%) var(--y, 30%), rgba(16, 185, 129, 0.08), transparent 65%)",
    "radial-gradient(600px circle at var(--x, 50%) var(--y, 30%), rgba(18, 225, 147, 0.07), transparent 65%)"
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${e.clientX}px`);
        el.style.setProperty("--y", `${e.clientY}px`);
        el.style.opacity = "1";
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <Box
      ref={ref}
      aria-hidden
      position="fixed"
      inset={0}
      pointerEvents="none"
      zIndex={0}
      opacity={0}
      transition="opacity 0.6s ease"
      background={glow}
    />
  );
}
