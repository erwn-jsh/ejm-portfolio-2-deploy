import { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './body';

export default function Nav({ setIsActive, isActive }) {
  const links = [
    {
      title: 'Home',
      href: 'Home',
      symbol: '&#x2680;',
    },
    {
      title: 'About',
      href: 'About',
      symbol: '&#x2681;',
    },
    {
      title: 'Projects',
      href: 'Projects',
      symbol: '&#x2682;',
    },
    {
      title: 'Contact',
      href: 'Contact',
      symbol: '&#x2683;',
    },
  ];

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
            isActive={isActive}
          />
        </div>
      </div>
    </motion.div>
  );
}
