// MenuList.tsx
import React, { useState, useEffect } from "react";
import { Box, Flex, useStyleConfig, Text, HStack } from "@chakra-ui/react";

interface MenuItem {
  name: any;
  title: string;
}

interface MenuListProps {
  menuItems: MenuItem[];
}

const MenuList: React.FC<MenuListProps> = ({ menuItems }) => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>("about"); // Initialize with "about"

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      menuItems.forEach((menuItem) => {
        const sectionId = `#${menuItem.name}`;
        const section = document.querySelector(sectionId) as HTMLElement;

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;

          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            setActiveMenuItem(menuItem.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  const scrollToMenuItem = (name: string) => {
    const sectionId = `#${name}`;
    const section = document.querySelector(sectionId) as HTMLElement;

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setActiveMenuItem(name);
    }
  };

  const hoverStyle = useStyleConfig("MenuItem", {
    isActive: activeMenuItem,
    isHovered: hoveredItem,
  });

  return (
    <Flex
      display={{ base: "none", md: "none", lg: "flex" }}
      mt={"20"}
      flexDir={"column"}
      justifyContent={"space-evenly"}
      fontSize={"sm"}
      fontWeight={"bold"}
      gap={4}
    >
      {menuItems.map((menuItem) => (
        <Flex
          key={menuItem.name}
          mt={"5"}
          alignItems={"center"}
          onClick={() => scrollToMenuItem(menuItem.name)}
          sx={hoverStyle}
          onMouseEnter={() => setHoveredItem(menuItem.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <HStack>
            <Box
              as="div"
              bgColor={
                activeMenuItem === menuItem.name
                  ? "white"
                  : hoveredItem === menuItem.name
                  ? "white"
                  : "gray.500"
              }
              width={
                activeMenuItem === menuItem.name ||
                hoveredItem === menuItem.name
                  ? "14"
                  : "7"
              }
              transition="background-color 0.3s, color 0.3s"
              height={
                activeMenuItem === menuItem.name ||
                hoveredItem === menuItem.name
                  ? "1.7px"
                  : "1px"
              }
              cursor={
                activeMenuItem === menuItem.name ||
                hoveredItem === menuItem.name
                  ? "pointer"
                  : "pointer"
              }
            ></Box>
            <Text
              color={
                activeMenuItem === menuItem.name ||
                hoveredItem === menuItem.name
                  ? "white"
                  : "gray.500"
              }
              cursor={
                activeMenuItem === menuItem.name ||
                hoveredItem === menuItem.name
                  ? "pointer"
                  : "pointer"
              }
            >
              {menuItem.title}
            </Text>
          </HStack>
        </Flex>
      ))}
    </Flex>
  );
};

export default MenuList;
