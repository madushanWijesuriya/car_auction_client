import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const content = ref([
    {
      id: 1,
      country_id: null,
      content_id: null,
      country: null,
      key: null,
      data: null,
      udpdated_at: null,
      content:null
    },
  ])

  const countries = ref([{ id: 1, label: '' }])

  const tableHeaders = reactive([
    {
      name: 'id',
      order: 1,
    },
    {
      name: 'country',
      order: 4,
    },
    {
      name: 'key',
      order: 5,
    },
    {
      name: 'latest update',
      order: 6,
    },
    {
      name: 'data',
      order: 6,
    },
    {
      name: 'Actions',
      order: 7,
    },
  ])

  return { content, countries, tableHeaders }
})
