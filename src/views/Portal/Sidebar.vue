<script setup>
import { computed, onMounted } from '@vue/runtime-core'

const url = computed(() => {
  return import.meta.env.VITE_BASE_URL_CLIENT
})
</script>
<template>
  <div class="h-screen">
    <!-- <header
      class="fixed z-50 h-16 w-full bg-grey-darker shadow flex items-center justify-between"
    >
      <div class="flex items-center h-full mx-5">
        <div class="flex items-center text-center h-full w-60 border-grey-dark">
          <img src="../../assets/images/portal/sidebar/image.png" alt="" />
        </div>
        <div class="flex items-center w-64 mx-5">
          <h2 class="text-white text-2xl">Dashboard</h2>
        </div>
      </div>
    </header> -->

    <div id="main relative h-full min-h-screen w-full">
      <!-- Sidebar -->

      <!-- Content -->
      <div class="h-full pt-8">
        <div class="text-center w-full text-grey-darkest">
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-gray-400/100 p-6 rounded-lg shadow-lg">
              <div class="flex justify-items-center content-center">
                <div class="shape mx-2">
                  <img
                    src="../../assets/images/portal/sidebar/fin_repo.svg"
                    alt=""
                  />
                </div>
                <h2 class="text-xl font-bold text-dash my-auto">
                  Financial informtion
                </h2>
              </div>
            </div>
            <div class="bg-gray-400/100 p-6 rounded-lg shadow-lg">
              <div class="flex justify-items-center content-center">
                <div class="shape mx-2">
                  <img src="../../assets/images/portal/sidebar/fi.svg" alt="" />
                </div>
                <h2 class="text-xl font-bold text-dash my-auto">
                  Shipping Document
                </h2>
              </div>
            </div>
            <div class="bg-gray-400/100 p-6 rounded-lg shadow-lg">
              <div class="flex justify-items-center content-center">
                <div class="shape mx-2">
                  <img
                    src="../../assets/images/portal/sidebar/send_inq.svg"
                    alt=""
                  />
                </div>
                <h2 class="text-xl font-bold text-dash my-auto">
                  Send Inquiry
                </h2>
              </div>
            </div>
            <div class="bg-gray-400/100 p-6 rounded-lg shadow-lg">
              <div class="flex justify-items-center content-center">
                <div class="shape mx-2">
                  <img
                    src="../../assets/images/portal/sidebar/make_inv.svg"
                    alt=""
                  />
                </div>
                <h2 class="text-xl font-bold text-dash my-auto">
                  Make Invoices
                </h2>
              </div>
              <h2 class="text-xl font-bold text-dash my-auto">Make Invoices</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/clientPortalSidebar.scss';
</style>
