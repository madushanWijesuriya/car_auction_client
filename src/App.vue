<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import AdminAuthenticated from "./components/layout/admin/LayoutAuthenticated.vue";
</script>

<template>
  <div id="app">
    <div v-if="this.$route.meta.layout" class="layout-02">
      <body>
        <RouterView />
      </body>
    </div>
    <div v-else class="layout-01">
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
