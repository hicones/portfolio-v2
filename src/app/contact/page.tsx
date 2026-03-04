import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";
import { ContactSection } from "../(home)/components/contact-section";
import { PageTitle } from "@/components/ui/page-title";

export default function ContactPage() {
  return (
    <div className="size-full relative min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 bg-background relative pt-32 lg:pt-40">
        <PageTitle title="CONTACT" className="text-[20vw]"/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
