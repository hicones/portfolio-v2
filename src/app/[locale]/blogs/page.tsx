import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";
import { PageTitle } from "@/components/ui/page-title";
import { BlogsCustomSection } from "./components/blogs-custom-section";
import { getTranslations } from "next-intl/server";

import { getBlogsItems } from "@/lib/data";

export default async function BlogsPage() {
  const t = await getTranslations("BlogsCustom");
  const blogs = await getBlogsItems();

  return (
    <div className="size-full relative min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 bg-background relative pt-10 lg:pt-40">
        <PageTitle title={t("pageTitle")} />
        <BlogsCustomSection blogs={blogs} />
      </main>
      <Footer />
    </div>
  );
}
