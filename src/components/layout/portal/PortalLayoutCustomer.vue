<script setup>
import { computed, onMounted, reactive } from 'vue'
import { useAuthStore } from '../../../stores/auth'
import { menuItems } from './sideMenus'
import moment from 'moment'
import { ref, onBeforeUnmount } from 'vue'

let japanTimeNow = ref(moment().utcOffset(9).format('h:mm a, dddd'))
let timer = ref(null)

// data
const authStore = useAuthStore()
const sideMenuItems = reactive({ ...menuItems })
timer.value = setInterval(() => {
  japanTimeNow.value = moment().utcOffset(9).format('h:mm a, dddd')
}, 1000)

onBeforeUnmount(() => {
  clearInterval(timer.value)
})
// computed
const url = computed(() => {
  return import.meta.env.VITE_BASE_URL_CLIENT
})
</script>

<template>
  <div class="h-screen">
    <header
      class="text-white fixed z-50 h-20 w-full bg-grey-darker shadow flex items-center justify-between"
      style="background-color: #08246c"
    >
      <div class="flex items-center h-full ml-5">
        <div
          class="flex items-center text-center w-60 border-grey-dark bg-white"
        >
          <img src="@/assets/SVG.svg" alt="" />
        </div>
        <div class="flex items-center w-64 ml-5">
          <h2 class="text-white text-2xl">Shipping Document</h2>
        </div>
      </div>
      <div class="text-xs">
        <div class="flex items-center h-full">
          <div class="date-time md:col-span-1 flex gap-1 justify-start">
            <span class="loaction-type light-text-01">Japan Time :</span>
            <span>{{ japanTimeNow }}</span>
          </div>
          <div
            class="align-right grid grid-cols-1 md:grid-cols-3 gap-2 md:col-span-2"
          >
            <span class="nav-email hidden md:inline-block">
              <span class="light-text-01">Email:</span>
              info@japanautoauctions.jp
            </span>
            <span class="part-01">
              <span class="light-text-01">24/7 Support:</span>
              +81 3 6712 4147
            </span>
            <span class="part-02">
              <span class="light-text-01"> Language: </span>
              English
            </span>
          </div>
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
  .nav-portal-text {
    font-size: 10px;
  }
}
</style>
