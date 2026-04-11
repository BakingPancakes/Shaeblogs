import type { Article, Page } from "@src/Components/types";
import { ERROR_ARTICLE } from "@src/constants";

const assignArticleData = (data: Article): Article => ({
  id: data.id,
  title: data.title,
  page: data.page,
  thumbnail: data.thumbnail,
  createdAt: data.createdAt,
  updatedAt: data.updatedAt,
  publishedAt: data.publishedAt,
  content: data.content,
  summary: data.summary,
});

/**
 * Ask server to fetch from database all articles under the given page name
 * Ideally, this should validate 3 fields:
 *   - publishedAt (shouldn't display a )
 * @param pageData Reference to be modified by function
 * @param pageName Name to be used as query to server
 */
export const getPageArticlesAll = async (pageData: Article[], pageName: Page) => {
  try {
    const urlParams = new URLSearchParams({
      pageName: pageName,
    });
    const res = await fetch(__API_PATH__ + `/articles?${urlParams}`, {
      method: "GET",
    });

    const data = await res.json();
    // depending on how big the request was, this might be too much to print
    console.log("Article data:", data);

    const newArticle = assignArticleData(data);

    pageData.push(newArticle);
  } catch (error) {
    console.log("Error retrieving data:", error);
  }
};

export const getMostRecentArticle = async (): Promise<Article | undefined> => {
  try {
    const res = await fetch(__API_PATH__ + "/articles/mostrecent", {
      method: "GET",
    });

    const data = await res.json();

    const article = assignArticleData(data);
    console.log("Most recent article data:", article);
    return article;
  } catch (error) {
    console.log("Error retrieving data for most recent article:", error);
  }
};

export const getPageArticlesRecent = async (pageData: Article[], pageName: Page, top_k: number) => {
  try {
    const allArticles = [] as Article[];
    await getPageArticlesAll(allArticles, pageName);

    for (let i = 0; i < top_k; i++) {
      if (i === allArticles.length) break;
      pageData.push(structuredClone(allArticles[i] ?? ERROR_ARTICLE));
    }
  } catch (error) {
    console.log("Error Retrieving data:", error);
  }
};

export const getArticleByID = async (id: string): Promise<Article | undefined> => {
  try {
    const urlParams = new URLSearchParams({
      articleID: id,
    });
    const res = await fetch(__API_PATH__ + `/articles?${urlParams}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error retreiving article by ID:", error);
  }
};
