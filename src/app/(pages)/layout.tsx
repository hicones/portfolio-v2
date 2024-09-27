"use client";

import { Header } from "@/components/app/header";
import { useInView } from "framer-motion";
import { useState, useRef } from "react";

export default function PagesLayout({ children }: { children: React.ReactElement }) {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const headerInView = useInView(headerRef);

  return (
    <main className="flex flex-col items-center justify-between">
      <Header ref={headerRef} />
      <div className="max-w-screen-lg size-full px-5 animate-fade-in">{children}</div>
    </main>
  );
}
