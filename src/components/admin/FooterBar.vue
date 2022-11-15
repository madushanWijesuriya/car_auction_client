<script setup>
import { containerMaxW } from "@/js/config.js";
import BaseLevel from "@/components/admin/BaseLevel.vue";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b
          >&copy;{{ year }},
          <a href="/" target="_blank">Jamex Auction House</a>.</b
        >
        <slot />
      </div>
      <div class="md:py-2"></div>
    </BaseLevel>
  </footer>
</template>
