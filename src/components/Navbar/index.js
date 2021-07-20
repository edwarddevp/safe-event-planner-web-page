import { Flex, Grid, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useHeaderScroll } from "../hooks/useHeaderScrooll";

export const Navbar = ({ containerRef }) => {
  const [bg, ref] = useHeaderScroll(containerRef);

  return (
    <Flex
      ref={ref}
      bg={bg}
      h="72px"
      w="100%"
      position="fixed"
      zIndex="2"
      alignItems="center"
      px={4}
      transition="all 0.3s ease"
    >
      <Image
        src="/images/icon.png"
        alt="Safe Event Planner logo"
        width={50}
        height={50}
        layout="fixed"
      />
      <Text
        ml={4}
        color="white"
        fontSize="2xl"
        textShadow="md"
        fontWeight="500"
        fontFamily="Noto Sans JP, sans-serif"
      >
        Safe Event Planner
      </Text>
      <Spacer />
    </Flex>
  );
};
