import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useCarsStore = defineStore('cars', () => {
  const cars = ref([])

  const filters = ref([])
  const tableHeaders = reactive([
    {
      name: 'No',
      order: 1,
    },
    {
      name: 'Photo',
      order: 2,
    },
    {
      name: 'Make',
      order: 3,
    },
    {
      name: 'Model',
      order: 4,
    },
    {
      name: 'FOB',
      order: 5,
    },
    {
      name: 'Status',
      order: 6,
    },
    {
      name: 'Inquiry',
      order: 7,
    },
    {
      name: 'Actions',
      order: 8,
    },
  ])

  return { cars, tableHeaders }
})
