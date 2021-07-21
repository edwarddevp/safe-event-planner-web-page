import dynamic from "next/dynamic";
import Head from "next/head";
import CustomScroll from "react-custom-scroll";
import styles from "../styles/Home.module.css";
import { Hero } from "../src/components/Hero";
import { Navbar } from "../src/components/Navbar";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

const About = dynamic(() =>
  import("../src/components/About").then((mod) => mod.About)
);

const Features = dynamic(() =>
  import("../src/components/Features").then((mod) => mod.Features)
);

export default function Home() {
  const [headerBg, setHeaderBg] = useState("transparent");

  const changeNavbarBg = (value) => {
    if (value > 100) {
      setHeaderBg("rgb(0,0,0,0.8)");
    } else {
      setHeaderBg("transparent");
    }
  };

  return (
    <Box h="100vh">
      <CustomScroll
        onScroll={(e) => changeNavbarBg(e.target.scrollTop)}
        heightRelativeToParent="100%"
      >
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-custom-scroll@4.2.0/dist/customScroll.css"
          />
        </Head>

        <header>
          <Navbar headerBg={headerBg} />
        </header>

        <main>
          <Hero />
          <About />
          <Features />
        </main>

        <footer className={styles.footer}>
          © 2021 Safe Event Planner. All rights reserved.
        </footer>
      </CustomScroll>
      {/*language=CSS*/}
      <style jsx global>
        {`
          .rcs-inner-handle {
            background-color: #cccccc !important;
          }
        `}
      </style>
    </Box>
  );
}
