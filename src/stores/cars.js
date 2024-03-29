import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCarsStore = defineStore('cars', () => {
  const cars = reactive([
    {
      no: 100,
      photo: 'https://picsum.photos/200/200',
      make: 'Audi',
      model: 'A5',
      FOB: 'Test',
      Status: 'Active',
      Inquiry: '-',
    },
    {
      no: 200,
      photo: 'https://picsum.photos/200/200',
      make: 'Audi',
      model: 'A2',
      FOB: 'Test 2',
      Status: 'Active',
      Inquiry: '-',
    },
  ])

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
