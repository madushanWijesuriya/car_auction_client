import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const isLoading = ref(false)
  function toggleIsLoading(data) {
    if (data) isLoading = data
    else isLoading = !isLoading
  }

  return { isLoading }
})
