import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useNewsLetterStore = defineStore('newsLetters', () => {
  const newsLetters = ref([
    {
      id: 1,
      name: 1,
      subject: 1,
      created_at: '',
      html_content: '',
      updated_at: '',
    },
  ])

  const countries = ref([{ id: 1, label: '' }])

  const tableHeaders = reactive([
    {
      name: 'No',
      order: 1,
    },
    {
      name: 'Name',
      order: 2,
    },
    {
      name: 'Subject',
      order: 3,
    },
    {
      name: 'Content',
      order: 4,
    },
    {
      name: 'Created at',
      order: 5,
    },
    {
      name: 'Update at',
      order: 5,
    },

    {
      name: 'Actions',
      order: 6,
    },
  ])

  return { newsLetters, countries, tableHeaders }
})
