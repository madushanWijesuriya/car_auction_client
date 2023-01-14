import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const currentUser = reactive({
    userId: '',
    email: '',
    createdAt: '',
    emailVerifiedAt: '',
    isClient: false,
    name: '',
  })
  const intervalName = ref('')

  function setIsAuthenticated(payload) {
    isAuthenticated.value = payload
  }
  function setCurrentUser(payload) {
    currentUser.userId = payload.userId
    currentUser.email = payload.email
    currentUser.createdAt = payload.created_at
    currentUser.emailVerifiedAt = payload.email_verified_at
    currentUser.name = payload?.name
  }
  function setIntervalName(payload) {
    intervalName.value = payload
  }
  function clearCurrentUser() {
    currentUser.userId = ''
    currentUser.email = ''
    currentUser.createdAt = ''
    currentUser.emailVerifiedAt = ''
    currentUser.name = ''
    currentUser.isClient = false
  }
  function setIsClient(payload) {
    currentUser.isClient = payload
  }

  return {
    isAuthenticated,
    intervalName,
    currentUser,
    setCurrentUser,
    setIntervalName,
    setIsAuthenticated,
    setIsClient,
  }
})
