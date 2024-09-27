"use client";

import { animatePageIn } from "@/utils/animations";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactElement }) {
  useGSAP(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div id="loading-banner" className="w-full h-screen bg-black" />
      {children}
    </div>
  );
}
