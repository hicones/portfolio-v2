import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";
import { PageTitle } from "@/components/ui/page-title";
import { BlogsCustomSection } from "./components/blogs-custom-section";

export default function BlogsPage() {
  return (
    <div className="size-full relative min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 bg-background relative pt-32 lg:pt-40">
        <PageTitle title="BLOGS" />
        <BlogsCustomSection />
      </main>
      <Footer />
    </div>
  );
}
