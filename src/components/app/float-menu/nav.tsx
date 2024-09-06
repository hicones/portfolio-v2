import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FloatMenuCurve } from "./float-menu-curve";
import { menuSlide } from "@/utils/animations";
import Link from "next/link";

const navList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blogs" },
  { name: "Projects", path: "/projects" },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed-nav">
      <div className="box-border h-full flex flex-col justify-between z-[99] relative w-full">
        <div className="">
          <div className="text-white">
            <p>Navigation</p>
          </div>
          <ul className="flex flex-col gap-4 items-center">
            {navList.map((navItem, index) => (
              <li
                key={index}
                id={`nav-item ${index}`}
                className={`hover-underline-animation transition duration-300 ${pathname === navItem.path ? "text-[#4477CE] -z-10" : "text-white"}`}>
                <Link href={navItem.path}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FloatMenuCurve />
    </motion.div>
  );
};
