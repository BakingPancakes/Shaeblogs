<script startup setup lang="ts">
import NavigationBar from "@components/NavigationBar.vue";
</script>

<template>
  <div id="app-shell">
    <NavigationBar />
    <RouterView />
  </div>
</template>

<style scoped>
#app-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;

  /** disable scroll container behavior
  + clip content that exceeds bounds */
  overflow: hidden;
}
</style>
