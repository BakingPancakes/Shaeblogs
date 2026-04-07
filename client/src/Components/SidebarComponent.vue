<script setup lang="ts">
const topics = ["eats", "sips", "flics", "friends"];
</script>

<template>
  <div id="back-button">
    <RouterLink to="/">Back to Home</RouterLink>
  </div>
  <div v-for="topic in topics" :key="topic">
    <RouterLink :to="topic">{{ topic.toLocaleUpperCase() }}</RouterLink>
  </div>
</template>
