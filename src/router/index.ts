import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/profile/",
    component: () => import("@/views/ProfilePage.vue"),
  },
  {
    path: "/register/",
    component: () => import("@/views/RegisterPage.vue"),
  },
  {
    path: "/onboarding/",
    component: () => import("@/views/OnboardingPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
