<script setup lang="ts">
import ArticlePreviewBox from "../ArticlePreviewBox.vue";
import RecentArticlesFeed from "../RecentArticlesFeed.vue";
import { EMPTY_ARTICLE, ERROR_ARTICLE, ERROR_ARTICLE_ID } from "@src/constants";
import { onMounted, ref } from "vue";
import { getMostRecentArticle, getPageArticlesRecent } from "@src/api/pagesCalls";
import { SUPPORTED_PAGES, type Article } from "../types";

const mostRecentArticle = ref(EMPTY_ARTICLE);
const mostRecentArticlePerPage = ref([] as Article[]);

onMounted(async () => {
  mostRecentArticle.value = (await getMostRecentArticle()) ?? ERROR_ARTICLE;
  console.log("Retrieved article data:", mostRecentArticle.value);

  for (const pageName of SUPPORTED_PAGES) {
    const temp = [] as Article[];
    await getPageArticlesRecent(temp, pageName, 1);
    if (temp[0] !== undefined && temp[0].id !== ERROR_ARTICLE_ID) {
      mostRecentArticlePerPage.value.push(temp[0] || ERROR_ARTICLE);
    }
  }
  if (mostRecentArticlePerPage.value.every((e) => e.id === ERROR_ARTICLE_ID)) {
    mostRecentArticlePerPage.value = [ERROR_ARTICLE];
  }
  console.log("Retrieved article data:", mostRecentArticlePerPage.value);
});
</script>

<template>
  <div class="grid gird-rows-4 grid-cols-1">
    <h1 class="order-1 ml-20 p-3">The Scoop</h1>
    <div class="m-20 mt-0 mb-10 order-2">
      <ArticlePreviewBox :article-content="mostRecentArticle"></ArticlePreviewBox>
    </div>
    <h2 class="order-4 ml-20 p-3 pt-0">Recent Updates</h2>
    <div class="order-4 grid-span rounded-lg m-20 mt-0 gap-5 grid grid-cols-[1fr_1fr]">
      <RecentArticlesFeed :articles="mostRecentArticlePerPage" />
    </div>
  </div>
</template>
