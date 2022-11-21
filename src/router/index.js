import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuthenticatedUser } from '../util/utils'
import { useAuthStore } from '../stores/auth'
import LoginIn from '../views/AdminLoginIn.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/reachus',
      name: 'reachus',
      component: () => import('../views/ReachusView.vue'),
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/shipment-service',
      name: 'ShipmentService',
      component: () => import('../views/ShipmentServiceView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue'),
    },
    {
      path: '/customer-feedback',
      name: 'customerFeedBack',
      component: () => import('../views/aboutUsCusFeedback.vue'),
    },
    {
      path: '/why-us',
      name: 'whyus',
      component: () => import('../views/WhyUs.vue'),
    },
    {
      path: '/company-profile',
      name: 'companyProfile',
      component: () => import('../views/AboutUsCompanyProfile.vue'),
    },
    {
      path: '/countries-vehicle-details',
      name: 'countriesVehicleDetails',
      component: () => import('../views/CountriesVehicleDetailsView.vue'),
    },
    {
      path: '/vehical-details',
      name: 'vehicalDetails',
      component: () => import('../views/vehicalDetails.vue'),
    },
    {
      path: '/how-to-ordering',
      name: 'HowToOrdering',
      component: () => import('../views/HowToOrderingView.vue'),
    },
    {
      path: '/login',
      name: 'login-admin',
      component: LoginIn,
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
      component: () => import('../views/admin/HomeView.vue'),
    },
    {
      meta: {
        title: 'Add car',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/add-car',
      name: 'add-car',
      component: () => import('../views/admin/AddCarView.vue'),
    },
    {
      meta: {
        title: 'All Cars',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/all-cars',
      name: 'all-cars',
      component: () => import('../views/admin/AllCarsView.vue'),
    },
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
      component: () => import('../views/admin/TablesView.vue'),
    },
    {
      meta: {
        title: 'Forms',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/forms',
      name: 'forms',
      component: () => import('../views/admin/FormsView.vue'),
    },
    {
      meta: {
        title: 'Profile',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/profile',
      name: 'profile',
      component: () => import('../views/admin/ProfileView.vue'),
    },
    {
      meta: {
        title: 'Ui',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/ui',
      name: 'ui',
      component: () => import('../views/admin/UiView.vue'),
    },
    {
      meta: {
        title: 'Responsive layout',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/responsive',
      name: 'responsive',
      component: () => import('../views/admin/ResponsiveView.vue'),
    },
    {
      meta: {
        title: 'Login',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/login',
      name: 'login',
      component: () => import('../views/admin/LoginView.vue'),
    },
    {
      meta: {
        title: 'Error',
        layout: 'LayoutAdmin',
      },
      path: '/admin/error',
      name: 'error',
      component: () => import('../views/admin/ErrorView.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  if (
    to.meta.requiresAuth &&
    to.path !== '/login' &&
    !authStore.getIsAuthenticated
  ) {
    try {
      const status = await getAuthenticatedUser(authStore)
      if (status !== 200) next('/login')
      else next()
    } catch (error) {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
