<script setup>
import { computed, onMounted } from '@vue/runtime-core'
</script>
<template>
  <div
    class="flex flex-row filter-form md:p-3 lg:p-10 px-2 md:px-3 lg:px-10 justify-between item-center w-full text-[#08246C]"
  >
    <div class="visible flex items-center md:hidden" @click="isOpen = !isOpen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: #000000"
      >
        <path
          d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
        ></path>
      </svg>
    </div>
    <div class="flex items-center cursor-pointer" @click="$router.push('/')">
      <div class="lg:w-[150px] xl:w-[250px] md:w-[120px]">
        <img class="w-full" src="@/assets/images/logo.svg" />
      </div>
    </div>
    <div v-if="isOpen" class="absolute left-0 z-[500] top-12 p-5 bg-white">
      <SideBar />
    </div>
    <div
      class="hidden md:flex flex-row md:gap-4 xl:gap-[2vw] items-center font-semibold md:text-[12px] lg:text-[15px] xl:text-[20px]"
    >
      <div>
        <routerLink
          active-class="active"
          class="font-semibold cursor-pointer"
          :to="'/'"
          >Home</routerLink
        >
      </div>
      <div class="flex items-center gap-2">
        <routerLink
          active-class="active"
          class="font-semibold cursor-pointer"
          :to="'/stock-list'"
          >Stock List</routerLink
        >
      </div>
      <div class="flex items-center gap-2">
        <Services title="Services" />
        <div class="w-[10px] h-[10px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#08246C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <routerLink
        active-class="active"
        class="font-semibold"
        :to="'/how-to-ordering'"
        >How to Order</routerLink
      >
      <div class="flex items-center gap-2 sub-menu-list cursor-pointer">
        <Countries title="Countries" />
        <div class="w-[10px] h-[10px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#08246C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div class="flex items-center gap-2 sub-menu-list cursor-pointer">
        <AboutVue title="About" />
        <div class="w-[10px] h-[10px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#08246C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div class="font-semibold">
        <routerLink
          active-class="active"
          class="font-semibold cursor-pointer"
          :to="'/reachus'"
          >Reach Us</routerLink
        >
      </div>
    </div>

    <div
      class="hidden md:flex lg:flex flex-row gap-5 items-center justify-center"
    >
      <a :href="'/log-in'">
        <div
          class="flex flex-row justify-center md:text-[12px] lg:text-[15px] xl:text-[20px] font-semibold items-center cursor-pointer"
        >
          Log in
        </div>
      </a>
      <a :href="'/sign-up'">
        <div
          class="rounded xl:rounded-lg bg-[#08246C] hover:opacity-80 px-5 p-1 md:text-[12px] lg:text-[15px] xl:text-[20px] cursor-pointer text-white lg:p-2 lg:px-8 xl:px-[3vw] xl:py-4"
        >
          Register
        </div>
      </a>
    </div>
    <div class="visible flex items-center md:hidden">
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V3.59C0 4.113 0.213 4.627 0.583 4.997L6 10.414V18C6.0002 18.1704 6.04387 18.3379 6.1269 18.4867C6.20992 18.6354 6.32955 18.7605 6.47444 18.8502C6.61934 18.9398 6.78471 18.9909 6.9549 18.9988C7.1251 19.0066 7.29447 18.9709 7.447 18.895L11.447 16.895C11.786 16.725 12 16.379 12 16V10.414L17.417 4.997C17.787 4.627 18 4.113 18 3.59V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0ZM10.293 9.293C10.2 9.38571 10.1262 9.4959 10.0759 9.61724C10.0256 9.73857 9.99981 9.86866 10 10V15.382L8 16.382V10C8.00019 9.86866 7.9744 9.73857 7.92412 9.61724C7.87383 9.4959 7.80004 9.38571 7.707 9.293L2 3.59V2H16.001L16.003 3.583L10.293 9.293Z"
          fill="black"
        />
      </svg>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/navbar.scss';
</style>
<script>
import Services from './Services.vue'
import SideBar from './Sidebar.vue'
import AboutVue from './About.vue'
import Countries from './Countries.vue'
export default {
  name: 'navbar',
  components: {
    Services,
    AboutVue,
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
