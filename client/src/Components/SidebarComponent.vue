<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pages = ["/eats", "/sips", "/flics", "/friends"];

const showSidebar = computed(() => pages.includes(route.path));
</script>

<template>
  <template v-if="showSidebar">
    <div>sidebar</div>
  </template>
</template>
