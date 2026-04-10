import type { article } from "@shared/generated/prisma";

// should be up to date with prisma enum Page in server/prisma/schema.prisma
export const SUPPORTED_PAGES = ["sips", "flics", "friends", "eats"] as const;
export type Page = (typeof SUPPORTED_PAGES)[number];

export function isPage(value: string): value is Page {
  return (SUPPORTED_PAGES as readonly string[]).includes(value);
}

export type Article = Omit<article, "page"> & { page: Page };
