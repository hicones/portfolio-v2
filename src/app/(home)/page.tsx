import { FlipWords } from "@/components/app/flip-words";
import { Header } from "@/components/app/header";
import { SocialLinks } from "@/components/social-links";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "@/components/app/footer";

export default async function HomePage() {
  return (
    <div className="size-full relative">
      <Header />
      <main className="flex flex-col size-full flex-1 gap-4 bg-background relative">
        <div>
          <div className="bg-none flex flex-col justify-center gap-4 px-10 py-16 sticky top-0 mix-blend-difference z-10">
            <section className="flex w-full lg:items-end justify-between flex-col lg:flex-row gap-4">
              <div className="flex gap-6 items-center ">
                <div className="bg-background size-6 lg:size-12 rounded-full animate-fade-in" />
                <h1 className="!text-background animate-fade">
                  <FlipWords words={["Henrique", "Web", "Web ", "User"]} />{" "}
                  <br />
                  <FlipWords
                    words={["Almeida", "Development", "Design", "Experience"]}
                  />
                </h1>
              </div>
              <SocialLinks />
            </section>
          </div>
          <section className="h-[90lvh] bg-foreground flex items-center justify-center relative">
            <video
              src="https://framerusercontent.com/assets/9x4agpZxidbcYXtqpuoFS6O0tc.mp4"
              loop
              poster="https://framerusercontent.com/images/zNWRFgssuSuDTjXzoYN8DSHIPhA.png"
              playsInline
              autoPlay={true}
              controls={false}
            ></video>
          </section>
        </div>

        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
