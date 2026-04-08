import type { article } from "@shared/generated/prisma";
import { MISSING_ARTICLE_ID } from "@src/constants";

// should be up to date with prisma enum Page in server/prisma/schema.prisma
export const SUPPORTED_PAGES = ["sips", "flics", "friends", "eats"] as const;
export type Page = (typeof SUPPORTED_PAGES)[number];

export function isPage(value: string): value is Page {
  return (SUPPORTED_PAGES as readonly string[]).includes(value);
}

export type Article = Omit<article, "page"> & { page: Page };

export const EMPTY_ARTICLE: Article = {
  id: `${MISSING_ARTICLE_ID}`,
  page: "sips",
  title: "Article Unavailable :(",
  thumbnail: "",
  createdAt: new Date(),
  publishedAt: new Date(),
  updatedAt: new Date(),
  content:
    "Sorry, but we're unable to retrieve this article at this time. In the meantime, please explore what else shaebae.blog has to offer :D",
  summary:
    "Sorry, but we're unable to retrieve this article at this time. In the meantime, please explore what else shaebae.blog has to offer :D",
};
