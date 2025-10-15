import getThemeColor from "../utils/getThemeColor"

export const fade = {
  pageVariants: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  coverVariants: {
    initial: { scaleY: 0 },
    animate: { scaleY: 0 },
    exit: { scaleY: 0 },
  },
  transition: { duration: 0.15 },
};

export const cover = (color = getThemeColor()) => ({
  pageVariants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 0.25, duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  },
  coverVariants: {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.2, duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  },
  coverBackgroundColor: color,
});