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
      path: "/countries-vehicle-details",
      name: "countriesVehicleDetails",
      component: () => import("../views/CountriesVehicleDetailsView.vue"),
    },
    {
      path: "/how-to-ordering",
      name: "HowToOrdering",
      component: () => import("../views/HowToOrderingView.vue"),
    },
    {
      path: "/certifications-eaa",
      name: "CertificationsEaa",
      component: () => import("../views/CertificationsEaaView.vue"),
    },
    {
      path: "/services-quality-control",
      name: "ServicesQualityControl",
      component: () => import("../views/ServicesQualityControlView.vue"),
    },
    {
      path: "/services-auction-vs-stock",
      name: "ServicesAuctionVsStock",
      component: () => import("../views/ServicesAuctionVsStock.vue"),
    },
    {
      path: "/services-auction-houses",
      name: "ServicesAuctionHouses",
      component: () => import("../views/ServicesAuctionHouses.vue"),
    },
    {
      path: "/services-auction-guru",
      name: "ServicesAuctionGuru",
      component: () => import("../views/ServicesAuctionGuru.vue"),
    },
    {
      path: "/blank-page",
      name: "BlankPage",
      component: () => import("../views/BlankPage.vue"),
    },
  ],
});

export default router;
