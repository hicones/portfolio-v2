import Link from "next/link";
import * as motion from "motion/react-client";
import {
  containerVariants,
  itemVariants,
  social_links,
} from "@/utils/constants";

export const Footer = () => {
  return (
    <footer className="relative h-fit bg-foreground rounded-t-[4rem] text-background">
      <motion.div
        className="container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-600px" }}
        transition={{ duration: 1 }}
      >
        <motion.div className="mb-24" variants={itemVariants}>
          <h2 className="font-poppins text-4xl font-bold tracking-tight">
            HENRIQUE
          </h2>
          <h3 className="font-poppins text-4xl font-bold tracking-tight">
            ALMEIDA
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          variants={itemVariants}
        >
          <div>
            <h4 className="font-poppins text-xl font-bold mb-6">Contact</h4>
            <address className="font-inter not-italic">
              <p>São Paulo - SP</p>
              <p>Brazil</p>
            </address>
            <p className="font-inter">
              <Link
                href="mailto:devhenrique.almeida@gmail.com"
                className="hover:underline"
              >
                devhenrique.almeida@gmail.com
              </Link>
            </p>
          </div>

          <div>
            <h4 className="font-poppins text-xl font-bold mb-6">FOLLOW</h4>
            <ul className="space-y-2 font-inter">
              {social_links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <link.icon className="w-6 h-6" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div className="mb-12" variants={itemVariants}>
          <h3 className="font-heading text-[10rem] font-black">Hicones Tech</h3>
        </motion.div>

        <div className="border-t border-stone-600 pt-4 flex flex-col md:flex-row justify-between items-center font-inter text-sm">
          <div>
            <p>
              ©{new Date().getFullYear()} Hicones Tech — All rights reserved.
            </p>
          </div>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </motion.div>
    </footer>
  );
};
