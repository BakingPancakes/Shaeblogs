<script setup lang="ts">
import type { Article } from "./types";
import { getDaysAgo } from "./utils";
import Card from "primevue/card";
import { MISSING_IMAGE_PATH } from "@src/constants";
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  articleContent: Article;
}>();

const pageName = props.articleContent.page.toLowerCase();

const route = useRoute();

const getLink = computed(() =>
  route.path.includes("/topics/")
    ? `${pageName}/${props.articleContent.id}`
    : `topics/${pageName}/${props.articleContent.id}`,
);
</script>

<template>
  <div class="grid grid-cols-2 bg-primary rounded-lg shadow-md min-h-60">
    <Card
      :pt="{
        root: { class: 'overflow-hidden' },
        body: { class: 'order-1 ml-3' },
      }"
    >
      <template #header>
        <img
          class="w-full max-h-70 object-cover pl-3 pt-3 pr-3"
          alt="article thumbnail"
          :src="props.articleContent.thumbnail ?? MISSING_IMAGE_PATH"
        />
      </template>
      <template #title>
        <p class="text-lg font-bold pl-2">{{ props.articleContent.title }}</p>
      </template>
      <template #subtitle>
        <p class="text-dim pl-2 mb-3 text-sm">{{ getDaysAgo(props.articleContent.publishedAt) }}</p>
      </template>
    </Card>
    <Card
      :pt="{
        root: { class: 'h-full' },
        body: { class: 'h-full text-sm order-2 grid grid-rows-[1fr_auto]' },
        content: { class: 'p-4' },
      }"
    >
      <template #content>
        <p>{{ props.articleContent.summary }}</p>
      </template>
      <template #footer>
        <RouterLink :to="getLink" class="p-4 flex items-center justify-center"
          >See full article <i class="pi pi-arrow-right" />
        </RouterLink>
      </template>
    </Card>
  </div>
</template>

<style></style>
