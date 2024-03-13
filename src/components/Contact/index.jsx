import React from 'react';
import style from './style.module.scss';
import FramerLineMask from '../Common/LineMask-F';
import { FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className={style.container} id="Contact">
      <div className={style.wrapper}>
        <h3 className={`${style.end} zilla-slab-semibold`}>Contact</h3>
        <div className={`${style.text_body} zilla-slab-semibold`}>
          {/* <p>
            Looking to build an online service that is high impact, drives
            value, and looks good?
          </p> */}
          <FramerLineMask
            phrases={[
              {
                text: 'Looking to build an',
                textStyle: '',
                text1: 'online service',
                text1Style: 'text-light-bg-blue zilla-slab-semibold',
                text2: 'that is',
                text2Style: '',
                text3: 'high impact,',
                text3Style: 'text-light-bg-green zilla-slab-semibold',
                text4: ' drives value,',
                text4Style: 'text-light-bg-purple zilla-slab-semibold',
                text5: ' and',
                text5Style: '',
                text6: ' looks good?',
                text6Style: 'text-light-bg-orange zilla-slab-semibold',
              },
              {
                text: 'Let’s get the conversation started.',
                textStyle: '',
              },
            ]}
          />
          <div className={style.contact_icons}>
            <div className={style.icon}>
              <FaRegEnvelope />
            </div>
            <div className={style.icon}>
              <FaGithub />
            </div>
            <div className={style.icon}>
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
