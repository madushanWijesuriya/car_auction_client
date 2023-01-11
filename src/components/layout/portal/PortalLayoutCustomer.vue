<script setup>
import { computed, onMounted } from '@vue/runtime-core'
const url = computed(() => {
  return import.meta.env.VITE_BASE_URL_CLIENT
})

</script>

<template>
  <div class="h-screen">
    <header
      class="fixed z-50 h-16 w-full bg-grey-darker shadow flex items-center justify-between"
    >
      <div class="flex items-center h-full mx-5">
        <div class="flex items-center text-center h-full w-60 border-grey-dark">
          <img src="@/assets/images/portal/sidebar/image.png" alt="" />
        </div>
        <div class="flex items-center w-64 mx-5">
          <h2 class="text-primary text-2xl">Shipping Document</h2>
        </div>
      </div>
      <div class="flex items-center h-full text-sm divide-x-2 h-8">
        <div class="flex items-center h-full">
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/notifications/icon-calculator.svg"
              alt=""
            />
          </a>

          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/notifications/new.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/notifications/icon-task.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/notifications/icon-comment.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/notifications/icon-settings.svg"
              alt=""
            />
          </a>
        </div>
        <div class="flex items-center h-full">
          <a href="#" class="flex items-center text-dark h-full px-4"
            >Admin.M</a
          >
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="@/assets/images/portal/sidebar/avatar/man/Icon/icon-account.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>

    <div id="main" class="pt-16">
      <div class="bg-white relative h-full min-h-screen w-full">
        <div class="xl:py-2">
          <div class="group relative sidebar-item with-children py-4">
            <a :href="url + 'admin/sample-dashbord'"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
              :to="{ name: 'sample-dashbord' }"
            >
              <img src="@/assets/images/portal/sidebar/dashbord.svg" alt="" />
              <div class="text-dark text-xs mx-2 fs-18">Dashboard</div>
          </div>
          <div class="group relative sidebar-item with-children">
            <a :href="url + 'admin/financial-information'"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img src="@/assets/images/portal/sidebar/fin_repo.svg" alt="" />
              <div class="text-dark text-xs mx-2 fs-18">
                Financial Information
              </div>
          </div>
          <div class="group relative sidebar-item with-children py-3">
            <a :href="url + 'admin/shipping-document'"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img src="@/assets/images/portal/sidebar/fi.svg" alt="" />
              <div class="text-dark text-xs mx-2 fs-18">Shipping Document</div>
          </div>
          <div class="group relative sidebar-item with-children py-3">
            <a
              href="#"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img src="@/assets/images/portal/sidebar/send_inq.svg" alt="" />
              <div class="text-Financial information 6 text-xs mx-2 fs-18">
                Send Inquiry
              </div>
            </a>
          </div>
          <div class="group relative sidebar-item with-children py-3">
            <a
              href="#"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img src="@/assets/images/portal/sidebar/make_inv.svg" alt="" />
              <div class="text-Financial information 6 text-xs mx-2 fs-18">
                Make Invoices
              </div>
            </a>
          </div>
          <div class="group relative sidebar-item with-children pt-3">
            <a
              href="#"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img src="@/assets/images/portal/sidebar/settings.svg" alt="" />
              <div class="text-Financial information 6 text-xs mx-2 fs-18">
                Settings
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 p-5">
        <slot />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.router-link-active {
  border: unset;
  color: #08246c;
  div {
    color: #08246c !important;
    font-weight: 700;
  }
  div::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #08246c;
    position: absolute;
    right: -20px;
    top: 40%;
  }
}
</style>
