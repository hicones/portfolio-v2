import { FlipWords } from "@/components/app/flip-words";
import { Header } from "@/components/app/header";
import { SocialLinks } from "@/components/social-links";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "@/components/app/footer";
import { RevealSection } from "./components/reaveal-section";
import { WorkSection } from "./components/work-section";
import { BlogsSection } from "./components/blogs-section";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("Hero");

  return (
    <div className="size-full relative">
      <Header />
      <main className="flex flex-col size-full flex-1 gap-4 bg-background relative">
        <div>
          <div className="bg-none flex flex-col justify-center gap-4 px-10 py-16 lg:pt-16 lg:pb-32 sticky top-0 mix-blend-difference z-10">
            <section className="flex w-full lg:items-end justify-between flex-col lg:flex-row gap-4">
              <div className="flex gap-6 items-center ">
                <div className="bg-background size-6 lg:size-12 rounded-full animate-fade-in" />
                <h1 className="text-background! animate-fade">
                  <FlipWords words={t.raw("flipWords1")} /> <br />
                  <FlipWords words={t.raw("flipWords2")} />
                </h1>
              </div>
              <SocialLinks />
            </section>
          </div>
          <section className="lg:h-[90lvh] h-[65lvh] bg-foreground flex items-center justify-center relative">
            <video
              src="/assets/template.mp4"
              loop
              poster="/assets/frame.jpg"
              autoPlay
              muted
              controls={false}
              className="size-full"
            ></video>
          </section>
        </div>

        <AboutSection />
        <RevealSection />
        <WorkSection />
        <BlogsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
