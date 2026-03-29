<script setup lang="ts">
import { THEME } from "@/constants";
import { ref } from "vue";
import type { article } from "../../../server/generated/prisma/client.js";
import { getPageData } from "@/api/pagesCalls";

const props = defineProps({
  pageNames: {
    type: Array<string>,
    required: true,
  },
});

const pageData = ref([] as article[]);

props.pageNames?.forEach((pageName) => getPageData(pageData, pageName));
</script>

<template>
  <div class="preview" v-for="page in pageData" :key="page.id">
    <h1>{{ page.title ?? "no title" }}</h1>
    <h2>{{ page.date }}</h2>
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
