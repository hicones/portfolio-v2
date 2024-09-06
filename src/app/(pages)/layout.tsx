"use client";

import { FloatMenu } from "@/components/app/float-menu";
import { Header } from "@/components/app/header";
import { HomeLoading } from "@/components/app/loading-home";
import { AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function PagesLayout({ children }: { children: React.ReactElement }) {
  const [isLoading, setIsLoading] = useState(true);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const headerInView = useInView(headerRef);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main className="flex flex-col items-center justify-between">
      <AnimatePresence>{isLoading && <HomeLoading />}</AnimatePresence>

      <Header ref={headerRef} />
      <FloatMenu id={!headerInView ? "active" : "inactive"} />
      <div className="max-w-screen-lg size-full px-5 animate-fade-in">{children}</div>
    </main>
  );
}
