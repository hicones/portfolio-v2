"use client";

import { Header } from "@/components/app/header";
import { HomeLoading } from "@/components/app/loading-home";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PagesLayout({ children }: { children: React.ReactElement }) {
  const [isLoading, setIsLoading] = useState(true);

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

      <Header />
      <div className="max-w-5xl size-full px-5">{children}</div>
    </main>
  );
}
