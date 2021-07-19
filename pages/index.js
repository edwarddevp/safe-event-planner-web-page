import { Box, Button, Grid, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box position="relative">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header></header>

      <main>
        <Grid
          h="100vh"
          justifyContent="center"
          alignContent="center"
          position="relative"
        >
          <Grid zIndex={1} justifyItems="center" gap={8}>
            <Text
              color="white"
              fontSize="5xl"
              textShadow="md"
              fontWeight="500"
              fontFamily="Noto Sans JP, sans-serif"
            >
              Safe Event Planner
            </Text>
            <Image
              src="/images/icon.png"
              alt="Safe Event Planner logo"
              width={180}
              height={180}
            />
            <Button size="lg" colorScheme="primary">
              <a
                href="https://mega.nz/file/McxyCIIa#HR138HWbUPfL96e8P7fP-5LByNT4IDsBFmuXRq9DscM"
                target="_blank"
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
            quality={80}
            priority
            className={styles?.heroImg}
          />
        </Grid>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        Powered by Safe Event Planner
        <span className={styles.logo}>
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        </span>
        {/* </a> */}
      </footer>
    </Box>
  );
}
