<script setup lang="ts">
import { THEME } from "@/constants";
import { ref } from "vue";

type ArticleData = {
  title: string;
  pageName: string;
  date: number;
  thumbnail?: string;
  content: string;
  summary?: string;
  responseStatus: boolean;
  id: number;
};

const props = defineProps({
  pageNames: Array<string>,
});

const pageData = ref([] as ArticleData[]);

const getPageData = async (pageName: string) => {
  try {
    const requestType = "preview";
    const urlParams = new URLSearchParams({
      pageName: pageName,
      requestType: requestType,
    });
    const res = await fetch(__API_PATH__ + `/articles?${urlParams}`, {
      method: "GET",
    });

    const data = await res.json();

    console.log("Article preview data:", data);

    const newArticle: ArticleData = {
      id: data.id,
      title: data.title,
      pageName: data.page,
      responseStatus: true,
      date: data.date,
      content: data.content,
      summary: data.summary,
    };

    pageData.value.push(newArticle);
  } catch (error) {
    console.log(error);
  }
};

props.pageNames?.forEach((pageName) => getPageData(pageName));
console.log(pageData.value);
</script>

<template>
  <div class="preview" v-for="page in pageData" :key="page.id">
    <h1>{{ page.title ?? "no title" }}</h1>
    <h2>{{ page.date }}</h2>
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
