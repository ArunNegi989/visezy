const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  status: "Published" | "Draft";
  image: string;
  readTime: string;
  publishedAt: string;
  createdAt: string;
}

export async function getBlogs() {
  const response = await fetch(`${API_URL}/blogs`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const result = await response.json();

  return result.data;
}

export async function getBlogBySlug(
  slug: string
) {
  const response = await fetch(
    `${API_URL}/blogs/slug/${slug}`,
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

export async function getBlogById(
  id: string
) {
  const response = await fetch(
    `${API_URL}/blogs/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }

  const result = await response.json();

  return result.data;
}

export async function deleteBlog(
  id: string
) {
  const response = await fetch(
    `${API_URL}/blogs/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete blog");
  }

  return response.json();
}

export async function getLatestFooterBlogs() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/footer/latest`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const result = await response.json();

    return result.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}