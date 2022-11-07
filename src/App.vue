<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div id="app">
    <header v-if="!this.$route.meta.layout">
      <Navbar />
    </header>
    <body>
      <RouterView />
    </body>
    <footer v-if="!this.$route.meta.layout">
      <Footer />
    </footer>
  </div>
</template>

<style scoped></style>
