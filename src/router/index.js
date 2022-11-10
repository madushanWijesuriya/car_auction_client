import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import authRoutesAdmin from "./authRoutesAdmin";
import { getAuthenticatedUser } from "../util/utils";
import { useAuthStore } from "../stores/auth";
import templateRoutes from "./templateRoutes";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
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
    ...authRoutesAdmin,
    ...templateRoutes,
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  if (
    to.meta.requiresAuth &&
    to.path !== "/login" &&
    !authStore.getIsAuthenticated
  ) {
    try {
      const status = await getAuthenticatedUser(authStore);
      if (status !== 200) next("/login");
      else next();
    } catch (error) {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
