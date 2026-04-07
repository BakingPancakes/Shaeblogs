import { createWebHistory, createRouter } from "vue-router";

import DefaultLayout from "@components/layouts/DefaultLayout.vue";
import ArticleBrowseLayout from "@components/layouts/ArticleBrowseLayout.vue";

import LandingPageView from "@components/Views/LandingPageView.vue";
import ArticleSelectionView from "@components/Views/ArticleSeletionView.vue";
import ArticleReadView from "@components/Views/ArticleReadView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        { path: "", component: LandingPageView },
        {
          path: "topics",
          component: ArticleBrowseLayout,
          children: [
            {
              path: ":topicID",
              component: ArticleSelectionView,
            },
            {
              path: ":topicID/articles/:articleID",
              component: ArticleReadView,
            },
          ],
        },
        {
          path: "/:pathMatch(.*)*",
          name: "NotFound",
          component: () => import("./404view.vue"),
          // above function syntax is used for component to allow for variable name to begin with number
        },
      ],
    },
  ],
});

export default router;
