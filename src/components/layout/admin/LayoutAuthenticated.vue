<script setup>
import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import menuAside from '@/js/menuAside.js'
import menuNavBar from '@/js/menuNavBar.js'
import { useMainStore } from '@/stores/main.js'
import { useStyleStore } from '@/stores/style.js'
import BaseIcon from '@/components/admin/BaseIcon.vue'
import FormControl from '@/components/admin/FormControl.vue'
import NavBar from '@/components/admin/NavBar.vue'
import NavBarItemPlain from '@/components/admin/NavBarItemPlain.vue'
import AsideMenu from '@/components/admin/AsideMenu.vue'
import FooterBar from '@/components/admin/FooterBar.vue'
import { useAuthStore } from '../../../stores/auth'
import httpResource from '@/http/httpResource'

useMainStore().setUser({
  name: 'John Doe',
  email: 'john@example.com',
  avatar:
    'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93',
})

const layoutAsidePadding = 'xl:pl-60'

const styleStore = useStyleStore()

const router = useRouter()

const { setIsAuthenticated, setCurrentUser } = useAuthStore()

const isAsideMobileExpanded = ref(false)
const isAsideLgActive = ref(false)

router.beforeEach(() => {
  isAsideMobileExpanded.value = false
  isAsideLgActive.value = false
})

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    styleStore.setDarkMode()
  }

  if (item.isLogout) {
    try {
      setIsAuthenticated(false)
      httpResource.post('/api/staff/auth/logout', {})
      router.push({
        name: 'login-admin',
      })
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<template>
  <div
    :class="{
      dark: styleStore.darkMode,
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
    }"
  >
    <div
      :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
    >
      <NavBar
        :menu="menuNavBar"
        :class="[
          layoutAsidePadding,
          { 'ml-60 lg:ml-0': isAsideMobileExpanded },
        ]"
        @menu-click="menuClick"
      >
        <NavBarItemPlain
          display="flex lg:hidden"
          @click.prevent="isAsideMobileExpanded = !isAsideMobileExpanded"
        >
          <BaseIcon
            :path="isAsideMobileExpanded ? mdiBackburger : mdiForwardburger"
            size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain
          display="hidden lg:flex xl:hidden"
          @click.prevent="isAsideLgActive = true"
        >
          <BaseIcon :path="mdiMenu" size="24" />
        </NavBarItemPlain>
        <NavBarItemPlain use-margin>
          <FormControl
            placeholder="Search (ctrl+k)"
            ctrl-k-focus
            transparent
            borderless
          />
        </NavBarItemPlain>
      </NavBar>
      <AsideMenu
        :is-aside-mobile-expanded="isAsideMobileExpanded"
        :is-aside-lg-active="isAsideLgActive"
        :menu="menuAside"
        @menu-click="menuClick"
        @aside-lg-close-click="isAsideLgActive = false"
      />
      <slot />
      <FooterBar> </FooterBar>
    </div>
  </div>
</template>
