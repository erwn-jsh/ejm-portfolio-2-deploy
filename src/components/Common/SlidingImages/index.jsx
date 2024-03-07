import styles from './style.module.scss';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const slider1 = [
  {
    color: '#5C6265',
    src: '1a.png',
  },
  {
    color: '#EDDD3C',
    src: '2a1.png',
  },
  {
    color: '#69688A',
    src: '3b.png',
  },
  {
    color: '#D2B490',
    src: '2a2.png',
  },
];

const slider2 = [
  {
    color: '#040706',
    src: '3d.png',
  },
  {
    color: '#5C6265',
    src: '1a.png',
  },
  {
    color: '#D2B490',
    src: '2a2.png',
  },
  {
    color: '#E0CCC8',
    src: '3c.png',
  },
];

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.8], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={'image'}
                  src={`/assets/Projects/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={`sl2_${index}`}
              style={{ backgroundColor: project.color }}
              className={styles.project}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={'image'}
                  src={`/assets/Projects/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
