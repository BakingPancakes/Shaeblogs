<script lang="ts">
import type { Article } from "./types";

const props = defineProps<{
  articleContent: Article;
}>();
</script>

<template>
  <div>{{ props.articleContent.id }}</div>
</template>
