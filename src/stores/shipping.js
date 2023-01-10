import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useShippingStore = defineStore('shipping', () => {
  const shipping = ref([
    {
      id: '',
      vehicle_id: '',
      country_id: '-',
      customer_id: '-',
      etd: '-',
      eta: '-',
      pol: '-',
      pod: '-',
      consignee_name: '-',
      yard_location: '-',
      created_at: '-',
    },
  ])

  const tableHeaders = reactive([
    {
      name: 'ID',
      order: 1,
    },
    {
      name: 'Vehicle',
      order: 2,
    },
    {
      name: 'Country',
      order: 3,
    },
    {
      name: 'Customer',
      order: 4,
    },
    {
      name: 'ETD',
      order: 5,
    },
    {
      name: 'ETA',
      order: 6,
    },
    {
      name: 'POL',
      order: 7,
    },
    {
      name: 'POD',
      order: 8,
    },
    {
      name: 'Consignee Name',
      order: 8,
    },
    {
      name: 'Yard Location',
      order: 8,
    },
    {
      name: 'Created Date',
      order: 8,
    },
  ])

  return { shipping, tableHeaders }
})
