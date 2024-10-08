'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Preloader from '../components/Preloader-F';
import Landing from '../components/Landing';
import About from '../components/About';
import ZoomParallax from '../components/ZoomParallax';
import Projects from '../components/Projects';
import SlidingImages from '../components/Common/SlidingImages';
import Contact from '../components/Contact';
import Menu from '../components/Menu';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    // const lenis = new Lenis();
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });

    const raf = (time) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 5500);
    })();
  });

  return (
    <>
      <Head>
        <title>Erwin Joshua Manuel - Profile Site</title>
        <meta
          name="description"
          content="Personal profile site of Erwin Joshua Manuel"
        />
        <meta
          name="keywords"
          content="profile, personal profile, personal site, personal profile site, portfolio, portfolio site, projects, web development, fullstack development, frontend development"
        />
        <meta name="author" content="Erwin Joshua Manuel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Menu />

        <Landing />
        <About />
        <ZoomParallax />
        <Projects />
        <SlidingImages />
        <Contact />
      </main>
    </>
  );
}
