import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import authRoutesAdmin from "./authRoutesAdmin";
import { getAuthenticatedUser } from "../util/utils";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    ...authRoutesAdmin,
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
      path: "/shipment-service",
      name: "ShipmentService",
      component: () => import("../views/ShipmentServiceView.vue"),
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
