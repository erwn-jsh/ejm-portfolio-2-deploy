export const containerSlideUp = {
  initial: {
    y: '0',
    // scale: 0.8,
  },
  exit: {
    y: '-100vh',
    // scale: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 2, delay: 4 },
  },
};
