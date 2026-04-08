import { prisma } from "./prisma/db.js";
import type { Article, Page } from "./types.js";

/**
 * Requests all of the article records under the page provided.
 * @param pageName
 */
export const getArticlesByPage = async (pageName: Page): Promise<Article[]> => {
  const data = await prisma.article.findMany({
    // eventually this should be the following:
    // where: { page: pageName, publishedAt: { not: null } },
    // orderBy: { publishedAt: "desc" },
    where: { page: pageName },
    orderBy: { createdAt: "desc" },
  });
  console.log("databaseapi data: ", data);
  return data;
};
