'use client';
import React from 'react';
import styles from './styles.module.scss';
import { Zilla_Slab } from 'next/font/google';
import FramerLineMask from '../Common/LineMask-F';
import Logo from '../../../public/assets/Logo/Logo.png';
import { Zilla_Regular, Zilla_Semibold } from '../../utils/fonts';

const zilla = Zilla_Slab({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const clickHandle = () => {
  document.location.href = 'joshmanuel2016@gmail.com';
};

export default function Landing() {
  return (
    <div className={styles.landing_wrapper} suppressHydrationWarning id="Home">
      <div className={styles.landing_content}>
        {/* actual content */}

        <img
          src={`/assets/Logo/Logo.svg`}
          style={{ width: '70px', height: '47px' }}
          alt=""
        />

        <h1 className={`${styles.landing_heading} ${Zilla_Semibold.className}`}>
          <FramerLineMask
            phrases={[
              {
                text: 'Erwin Joshua Manuel',
                textStyle: '',
              },
              {
                text: 'Web Developer',
                textStyle: '',
              },
            ]}
            delay={6}
          />
        </h1>

        <h2 className={`${styles.landing_subheading} zilla-slab-regular`}>
          <FramerLineMask
            phrases={[
              {
                text: 'I work at the',
                textStyle: '',
                text1: 'intersection',
                text1Style: 'text-light-bg-red zilla-slab-semibold',
                text2: 'of',
                text2Style: '',
                text3: 'technology,',
                text3Style: 'text-light-bg-purple zilla-slab-semibold',
              },
              {
                text: 'business',
                textStyle: 'text-light-bg-blue zilla-slab-semibold',
                text1: '&',
                text1Style: '',
                text2: 'design',
                text2Style: 'text-light-bg-orange zilla-slab-semibold',
              },
            ]}
            delay={6.5}
          />
        </h2>

        <a onClick={clickHandle} className={styles.button}>
          <p className="zilla-slab-semibold">joshmanuel2016@gmail.com</p>
        </a>
      </div>
    </div>
  );
}
