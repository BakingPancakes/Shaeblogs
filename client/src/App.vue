<script startup setup lang="ts">
import Header from "@/Components/Header.vue";
import AsyncTest from "./Components/AsyncTest.vue";
</script>

<template>
  <Header />
  <div id="feed_container">
    <h1>This is a test for Shaebae's website!!!</h1>
    <AsyncTest />
  </div>
</template>

<style scoped>
#feed_container {
  background-color: white;
  margin: 10% auto;
  max-width: 50vw;
  min-height: 50vh;
  border-radius: 3em;
  text-align: center;
}
</style>
