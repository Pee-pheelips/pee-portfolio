"use client";

import { Box, Button, Progress, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

interface PreloaderProps {
    onFinish: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const DURATION = 2000; // 2 seconds
    const INTERVAL = 100; // Update every 100ms

    useEffect(() => {
        const step = 100 / (DURATION / INTERVAL);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + step;
            });
        }, INTERVAL);

        const timeout = setTimeout(() => {
            onFinish();
        }, DURATION);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, [onFinish]);

    return (
        <AnimatePresence>
            <MotionBox
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                position="fixed"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="brand.background"
                zIndex={9999}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <VStack spacing={6} w="full" maxW="xs" px={4}>
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color="brand.primary"
                        letterSpacing="wider"
                        textAlign="center"
                    >
                        INITIALIZING
                    </Text>

                    <Progress
                        value={progress}
                        size="xs"
                        w="full"
                        colorScheme="green" // Maps to brand color logic if customized, or use css var
                        sx={{
                            "& > div": {
                                backgroundColor: "brand.primary"
                            }
                        }}
                        bg="whiteAlpha.200"
                        borderRadius="full"
                    />

                    <Text fontSize="xs" color="brand.text.muted">
                        LOADING PORTFOLIO EXPERIENCES...
                    </Text>

                    <Button
                        variant="ghost"
                        size="sm"
                        color="brand.text.secondary"
                        _hover={{ color: "brand.primary", bg: "whiteAlpha.100" }}
                        onClick={onFinish}
                        mt={8}
                        animation="fadeIn 2s ease-in"
                    >
                        SKIP INTRO
                    </Button>
                </VStack>
            </MotionBox>
        </AnimatePresence>
    );
}
