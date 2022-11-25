<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Menubar from '@/components/layout/TopMenu.vue'
import Footer from '@/components/layout/Footer.vue'
import AdminAuthenticated from './components/layout/admin/LayoutAuthenticated.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const pathMeta = computed(() => route.meta)
</script>

<template>
  <div id="app">
    <div v-if="pathMeta.layout" class="layout-02">
      <body>
        <RouterView />
      </body>
    </div>
    <div v-else class="layout-01">
      <header>
        <Navbar />
        <Menubar />
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
