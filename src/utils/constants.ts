import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub, LuInstagram } from "react-icons/lu";

export const menu_options = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
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

export const MockWorkItems = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image:
      "https://images.unsplash.com/photo-1744878150591-6ebf3a050d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "JavaScript"],
    link: "https://example.com/project1",
    repository: "",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image:
      "https://images.unsplash.com/photo-1747861890182-51033cfa8f9d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["NextJs", "TypeScript"],
    link: "https://example.com/project1",
    repository: "",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    image:
      "https://images.unsplash.com/photo-1747109726546-8c79e8a88f63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["NextJs", "TypeScript"],
    link: "https://example.com/project1",
    repository: "",
  },
  {
    title: "Project 4",
    description: "Description of project 4",
    image:
      "https://images.unsplash.com/photo-1746892163782-db6355c2dce3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["NextJs", "TypeScript"],
    link: "https://example.com/project1",
    repository: "",
  },
  {
    title: "Project 5",
    description: "Description of project 5",
    image:
      "https://images.unsplash.com/photo-1747767763443-2658332b88f4?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["NextJs", "TypeScript"],
    link: "https://example.com/project1",
    repository: "",
  },
  {
    title: "Project 6",
    description: "Description of project 6",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["NextJs", "TypeScript"],
    link: "https://example.com/project1",
    repository: "",
  },
];

export const MockBlogsItems = [
  {
    title: "Blog 1",
    description: "Description of blog 1",
    image: "/assets/blog_1.png",
    link: "https://example.com/project1",
  },
];
