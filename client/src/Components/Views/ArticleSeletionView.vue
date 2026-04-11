<script setup lang="ts">
import { getPageArticlesRecent } from "@src/api/pagesCalls";
import { isPage, type Article, type Page } from "../types";
import { ERROR_ARTICLE } from "@src/constants";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ArticlePreviewBox from "../ArticlePreviewBox.vue";
import { ERROR_ARTICLE_ID } from "@src/constants";
import { getPageName } from "../utils";

const route = useRoute();
const router = useRouter();

const pageName = ref<Page | undefined>(getPageName(route));

const topicArticles = ref([] as Article[]);
const top_k = 5;
const getArticles = async () => {
  const temp = [] as Article[];
  if (pageName.value !== undefined && isPage(pageName.value)) {
    await getPageArticlesRecent(temp, pageName.value, 1);
  } else {
    router.push({ path: "/" });
  }
  topicArticles.value = temp.slice(0, top_k);
  if (topicArticles.value.every((e) => e.id === ERROR_ARTICLE_ID)) {
    topicArticles.value = [ERROR_ARTICLE];
  }
};

onMounted(getArticles);
watch(
  () => route.path,
  () => {
    pageName.value = getPageName(route);
    getArticles();
  },
);
</script>

<template>
  <div id="view-container">
    <div id="selection-feed">
      <ArticlePreviewBox
        :article-content="article"
        v-for="article in topicArticles"
        :key="article.id"
      />
    </div>
  </div>
</template>

<style>
#view-container {
  height: 100%;
  margin-left: 120px;
  display: flex;
  justify-content: center;
}

#selection-feed {
  display: flex;
  flex-direction: column;
  margin-left: 120px + 50px;
  margin-right: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
  min-width: 60%;
}
</style>
