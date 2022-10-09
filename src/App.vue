<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div id="app">
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
</template>

<style scoped></style>
