<script setup>
import { computed } from '@vue/runtime-core'
</script>

<template>
  <div class="menu-sub" @click="isOpen = !isOpen">
    <a href="#" class="font-semibold">
      {{ title }}
    </a>

    <transition name="fade" apear>
      <ul class="dropdown-menu" v-if="isOpen">
        <li class="dropdown dropdown-submenu dropend" @click="isOpen = !isOpen">
          <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">
            <div class="flex w-full justify-between items-center">
              <p class="font-semibold cursor-pointer">Auction</p>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 11.5V6.5M6.5 6.5V1.5M6.5 6.5H11.5M6.5 6.5H1.5"
                  stroke="#08246C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </a>
          <ul class="dropdown-menu" apear>
            <li class="nav-item">
              <routerLink
                class="dropdown-item cursor-pointer"
                :to="'/service-auction-calendar'"
                >Auction Calendar</routerLink
              >
            </li>
            <li class="nav-item">
              <routerLink class="dropdown-item cursor-pointer" :to="'/services-auction-guru'"
                >Auction Guide</routerLink
              >
            </li>
            <li class="nav-item">
              <routerLink
                class="dropdown-item cursor-pointer"
                :to="'/services-auction-vs-stock'"
                >Auction Vs Stock</routerLink
              >
            </li>
            <li class="nav-item">
              <routerLink class="dropdown-item cursor-pointer" :to="'/services-auction-houses'"
                >Auction Houses</routerLink
              >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <routerLink class="dropdown-item cursor-pointer" :to="'/services-quality-control'"
            >Quality Control</routerLink
          >
        </li>
        <li class="dropdown dropdown-submenu dropend">
          <routerLink
            class="dropdown-item dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
          >
            <div class="flex w-full justify-between items-center">
              <p class="font-semibold cursor-pointer">Certifications</p>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 11.5V6.5M6.5 6.5V1.5M6.5 6.5H11.5M6.5 6.5H1.5"
                  stroke="#08246C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </routerLink>
          <ul class="dropdown-menu" apear>
            <li class="nav-item">
              <routerLink
                class="dropdown-item cursor-pointer"
                :to="'/certificationEAA'"
                >EAA</routerLink
              >
            </li>
            <li class="nav-item cursor-pointer"><a class="dropdown-item">Intertek</a></li>
            <li class="nav-item cursor-pointer"><a class="dropdown-item">JAAI </a></li>
            <li class="nav-item cursor-pointer"><a class="dropdown-item">JEVIC</a></li>
            <li class="nav-item cursor-pointer"><a class="dropdown-item">VCA</a></li>
            <li class="nav-item cursor-pointer"><a class="dropdown-item">QISJ Calendar</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <routerLink class="dropdown-item cursor-pointer" :to="'/shipment-service'"
            >Shipment Schedule</routerLink
          >
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'services',
  props: ['title'],
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
<style>
@import '@/assets/scss/topMenu.scss';
</style>
