'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import style from './styles.module.scss';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { Zilla_Regular, Zilla_Semibold } from '../../utils/fonts';
import ProjImg1a from '../../../public/assets/Projects/1a.webp';
import ProjImg1b from '../../../public/assets/Projects/1b.webp';
import ProjImg1c from '../../../public/assets/Projects/1c.webp';
import ProjImg2b from '../../../public/assets/Projects/2b.webp';
import ProjImg2c from '../../../public/assets/Projects/2c.webp';

export default function Project() {
  const videoEl1 = useRef(null);
  const videoEl2 = useRef(null);
  const videoEl3 = useRef(null);

  const attemptPlay = (videoEl) => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error);
      });
  };

  useEffect(() => {
    attemptPlay(videoEl1);
    attemptPlay(videoEl2);
    attemptPlay(videoEl3);
  }, []);

  const externalLinks = [
    'https://ycis-hk-managebac-extension.onrender.com/',
    'https://www.culinary.edu.hk/',
    'https://robertandrewhiyas.co/',
  ];

  const clickHandle = (index) => {
    document.location.href = externalLinks[index];
  };

  return (
    <div className={`${style.projects}`} id="Projects" suppressHydrationWarning>
      <div className={style.projects_header}>
        <h3 className={`${style.landing_heading} ${Zilla_Semibold.className}`}>
          Projects Showcase
        </h3>
      </div>

      <div className={style.project}>
        <div className={style.project_header}>
          <h4 className={`${style.project_title} ${Zilla_Semibold.className}`}>
            YCIS HK Managebac Extension
          </h4>
          {/* <div className={style.image_container}>
            <img src={`/assets/Projects/1a.webp`} />
          </div> */}

          <div className={style.imageContainer}>
            <Image src={ProjImg1a} fill alt="image" />
          </div>

          <div className={`${style.header_text} ${Zilla_Regular.className}`}>
            <h4>
              <span> YCIS HK Managebac Extension</span>
            </h4>
            <h5>Yew Chung International School of Hong Kong - Secondary</h5>
            <p>
              <span className={style.pill}>React </span>
              <span className={style.pill}>NodeJS </span>
              <span className={style.pill}>MongoDB </span>
              <span className={style.pill}>Managebac API</span>
            </p>
          </div>
        </div>

        <div className={`${style.project_body} ${Zilla_Regular.className}`}>
          <div className={style.project_body_text}>
            <h5 className={`${Zilla_Semibold.className}`}>The Brief</h5>
            <p>
              YCIS HK is a major international school with over 1200 students
              from around the world. Owing to problems with their current
              information management system, admin and teaching staff were
              looking for ways to extend its functionality, particularly in 2
              areas:
            </p>
            <ul>
              <li>recording distribution of awards</li>
              <li>generating grade matrices</li>
            </ul>

            {/* <h5 className={` ${Zilla_Semibold.className}`}>The Results</h5>
            <ul>
              <li>recording distribution of awards</li>
              <li>generating grade matrices</li>
              <li>generating grade matrices</li>
            </ul>

            <a onClick={() => clickHandle(0)} className={style.button}>
              <p className={`${Zilla_Semibold.className}`}>Visit Site</p>
            </a> */}
          </div>

          {/* <div>
            <img
              className={style.supporting_image}
              src={`/assets/Projects/1b.webp`}
            />
            <img
              className={style.supporting_image}
              src={`/assets/Projects/1c.webp`}
            />
          </div> */}
          <div>
            <div className={style.supportingImage}>
              <Image src={ProjImg1b} fill alt="image" />
            </div>
            <div className={style.supportingImage}>
              <Image src={ProjImg1c} fill alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div className={style.project}>
        <div className={style.project_header}>
          <h4 className={`${style.project_title} ${Zilla_Semibold.className}`}>
            HKCA Website Modernization
          </h4>
          <div className={style.image_comparison}>
            <ImgComparisonSlider hover>
              <img slot="first" src={`/assets/Projects/2a2.webp`} />
              <img slot="second" src={`/assets/Projects/2a1.webp`} />
            </ImgComparisonSlider>
          </div>
          {/* <img src={`/assets/Projects/2a1.webp`} /> */}

          <div className={`${style.header_text} ${Zilla_Regular.className}`}>
            <h4>
              <span>HKCA Website Modernization</span>
            </h4>
            <h5>Hong Kong Culinary Academy</h5>
            <p>
              <span className={style.pill}>LAMP Stack </span>
              <span className={style.pill}>Wordpress </span>
              <span className={style.pill}>Elementor </span>
            </p>
          </div>
        </div>

        <div className={`${style.project_body} ${Zilla_Regular.className}`}>
          <div className={style.project_body_text}>
            <h5 className={`${Zilla_Semibold.className}`}>The Brief</h5>
            <p>
              HKCA is the territory’s leading culinary institution with a
              history of over 25 years. They offer 80+ courses to food
              enthusiasts and professionals alike. With their old site reaching
              its limits, they wanted a site with:
            </p>
            <ul>
              <li>easier navigation</li>
              <li>improved enrollment experience</li>
              <li>enhanced look & feel</li>
            </ul>

            {/* <h5 className={`${Zilla_Semibold.className}`}>The Results</h5>
            <ul>
              <li>recording distribution of awards</li>
              <li>generating grade matrices</li>
              <li>generating grade matrices</li>
            </ul>

            <a onClick={() => clickHandle(1)} className={style.button}>
              <p className={`${Zilla_Semibold.className}`}>Visit Site</p>
            </a> */}
          </div>

          {/* <div>
            <img
              className={style.supporting_image}
              src={`/assets/Projects/2b.webp`}
            />
            <img
              className={style.supporting_image}
              src={`/assets/Projects/2c.webp`}
            />
          </div> */}
          <div>
            <div className={style.supportingImage}>
              <Image src={ProjImg2b} fill alt="image" />
            </div>
            <div className={style.supportingImage}>
              <Image src={ProjImg2c} fill alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div className={style.project}>
        <div className={style.project_header}>
          <h4 className={`${style.project_title} ${Zilla_Semibold.className}`}>
            Robert Andrew Hiyas Official Site
          </h4>
          <div className={style.image_container}>
            <video
              playsInline
              loop
              muted
              alt="All the devices"
              src="/assets/Projects/RAH1HD.mp4"
              ref={videoEl1}
            />
          </div>

          <div className={`${style.header_text} ${Zilla_Regular.className}`}>
            <h4>
              <span>Robert Andrew Hiyas Official Site</span>
            </h4>
            <h5>Robert Andrew Hiyas</h5>
            <p>
              <span className={style.pill}>React Gatsby </span>
              <span className={style.pill}>GSAP</span>
              <span className={style.pill}>SASS</span>
            </p>
          </div>
        </div>

        <div className={`${style.project_body} ${Zilla_Regular.className}`}>
          <div className={style.project_body_text}>
            <h5 className={` ${Zilla_Semibold.className}`}>The Brief</h5>
            <p>
              Robert Andrew Hiyas is a fashion designer based in Cebu,
              specializing in cutting-edge avant-garde designs. His clients
              frequently come to him via Facebook, but his preference would be a
              more official online presence that would:
            </p>
            <ul>
              <li>showcase his work</li>
              <li>express his style & personality</li>
              <li>raise his SEO rankings</li>
            </ul>

            {/* <h5 className={`${Zilla_Semibold.className}`}>The Results</h5>
            <ul>
              <li>recording distribution of awards</li>
              <li>generating grade matrices</li>
              <li>generating grade matrices</li>
            </ul>
            <a onClick={() => clickHandle(2)} className={style.button}>
              <p className={`${Zilla_Semibold.className}`}>Visit Site</p>
            </a> */}
          </div>

          <div>
            <video
              playsInline
              loop
              muted
              alt="All the devices"
              src="/assets/Projects/RAH4.mp4"
              ref={videoEl3}
            />
            <video
              playsInline
              loop
              muted
              alt="All the devices"
              src="/assets/Projects/RAH2.mp4"
              ref={videoEl2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
