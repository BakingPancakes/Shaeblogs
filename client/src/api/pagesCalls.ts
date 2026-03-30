import type { article, Page } from "@shared/generated/prisma";
import { EMPTY_ARTICLE } from "@src/constants";

/**
 * Ask server to fetch from database all articles under the given page name
 * Ideally, this should validate 3 fields:
 *   - publishedAt (shouldn't display a )
 * @param pageData Reference to be modified by function
 * @param pageName Name to be used as query to server
 */
export const getPageArticlesAll = async (pageData: article[], pageName: Page) => {
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

    const newArticle: article = {
      id: data.id,
      title: data.title,
      page: data.page,
      thumbnail: data.thumbnail,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      publishedAt: data.publishedAt,
      content: data.content,
      summary: data.summary,
    };

    pageData.push(newArticle);
  } catch (error) {
    console.log(error);
  }
};

export const getPageArticlesRecent = async (pageData: article[], pageName: Page, top_k: number) => {
  try {
    const allArticles = [] as article[];
    await getPageArticlesAll(allArticles, pageName);

    for (let i = 0; i < top_k; i++) {
      if (i === allArticles.length) break;
      pageData.push(structuredClone(allArticles[i] ?? EMPTY_ARTICLE));
    }
  } catch (error) {
    console.log(error);
  }
};
