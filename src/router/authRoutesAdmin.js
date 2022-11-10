const authRoutesAdmin = [
  {
    path: "/login",
    name: "login-admin",
    component: () => import("../views/admin/LoginIn.vue"),
    meta: { requiresAuth: false, layout: "LayoutAdmin" },
  },
  {
    path: "/secured-route",
    name: "securedRoute",
    component: () => import("../views/admin/TestSecured.vue"),
    meta: { requiresAuth: true, layout: "LayoutAdmin" },
  },
];

export default authRoutesAdmin;
