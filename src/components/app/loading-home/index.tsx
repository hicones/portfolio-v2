"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { words, pathnamesEnum } from "@/utils/loading-pages";
import { opacity, slideUp } from "@/utils/animations";
import { useDimensions } from "@/hooks/useDimensions";
import { usePathname } from "next/navigation";

export const HomeLoading = () => {
  const [index, setIndex] = useState(0);
  const dimensions = useDimensions();
  const pathname = usePathname();

  useEffect(() => {
    if (index == words.length - 1) return;
    if (pathname === "/") {
      setTimeout(
        () => {
          setIndex(index + 1);
        },
        index === 0 ? 1000 : 150,
      );
    }
  }, [index]);

  const initialPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height + 300} 0 ${dimensions.height}  L0 0`;
  const targetPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-black h-screen w-screen flex items-center justify-center fixed z-50"
      variants={slideUp}
      initial="initial"
      exit="exit">
      {dimensions?.height > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-white text-4xl flex absolute z-10 font-title">
            {pathname === "/" ? words[index] : (pathnamesEnum as any)[pathname]}
          </motion.p>
          <svg className="introductionSVG">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-black"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
};
