import { getExactAge } from "@/lib/utils";
import * as motion from "motion/react-client";
import { DownloadCVButton } from "@/components/download-cv";
import { useTranslations } from "next-intl";
import profilePic from "../../../../../public/assets/profile_pic.jpeg";

export const AboutSection = () => {
  const t = useTranslations("About");

  return (
    <section className="bg-background container mx-auto flex flex-col gap-8 lg:py-40 items-center p-4">
      <motion.p
        className="font-semibold text-lg lg:text-3xl text-center overflow-hidden"
        initial={{ opacity: 0, y: -100, height: 0 }}
        whileInView={{ opacity: 1, y: 0, height: "auto" }}
        transition={{ duration: 0.5 }}
      >
        {t("headline")}
      </motion.p>

      <div className="flex gap-8 items-center w-full justify-evenly flex-col-reverse lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-xl"
        >
          <h2 className="text-3xl font-semibold">{t("title")}</h2>
          <p className="text-lg ">
            {t("description", { years: getExactAge(2019, 3, 23) })}
          </p>
          <DownloadCVButton />
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={profilePic.src}
          alt="Henrique Almeida"
          className="rounded-lg shadow-sm max-w-xs object-cover"
        />
      </div>
    </section>
  );
};
