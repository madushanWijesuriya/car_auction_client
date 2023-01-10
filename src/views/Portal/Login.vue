<script setup>
import { reactive, ref, computed } from 'vue'
import { isEmpty } from 'lodash-es'
import httpResource from '@/http/httpResource'
import { useRouter } from 'vue-router'
import Recapture from '../../components/recapture/Recapture.vue'

const router = useRouter()

let initialState = {
  email: '',
  password: '',
}

const form = reactive({ ...initialState })
const errorList = ref([])

const loginSubmit = async () => {
  errorList.value = []
  if (isEmpty(form.email)) {
    errorList.value.push({
      email: true,
      message: 'Email is required',
    })
  }
  if (isEmpty(form.password)) {
    errorList.value.push({
      password: true,
      message: 'Password is required',
    })
  }
  if (errorList.value.length) return
  try {
    const response = await httpResource.post('/api/customer/auth/login', {
      email: form.email,
      password: form.password,
    })
    if (response.status === 200 || response.status === 201)
      router.push({
        name: 'portal-profile',
      })
  } catch (error) {
    errorList.value = []
    console.error(error)
    if (error && error.response && error.response.status === 401) {
      errorList.value.push({
        common: true,
        message: error.response.data?.message
          ? error.response.data.message
          : 'Email & Password does not match with our record.',
      })
    } else {
      errorList.value.push({
        common: true,
        message: 'Something went wrong',
      })
    }
  }
}
</script>
<template>
  <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
        class="ml-3 mt-3 text-2xl text-blue-900 font-bold tracking-wider text-center"
      >
        <a href="#">Log In</a>
      </div>
      <div
        class="p-4 py-6 text-white md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        <div class="img">
          <img src="../../assets/images/portal/login/white_car.svg" alt="" />
        </div>
      </div>
      <div class="p-5 bg-white md:flex-1">
        <div class="img">
          <img src="../../assets/images/portal/login/image_2.png" alt="" />
        </div>
        <form class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500"
              >User Name</label
            >
            <input
              type="email"
              id="email"
              autofocus
              class="px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              :class="
                errorList.some((e) => e.email)
                  ? 'border-red-800'
                  : 'border-gray-300'
              "
              v-model="form.email"
            />
            <div class="error-list">
              <div
                :class="[
                  'error text-red-900 font-bold',
                  idx !== 0 ? 'mb-1' : '',
                ]"
                v-for="(error, idx) in errorList.filter((e) => e.email)"
                :key="idx"
              >
                {{ error.message }}
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between">
              <label for="password" class="text-sm font-semibold text-gray-500"
                >Password</label
              >
            </div>
            <input
              type="password"
              id="password"
              class="px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              v-model="form.password"
              :class="
                errorList.some((e) => e.password)
                  ? 'border-red-800'
                  : 'border-gray-300'
              "
            />
            <div class="error-list">
              <div
                :class="[
                  'error text-red-900 font-bold',
                  idx !== 0 ? 'mb-1' : '',
                ]"
                v-for="(error, idx) in errorList.filter(
                  (e) => e.password || e.common
                )"
                :key="idx"
              >
                {{ error.message }}
              </div>
            </div>
            <div class="flex items-center justify-end mt-4 mb-4">
              <a
                href="#"
                class="text-sm text-blue-900 hover:underline focus:text-blue-600"
                >Forgot Password?</a
              >
            </div>
            <div class="recapture mt-6">
              <Recapture />
            </div>
          </div>
          <div>
            <button
              type="button"
              class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-900 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              @click="loginSubmit"
            >
              Log in
            </button>
            <p class="text-sm mt-2 text-blue-900">
              <span>if you don't have and account?</span>
              <a :href="'/sign-up'" class="underline mr-3">User Registration</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
