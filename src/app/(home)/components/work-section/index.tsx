"use client";

import { cn } from "@/lib/utils";
import { WorkSectionProps } from "@/types/work";
import { useState } from "react";
import { Modal } from "./modal";
import { motion } from "motion/react";
import { TransitionButton } from "@/components/app/transition-button";
import Link from "next/link";
import { MockWorkItems } from "@/utils/constants";

export const WorkSection = () => {
  const [modal, setModal] = useState({
    active: false,
    index: 0,
  });

  return (
    <section className="flex flex-col items-center lg:py-10 relative container mx-auto gap-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ margin: "-100px" }}
        className="text-[30vw] font-normal text-[#797979]"
      >
        WORK
      </motion.h2>
      <div className="flex items-center justify-center relative w-full">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ margin: "-200px" }}
          className="flex flex-col items-center justify-center container mx-auto w-full"
        >
          {MockWorkItems.map((item, index) => (
            <ProjectItem
              key={index}
              index={index}
              item={item}
              setModal={setModal}
            />
          ))}
        </motion.div>

        <Modal modal={modal} projects={MockWorkItems} />
      </div>
      <Link href={"/work"}>
        <TransitionButton className="mt-20">All Projects</TransitionButton>
      </Link>
    </section>
  );
};

const ProjectItem = ({ index, item, setModal }: WorkSectionProps) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={cn(
        "flex flex-col lg:flex-row lg:items-center w-full lg:justify-between cursor-pointer transition-all py-12 px-24 border-t border-[#C9C9C9] last-of-type:border-b hover:opacity-50 group"
      )}
    >
      <h2 className="text-3xl lg:text-6xl m-0 transition-all duration-[400ms] group-hover:-translate-x-2.5">
        {item.title}
      </h2>
      <div>
        <p className="font-light transition-all duration-[400ms] group-hover:-translate-x-2.5">
          {item.description}
        </p>

        <div className="flex gap-2 mt-2 transition-all duration-[400ms] group-hover:-translate-x-2.5">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


