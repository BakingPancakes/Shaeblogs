import { createWebHistory, createRouter } from "vue-router";

import TopicsView from "@components/TopicsView.vue";
import ArticleView from "@components/ArticleView.vue";
import { topicRoutes } from "./topicRoutes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TopicsView },
    ...topicRoutes,
    { path: "/:topic/:articleid", components: ArticleView },
    { path: "/./:pathMatch(.*)*", name: "404", component: () => import("./404view.vue") },
    // above function syntax is used for component to allow for variable name to begin with number
  ],
});

export default router;
