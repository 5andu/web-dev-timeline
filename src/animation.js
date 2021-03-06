export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const pageSlider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
    z: 2,
  },
};

export const pageSlider2 = {
  hidden: { x: "130%", skew: "-45deg" },
  show: {
    x: "-100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
    z: 2,
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};
