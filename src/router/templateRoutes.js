import Style from "@/views/admin/StyleView.vue";
import Home from "@/views/admin/HomeView.vue";

const templateRoutes = [
  {
    meta: {
      title: "Select style",
      layout: "LayoutAdmin",
    },
    path: "/admin",
    name: "style",
    component: Style,
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
      layout: "LayoutAdmin",
    },
    path: "/admin/dashboard",
    name: "dashboard",
    component: Home,
  },
  // {
  //   meta: {
  //     title: "Tables",
  //     layout: "LayoutAdmin",
  //   },
  //   path: "/admin/tables",
  //   name: "tables",
  //   component: () => import("@/views/admin/TablesView.vue"),
  // },
  {
    meta: {
      title: "Add car",
      layout: "LayoutAdmin",
    },
    path: "/admin/add-car",
    name: "add car",
    component: () => import("@/views/admin/AddCarView.vue"),
  },
  {
    meta: {
      title: "Forms",
      layout: "LayoutAdmin",
    },
    path: "/admin/forms",
    name: "forms",
    component: () => import("@/views/admin/FormsView.vue"),
  },
  {
    meta: {
      title: "Profile",
      layout: "LayoutAdmin",
    },
    path: "/admin/profile",
    name: "profile",
    component: () => import("@/views/admin/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui",
      layout: "LayoutAdmin",
    },
    path: "/admin/ui",
    name: "ui",
    component: () => import("@/views/admin/UiView.vue"),
  },
  {
    meta: {
      title: "Responsive layout",
      layout: "LayoutAdmin",
    },
    path: "/admin/responsive",
    name: "responsive",
    component: () => import("@/views/admin/ResponsiveView.vue"),
  },
  {
    meta: {
      title: "Login",
      layout: "LayoutAdmin",
    },
    path: "/admin/login",
    name: "login",
    component: () => import("@/views/admin/LoginView.vue"),
  },
  {
    meta: {
      title: "Error",
      layout: "LayoutAdmin",
    },
    path: "/admin/error",
    name: "error",
    component: () => import("@/views/admin/ErrorView.vue"),
  },
];

export default templateRoutes;
