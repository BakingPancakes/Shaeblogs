<script setup lang="ts">
import { EMPTY_ARTICLE, PAGES_SUPPORTED, THEME } from "@src/constants";
import type { article } from "@shared/generated/prisma/client.js";
import { getPageArticlesRecent } from "@src/api/pagesCalls";
import { onMounted, ref } from "vue";

const omittedPages = ["SIGHTS"];
const pages = PAGES_SUPPORTED.filter((page) => !omittedPages.includes(page));

const mostRecentArticlePerPage = ref([] as article[]);

onMounted(async () => {
  for (const pageName of pages) {
    const temp = [] as article[];
    await getPageArticlesRecent(temp, pageName, 1);
    console.log("temp:", temp);
    mostRecentArticlePerPage.value.push(temp[0] || EMPTY_ARTICLE);
  }
  console.log("final:", mostRecentArticlePerPage.value);
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
