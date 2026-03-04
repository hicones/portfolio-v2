"use client";

import * as motion from "motion/react-client";

export default function Loading() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const text = "Loading...";

  return (
    <div className="w-full h-lvh flex flex-col items-center justify-center bg-background">
      <motion.div
        className="flex overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, index) => (
          <motion.h1
            key={index}
            variants={itemVariants}
            className="text-foreground font-medium text-4xl md:text-6xl lg:text-8xl"
          >
            {char === " " ? "\u00A0" : char}
          </motion.h1>
        ))}
      </motion.div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-1 bg-foreground w-16 md:w-32 mt-8 rounded-full origin-left"
      />
    </div>
  );
}
