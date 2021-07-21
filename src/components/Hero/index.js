import React from "react";
import Image from "next/image";
import { Button, Grid, Text } from "@chakra-ui/react";
import styles from "../../../styles/Home.module.css";

export const Hero = () => (
  <Grid
    h="100vh"
    justifyContent="center"
    alignContent="center"
    position="relative"
    bg="gray.900"
  >
    <Grid zIndex={1} justifyItems="center" gap={8}>
      <Text
        color="white"
        fontSize={["4xl", , , "5xl"]}
        textShadow="md"
        fontWeight="500"
        fontFamily="Noto Sans JP, sans-serif"
        textAlign="center"
      >
        Safe Event Planner
      </Text>
      <Image
        src="/images/icon.png"
        alt="Safe Event Planner logo"
        width={150}
        height={150}
      />
      <Button size="lg" colorScheme="primary">
        <a
          href="https://mega.nz/file/McxyCIIa#HR138HWbUPfL96e8P7fP-5LByNT4IDsBFmuXRq9DscM"
          target="_blank"
          rel="noreferrer"
        >
          Descarga la aplicacion aqui
        </a>
      </Button>
    </Grid>
    <Image
      src="/images/hero-bg.jpg"
      alt="hero image"
      layout="fill"
      objectFit="cover"
      className={styles?.heroImg}
      // priority
    />
  </Grid>
);
