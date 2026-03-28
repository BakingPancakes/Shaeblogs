import { prisma } from "./prisma.js";

const pagesImplemented = ["Flics", "Sips"];

/**
 * Requests all of the records (articles) under the page provided.
 * Pages supported: Flics, Sips
 * @param pageName
 */
export const getArticleSummary = async (pageName: string): Promise<string> => {
  if (!pagesImplemented.includes(pageName)) {
    throw new Error("Unupported page, only `Flics` and `Sips` are supported");
  }

  const data = await prisma.article.findMany({
    where: { page: pageName },
  });
  return JSON.stringify(data);
};
