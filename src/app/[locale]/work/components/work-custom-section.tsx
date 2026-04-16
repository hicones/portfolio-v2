"use client";

import { useState, useRef, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Modal } from "../../(home)/components/work-section/modal";
import { WorkItemModel } from "@/types/work";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const WorkCustomSection = ({
  viewMode,
  setViewMode,
  projects
}: {
  viewMode: "list" | "gallery";
  setViewMode: (viewMode: "list" | "gallery") => void;
  projects: WorkItemModel[];
}) => {
  const [modal, setModal] = useState({
    active: false,
    index: 0,
  });
  const t = useTranslations("Work");

  return (
    <section
      className={cn(
        "flex flex-col items-center lg:py-4 relative gap-8 w-full transition-all duration-700",
        viewMode === "list"
          ? "container mx-auto min-h-[80vh]"
          : "h-screen p-0 m-0 overflow-hidden",
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "flex items-center gap-4 bg-gray-100 p-1.5 rounded-full z-50 transition-all duration-700",
          viewMode === "gallery" &&
            "fixed top-24 left-1/2 -translate-x-1/2 shadow-xl bg-white/80 backdrop-blur-md",
        )}
      >
        <button
          onClick={() => setViewMode("list")}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10 whitespace-nowrap",
            viewMode === "list" ? "text-background" : "text-foreground",
          )}
        >
          {viewMode === "list" && (
            <motion.div
              layoutId="view-toggle"
              className="absolute inset-0 bg-foreground rounded-full -z-10"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          {t("listView")}
        </button>
        <button
          onClick={() => setViewMode("gallery")}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10 whitespace-nowrap",
            viewMode === "gallery" ? "text-background" : "text-foreground",
          )}
        >
          {viewMode === "gallery" && (
            <motion.div
              layoutId="view-toggle"
              className="absolute inset-0 bg-foreground rounded-full -z-10"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          {t("galleryView")}
        </button>
      </motion.div>

      <div
        className={cn(
          "w-full relative mt-8 flex justify-center flex-1",
          viewMode === "list" ? "" : "m-0",
        )}
      >
        <AnimatePresence mode="wait">
          {viewMode === "list" ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.4 }}
              className="flex flex-col w-full max-w-6xl"
            >
              <div className="flex flex-col w-full relative">
                {projects.map((item, index) => (
                  <ProjectListItem
                    key={item.id}
                    index={index}
                    item={item}
                    setModal={setModal}
                  />
                ))}
                <Modal modal={modal} projects={projects} />
              </div>
            </motion.div>
          ) : (
            <InfiniteCanvasGallery key="gallery" items={projects} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const InfiniteCanvasGallery = ({ items }: { items: WorkItemModel[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useMotionValue(1);
  const smoothScale = useSpring(scale, { stiffness: 300, damping: 30 });
  const t = useTranslations("Work");

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const currentScale = scale.get();
      const newScale = Math.max(
        0.3,
        Math.min(2.5, currentScale - e.deltaY * 0.002),
      );
      scale.set(newScale);
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
    }

    document.body.style.overflow = "hidden";

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
      }
      document.body.style.overflow = "auto";
    };
  }, [scale]);

  const canvasItems = items.map((item, index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const offsetX = (col - 1) * 900 + (Math.random() * 200 - 100);
    const offsetY = (row - 1) * 600 + (Math.random() * 200 - 100);

    return { ...item, x: offsetX, y: offsetY };
  });

  return (
    <motion.div
      key="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-40 bg-zinc-950 overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
      ref={containerRef}
    >
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md text-white/50 z-50 pointer-events-none font-medium text-sm tracking-widest uppercase">
        {t("scrollToZoom")}
      </div>

      <motion.div
        drag
        dragConstraints={{ left: -3000, right: 3000, top: -3000, bottom: 3000 }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        style={{ scale: smoothScale }}
        className="relative w-screen h-screen flex items-center justify-center"
      >
        {canvasItems.map((item, index) => (
          <CanvasProjectItem key={index} item={item} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const CanvasProjectItem = ({
  item,
  index,
}: {
  item: WorkItemModel & { x: number; y: number };
  index: number;
}) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
      style={{
        position: "absolute",
        x: item.x,
        y: item.y,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 50 }}
      className="group flex flex-col w-[700px] overflow-hidden rounded-3xl bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-300 aspect-video pointer-events-auto"
      onClick={() => {
        router.push(`/work/${item.id}`);
      }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div layoutId={`project-image-${item.id}`} className="size-full">
          <Image
            src={item.image || "/assets/frame.jpg"}
            alt={item.title}
            fill
            sizes="700px"
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Hover Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10 pointer-events-none">
        <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">
          {item.title}
        </h3>
        <p className="text-gray-200 text-base line-clamp-2 max-w-xl mb-6">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6 pointer-events-auto">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectListItem = ({
  index,
  item,
  setModal,
}: {
  index: number;
  item: WorkItemModel;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}) => {
  const router = useRouter();

  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      onClick={() => {
        router.push(`/work/${item.id}`);
      }}
      className={cn(
        "flex flex-col lg:flex-row lg:items-center w-full lg:justify-between cursor-pointer transition-all py-12 px-8 lg:px-24 border-t border-[#C9C9C9] last-of-type:border-b hover:opacity-50 group",
      )}
    >
      <h2 className="text-3xl lg:text-6xl m-0 transition-all duration-400 group-hover:-translate-x-2.5">
        {item.title}
      </h2>
      <div className="mt-4 lg:mt-0">
        <p className="font-light transition-all duration-400 group-hover:-translate-x-2.5 text-gray-600">
          {item.description}
        </p>

        <div className="flex gap-2 mt-2 transition-all duration-400 group-hover:-translate-x-2.5 flex-wrap">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
