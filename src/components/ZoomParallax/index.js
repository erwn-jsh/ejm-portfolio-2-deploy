'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Pic1 from '../../../public/assets/ZoomParallax/1.webp';
import Pic2 from '../../../public/assets/ZoomParallax/2.webp';
import Pic3 from '../../../public/assets/ZoomParallax/3.webp';
import Pic4 from '../../../public/assets/ZoomParallax/4.webp';
import Wow from '../../../public/assets/ZoomParallax/wow.gif';
import Pic6 from '../../../public/assets/ZoomParallax/6.webp';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Wow,
      scale: scale4,
    },
    {
      src: Pic2,
      scale: scale5,
    },
    {
      src: Pic3,
      scale: scale6,
    },
    {
      src: Pic4,
      scale: scale8,
    },
    {
      src: Pic1,
      scale: scale9,
    },
    {
      src: Pic6,
      scale: scale8,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          if (index === 0) {
            return (
              <motion.div style={{ scale }} key={index} className={styles.el}>
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt="image" />
                </div>
              </motion.div>
            );
          } else {
            return (
              <motion.div style={{ scale }} key={index} className={styles.el}>
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt="image" placeholder="blur" />
                </div>
              </motion.div>
            );
          }
        })}
      </div>
    </div>
  );
}
