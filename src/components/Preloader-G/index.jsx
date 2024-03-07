import React, { useLayoutEffect, useRef } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import gsap from 'gsap';

import Pic1 from '../../../public/assets/ZoomParallax/1.jpg';
import Pic2 from '../../../public/assets/ZoomParallax/2.jpg';
import Pic3 from '../../../public/assets/ZoomParallax/3.jpg';
import Pic4 from '../../../public/assets/ZoomParallax/4.jpg';
import Pic5 from '../../../public/assets/ZoomParallax/5.jpg';
import Pic6 from '../../../public/assets/ZoomParallax/6.jpg';
import Pic7 from '../../../public/assets/Landing/Landing.jpg';

const index = () => {
  const images = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7];
  const imagesRef = useRef([]);
  const finalImage = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'Expo.easeInOut',
        },
      });

      tl.to(imagesRef.current, {
        duration: 2,
        y: '-200%',
        delay: 1,
        stagger: 0.3,
        ease: 'Expo.easeInOut',
        force3D: true,
      })
        .to(finalImage.current, {
          scale: '2.5',
          ease: 'Expo.easeInOut',
        })
        .to(container.current, {
          opacity: 0,
          ease: 'Expo.easeInOut',
        });
    });

    return () => context.revert();
  });

  return (
    <div className={`${style.container} container`} ref={container}>
      {images.map((image, index) => {
        if (index !== 6) {
          return (
            <div
              key={index}
              className={`${style.image_container} image_container`}
              ref={(ref) => (imagesRef.current[index] = ref)}
            >
              <Image src={image} fill alt="image" placeholder="blur" />
            </div>
          );
        } else if (index === 6) {
          return (
            <div key={index} className={`${style.image_container} final`}>
              <Image
                src={Pic7}
                fill
                alt="image"
                placeholder="blur"
                ref={finalImage}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default index;
