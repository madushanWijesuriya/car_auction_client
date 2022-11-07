<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div id="app">
    <div v-if="this.$route.meta.layout">
      <body>
        <RouterView />
      </body>
    </div>
    <div v-else>
      <header>
        <Navbar />
      </header>
      <body>
        <RouterView />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
