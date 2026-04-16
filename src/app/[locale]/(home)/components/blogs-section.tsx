"use client";

import { BlogItemModel } from "@/types/blog";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export const BlogsSection = ({ blogs }: { blogs: BlogItemModel[] }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["-200px start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const repeatedBlogs = Array(8)
    .fill(null)
    .map((_, i) => {
      const blog = blogs[i % blogs.length] || { title: "", description: "", image: "", link: "" };
      return {
        ...blog,
        id: i + 1,
      };
    });

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );

  console.log(blogs, 'blogs')

  return (
    <motion.section
      ref={containerRef}
      className="flex flex-col gap-10 items-center justify-center w-full overflow-hidden lg:mt-20 py-4"
    >
      <div className="flex gap-10 items-center">
        {repeatedBlogs.map((item, index) => (
          <BlogItem
            key={index}
            translate={translateX}
            index={index}
            item={item}
          />
        ))}
      </div>
      <div className="flex gap-10 items-center">
        {repeatedBlogs.map((item, index) => (
          <BlogItem
            key={index}
            translate={translateXReverse}
            index={index}
            item={item}
          />
        ))}
      </div>
    </motion.section>
  );
};

const BlogItem = ({
  item,
  index,
  translate,
}: {
  item: BlogItemModel;
  index: number;
  translate: MotionValue<number>;
}) => {
  const t = useTranslations("Blogs");

  return (
    <motion.div
      key={index}
      style={{
        x: translate,
      }}
      className="relative flex flex-col items-center justify-center w-full min-w-52 lg:min-w-lg p-4 bg-white rounded-lg shadow-md group hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:scale-105"
    >
      <Image
        width={296}
        height={384}
        src={item.image || "/assets/frame.jpg"}
        alt={item.title}
        className="w-full h-32 lg:h-96 object-contain rounded-lg"
      />

      <div className="group-hover:flex scale-0 group-hover:scale-100  flex-col items-center justify-center w-full p-4 hidden absolute ease-in-out bg-black/20 size-full">
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-foreground hover:underline font-semibold text-xl font-heading anima"
        >
          {t("readMore")}
        </Link>
      </div>
    </motion.div>
  );
};
