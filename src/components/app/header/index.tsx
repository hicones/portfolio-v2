import React, { LegacyRef, forwardRef } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = forwardRef<HTMLHeadingElement>((props, ref) => {
  const pathname = usePathname();

  const navList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blogs" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header
      className="flex justify-between items-center w-full lg:p-12 px-4 py-4 flex-wrap z-0"
      ref={ref}
      {...props}>
      <Link href="/">
        <h1 className="font-title text-3xl font-bold">Hicones Tech</h1>
      </Link>

      <nav className="text-lg font-medium font-title hidden md:flex">
        <ul className="flex space-x-4">
          {navList.map((navItem, index) => (
            <li
              key={index}
              id={`nav-item ${index}`}
              className={`hover-underline-animation transition duration-300 ${pathname === navItem.path ? "text-[#4477CE] -z-10" : ""}`}>
              <Link href={navItem.path}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="text-lg font-medium font-title flex md:hidden">
        <ul className="flex space-x-4">
          <li className={`hover-underline-animation transition duration-300`}>Menu</li>
        </ul>
      </nav>
    </header>
  );
});
