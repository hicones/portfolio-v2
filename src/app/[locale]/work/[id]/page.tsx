import { Footer } from "@/components/app/footer";
import { WorkDetailsSection } from "./components/work-details-section";
import { getWorkItems } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projects = await getWorkItems();
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="size-full relative min-h-screen flex flex-col">
      <WorkDetailsSection project={project} />
      <Footer />
    </div>
  );
}
