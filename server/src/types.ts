import { article, Page } from "../../shared/generated/prisma/index.js";

export type { Page } from "../../shared/generated/prisma/index.js";
export type Article = article;

export function isPage(value: string): value is Page {
  return (Object.values(Page) as String[]).includes(value.toUpperCase());
}
