<script setup lang="ts">
import { getPageArticlesRecent } from "@src/api/pagesCalls";
import { EMPTY_ARTICLE, isPage, type Article } from "../types";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ArticlePreviewBox from "../ArticlePreviewBox.vue";
import { MISSING_ARTICLE_ID, THEME } from "@src/constants";

const route = useRoute();
const router = useRouter();

const getPageName = () => route.path.split("/").find((e) => isPage(e)) ?? "";
const pageName = ref(getPageName());

const topicArticles = ref([] as Article[]);
const top_k = 5;

const getArticles = async () => {
  const temp = [] as Article[];
  if (isPage(pageName.value)) {
    await getPageArticlesRecent(temp, pageName.value, 1);
  } else {
    router.push({ path: "/" });
  }
  topicArticles.value = temp.slice(0, top_k);
  if (topicArticles.value.every((e) => e.id === MISSING_ARTICLE_ID)) {
    topicArticles.value = [EMPTY_ARTICLE];
  }
};

onMounted(getArticles);
watch(getPageName, () => {
  pageName.value = getPageName();
  getArticles();
});
</script>

<template>
  <div id="article-selection-container">
    <ArticlePreviewBox
      :article-content="article"
      v-for="article in topicArticles"
      :key="article.id"
    />
  </div>
</template>

<style>
#article-selection-container {
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-left: 100px;
  margin-right: 50px;
  background-color: v-bind("THEME.PRIMARY_1");
}
</style>
