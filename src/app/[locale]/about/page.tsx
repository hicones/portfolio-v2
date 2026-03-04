import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";
import { AboutCustomSection } from "./components/about-custom-section";
import { PageTitle } from "@/components/ui/page-title";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("AboutCustom");

  return (
    <div className="size-full relative min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex flex-col flex-1 bg-background relative pt-10 lg:pt-40">
        <PageTitle title={t("pageTitle")} />
        <AboutCustomSection />
      </main>
      <Footer />
    </div>
  );
}
