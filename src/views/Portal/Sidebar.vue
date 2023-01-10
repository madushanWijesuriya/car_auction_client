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

    <div id="main">
      <!-- Sidebar -->
      <div class="bg-white relative h-full min-h-screen w-full">
        <div class="xl:py-2">
          <div class="group relative sidebar-item with-children py-4">
            <div
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img
                src="../../assets/images/portal/sidebar/dashbord.svg"
                alt=""
              />
              <a :href="url + 'admin/sample-dashbord'">
                <div class="text-dark text-xs mx-2 fs-18">Dashboard</div>
              </a>
            </div>
          </div>
          <div class="group relative sidebar-item with-children">
            <div
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img
                src="../../assets/images/portal/sidebar/fin_repo.svg"
                alt=""
              />
              <a :href="url + 'admin/financial-information'">
                <div class="text-dark text-xs mx-2 fs-18">
                  Financial Information
                </div>
              </a>
            </div>
          </div>
          <div class="group relative sidebar-item with-children py-3">
            <div
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img src="../../assets/images/portal/sidebar/fi.svg" alt="" />
              <a :href="url + 'admin/shipping-document'">
                <div class="text-dark text-xs mx-2 fs-18">
                  Shipping Document
                </div>
              </a>
            </div>
          </div>
          <div class="group relative sidebar-item with-children py-3">
            <a
              href="#"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img
                src="../../assets/images/portal/sidebar/send_inq.svg"
                alt=""
              />
              <div class="text-Financial information 6 text-xs mx-2 fs-18">
                Send Inquiry
              </div>
            </a>
          </div>
          <div class="group relative sidebar-item with-children py-3">
            <div
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img
                src="../../assets/images/portal/sidebar/make_inv.svg"
                alt=""
              />
              <div class="text-Financial information 6 text-xs mx-2 fs-18">
                Make Invoices
              </div>
            </div>
          </div>

          <div class="group relative sidebar-item with-children py-3">
            <div
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img
                src="../../assets/images/portal/sidebar/make_inv.svg"
                alt=""
              />
              <div class="text-Financial information 6 text-xs mx-2 fs-18">
                <a :href="url + 'admin/freight-invoices'">
                  <div class="text-dark text-xs mx-2 fs-18">
                    Freight Invoices
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="group relative sidebar-item with-children py-3">
            <div
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img
                src="../../assets/images/portal/sidebar/make_inv.svg"
                alt=""
              />
              <div class="text-Financial information 6 text-xs mx-2 fs-18">
                <a :href="url + 'admin/portal-profile'">
                  <div class="text-dark text-xs mx-2 fs-18">Profile</div>
                </a>
              </div>
            </div>
          </div>

          <div class="group relative sidebar-item with-children pt-3">
            <a
              href="#"
              class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:text-primary"
            >
              <img
                src="../../assets/images/portal/sidebar/settings.svg"
                alt=""
              />
              <div class="text-Financial information 6 text-xs mx-2 fs-18">
                Settings
              </div>
            </a>
          </div>
          <!-- <div class="group relative sidebar-item with-children">
                        <a href="#"
                            class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-blue-dark xl:bg-black bg-black xl:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                class="h-6 w-6 text-white fill-current xl:mr-2">
                                <path
                                    d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"
                                    class="heroicon-ui"></path>
                            </svg>
                            <div class="text-white text-xs">Notifications</div>
                        </a>
                        <div
                            class="absolute xl:relative hidden xl:block pin-t left-full xl:pin-none w-48 xl:w-auto group-hover:block bg-black z-50 xl:z-auto">
                            <a href="#"
                                class="block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent text-white hover:text-blue-dark text-xs">
                                All Notification
                            </a>
                            <a href="#"
                                class="block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent text-white hover:text-blue-dark text-xs">
                                Friends
                            </a>
                            <a href="#"
                                class="block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent text-white hover:text-blue-dark text-xs">
                                Other
                            </a>
                        </div>
                    </div> -->
        </div>
      </div>

      <!-- Content -->
      <div class="bg-white h-full pt-8">
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
