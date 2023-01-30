import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useInqStore = defineStore('inqueries', () => {
  const inqueries = ref([
    {
      id: 'ssssssssssssss',
      type: 'ssssssssssssss',
      vehicle_id: 'ssssssssssssss',
      country_id: 'ssssssssssssss',
      name: 'ssssssssssssss',
      email: 'ssssssssssssss',
      cell_no: 'ssssssssssssss',
      port_name: 'ssssssssssssss',
      mobile_no: 'ssssssssssssss',
      created_at: 'ssssssssssssss',
    },
  ])

  const tableHeaders = reactive([
    {
      name: '#',
      order: 1,
    },
    {
      name: 'Type',
      order: 2,
    },
    {
      name: 'Vehicle',
      order: 3,
    },
    {
      name: 'Country',
      order: 4,
    },
    {
      name: 'Name',
      order: 5,
    },
    {
      name: 'Email',
      order: 6,
    },
    {
      name: 'Cell No',
      order: 7,
    },
    {
      name: 'Port',
      order: 8,
    },
    {
      name: 'Mobile ',
      order: 9,
    },
    {
      name: 'Created At',
      order: 10,
    },
    {
      name: 'Actions',
      order: 11,
    },
  ])

  return { inqueries, tableHeaders }
})
