import { menu_options } from "@/utils/constants";
import { TransitionLink } from "../transition-link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  return (
    <div className="flex sm:hidden items-center justify-between">
      <button
        className={cn(
          "cursor-pointer font-heading  transition duration-300 hover:text-primary px-4 lg:pt-0 lg:px-0",
          openMenu && "fixed top-4 right-4 z-50 text-background"
        )}
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Menu"
      >
        {openMenu ? "• close" : "• menu"}
      </button>
      <div
        className={cn(
          "translate-y-0 h-screen z-0 transition-all opacity-100 duration-500 fixed top-0 left-0 flex flex-col size-full divide-y divide-[#B7ADAD26]/15 text-background bg-[#1B1C1F]",
          { "opacity-0 -translate-y-full -z-10 h-0": !openMenu }
        )}
      >
        <motion.ul
          className="flex flex-1 flex-col gap-4 mt-4 items-start justify-center px-8"
          variants={containerVariants}
          initial="hidden"
          animate={openMenu ? "visible" : "hidden"}
        >
          <motion.li variants={itemVariants}>
            <TransitionLink
              href="/"
              className={cn(
                "hover:text-gray-800 hover:font-medium transition-all text-5xl",
                pathname === "/" && "text-gray-100 font-semibold"
              )}
            >
              Home
            </TransitionLink>
          </motion.li>
          {menu_options.map((option) => (
            <motion.li key={option.name} variants={itemVariants}>
              <TransitionLink
                href={option.href}
                className={cn(
                  "hover:text-gray-800 hover:font-medium transition-all text-5xl",
                  pathname === option.href && "text-gray-100 font-semibold"
                )}
              >
                {option.name}
              </TransitionLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
