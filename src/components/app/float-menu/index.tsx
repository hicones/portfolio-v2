import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Nav } from "./nav";

export const FloatMenu = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const path1Controls = useAnimation();
  const path2Controls = useAnimation();

  const path1Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 8.5L24 8.5" },
  };

  const path2Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    closed: { d: "M0 15.5L24 15.5" },
  };

  useEffect(() => {
    if (isActive) {
      path1Controls.start(path1Variants.open);
      path2Controls.start(path2Variants.open);
    } else {
      path1Controls.start(path1Variants.closed);
      path2Controls.start(path2Variants.closed);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <button className="float-menu" {...props} onClick={() => setIsActive(!isActive)}>
        <div className="float-menu-button stroke-white stroke-2 bg-gray-700 hover:bg-[#4477CE]">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <motion.path
              {...path1Variants.closed}
              animate={path1Controls}
              transition={{ duration: 0.2 }}
            />
            <motion.path
              {...path2Variants.closed}
              animate={path2Controls}
              transition={{ duration: 0.2 }}
            />
          </svg>
        </div>
      </button>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};
