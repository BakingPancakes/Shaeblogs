<script setup lang="ts">
import { ref } from "vue";

const apiURL = __API_PATH__;

const message = ref("");

const fetchAPI = async () => {
  try {
    const res = await fetch(apiURL);

    const data = await res.json();

    message.value = data.message;
  } catch (error) {
    message.value = "Error fetching data from api.";
    console.log(error);
  }
};
</script>

<template>
  <button @click="fetchAPI">Test api</button>
  <p v-if="message">{{ message }}</p>
</template>
