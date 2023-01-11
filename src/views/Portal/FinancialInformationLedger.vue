<script setup>
import TransactionLedger from '@/components/Tables/ClientPortal/TransactionLedger.vue'
import { useTransactionsStore } from '../../stores/transanctionLegder'
import { computed, onMounted, reactive, ref } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'
import SideBar from './Sidebar.vue'
const toast = useToast()
const transactionsStore = useTransactionsStore()
const { transactions: items, footerData } = storeToRefs(transactionsStore)
const headers = computed(() => transactionsStore.tableHeaders)

const decoratedItems = computed(() => {
  if (!items.value || !Array.isArray(items.value)) return []
  return items.value.map((i) => {
    return {
      id: i?.id,
      updated_at: i?.updated_at,
      customer_id: i?.vehicle?.title,
      updated_at: i?.updated_at,
      debit: i?.debit,
      credit: i?.credit,
      balance: i?.balance,
    }
  })
})

const getAllTransactions = async () => {
  try {
    const response = await httpResource.get('api/customer/transaction')
    transactionsStore.$patch({
      transactions: response.data,
      footerData: response.footer,
    })
  } catch (error) {
    console.error(error)
  }
}

const handleSearch = (event) => {
  console.log('abc')
}

onMounted(async () => {
  await getAllTransactions()
})

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
          <img src="../../assets/images/portal/sidebar/image.png" alt="" />
        </div>
        <div class="flex items-center w-64 mx-5">
          <a :href="url + '/admin/financial-information'"></a>
          <h2 class="text-primary text-2xl">Financial information</h2>
        </div>
      </div>
      <div class="flex items-center h-full text-sm divide-x-2 h-8">
        <div class="flex items-center h-full">
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/notifications/icon-calculator.svg"
              alt=""
            />
          </a>

          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/notifications/new.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/notifications/icon-task.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/notifications/icon-comment.svg"
              alt=""
            />
          </a>
          <a href="#" class="flex items-center text-white h-full px-4">
            <img
              src="../../assets/images/portal/sidebar/notifications/icon-settings.svg"
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
              src="../../assets/images/portal/sidebar/avatar/man/Icon/icon-account.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>

    <div id="main" class="pt-16">
      <div class="bg-gray-200 p-5">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-blue-800 p-6 rounded-lg shadow-lg">
              <div class="flex justify-items-center content-center">
                <div class="shape border-2 border-white mx-2">
                  <img
                    src="../../assets/images/portal/sidebar/fin_repo.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 class="text-xl my-auto text-white">My Stock</h2>
                  <p class="text-sm text-white">Total Units : 81</p>
                </div>
              </div>
            </div>
            <div class="bg-blue-800 p-6 rounded-lg shadow-lg">
              <div class="flex justify-items-center content-center">
                <div class="shape border-2 border-white mx-2">
                  <img src="../../assets/images/portal/sidebar/fi.svg" alt="" />
                </div>
                <div>
                  <routerLink
                    active-class="active"
                    class="font-semibold cursor-pointer"
                    :to="'/admin/financial-information'"
                    >Financial Information</routerLink
                  >
                  <h2 class="text-xl my-auto text-white">Transactions</h2>
                  <p class="text-sm text-white">Total Transactions : 81</p>
                </div>
              </div>
            </div>
            <div class="bg-blue-800 p-6 rounded-lg shadow-lg">
              <div class="flex justify-items-center content-center">
                <div class="shape border-2 border-white mx-2">
                  <img
                    src="../../assets/images/portal/sidebar/send_inq.svg"
                    alt=""
                  />
                </div>
                <div>
                  <routerLink
                    active-class="active"
                    class="font-semibold cursor-pointer"
                    :to="'/admin/financial-information-ledger'"
                    >Financial Information</routerLink
                  >
                  <h2 class="text-xl my-auto text-white">Ledger</h2>
                  <p class="text-sm text-white">Total Balance : $ 738,373.00</p>
                </div>
              </div>
            </div>
            <div class="bg-blue-800 p-6 rounded-lg shadow-lg">
              <div class="flex justify-items-center content-center">
                <div class="shape border-2 border-white mx-2">
                  <img
                    src="../../assets/images/portal/sidebar/make_inv.svg"
                    alt=""
                  />
                </div>
                <h2 class="text-xl my-auto text-white">Send Inquiry</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg mt-4">
          <div class="flex justify-between">
            <div class="">
              <h2 class="text-xl text-blue-800">Ledger</h2>
            </div>
            <div
              class="font-sans text-black bg-white flex items-center justify-center"
            >
              <div class="border rounded-full overflow-hidden flex">
                <input
                  type="text"
                  class="px-4 py-2"
                  placeholder="Search Vehical..."
                  @change="handleSearch"
                />
                <button
                  class="flex items-center justify-center px-4 border-l bg-blue-800"
                >
                  <svg
                    class="h-4 w-4 text-white"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <TransactionLedger
            @edit-user="getAllUsers"
            :items="decoratedItems"
            :headers="headers"
            :footer="footerData"
          >
          </TransactionLedger>
          <div class="w-full">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <!-- <table class="table-auto">
            <thead>
              <tr>
                <th>
                  <label class="block">
                    <input class="mr-2 leading-tight" type="checkbox" />
                  </label>
                </th>
                <th>Stock#</th>
                <th>Agent</th>
                <th>Chassis #</th>
                <th>Year</th>
                <th>Color</th>
                <th>CC</th>
                <th>FOB Price</th>
                <th>Freight</th>
                <th>Total Sale</th>
                <th>Paid Amount</th>
                <th>Remaining Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label class="block">
                    <input class="mr-2 leading-tight" type="checkbox" />
                  </label>
                </td>
                <td>#748409</td>
                <td>NILEKA</td>
                <td>JZX100-6036994</td>
                <td>2018</td>
                <td>Yellow</td>
                <td>660</td>
                <td>201,738</td>
                <td>85,999</td>
                <td>19,999</td>
                <td>342,090</td>
                <td>0</td>
              </tr>
            </tbody>
          </table> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/clientPortalSidebarOther.scss';
</style>
