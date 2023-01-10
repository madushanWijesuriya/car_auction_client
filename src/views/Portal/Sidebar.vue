<script setup>
import { computed, onMounted } from '@vue/runtime-core'
</script>
<template>
  <div class="h-screen">
    <div
      class="bg-white h-full pt-8 p-6 min-h-screen w-full rounded-lg shadow-lg"
    >
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
              <h2 class="text-xl font-bold text-dash my-auto">Send Inquiry</h2>
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
