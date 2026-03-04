"use client";

import { MockWorkItems } from "@/utils/constants";
import { motion } from "motion/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LuArrowLeft, LuExternalLink, LuGithub } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const WorkDetailsSection = ({ id }: { id: string }) => {
  const t = useTranslations("WorkDetails");
  const project = MockWorkItems.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <section className="bg-background min-h-screen relative w-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute top-8 left-4 lg:left-12 z-50 opacity-15"
      >
        <Link
          href="/work"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors uppercase text-sm font-semibold tracking-widest backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/10"
        >
          <LuArrowLeft className="w-4 h-4" />
          {t("back")}
        </Link>
      </motion.div>

      <motion.div
        layoutId={`project-image-${project.id}`}
        className="w-full h-[60vh] lg:h-[80vh] relative origin-center object-cover overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-black/40 to-black/10" />
      </motion.div>

      <div className="container mx-auto px-4 -mt-32 lg:-mt-48 relative z-20 flex flex-col gap-12 max-w-5xl pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start w-full mt-12"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t("overview")}
            </h3>
            <p className="text-lg lg:text-xl text-gray-500 leading-relaxed font-light">
              {t("overviewText", { description: project.description })}
            </p>
          </div>

          <div className="w-full lg:w-80 flex flex-col gap-8 shrink-0 bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                {t("role")}
              </span>
              <span className="text-lg font-medium text-foreground">
                {t("roleValue")}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                {t("timeline")}
              </span>
              <span className="text-lg font-medium text-foreground">
                {t("timelineValue")}
              </span>
            </div>

            <div className="w-full h-px bg-gray-200 my-2" />

            <div className="flex flex-col gap-4">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-3 py-3 px-6 bg-foreground text-background rounded-full hover:scale-105 transition-transform font-medium w-full justify-center group"
                >
                  {t("visitLive")}
                  <LuExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {project.repository && (
                <Link
                  href={project.repository}
                  target="_blank"
                  className="flex items-center gap-3 py-3 px-6 bg-white border border-gray-200 text-foreground rounded-full hover:bg-gray-50 transition-colors font-medium w-full justify-center"
                >
                  <LuGithub className="w-5 h-5" />
                  {t("viewSource")}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
