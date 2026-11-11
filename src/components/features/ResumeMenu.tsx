"use client";

import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
  ButtonProps,
} from "@chakra-ui/react";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import { RESUMES } from "@/data/portfolio";

interface ResumeMenuProps {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  label?: string;
  w?: ButtonProps["w"];
}

/** One button, three tailored résumés: web & mobile, mobile-only, frontend-only. */
export default function ResumeMenu({ variant = "brand", size = "md", label = "Résumé", w }: ResumeMenuProps) {
  return (
    <Menu placement="bottom-start" isLazy>
      <MenuButton
        as={Button}
        variant={variant}
        size={size}
        w={w}
        leftIcon={<FiDownload />}
        rightIcon={<FiChevronDown />}
      >
        {label}
      </MenuButton>
      <MenuList zIndex={30} minW="270px">
        {RESUMES.map((r) => (
          <MenuItem key={r.href} as="a" href={r.href} target="_blank" rel="noopener noreferrer" py={3} px={4}>
            <Box>
              <Text color="fg.default" fontWeight="semibold" fontSize="sm">
                {r.label}
              </Text>
              <Text color="fg.muted" fontSize="xs" mt={0.5}>
                {r.description}
              </Text>
            </Box>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
