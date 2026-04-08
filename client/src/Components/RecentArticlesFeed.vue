<script setup lang="ts">
import { MISSING_ARTICLE_ID, THEME } from "@src/constants";
import { EMPTY_ARTICLE, SUPPORTED_PAGES } from "./types";
import type { Article } from "./types";
import { getPageArticlesRecent } from "@src/api/pagesCalls";
import { onMounted, ref } from "vue";

const mostRecentArticlePerPage = ref([] as Article[]);

onMounted(async () => {
  for (const pageName of SUPPORTED_PAGES) {
    const temp = [] as Article[];
    await getPageArticlesRecent(temp, pageName, 1);
    if (temp[0] !== undefined && temp[0].id !== MISSING_ARTICLE_ID) {
      mostRecentArticlePerPage.value.push(temp[0] || EMPTY_ARTICLE);
    }
  }
  if (mostRecentArticlePerPage.value.every((e) => e.id === MISSING_ARTICLE_ID)) {
    mostRecentArticlePerPage.value = [EMPTY_ARTICLE];
  }
  console.log("Retrieved article data:", mostRecentArticlePerPage.value);
});
</script>

<template>
  <div v-for="article in mostRecentArticlePerPage" :key="article.id">
    <RouterLink :to="'topics/' + article.page.toLocaleLowerCase()">{{ article.page }}</RouterLink>
    <div class="preview">
      <h1>{{ article.title ?? "no title" }}</h1>
      <h2>{{ article.publishedAt ?? "no publication date" }}</h2>
      <p :v-if="article.thumbnail === undefined">{{ article.thumbnail ?? "no image" }}</p>
      <p>{{ article.summary ?? "no summary" }}</p>
    </div>
  </div>
</template>

<style scoped>
.preview {
  background-color: v-bind("THEME.SECONDARY_1");
  grid-row: 2;
  margin: 1em;
  min-height: 60vh;
}
</style>
