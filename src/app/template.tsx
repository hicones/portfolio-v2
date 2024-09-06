"use client";

import { SVG } from "@/components/app/loading-home/svg-loading";
import { textTransition } from "@/utils/animations";
import { pathnamesEnum } from "@/utils/loading-pages";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactElement }) {
  const pathname = usePathname();
  const [loadingTransition, setLoadingTransition] = useState(false);

  const [dimensions, setDimensions] = useState<any>({
    width: null,
    height: null,
  });

  function resetDimensions() {
    setDimensions({
      width: null,
      height: null,
    });
  }

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);

    return () => {
      resetDimensions();
      window.removeEventListener("resize", resize);
    };
  }, [pathname]);

  useEffect(() => {
    setLoadingTransition(true);
    document.body.style.cursor = "wait";
    setTimeout(() => {
      setLoadingTransition(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 1500);
  }, [pathname]);

  return (
    <div>
      <AnimatePresence mode="wait">
        {loadingTransition && (
          <>
            <div style={{ opacity: dimensions.width === null ? 1 : 0 }} id="background" />
            <motion.p
              variants={textTransition}
              initial="initial"
              animate="enter"
              exit="exit"
              className="text-white text-4xl flex absolute items-center justify-center z-50 h-screen w-full text-center font-title">
              {(pathnamesEnum as any)[pathname]}
            </motion.p>
            {dimensions?.width !== null && (
              <SVG width={dimensions.width} height={dimensions.height} />
            )}
          </>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
