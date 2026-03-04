import { Footer } from "@/components/app/footer";
import { WorkDetailsSection } from "./components/work-details-section";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="size-full relative min-h-screen flex flex-col">
      <WorkDetailsSection id={id} />
      <Footer />
    </div>
  );
}
