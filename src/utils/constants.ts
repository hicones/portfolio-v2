import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub, LuInstagram } from "react-icons/lu";

export const menu_options = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/#contact" },
];

export const social_links = [
  { name: "Github", href: "https://github.com/hicones", icon: LuGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/henrique-almeida-079867169/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hicones1/",
    icon: LuInstagram,
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
