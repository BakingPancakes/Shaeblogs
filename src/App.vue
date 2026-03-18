<script setup lang="ts">
import Header from '@/Components/Header.vue';

</script>

<template>
  <div id="feed_container">
    <Header/>
    <h1>This is a test for Shaebae's website!!!</h1>
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

::-webkit-scrollbar {
    display: none;
  }
</style>
