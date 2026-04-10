<script setup lang="ts">
import { useRoute } from "vue-router";
import ArticlePreviewBox from "../ArticlePreviewBox.vue";
import { onMounted, ref } from "vue";
import { EMPTY_ARTICLE } from "@src/constants";
import { getArticleByID } from "@src/api/pagesCalls";

const route = useRoute();
const url = route.path.split("/");

const articleID = url[url.indexOf("topics") + 1] ?? "";

const article = ref(EMPTY_ARTICLE);

onMounted(async () => {
  article.value = (await getArticleByID(articleID)) ?? EMPTY_ARTICLE;
});
</script>

<template>
  <div class="m-20 ml-50">
    <ArticlePreviewBox :article-content="article" />
  </div>
</template>
