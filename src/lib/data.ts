import { createClient } from "./supabase/server";
import { WorkItemModel } from "@/types/work";
import { BlogItemModel } from "@/types/blog";

export async function getWorkItems(): Promise<WorkItemModel[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return (data || []).map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image_url || "",
    tags: item.tags || [],
    link: item.link || undefined,
    repository: item.repository || undefined,
  }));
}

export async function getExperiences() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }

  return data || [];
}

export async function getEducations() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("educations")
    .select("*")
    .order("order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching educations:", error);
    return [];
  }

  return data || [];
}

export async function getBlogsItems(): Promise<BlogItemModel[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }

  return (data || []).map((item) => ({
    title: item.title,
    description: item.description,
    image: item.image_url || "",
    link: item.link || "",
  }));
}
