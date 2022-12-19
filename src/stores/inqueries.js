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
      name: 'id',
      order: 1,
    },
    {
      name: 'type',
      order: 2,
    },
    {
      name: 'Vehicle',
      order: 3,
    },
    {
      name: 'country_id',
      order: 4,
    },
    {
      name: 'name',
      order: 5,
    },
    {
      name: 'email',
      order: 6,
    },
    {
      name: 'cell_no',
      order: 7,
    },
    {
      name: 'port_name',
      order: 8,
    },
    {
      name: 'mobile_no',
      order: 9,
    },
    {
      name: 'created_at',
      order: 10,
    },
    {
      name: 'action',
      order: 11,
    },
  ])

  return { inqueries, tableHeaders }
})
