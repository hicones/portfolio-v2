import { TransitionButton } from "@/components/app/transition-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import contactPic from "../../../../../public/assets/contact.png";

export const ContactSection = () => {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="container flex-1 sticky top-0 min-h-[100dvh] overflow-hidden left-0 mx-auto flex flex-col lg:flex-row gap-8 lg:py-40 items-center p-4"
    >
      <motion.div
        className="font-semibold text-lg lg:text-3xl text-center overflow-hidden flex gap-4 w-full flex-col justify-center lg:flex-row lg:justify-between p-4"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ margin: "-200px" }}
      >
        <form action="" className="max-w-xl font-sans">
          <h2 className="text-3xl font-semibold">{t("title")}</h2>
          <p className="text-lg">{t("description")}</p>
          <div className="flex flex-col gap-4 mt-8">
            <Input type="text" placeholder={t("namePlaceholder")} />
            <Input type="email" placeholder={t("emailPlaceholder")} />
            <Textarea rows={8} placeholder={t("messagePlaceholder")} />
            <TransitionButton>{t("sendMessage")}</TransitionButton>
          </div>
        </form>

        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: "-200px", once: true }}
          src={contactPic.src}
          alt="contact illustration image"
          className="max-w-xl object-contain rounded-lg shadow-sm"
        />
      </motion.div>
    </section>
  );
};
