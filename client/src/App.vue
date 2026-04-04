<script startup setup lang="ts">
import NavigationBar from "@components/NavigationBar.vue";
import AsyncTestButton from "@components/AsyncTestButton.vue";
import SidebarComponent from "./Components/SidebarComponent.vue";
</script>

<template>
  <NavigationBar />
  <SidebarComponent />
  <RouterView />
  <AsyncTestButton />
  <footer>Shaeblogs &copy; 2026</footer>
</template>

<style scoped>
footer {
  text-align: center;
}
</style>
