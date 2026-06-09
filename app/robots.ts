import type { MetadataRoute } from "next";

const SITE_URL = "https://www.abhishek-mahato.com.np";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
