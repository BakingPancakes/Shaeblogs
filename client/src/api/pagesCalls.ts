import type { article } from "../../../server/generated/prisma/client.js";
import type { Ref } from "vue";

export const getPageData = async (pageData: Ref<article[]>, pageName: string) => {
  try {
    const requestType = "preview";
    const urlParams = new URLSearchParams({
      pageName: pageName,
      requestType: requestType,
    });
    const res = await fetch(__API_PATH__ + `/articles?${urlParams}`, {
      method: "GET",
    });

    const data = await res.json();

    console.log("Article preview data:", data);

    const newArticle: article = {
      id: data.id,
      title: data.title,
      page: data.page,
      thumbnail: data.thumbnail,
      date: data.date,
      content: data.content,
      summary: data.summary,
    };

    pageData.value.push(newArticle);
  } catch (error) {
    console.log(error);
  }
};
