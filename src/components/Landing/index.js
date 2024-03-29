'use client';
import React from 'react';
import styles from './styles.module.scss';
import FramerLineMask from '../Common/LineMask-F';
import { Zilla_Regular, Zilla_Semibold } from '../../utils/fonts';

const clickHandle = () => {
  document.location.href = 'mailto:joshmanuel2016@gmail.com';
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

        <h2
          className={`${styles.landing_subheading} ${Zilla_Regular.className}`}
        >
          <FramerLineMask
            phrases={[
              {
                text: 'I work at the',
                textStyle: '',
                text1: 'intersection',
                text1Style: 'text-light-bg-red'.concat(
                  ` ${Zilla_Semibold.className}`
                ),
                text2: 'of',
                text2Style: '',
                text3: 'technology,',
                text3Style: 'text-light-bg-purple'.concat(
                  ` ${Zilla_Semibold.className}`
                ),
              },
              {
                text: 'business',
                textStyle: 'text-light-bg-blue'.concat(
                  ` ${Zilla_Semibold.className}`
                ),
                text1: '&',
                text1Style: '',
                text2: 'design',
                text2Style: 'text-light-bg-orange'.concat(
                  ` ${Zilla_Semibold.className}`
                ),
              },
            ]}
            delay={6.5}
          />
        </h2>

        <a onClick={clickHandle} className={styles.button}>
          <p className={`${Zilla_Semibold.className}`}>
            joshmanuel2016@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
}
