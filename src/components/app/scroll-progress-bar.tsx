"use client";

import { useScroll, useSpring, motion } from "motion/react";

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="hidden lg:flex top-0 h-full  items-center justify-center lg:fixed right-5">
      <div className="h-36 rounded-full w-2 bg-stone-300 z-50 overflow-hidden ">
        <motion.div
          className="h-full bg-foreground origin-top overflow-hidden"
          style={{ scaleY }}
        />
      </div>
    </div>
  );
};
