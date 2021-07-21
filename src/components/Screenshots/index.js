import { Container, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import AppScreenshots from "../../../public/images/app-screenshots.png";

export const Screenshots = () => {
  return (
    <Grid
      bg="primary.500"
      bgGradient="radial(primary.500, primary.600)"
      minH="40vh"
      pt={4}
      pb={8}
    >
      <Container
        d="grid"
        placeItems="center"
        justifyContent="center"
        maxW="container.lg"
      >
        <Text
          color="white"
          fontSize="4xl"
          textShadow="md"
          fontWeight="500"
          fontFamily="Noto Sans JP, sans-serif"
          mb={8}
        >
          Capturas de la aplicación
        </Text>
        <Image
          src={AppScreenshots}
          alt="App Feature Image"
          placeholder="blur"
          quality="100"
          width={900}
          height={500}
        />
      </Container>
    </Grid>
  );
};
