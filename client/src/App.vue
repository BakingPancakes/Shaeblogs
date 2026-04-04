<script startup setup lang="ts">
import NavigationBar from "./Components/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <RouterView />
  <footer>Shaeblogs &copy; 2026</footer>
</template>

<style scoped>
footer {
  text-align: center;
}
</style>
