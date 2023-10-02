// app/layout.tsx
"use client";
import { useState } from "react";
import {
	Box,
	Container,
	ColorModeScript,
	theme,
} from "@chakra-ui/react";
import { Providers } from "./providers";
// import Theme from "./theme";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Box
						bgGradient="linear(to-br,#000024, #000003)"
						color={"gray.500"}
						fontSize={{
							base: "normal",
							md: "lg",
						}}
					>
						<Container
							maxW={{
								md: "6xl",
								base: "4xl",
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
