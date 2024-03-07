'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import { useState, useEffect } from 'react';
import Nav from './nav';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
        ></div>
      </div>
      <div className={`${styles.header} ${isActive ? 'open' : 'close'}`}>
        <motion.div
          className={styles.background}
          initial="initial"
          variants={background}
          animate={isActive ? 'open' : 'closed'}
        ></motion.div>
        <AnimatePresence mode="wait">
          {isActive && <Nav setIsActive={setIsActive} isActive={isActive} />}
        </AnimatePresence>
      </div>
    </>
  );
}
