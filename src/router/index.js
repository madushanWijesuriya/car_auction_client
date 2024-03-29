import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { getAuthenticatedUser } from '../util/utils'
import { useAuthStore } from '@/stores/auth'
import LoginIn from '@/views/AdminLoginIn.vue'
import Style from '@/views/AdminStyleView.vue'

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
      component: () => import('../views/AdminTestSecured.vue'),
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
      component: () => import('../views/AdminHomeView.vue'),
    },
    {
      meta: {
        title: 'Add car',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/add-car',
      name: 'add-car',
      component: () => import('../views/AdminAddCarView.vue'),
    },
    {
      meta: {
        title: 'All Cars',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/all-cars',
      name: 'all-cars',
      component: () => import('../views/AdminAllCarsView.vue'),
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
      component: () => import('../views/AdminTablesView.vue'),
    },
    {
      meta: {
        title: 'Forms',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/forms',
      name: 'forms',
      component: () => import('../views/AdminFormsView.vue'),
    },
    {
      meta: {
        title: 'Profile',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/profile',
      name: 'profile',
      component: () => import('../views/AdminProfileView.vue'),
    },
    {
      meta: {
        title: 'Ui',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/ui',
      name: 'ui',
      component: () => import('../views/AdminUiView.vue'),
    },
    {
      meta: {
        title: 'Responsive layout',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/responsive',
      name: 'responsive',
      component: () => import('../views/AdminResponsiveView.vue'),
    },
    {
      meta: {
        title: 'Login',
        layout: 'LayoutAdmin',
        requiresAuth: true,
      },
      path: '/admin/login',
      name: 'login',
      component: () => import('../views/AdminLoginView.vue'),
    },
    {
      meta: {
        title: 'Error',
        layout: 'LayoutAdmin',
      },
      path: '/admin/error',
      name: 'error',
      component: () => import('../views/AdminErrorView.vue'),
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
