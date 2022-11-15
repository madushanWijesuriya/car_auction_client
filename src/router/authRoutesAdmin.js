import Home from '@/views/admin/HomeView.vue'

const authRoutesAdmin = [
  {
    path: '/login',
    name: 'login-admin',
    component: () => import('../views/admin/LoginIn.vue'),
    meta: { requiresAuth: false, layout: 'LayoutAdmin' },
  },
  {
    path: '/secured-route',
    name: 'securedRoute',
    component: () => import('../views/admin/TestSecured.vue'),
    meta: { requiresAuth: true, layout: 'LayoutAdmin' },
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard',
      layout: 'LayoutAdmin',
      requiresAuth: true,
    },
    path: '/admin/dashboard',
    name: 'dashboard',
    component: Home,
  },
  {
    meta: {
      title: 'Add car',
      layout: 'LayoutAdmin',
      requiresAuth: true,
    },
    path: '/admin/add-car',
    name: 'add-car',
    component: () => import('@/views/admin/AddCarView.vue'),
  },
  {
    meta: {
      title: 'All Cars',
      layout: 'LayoutAdmin',
      requiresAuth: true,
    },
    path: '/admin/all-cars',
    name: 'all-cars',
    component: () => import('@/views/admin/AllCarsView.vue'),
  },
]

export default authRoutesAdmin
