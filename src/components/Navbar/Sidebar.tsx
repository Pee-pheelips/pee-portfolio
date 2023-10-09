import { Box, Flex, Icon } from "@chakra-ui/react";
import { useState } from "react";

export default function SideBar() {
  const menu = ["ABOUT", "EXPERIENCE", "PROJECTS", "BLOG"];

  // Create an array of boolean states, one for each menu item
  const [isHovered, setIsHovered] = useState(menu.map(() => false));

  const handleMouseEnter = (index: any) => {
    const newHoveredStates = [...isHovered];
    newHoveredStates[index] = true;
    setIsHovered(newHoveredStates);
  };

  const handleMouseLeave = (index: any) => {
    const newHoveredStates = [...isHovered];
    newHoveredStates[index] = false;
    setIsHovered(newHoveredStates);
  };

  return (
    <Flex
      display={{ base: "none", md: "none", lg: "flex" }}
      mt={"20"}
      flexDir={"column"}
      justifyContent={"space-evenly"}
      fontSize={"sm"}
      fontWeight={"bold"}
    >
      {menu.map((menuList, index) => (
        <Flex
          key={index}
          mt={"4"}
          alignItems={"center"}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          cursor={isHovered[index] ? "pointer" : "pointer"}
        >
          <Box
            as="div"
            bgColor={isHovered[index] ? "white" : "gray.500"}
            width={isHovered[index] ? "12" : "7"}
            transition="background-color 0.3s, color 0.3s"
            height={isHovered[index] ? "1.7px" : "1px"}
            mr={"2"}
          ></Box>
          <Box
            color={isHovered[index] ? "white" : "gray.500"}
            cursor={isHovered[index] ? "pointer" : "pointer"}
          >
            {menuList}
          </Box>
        </Flex>
      ))}
    </Flex>
  );
}
