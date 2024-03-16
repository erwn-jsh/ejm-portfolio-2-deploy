'use client';
import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { containerSlideUp, opacity } from './anim';
import { motion } from 'framer-motion';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Zilla_Semibold } from '../../utils/fonts';

import Pic1 from '../../../public/assets/ZoomParallax/1.webp';
import Pic2 from '../../../public/assets/ZoomParallax/2.webp';
import Pic3 from '../../../public/assets/ZoomParallax/3.webp';
import Pic4 from '../../../public/assets/ZoomParallax/4.webp';
import Pic5 from '../../../public/assets/ZoomParallax/5.webp';
import Pic6 from '../../../public/assets/ZoomParallax/6.webp';
import Pic7 from '../../../public/assets/Landing/Landing.webp';

export default function Preloader() {
  const images = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7];
  const [index, setIndex] = useState(0);
  const words = ['Hello', '你好', '안녕', 'やほ', 'Bonjour'];

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  // const { height, width } = useWindowDimensions();

  return (
    <motion.div
      variants={containerSlideUp}
      initial="initial"
      exit="exit"
      className={style.container}
    >
      {images.map((image, index) => {
        return (
          <motion.div
            key={index}
            className={`${style.image_container} image_container`}
            initial={{ translateY: 0 }}
            animate={{
              opacity: 1,
              // translateY: height <= 420 ? '-600%' : '-200%',
              translateY: '-620%',
            }}
            transition={{
              duration: 1,
              delay: index * 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <Image src={image} fill alt="image" placeholder="blur" />
          </motion.div>
        );
      })}
      <motion.p
        className={`${Zilla_Semibold.className}`}
        variants={opacity}
        initial="initial"
        animate="enter"
      >
        Hello World
      </motion.p>
    </motion.div>
  );
}
