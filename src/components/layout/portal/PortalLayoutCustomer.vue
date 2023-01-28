<script setup>
import { computed, onMounted, reactive } from 'vue'
import { useAuthStore } from '../../../stores/auth'
import { menuItems } from './sideMenus'

// data
const authStore = useAuthStore()
const sideMenuItems = reactive({ ...menuItems })

// computed
const url = computed(() => {
  return import.meta.env.VITE_BASE_URL_CLIENT
})
</script>

<template>
  <div class="h-screen">
    <header
      class="fixed z-50 h-16 w-full bg-grey-darker shadow flex items-center justify-between"
    >
      <div class="flex items-center h-full mx-5">
        <div class="flex items-center text-center h-full w-60 border-grey-dark">
          <img src="@/assets/SVG.svg" alt="" />
        </div>
        <div class="flex items-center w-64 mx-5">
          <h2 class="text-primary text-2xl">Shipping Document</h2>
        </div>
      </div>
      <div class="flex items-center h-full text-sm divide-x-2">
        <div class="flex items-center h-full">
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/notifications/icon-calculator.svg"
              alt=""
            />
          </a>

          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/notifications/new.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/notifications/icon-task.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/notifications/icon-comment.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/notifications/icon-settings.svg"
              alt=""
            />
          </a>
        </div>
        <div class="flex items-center h-full">
          <a href="#" class="flex items-center text-dark h-full px-4">{{
            authStore?.currentUser?.name
          }}</a>
          <routerLink
            :to="{ name: 'portal-profile' }"
            class="flex items-center text-white h-full px-4"
          >
            <img
              src="@/assets/images/portal/sidebar/avatar/man/Icon/icon-account.svg"
              alt=""
            />
          </routerLink>
        </div>
      </div>
    </header>
    <div id="main" class="pt-16">
      <div class="bg-white relative h-full min-h-screen w-full">
        <div class="xl:py-2">
          <div
            class="group relative sidebar-item with-children py-4"
            v-for="(menu, index) in sideMenuItems"
            :key="index"
          >
            <routerLink
              v-if="menu.routerName"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
              :to="{ name: menu.routerName }"
            >
              <img :src="menu.iconPath" :alt="`menu icon ${menu.name}`" />
              <div class="text-dark text-xs mx-2 fs-18">{{ menu.name }}</div>
            </routerLink>
            <a
              v-else
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
              href="#"
            >
              <img :src="menu.iconPath" :alt="`menu icon ${menu.name}`" />
              <div class="text-dark text-xs mx-2 fs-18">{{ menu.name }}</div>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 p-5">
        <slot />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.router-link-exact-active {
  border: unset;
  color: #08246c;
  div {
    color: #08246c !important;
    font-weight: 700;
  }
  div::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #08246c;
    position: absolute;
    right: -20px;
    top: 40%;
  }
}
</style>
