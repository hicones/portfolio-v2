"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { BlogItemModel } from "@/types/blog";
import { LuArrowUpRight } from "react-icons/lu";
import { useTranslations } from "next-intl";

export const BlogsCustomSection = ({ blogs }: { blogs: BlogItemModel[] }) => {
  const t = useTranslations("BlogsCustom");
  
  // se existirem mais de 6 ou poucos, pode ajustar, aqui vamos só usar os blogs passados:
  const blogsList = blogs.length > 0 ? blogs : [];
  
  return (
    <section className="flex flex-col items-center py-10 lg:py-20 relative container mx-auto gap-12 w-full min-h-[80vh] px-4">
      <div className="flex flex-col gap-4 text-center mb-10 w-full max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-foreground text-5xl md:text-7xl font-bold tracking-tight"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 text-lg md:text-xl"
        >
          {t("description")}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
        {blogsList.map((item, index) => (
          <BlogCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

const BlogCard = ({ item, index }: { item: BlogItemModel; index: number }) => {
  const t = useTranslations("BlogsCustom");
  const readTime = (index % 5) + 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col w-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 ease-in-out cursor-pointer relative"
    >
      <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-8 bg-white z-10 relative">
        <span className="text-sm font-medium text-blue-600 mb-3 block">
          {t("article")}
        </span>
        <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-gray-500 line-clamp-3 mb-6 flex-1">
          {item.description}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-400">
            {t("minRead", { readTime })}
          </span>
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-10 rounded-full bg-gray-50 text-foreground group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
          >
            <LuArrowUpRight className="size-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
