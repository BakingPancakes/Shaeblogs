<script setup lang="ts">
import { THEME } from "@src/constants";
import { SUPPORTED_PAGES } from "./types";
</script>

<template>
  <div id="sidebar-wrapper">
    <div id="tab-button" key="back">
      <RouterLink to="/">Back to Home</RouterLink>
    </div>
    <div id="tab-button" v-for="topic in SUPPORTED_PAGES" :key="topic">
      <RouterLink :to="topic">{{ topic.toLocaleUpperCase() }}</RouterLink>
    </div>
  </div>
</template>

<style>
#sidebar-wrapper {
  position: fixed;
  background-color: v-bind("THEME.PRIMARY_1");
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  margin-top: 60px;
}

#tab-button {
  padding: 1em;
  text-align: center;
}
</style>
