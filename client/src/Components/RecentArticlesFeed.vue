<script setup lang="ts">
import type { Article } from "./types";
import ArticlePreviewBox from "./ArticlePreviewBox.vue";

const props = defineProps<{
  articles: Article[];
}>();
</script>

<template>
  <!--I'm sure there's a way to do this that doesn't require wrapping in a div-->
  <div v-for="article in props.articles" :key="article.id">
    <ArticlePreviewBox :article-content="article" />
  </div>
</template>
