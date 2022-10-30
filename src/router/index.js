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
      path: "/countries-vehicle-details",
      name: "countriesVehicleDetails",
      component: () => import("../views/CountriesVehicleDetailsView.vue"),
    },
    {
      path: "/how-to-ordering",
      name: "HowToOrdering",
      component: () => import("../views/HowToOrderingView.vue"),
    },
  ],
});

export default router;
