"use client";

import { getExactAge } from "@/lib/utils";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import { DownloadCVButton } from "@/components/download-cv";
import { Skills } from "@/utils/about-data";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const AboutCustomSection = ({ experiences, educations }: { experiences: any[], educations: any[] }) => {
  return (
    <section className="flex flex-col items-center py-10 lg:py-20 relative container mx-auto gap-24 w-full px-4 overflow-hidden">
      <HeroSection />
      <SkillsSection />
      <TimelineSection experiences={experiences} />
      <EducationSection educations={educations} />
    </section>
  );
};

const HeroSection = () => {
  const t = useTranslations("About");
  return (
    <div className="flex flex-col gap-16 lg:gap-24 items-center w-full justify-evenly">
      <motion.p
        className="font-semibold text-2xl lg:text-4xl text-center max-w-5xl leading-tight"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t("headline")}
      </motion.p>

      <div className="flex gap-12 items-center w-full justify-center lg:justify-between flex-col-reverse lg:flex-row max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-6 max-w-2xl"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
            {t("description", { years: getExactAge(2019, 1, 23) })}
          </p>
          <div className="mt-4">
            <DownloadCVButton />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.4,
            delay: 0.4,
          }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl group-hover:bg-blue-500/30 transition-all duration-500" />
          <Image
            src="/assets/profile_pic.jpeg"
            alt="Henrique Almeida"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl max-w-sm w-full object-cover relative z-10 hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const t = useTranslations("AboutCustom");
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", bounce: 0.4 },
    },
  };

  return (
    <div className="flex flex-col w-full max-w-6xl mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h3 className="text-4xl font-bold text-foreground">{t("expertise")}</h3>
        <div className="h-[2px] flex-1 bg-gray-200 ml-4 rounded-full" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {Skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-default group"
          >
            <skill.icon
              className={`text-5xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity ${skill.color}`}
            />
            <span className="font-medium text-gray-700 text-sm whitespace-nowrap">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const TimelineSection = ({ experiences }: { experiences: any[] }) => {
  const t = useTranslations("AboutCustom");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="flex flex-col w-full max-w-5xl mt-10" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <h3 className="text-4xl font-bold text-foreground">
          {t("careerTimeline")}
        </h3>
        <div className="h-[2px] flex-1 bg-gray-200 ml-4 rounded-full" />
      </motion.div>

      <div className="relative pl-8 md:pl-0">
        {/* Animated Vertical Line */}
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 md:-translate-x-1/2">
          <motion.div
            className="absolute top-0 left-0 w-full bg-foreground origin-top"
            style={{ scaleY: pathLength, height: "100%" }}
          />
        </div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className={`flex flex-col md:flex-row items-start md:items-center w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div
                  className={`w-full md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16"}`}
                >
                  <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 relative group">
                    <span className="text-sm font-bold text-blue-600 block mb-2 tracking-wider">
                      {exp.period}
                    </span>
                    <h4 className="text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h4>
                    <span className="text-base font-medium text-gray-500 block mb-4">
                      {exp.company}
                    </span>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-foreground md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-sm" />

                {/* Empty Spacer Side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const EducationSection = ({ educations }: { educations: any[] }) => {
  const t = useTranslations("AboutCustom");
  return (
    <div className="flex flex-col w-full max-w-5xl mt-10 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h3 className="text-4xl font-bold text-foreground">{t("education")}</h3>
        <div className="h-[2px] flex-1 bg-gray-200 ml-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
          >
            <span className="text-sm font-bold text-blue-600 mb-2 mt-auto">
              {edu.period}
            </span>
            <h4 className="text-2xl font-bold text-foreground mb-2">
              {edu.degree}
            </h4>
            <span className="text-lg font-medium text-gray-700 mb-4 block">
              {edu.institution}
            </span>
            <p className="text-gray-500 leading-relaxed">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
