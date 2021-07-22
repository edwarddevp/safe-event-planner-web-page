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
      <Button
        size="lg"
        colorScheme="primary"
        bgGradient="radial(primary.500, primary.600)"
        color="white"
      >
        <a
          href="https://mega.nz/file/9RhwgYjK#e1qmO0rz-4UhsnGTDl3_yM1mAHh7cs9JoUlXWnUOHdM"
          target="_blank"
          rel="noreferrer"
        >
          <Text textShadow="md">Descarga la aplicacion aqui</Text>
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
