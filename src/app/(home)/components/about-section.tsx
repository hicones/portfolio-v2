import { getExactAge } from "@/lib/utils";
import * as motion from "motion/react-client";
import { DownloadCVButton } from "@/components/download-cv";

export const AboutSection = () => {
  return (
    <section className="bg-background container mx-auto flex flex-col gap-8 lg:py-40 items-center p-4">
      <motion.p
        className="font-semibold text-lg lg:text-3xl text-center overflow-hidden"
        initial={{ opacity: 0, y: -100, height: 0 }}
        whileInView={{ opacity: 1, y: 0, height: "auto" }}
        transition={{ duration: 0.5 }}
      >
        A frontend developer specializing in website creation, with experience
        collaborating with designers and backend developers, and integrating
        animations and 3D graphics for a unique visual experience.
      </motion.p>

      <div className="flex gap-8 items-center w-full justify-evenly flex-col-reverse lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-xl"
        >
          <h2 className="text-3xl font-semibold">I am Henrique Almeida</h2>
          <p className="text-lg ">
            I am a senior frontend developer with over{" "}
            {getExactAge(2019, 1, 23)} years of experience in creating websites
            and web applications. I have a strong background in HTML, CSS, and
            JavaScript, and I am proficient in frameworks such as React and
            Next.js. I also have experience with 3D graphics using Three.js,
            animations using GSAP and Framer.
          </p>
          <DownloadCVButton />
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/assets/foto1.jpg"
          alt="Henrique Almeida"
          className="rounded-lg shadow-sm max-w-xs object-cover"
        />
      </div>
    </section>
  );
};
