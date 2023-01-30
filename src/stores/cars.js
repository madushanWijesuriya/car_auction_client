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
      name: 'Title',
      order: 3,
    },
    {
      name: 'Chassis No',
      order: 4,
    },

    {
      name: 'Make',
      order: 5,
    },
    {
      name: 'Model',
      order: 6,
    },
    {
      name: 'FOB ($)',
      order: 7,
    },
    {
      name: 'Status',
      order: 8,
    },
    {
      name: 'Inquiry',
      order: 9,
    },
    {
      name: 'Actions',
      order: 10,
    },
  ])

  return { cars, tableHeaders }
})
