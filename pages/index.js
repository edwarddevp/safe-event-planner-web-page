import Head from "next/head";
import { Hero } from "../src/components/Hero";
import { Navbar } from "../src/components/Navbar";
import styles from "../styles/Home.module.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useRef } from "react";
import dynamic from "next/dynamic";
// import { About } from "../src/components/About";
// import { Features } from "../src/components/Features";

const About = dynamic(() =>
  import("../src/components/About").then((mod) => mod.About)
);

const Features = dynamic(() =>
  import("../src/components/Features").then((mod) => mod.Features)
);

export default function Home() {
  const containerRef = useRef(null);

  return (
    <PerfectScrollbar
      containerRef={(ref) => (containerRef.current = ref)}
      style={{ height: "100vh" }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar containerRef={containerRef} />
      </header>

      <main>
        <Hero />
        <About />
        <Features />
      </main>

      <footer className={styles.footer}>
        © 2021 Safe Event Planner. All rights reserved.
      </footer>
    </PerfectScrollbar>
  );
}
