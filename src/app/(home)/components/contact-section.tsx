import { SplitButton } from "@/components/app/split-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as motion from "motion/react-client";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-background container sticky top-0 min-h-[100dvh] overflow-hidden left-0 mx-auto flex flex-col lg:flex-row gap-8 lg:py-40 items-center p-4"
    >
      <motion.div
        className="font-semibold text-lg lg:text-3xl text-center overflow-hidden flex gap-4 w-full flex-col justify-center lg:flex-row lg:justify-between"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ margin: "-200px" }}
      >
        <form action="" className="max-w-xl font-sans">
          <h2 className="text-3xl font-semibold">Get in touch</h2>
          <p className="text-lg">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <Input type="text" placeholder="Your name" />
            <Input type="email" placeholder="Your email" />
            <Textarea rows={8} placeholder="Your message" />
            <SplitButton className="bg-[#0E2148] rounded text-background p-2 text-lg font-medium">
              Send Message
            </SplitButton>
          </div>
        </form>

        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: "-200px", once: true }}
          src="/assets/contact.png"
          alt="contact illustration image"
          className="max-w-xl object-contain rounded-lg shadow-sm"
        />
      </motion.div>
    </section>
  );
};
