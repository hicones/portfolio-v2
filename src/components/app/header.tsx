"use client";
import { SplitButton } from "./split-button";
import { TransitionLink } from "./transition-link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Header = () => {
  const pathname = usePathname();

  const menu_options = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 px-4 md:px-10 py-4 md:py-4 font-heading">
      <div className="mx-auto flex justify-between items-center">
        <TransitionLink href="/" className="text-xl sm:text-2xl font-medium">
          <SplitButton datatext="Frontend Developer">Hicones.</SplitButton>
        </TransitionLink>
        <nav className="hidden sm:flex items-center gap-6">
          {menu_options.map((option) => (
            <TransitionLink
              key={option.name}
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
        <button
          popoverTarget="mobile-menu"
          popoverTargetAction="show"
          className="sm:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
        >
          <span className="w-full h-0.5 bg-foreground"></span>
          <span className="w-full h-0.5 bg-foreground"></span>
        </button>

        <nav
          popover="manual"
          id="mobile-menu"
          className="absolute w-full top-0 left-0 right-0 bg-foreground text-background p-4 sm:hidden z-10 animate-fade-in"
        >
          <ul className="flex flex-col gap-4">
            {menu_options.map((option) => (
              <li key={option.name}>
                <TransitionLink
                  href={option.href}
                  className={cn(
                    "hover:text-gray-800 hover:font-medium transition-all",
                    pathname === option.href && "text-gray-800 font-semibold"
                  )}
                >
                  {option.name}
                </TransitionLink>
              </li>
            ))}
          </ul>
          <button
            popoverTarget="mobile-menu"
            popoverTargetAction="hide"
            className="w-8 h-8 flex flex-col justify-center gap-1.5 absolute top-4 right-4"
          >
            <div className="size-full flex relative flex-col">
              <span className="w-full h-0.5 bg-background -rotate-45"></span>
              <span className="w-full h-0.5 bg-background rotate-45"></span>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};
