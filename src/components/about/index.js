import { Container, Grid, Text } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  const descriptionStyles = {
    color: "white",
    fontSize: "lg",
    textShadow: "xl",
    fontWeight: "500",
    fontFamily: "Noto Sans JP, sans-serif",
    textAlign: "center",
  };
  return (
    <Grid
      bg="primary.500"
      bgGradient="radial(primary.500, #CAA353, primary.500)"
      minH="40vh"
      pt={4}
      pb={8}
    >
      <Container d="grid" placeItems="center" justifyContent="center">
        <Text
          color="white"
          fontSize="4xl"
          textShadow="md"
          fontWeight="500"
          fontFamily="Noto Sans JP, sans-serif"
          mb={2}
        >
          Sobre Nosotros
        </Text>
        <Text {...descriptionStyles}>
          Safe Event Planner es una aplicación que busca ayudarte a administrar
          tus eventos y mantenerlos seguro de infecciones
        </Text>
        <Text {...descriptionStyles}>
          Para ello te brindamos herramientas como el creador de eventos y el
          puntaje de seguridad, para que puedas observar en todo momento que tan
          seguro es tu evento
        </Text>
        <Text {...descriptionStyles}>
          Para que te puedas proteger a ti y a tus seres queridos
        </Text>
      </Container>
    </Grid>
  );
};
