import SipsView from "@components/SipsView.vue";
import FlicsView from "@components/FlicsView.vue";
import EatsView from "@components/EatsView.vue";
import FriendsView from "@components/FriendsView.vue";
import type { RouteRecordRaw } from "vue-router";

export const topicRoutes: RouteRecordRaw[] = [
  { path: "/sips", component: SipsView },
  { path: "/flics", component: FlicsView },
  { path: "/eats", component: EatsView },
  { path: "/friends", component: FriendsView },
];
