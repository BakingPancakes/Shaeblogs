<script setup lang="ts">
import { THEME } from "@/constants";
import { ref } from "vue";

const props = defineProps({
  pageNames: Array<string>,
});

// don't know how to enforce this
type PageData = {
  title?: string;
  thumbnail?: string;
  summary?: string;
  responseStatus: boolean;
};

const numPages = props.pageNames?.length;

const pageData = ref(
  Array(numPages).fill({
    responseStatus: false,
  }),
);

const getPageData = async (pageName: string, index: number) => {
  try {
    const requestType = "preview";
    const urlParams = new URLSearchParams({
      pageName: pageName,
      requestType: requestType,
    });
    const res = await fetch(__API_PATH__ + `/articles?A${urlParams}`, {
      method: "GET",
    });

    const data = await res.json();

    pageData.value[index] = data;

    pageData.value[index].responseStatus = true;
  } catch (error) {
    pageData.value[index].responseStatus = false;
  }
};

props.pageNames?.forEach((pageName, i) => getPageData(pageName, i));
</script>

<template>
  <div class="preview" v-for="page in pageData">
    <h1>{{ page.title ?? "no title" }}</h1>
    <p>{{ page.thumbnail ?? "no image" }}</p>
    <p>{{ page.summary ?? "no summary" }}</p>
  </div>
</template>

<style scoped>
.preview {
  background-color: v-bind("THEME.SECONDARY_1");
  grid-row: 2;
  margin: 1em;
  min-height: 60vh;
}
</style>
