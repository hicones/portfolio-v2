import { getWorkItems } from "@/lib/data";
import { WorkClientWrapper } from "./components/work-client";

export default async function WorkPage() {
  const projects = await getWorkItems();

  return (
    <div className="size-full relative min-h-screen flex flex-col">
      <WorkClientWrapper projects={projects} />
    </div>
  );
}
