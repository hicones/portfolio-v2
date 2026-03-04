import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";
import { AboutCustomSection } from "./components/about-custom-section";
import { PageTitle } from "@/components/ui/page-title";

export default function AboutPage() {
  return (
    <div className="size-full relative min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 bg-background relative pt-32 lg:pt-40">
        <PageTitle title="ABOUT" />
        <AboutCustomSection />
      </main>
      <Footer />
    </div>
  );
}
