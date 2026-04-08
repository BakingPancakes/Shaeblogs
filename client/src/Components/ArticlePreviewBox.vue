<script setup lang="ts">
import type { Article } from "./types";
import { THEME } from "@src/constants";

const props = defineProps<{
  articleContent: Article;
}>();
</script>

<template>
  <div id="article-preview">
    <h1>{{ props.articleContent.title }}</h1>
    <p>{{ props.articleContent.publishedAt }}</p>
    <p>{{ props.articleContent.summary }}</p>
  </div>
</template>

<style>
#article-preview {
  background-color: v-bind("THEME.PRIMIARY_2");
}
</style>
