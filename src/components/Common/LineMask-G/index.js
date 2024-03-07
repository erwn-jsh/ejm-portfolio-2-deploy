'use client';
import styles from './style.module.scss';
import React, { useRef, useEffect } from 'react';
import { gsap, useGSAP } from 'gsap';

gsap.defaults({
  duration: 2,
  ease: 'expo.out',
});

const textAnimationHello = (textRefs) => {
  const tl = gsap.timeline();

  tl.to(textRefs, {
    y: 0,
  }).to(textRefs, {
    y: '-100%',
    ease: 'expo.inOut',
  });

  return tl;
};

const textAnimation = (textRefs) => {
  return gsap.to(textRefs, {
    y: 0,
    stagger: 0.2,
  });
};

const index = ({ fontWeight, phrase, hello }) => {
  const textRefs = useRef([]);

  useEffect(() => {
    if (hello) {
      textAnimationHello(textRefs.current);
    } else {
      textAnimation(textRefs.current);
    }
  }, []);

  return (
    <div className={`${styles.lineMask} ${fontWeight}`}>
      <span>
        <span ref={(text) => textRefs.current.push(text)}>{phrase}</span>
      </span>
    </div>
  );
};

export default index;
