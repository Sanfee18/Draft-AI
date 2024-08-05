import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/img2img",
    name: "img2img",
    components: {
      default: () => import("@/components/Img2ImgComponent.vue"),
      SideBar: () => import("@/components/SideBar.vue"),
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import("../views/AboutView.vue"),
      SideBar: () => import("@/components/SideBar.vue"),
    },
  },
  {
    path: "/road-map",
    name: "RoadMap",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import("../views/AboutView.vue"),
      SideBar: () => import("@/components/SideBar.vue"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
