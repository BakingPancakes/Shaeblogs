<script setup lang="ts">
import { getPageArticlesRecent } from "@src/api/pagesCalls";
import { isPage, type Article } from "../types";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const pageName = route.path.split("/").find((e) => isPage(e)) ?? "";

onMounted(async () => {
  const temp = [] as Article[];
  console.log();
  if (isPage(pageName)) {
    await getPageArticlesRecent(temp, pageName, 1);
  } else {
    router.push({ path: "/" });
  }
});
</script>

<template>
  <p>article page</p>
</template>
