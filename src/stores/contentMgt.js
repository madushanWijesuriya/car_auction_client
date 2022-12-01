import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const content = ref([
    {
      id: 1,
        country_id: 1,
        content_id: 1,
        country: 'i?.country?.name',
    },
  ])

  const countries = ref([
    {id:1 , label:''}

  ])

  const tableHeaders = reactive([
    {
      name: 'No',
      order: 1,
    },
    {
      name: 'Content',
      order: 2,
    },
    {
      name: 'Country',
      order: 3,
    }
  ])

  return { content,countries, tableHeaders }
})
