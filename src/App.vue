<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Menubar from '@/components/layout/TopMenu.vue'
import Footer from '@/components/layout/Footer.vue'
import AdminAuthenticated from './components/layout/admin/LayoutAuthenticated.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import PortalLayoutCustomer from '@/components/layout/portal/PortalLayoutCustomer.vue'

const route = useRoute()
const pathMeta = computed(() => route.meta)
</script>

<template>
  <div id="app">
    <div v-if="pathMeta.layout" class="layout-02">
      <body v-if="pathMeta.layout === 'LayoutPortal'">
        <PortalLayoutCustomer>
          <div>
            <RouterView />
          </div>
        </PortalLayoutCustomer>
        <!-- <RouterView /> -->
      </body>
      <body v-else-if="pathMeta.layout">
        <RouterView />
      </body>
      <body v-else>
        Loading...
      </body>
    </div>
    <div v-else class="layout-01">
      <div v-if="pathMeta.isClientLogin">
        <body>
          <RouterView />
        </body>
      </div>
      <div v-else>
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
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/clientPortalSidebarOther.scss';
</style>
