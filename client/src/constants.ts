import type { article, Page } from "@shared/generated/prisma/index";

export const THEME = {
  PRIMARY_1: "#FFC9C9",
  PRIMIARY_2: "#D0F6FC",
  SECONDARY_1: "#9AB297",
  SECONDARY_2: "#FFFFFF",
};

// should be up to date with prisma enum Page in server/prisma/schema.prisma
export const PAGES_SUPPORTED: Page[] = ["SIPS", "FLICS", "SIGHTS"];

export const EMPTY_ARTICLE: article = {
  id: "211",
  page: "SIPS",
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
