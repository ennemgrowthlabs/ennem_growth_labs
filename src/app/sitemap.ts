import type { MetadataRoute } from "next";
import { POSTS, PROJECTS, SITE, TEAMS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/work",
    "/services",
    "/services/full-stack",
    "/services/automation",
    "/tech",
    "/about",
    "/careers",
    "/blog",
    "/contact",
    "/products/taskwagon",
    "/products/giftindia",
    "/products/snapvy",
    "/products/lumen",
    ...TEAMS.map((t) => `/teams/${t.slug}`),
    ...PROJECTS.map((p) => `/work/${p.slug}`),
    ...POSTS.map((p) => `/blog/${p.slug}`),
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
