import { API_URL } from "./constants";

export async function getBlogs() {
  const response = await fetch(
    `${API_URL}/blogs`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const result = await response.json();

  return result.data;
}

export async function getBlog(
  slug: string
) {
  const response = await fetch(
    `${API_URL}/blogs/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  const result = await response.json();

  return result.data;
}