'use client';
import React, { useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './styles.module.scss';

export default function Home({ values, offset1 = 0.9, offset2 = 0.25 }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: [`start ${offset1}`, `start ${offset2}`],
  });

  return (
    <p ref={element} className={styles.paragraph}>
      {values.map((value, i) => {
        if (value.word.text) {
          const start = i / values.length;
          const end = start + 1 / values.length;

          return (
            <Word
              key={i}
              range={[start, end]}
              progress={scrollYProgress}
              style={value.word.style}
            >
              {value.word.text}
            </Word>
          );
        }
        return <br style={{ display: 'block', marginTop: '5rem' }} />;
      })}
    </p>
  );
};

const Word = ({ children, range, progress, style }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={`${styles.word} zilla-slab-semibold ${style}`}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
