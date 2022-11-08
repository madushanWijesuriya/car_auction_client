import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/reachus",
      name: "reachus",
      component: () => import("../views/ReachusView.vue"),
    },
    {
      path: "/service",
      name: "service",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/TestView.vue"),
    },
    {
      path: "/customer-feedback",
      name: "customerFeedBack",
      component: () => import("../views/aboutUsCusFeedback.vue"),
    },
    {
      path: "/why-us",
      name: "whyus",
      component: () => import("../views/WhyUs.vue"),
    },
    {
      path: "/company-profile",
      name: "companyProfile",
      component: () => import("../views/AboutUsCompanyProfile.vue"),
    },
  ],
});

export default router;
