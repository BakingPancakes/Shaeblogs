<script setup lang="ts">
import Tab from "@/Components/Tab.vue";

const tab_list = ["tab"];
</script>

<template>
  <div id="header" v-for="tab in tab_list">
    {{ tab }}
  </div>
</template>

<style>
#header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;
  min-height: 3em;
  border-top-left-radius: 3em;
  border-top-right-radius: 3em;

  background-color: aqua;
}
</style>
