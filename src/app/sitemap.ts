import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_URL!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/layanan`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portofolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kontak-kami`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    const result = await response.json();

    const blogPages: MetadataRoute.Sitemap = (result.data || [])
      .filter((blog: any) => blog.status === "published")
      .map((blog: any) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: new Date(
          blog.updated_at || blog.created_at
        ),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));

    return [...staticPages, ...blogPages];
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    return staticPages;
  }
}