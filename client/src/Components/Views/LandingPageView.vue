<script setup lang="ts">
import RecentArticlesFeed from "../RecentArticlesFeed.vue";
import { THEME } from "@src/constants";
</script>

<template>
  <div id="feed_container">
    <h1>Recent updates:</h1>
    <RecentArticlesFeed />
  </div>
</template>

<style scoped>
#feed_container {
  background-color: v-bind("THEME.PRIMARY_1");
  margin: 3% auto;
  margin-top: 7em;
  padding: 5px;
  max-width: 70vw;
  min-height: 50vh;
  border-radius: 3em;
  text-align: left;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2em auto 1em;
}

h1 {
  margin: 0 1em;
  grid-column: 1 / 2;
}

#sips_preview {
  grid-column: 1;
}

#flics_preview {
  grid-column: 2;
}
</style>
