import { Flex, Grid, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const Navbar = ({ headerBg }) => {
  return (
    <Flex
      bg={["transparent", , , headerBg]}
      h="72px"
      w="100%"
      position={["absolute", , , "fixed"]}
      zIndex="2"
      alignItems="center"
      px={4}
      transition="all 0.3s ease"
    >
      <Image
        src="/images/icon.webp"
        alt="Safe Event Planner logo"
        width={50}
        height={50}
        // layout="fixed"
      />
      <Text
        ml={4}
        color="white"
        fontSize={["xl", , , , , "2xl"]}
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
