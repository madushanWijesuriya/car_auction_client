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
        <li class="nav-item">
          <routerLink class="dropdown-item" :to="'/why-us'">Why Us</routerLink>
        </li>
        <li class="nav-item">
          <routerLink class="dropdown-item" :to="'/company-profile'"
            >Company Profile</routerLink
          >
        </li>
        <li class="nav-item">
          <routerLink class="dropdown-item" :to="'/about'"
            >Corparate Philosophy</routerLink
          >
        </li>
        <li class="nav-item">
          <routerLink class="dropdown-item" :to="'/customer-feedback'"
            >Customer's Feedback</routerLink
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
