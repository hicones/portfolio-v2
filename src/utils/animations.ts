export const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
    y: "50%",
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.4, delay: 0.1 },
  },
};

export const curve = ({
  initialPath,
  targetPath,
  finalPath,
}: {
  initialPath: any;
  targetPath: any;
  finalPath: any;
}) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: finalPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

export const translate = {
  initial: {
    top: "100%",
  },
  enter: {
    top: "0",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    top: "-150%",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

export const textTransition = {
  initial: {
    opacity: 0,
    y: "5%",
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.75 },
  },
};

export const menuSlide = {
  initial: { x: "150%" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "150%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 },
  enter: (i: any) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  }),
  exit: (i: any) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
