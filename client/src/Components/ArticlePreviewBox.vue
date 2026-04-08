<script setup lang="ts">
import type { Article } from "./types";

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

<style></style>
