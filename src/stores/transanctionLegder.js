import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = ref([])

  const filters = ref([])
  const footerData = ref([])
  const tableHeaders = reactive([
    {
      name: 'Reference#',
      order: 1,
    },
    {
      name: 'Date',
      order: 2,
    },
    {
      name: 'Particulars',
      order: 3,
    },
    {
      name: 'Debit',
      order: 4,
    },
    {
      name: 'Credit',
      order: 5,
    },
    {
      name: 'Balance',
      order: 6,
    },
  ])

  return { transactions, tableHeaders ,footerData}
})
