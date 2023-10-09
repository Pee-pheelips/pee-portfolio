// MenuList.tsx
import React, { useState, useEffect } from "react";
import { Box, Flex, useStyleConfig, Text, HStack } from "@chakra-ui/react";

interface MenuItem {
  id: string;
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
        const sectionId = `#${menuItem.id}`;
        const section = document.querySelector(sectionId) as HTMLElement;

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;

          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            setActiveMenuItem(menuItem.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  const scrollToMenuItem = (id: string) => {
    const sectionId = `#${id}`;
    const section = document.querySelector(sectionId) as HTMLElement;

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setActiveMenuItem(id);
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
          key={menuItem.id}
          mt={"5"}
          alignItems={"center"}
          onClick={() => scrollToMenuItem(menuItem.id)}
          sx={hoverStyle}
          onMouseEnter={() => setHoveredItem(menuItem.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <HStack>
            <Box
              as="div"
              bgColor={
                activeMenuItem === menuItem.id
                  ? "white"
                  : hoveredItem === menuItem.id
                  ? "white"
                  : "gray.500"
              }
              width={
                activeMenuItem === menuItem.id || hoveredItem === menuItem.id
                  ? "14"
                  : "7"
              }
              transition="background-color 0.3s, color 0.3s"
              height={
                activeMenuItem === menuItem.id || hoveredItem === menuItem.id
                  ? "1.7px"
                  : "1px"
              }
              cursor={
                activeMenuItem === menuItem.id || hoveredItem === menuItem.id
                  ? "pointer"
                  : "pointer"
              }
            ></Box>
            <Text
              color={
                activeMenuItem === menuItem.id || hoveredItem === menuItem.id
                  ? "white"
                  : "gray.500"
              }
              cursor={
                activeMenuItem === menuItem.id || hoveredItem === menuItem.id
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
