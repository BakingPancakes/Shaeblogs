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
  <div class="preview" v-for="page in mostRecentArticlePerPage" :key="page.id">
    <h1>{{ page.title ?? "no title" }}</h1>
    <h2>{{ page.publishedAt ?? "no publication date" }}</h2>
    <p :v-if="page.thumbnail === undefined">{{ page.thumbnail ?? "no image" }}</p>
    <p>{{ page.summary ?? "no summary" }}</p>
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
