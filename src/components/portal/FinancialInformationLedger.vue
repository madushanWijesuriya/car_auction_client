<script setup>
import TransactionLedger from '@/components/Tables/ClientPortal/TransactionLedger.vue'
import { useTransactionsStore } from '../../stores/transanctionLegder'
import { computed, onMounted, reactive, ref } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'
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
</script>
<template>
  <div class="w-full h-screen">
    <div  class="w-full">
      <div class="bg-gray-200 p-5 w-full">
         <div class=" bg-white p-3 rounded-lg">
          <TransactionLedger
            @edit-user="getAllUsers"
            :items="decoratedItems"
            :headers="headers"
            :footer="footerData"
          >
          </TransactionLedger>
         </div>
         
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/clientPortalSidebarOther.scss';
</style>
