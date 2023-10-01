"use client"
import { Flex, Box, Heading, Stack, Text, Button, useColorMode } from "@chakra-ui/react"
import Image from "next/image"
export default function(){
    // const {colorMode, toggleColorMode} = useColorMode()
    return(
        <>
        <Flex align={"center"} justifyContent={"space-between"} paddingTop={"8"}>
            <Box>
               <Image src="/logo.png" alt="logo" height={40} width={40}/>
            </Box>
            <Box>
            {/* ‽qP²φ */}
               <Stack direction={"row"} spacing={"14"}>
                   <Box><Text fontWeight={"semibold"}>About</Text></Box>
                   <Box><Text fontWeight={"semibold"}>Experience</Text></Box>
                   <Box><Text fontWeight={"semibold"}>Projects</Text></Box>
                   <Box><Text fontWeight={"semibold"}>Contact</Text></Box>
                   {/* <Button onClick={toggleColorMode}> Toggle</Button> */}
                </Stack>
            </Box>
        </Flex>
        </>
    )
}