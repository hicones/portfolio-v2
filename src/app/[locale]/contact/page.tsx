import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";
import { ContactSection } from "../(home)/components/contact-section";
import { PageTitle } from "@/components/ui/page-title";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  return (
    <div className="size-full relative min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 bg-background relative pt-10 lg:pt-40">
        <PageTitle title={t("pageTitle")} className="text-[20vw]" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
