const authRoutesAdmin = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Admin/LoginIn.vue"),
    meta: { requiresAuth: false, layout: "LayoutAdmin" },
  },
  {
    path: "/secured-route",
    name: "securedRoute",
    component: () => import("../views/Admin/TestSecured.vue"),
    meta: { requiresAuth: true, layout: "LayoutAdmin" },
  },
];

export default authRoutesAdmin;
