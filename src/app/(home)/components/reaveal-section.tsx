"use client";

import { containerVariants, itemVariants } from "@/utils/constants";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

export const RevealSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  const easedProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 150,
  });
  const maskSize = useTransform(easedProgress, [0, 1], [35 * 40, 35 * 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <motion.div
        className="stickyMask"
        style={{
          WebkitMaskSize: useTransform(maskSize, (v: number) => `${v}%`),
        }}
      >
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/assets/galaxy.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-background mix-blend-difference flex items-center flex-col gap-4">
        <div className="bg-background size-6 lg:size-12 rounded-full animate-fade-in" />
        <motion.h2
          className="text-background animate-fade font-mono text-3xl lg:text-7xl xl:text-8xl font-bold pt-36"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-200px" }}
          transition={{ duration: 1 }}
        >
          <br />
          <motion.span variants={itemVariants} className="text-foreground">
            Web Development
          </motion.span>
          <br />
          <motion.span variants={itemVariants} className="text-foreground">
            Design Experience
          </motion.span>
          <br />
          <motion.span variants={itemVariants} className="text-foreground">
            React Specialist
          </motion.span>
        </motion.h2>
      </div>
    </div>
  );
};
