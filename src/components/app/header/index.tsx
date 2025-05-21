"use client";

import { SplitButton } from "../split-button";
import { TransitionLink } from "../transition-link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { menu_options } from "@/utils/constants";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const pathname = usePathname();
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    if (previous != null) {
      const diff = current - previous;
      setScrollDirection(diff > 0 ? "down" : "up");
    }
  });

  return (
    <header
      id="navheader"
      className={cn(
        "sticky top-0 left-0 right-0 z-50 px-4 md:px-10 py-4 md:py-4 font-heading transition-all duration-300 animate-fade-top",
        scrollDirection === "down" && "opacity-0 overflow-hidden"
      )}
    >
      <div
        className={cn(
          "mx-auto flex justify-between items-center transition-all duration-300",
          scrollDirection === "down" && "-translate-y-full"
        )}
      >
        <TransitionLink href="/" className="text-xl sm:text-2xl font-medium">
          <SplitButton datatext="Frontend Developer">Hicones.</SplitButton>
        </TransitionLink>
        <nav className="hidden sm:flex items-center gap-6">
          {menu_options.map((option) => (
            <TransitionLink
              key={option.name}
              scroll
              href={option.href}
              className={cn(
                "transition-all text-lg",
                pathname === option.href && "text-gray-800 font-semibold"
              )}
            >
              <SplitButton>{option.name}</SplitButton>
            </TransitionLink>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
};
