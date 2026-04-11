<script setup lang="ts">
import { THEME } from "@src/constants";
import { SUPPORTED_PAGES, type Page } from "./types";
import { useRouter } from "vue-router";
const router = useRouter();

// const isHomePage = !route.path.includes("/topics/");
// const isSelectionPage = route.path.slice(-1) === pageName;
// if (isHomePage) return `topics/${pageName}`;
// if (isSelectionPage) return pageName;
const handleTabClick = (topic: Page) => router.push(`/topics/${topic}`);
</script>

<template>
  <div id="sidebar-wrapper">
    <div
      class="tab-button"
      v-for="page in SUPPORTED_PAGES"
      :key="page"
      @click="handleTabClick(page)"
    >
      {{ page.toUpperCase() }}
    </div>
    <div class="tab-button">
      <RouterLink to="/">Back to Home</RouterLink>
    </div>
  </div>
</template>

<style>
#sidebar-wrapper {
  background-color: v-bind("THEME.PRIMARY_1");
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  margin-top: 60px;
  max-width: 120px;
}

.tab-button {
  padding: 1em;
  text-align: center;
}
</style>
