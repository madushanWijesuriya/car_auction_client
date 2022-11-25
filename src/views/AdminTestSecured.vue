<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

const { currentUser } = storeToRefs(authStore)
</script>
<template>
  <div class="testSecured">You have logged in successfully</div>
  <div>
    {{ currentUser }}
  </div>
</template>
