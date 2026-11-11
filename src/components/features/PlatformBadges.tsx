import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { FiSmartphone, FiMonitor } from "react-icons/fi";
import { Platform } from "@/types";

const META: Record<Platform, { label: string; icon: typeof FiSmartphone }> = {
  mobile: { label: "Mobile app", icon: FiSmartphone },
  web: { label: "Web app", icon: FiMonitor },
};

/** Glass badges that sit on top of project screenshots (same look in both modes). */
export default function PlatformBadges({ platforms }: { platforms: Platform[] }) {
  return (
    <HStack spacing={1.5} wrap="wrap">
      {platforms.map((p) => (
        <HStack
          key={p}
          spacing={1.5}
          px={2.5}
          py={1}
          borderRadius="full"
          bg="rgba(0, 0, 32, 0.72)"
          backdropFilter="blur(8px)"
          border="1px solid rgba(255, 255, 255, 0.16)"
        >
          <Icon as={META[p].icon} boxSize={3.5} color="#12e193" aria-hidden />
          <Text fontSize="xs" fontWeight="semibold" color="#f1f5f9">
            {META[p].label}
          </Text>
        </HStack>
      ))}
    </HStack>
  );
}
