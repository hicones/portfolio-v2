import { motion } from "motion/react";
import { WorkItemModel } from "@/types/work";
import { useEffect, useState } from "react";
import Image from "next/image";

const scaleAnimation = {
  initial: { scale: 0 },
  enter: {
    scale: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export const Modal = ({
  modal,
  projects,
}: {
  modal: { active: boolean; index: number };
  projects: WorkItemModel[];
}) => {
  const { active, index } = modal;

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - 40,
        y: e.clientY - 40,
      });
    };

    if (active) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[300px] w-[400px] z-[30] fixed bg-white overflow-hidden pointer-events-none flex items-center justify-center rounded-lg shadow-lg"
        style={{
          left: `${position.x - 150}px`,
          top: `${position.y - 120}px`,
        }}
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="size-full absolute transition-all duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
        >
          {projects.map((project, i) => {
            const { image } = project;
            return (
              <div
                className="size-full flex items-center justify-center"
                key={`modal_${i}`}
              >
                <Image
                  src={image}
                  width={300}
                  height={0}
                  className="h-auto w-full aspect-video object-contain "
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="size-20 rounded-full text-white fixed z-[40] flex items-center justify-center text-sm font-light pointer-events-none bg-[#455CE9] select-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "scale(1)",
        }}
      >
        View
      </motion.div>
    </>
  );
};
