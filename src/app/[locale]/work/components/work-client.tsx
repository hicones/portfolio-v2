"use client";

import { motion } from "motion/react";
import { WorkCustomSection } from "./work-custom-section";
import { useState } from "react";
import { Header } from "@/components/app/header";
import { WorkItemModel } from "@/types/work";

export const WorkClientWrapper = ({ projects }: { projects: WorkItemModel[] }) => {
  const [viewMode, setViewMode] = useState<"list" | "gallery">("gallery");

  return (
    <>
      <Header darkMode={viewMode === "gallery"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-10 lg:pt-16 size-full"
      >
        <WorkCustomSection viewMode={viewMode} setViewMode={setViewMode} projects={projects} />
      </motion.div>
    </>
  );
};
