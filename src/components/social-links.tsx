import { social_links } from "@/utils/constants";
import Link from "next/link";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const SocialLinks = () => {
  return (
    <motion.ul
      className="flex gap-3 items-center pt-4 lg:p-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {social_links.map((link) => (
        <motion.li key={link.name} variants={itemVariants}>
          <Link
            href={link.href}
            target="_blank"
            className="socials animate-fade"
          >
            <link.icon className="z-[1] size-4 lg:size-6 " />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};
