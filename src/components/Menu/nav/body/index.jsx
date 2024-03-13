import Link from 'next/link';
import { Link as RSLink } from 'react-scroll';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { translate, blur } from '../../anim';

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
  isActive,
}) {
  const getChar = (title) => {
    let chars = [];
    title.split('').forEach((char, index) => {
      chars.push(
        <motion.span
          custom={[index * 0.02, (title.length - index) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={`c_${index}`}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={`${styles.body} zilla-slab-semibold`}>
      &#x2022;
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <RSLink
            // React Link Props
            to={href}
            spy={true}
            smooth={true}
            duration={3000}
            // Menu Props
            onMouseOver={() => setSelectedLink({ isActive: true, index })}
            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
            onClick={() => setIsActive(!isActive)}
            // href={href}
            key={`l_${index}`}
          >
            <motion.p
              variants={blur}
              initial="initial"
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? 'open'
                  : 'closed'
              }
            >
              &#x2022;&nbsp;{getChar(title)}
            </motion.p>
          </RSLink>
        );
      })}
    </div>
  );
}
