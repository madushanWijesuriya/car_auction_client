import Style from '@/views/admin/StyleView.vue'

const templateRoutes = [
  {
    meta: {
      title: 'Select style',
      layout: 'LayoutAdmin',
      requiresAuth: true,
    },
    path: '/admin',
    name: 'style',
    component: Style,
  },
  {
    meta: {
      title: 'Tables',
      layout: 'LayoutAdmin',
    },
    path: '/admin/tables',
    name: 'tables',
    component: () => import('@/views/admin/TablesView.vue'),
  },
  {
    meta: {
      title: 'Forms',
      layout: 'LayoutAdmin',
      requiresAuth: true,
    },
    path: '/admin/forms',
    name: 'forms',
    component: () => import('@/views/admin/FormsView.vue'),
  },
  {
    meta: {
      title: 'Profile',
      layout: 'LayoutAdmin',
      requiresAuth: true,
    },
    path: '/admin/profile',
    name: 'profile',
    component: () => import('@/views/admin/ProfileView.vue'),
  },
  {
    meta: {
      title: 'Ui',
      layout: 'LayoutAdmin',
      requiresAuth: true,
    },
    path: '/admin/ui',
    name: 'ui',
    component: () => import('@/views/admin/UiView.vue'),
  },
  {
    meta: {
      title: 'Responsive layout',
      layout: 'LayoutAdmin',
      requiresAuth: true,
    },
    path: '/admin/responsive',
    name: 'responsive',
    component: () => import('@/views/admin/ResponsiveView.vue'),
  },
  {
    meta: {
      title: 'Login',
      layout: 'LayoutAdmin',
      requiresAuth: true,
    },
    path: '/admin/login',
    name: 'login',
    component: () => import('@/views/admin/LoginView.vue'),
  },
  {
    meta: {
      title: 'Error',
      layout: 'LayoutAdmin',
    },
    path: '/admin/error',
    name: 'error',
    component: () => import('@/views/admin/ErrorView.vue'),
  },
]

export default templateRoutes
