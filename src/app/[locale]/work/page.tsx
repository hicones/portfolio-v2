"use client";

import { motion } from "motion/react";
import { WorkCustomSection } from "./components/work-custom-section";
import { useState } from "react";
import { Header } from "@/components/app/header";

export default function WorkPage() {
  const [viewMode, setViewMode] = useState<"list" | "gallery">("gallery");

  return (
    <div className="size-full relative min-h-screen flex flex-col">
      <Header darkMode={viewMode === "gallery"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-12 lg:pt-16 size-full"
      >
        <WorkCustomSection viewMode={viewMode} setViewMode={setViewMode} />
      </motion.div>
    </div>
  );
}
