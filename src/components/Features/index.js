import { Box, Container, Grid, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { MdEvent, MdPhoneAndroid } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { FeatureItem } from "../FeatureItem";
import FeatureImg from "../../../public/images/feature-img.webp";

export const Features = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Tu seguridad es lo primero",
      description:
        "La aplicación te brinda una serie de recomendaciones a la hora de crear el evento, con el fin mantenerlo seguro aplicando las medidas de seguridad adecuadas.",
    },
    {
      icon: MdEvent,
      title: "Gestiona tu evento",
      description:
        "Con esta aplicacion podras crear, actualizar y gestionar tus eventos de manera segura, registra las tareas que tienes pendiente e incluso tus invitados.",
    },
    {
      icon: MdPhoneAndroid,
      title: "Portatil",
      description:
        "Al poder descargarla e intalarla en tu telefono puedes gestionar tus eventos desde cualquier lugar, solo con unos toques.",
    },
  ];
  return (
    <Grid gap={[8, , , , , 16]} px={[4, , , 16, , 24]} py={[12, , , 16, , 24]}>
      <Text
        fontSize={["2xl", , , "3xl"]}
        textShadow="md"
        fontWeight="500"
        fontFamily="Noto Sans JP, sans-serif"
        textAlign="center"
      >
        Si quieres gestionar un evento, tienes que probar esto
      </Text>
      <Grid
        templateColumns={["1f", , , , "1fr 1fr"]}
        justifyContent="center"
        alignContent="center"
        gap={[8, , , , 0]}
      >
        <Container maxW="container.md">
          <Grid
            templateRows="repeat(3,auto)"
            gap={[8, , , , , 16]}
            alignContent="center"
            h="100%"
          >
            {features.map((item, i) => (
              <FeatureItem key={i} {...item} />
            ))}
          </Grid>
        </Container>
        <Container maxW="container.lg">
          <Grid placeItems="center" h="100%">
            <Image
              src={FeatureImg}
              alt="App Feature Image"
              placeholder="blur"
              width={800}
              height={550}
            />
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};
