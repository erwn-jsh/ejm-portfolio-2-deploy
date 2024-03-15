import React from 'react';
import style from './style.module.scss';
import FramerLineMask from '../Common/LineMask-F';
import { FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { Zilla_Semibold } from '../../utils/fonts';

const clickHandle = (index) => {
  document.location.href = externalLinks[index];
};

const externalLinks = [
  'mailto:joshmanuel2016@gmail.com',
  'https://github.com/erwn-jsh',
  'https://www.linkedin.com/in/josh-man/',
];

export default function Contact() {
  return (
    <div className={style.container} id="Contact">
      <div className={style.wrapper}>
        <h3 className={`${style.end} ${Zilla_Semibold.className}`}>Contact</h3>
        <div className={`${style.text_body} ${Zilla_Semibold.className}`}>
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
                text1Style: 'text-light-bg-blue'.concat(
                  ` ${Zilla_Semibold.className}`
                ),
                text2: 'that is',
                text2Style: '',
                text3: 'high impact,',
                text3Style: 'text-light-bg-green'.concat(
                  ` ${Zilla_Semibold.className}`
                ),
                text4: ' drives value,',
                text4Style: 'text-light-bg-purple'.concat(
                  ` ${Zilla_Semibold.className}`
                ),
                text5: ' and',
                text5Style: '',
                text6: ' looks good?',
                text6Style: 'text-light-bg-orange'.concat(
                  ` ${Zilla_Semibold.className}`
                ),
              },
              {
                text: 'Let’s get the conversation started.',
                textStyle: '',
              },
            ]}
          />
          <div className={style.contact_icons}>
            <div className={style.icon} onClick={() => clickHandle(0)}>
              <a href={externalLinks[0]} target="_blank">
                <FaRegEnvelope />
              </a>
            </div>
            <div className={style.icon} onClick={() => clickHandle(1)}>
              <a href={externalLinks[1]} target="_blank">
                <FaGithub />
              </a>
            </div>
            <div className={style.icon} onClick={() => clickHandle(2)}>
              <a href={externalLinks[2]} target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
