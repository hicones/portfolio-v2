import { Header } from "@/components/app/header";

export default function HomePage() {
  return (
    <div className="size-full">
      <Header />

      <main className="flex flex-col size-full flex-1 gap-4 ">
        <div className="bg-none flex flex-col justify-center gap-4 px-10 py-16 sticky top-0 mix-blend-difference z-10">
          <div className="flex gap-6 items-center ">
            <div className="bg-background size-12 rounded-full" />
            <h1 className="!text-background">
              Web <br />
              Development
            </h1>
          </div>
        </div>

        <section className="h-[100lvh] bg-foreground"></section>
      </main>

      {/*      <MainSection />
      <FeaturedWorkSection />
      <RunningProjectsSection />
      <TestimonialsSection />
      <ContactSection /> */}
    </div>
  );
}
