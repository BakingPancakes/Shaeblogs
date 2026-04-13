import { prisma } from "./prisma/db.js";
import type { Article, Page } from "./types.js";

/**
 * Requests all of the article records under the page provided.
 * @param pageName
 */
export const getArticlesByPage = async (pageName: Page): Promise<Article[]> => {
  const data = await prisma.article.findMany({
    where: { page: pageName, publishedAt: { not: null } },
    orderBy: { publishedAt: "desc" },
  });
  console.log("databaseapi data: ", data);
  return data;
};

export const getArticleByID = async (articleID: string): Promise<Article> => {
  const data = await prisma.article.findUnique({
    where: { id: articleID },
  });
  if (data == null) {
    throw new Error("Failed to retrieve article data by ID. Returned null.");
  }
  return data;
};

export const getMostRecentArticle = async (): Promise<Article> => {
  const data = await prisma.article.findFirst({
    where: { publishedAt: { not: null } },
    orderBy: { publishedAt: "desc" },
  });
  if (data === null) {
    throw new Error(
      "Failed to retrieve most recent article data. Returned null.",
    );
  }
  console.log("Most recent article retreieved:", data);
  return data;
};
