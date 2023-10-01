// app/layout.tsx
import { Box, Container, ColorModeScript, theme } from "@chakra-ui/react";
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
						minH={"100vh"}
					>
						<Container maxW={"6xl"} pt={"85px"}>
							{children}
						</Container>
					</Box>
				</Providers>
			</body>
		</html>
	);
}
