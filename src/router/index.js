import { createRouter, createWebHistory } from "vue-router";
import TheMainView from "../views/TheMainView.vue";
import TheElectricChargingStationVue from "@/views/TheElectricChargingStation.vue";
import TheAttractionView from "@/views/TheAttractionView.vue";
import TheMytripView from "@/views/TheMytripView.vue";
import TheHotplaceView from "@/views/TheHotplaceView.vue";
import TheBoardView from "../views/TheBoardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: TheMainView,
    },
    {
      path: "/estations",
      name: "estations",
      component: TheElectricChargingStationVue,
    },
    {
      path: "/attraction",
      name: "attraction",
      component: TheAttractionView,
    },
    {
      path: "/mytrip",
      name: "mytrip",
      component: TheMytripView,
    },
    {
      path: "/hotplace",
      name: "hotplace",
      component: TheHotplaceView,
    },
    {
      path: "/board",
      name: "board",
      component: TheBoardView,
      redirect: { name: "article-list" },
      children: [
        {
          path: "list",
          name: "article-list",
          component: () => import("@/components/board/BoardList.vue"),
        },
        {
          path: "view/:articleno",
          name: "article-view",
          component: () => import("@/components/board/BoardDetail.vue"),
        },
        {
          path: "write",
          name: "article-write",
          component: () => import("@/components/board/BoardWrite.vue"),
        },
        {
          path: "modify/:articleno",
          name: "article-modify",
          component: () => import("@/components/board/BoardModify.vue"),
        },
      ],
    },
  ],
});

export default router;
