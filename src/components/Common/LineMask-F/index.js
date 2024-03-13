'use client';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// const phrases = ;

export default function LineMask({
  phrases = [
    'It is a long established fact',
    'that a reader will be distracted',
    'by the readable content of a page',
    'when looking at its layout.',
  ],
  delay,
}) {
  return (
    <div>
      <MaskText phrases={phrases} delay={delay} />
    </div>
  );
}

export function MaskText({ phrases, delay }) {
  const animation = {
    initial: { y: '100%' },
    enter: (i) => ({
      y: '0',
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: delay ? delay : 0.075 * i,
        // delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={`${styles.lineMask} ${phrase.style}`}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? 'enter' : ''}
            >
              {phrase.text && (
                <span className={`${phrase.textStyle}`}>
                  {phrase.text}&nbsp;
                </span>
              )}
              {phrase.text1 && (
                <span className={`${phrase.text1Style}`}>
                  {phrase.text1}&nbsp;
                </span>
              )}
              {phrase.text2 && (
                <span className={`${phrase.text2Style}`}>
                  {phrase.text2}&nbsp;
                </span>
              )}
              {phrase.text3 && (
                <span className={`${phrase.text3Style}`}>{phrase.text3}</span>
              )}
              {phrase.text4 && (
                <span className={`${phrase.text4Style}`}>{phrase.text4}</span>
              )}
              {phrase.text5 && (
                <span className={`${phrase.text5Style}`}>{phrase.text5}</span>
              )}
              {phrase.text6 && (
                <span className={`${phrase.text6Style}`}>{phrase.text6}</span>
              )}
              {phrase.text7 && (
                <span className={`${phrase.text7Style}`}>{phrase.text7}</span>
              )}
              {phrase.text8 && (
                <span className={`${phrase.text8Style}`}>{phrase.text8}</span>
              )}
              {phrase.text9 && (
                <span className={`${phrase.text9Style}`}>{phrase.text9}</span>
              )}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
