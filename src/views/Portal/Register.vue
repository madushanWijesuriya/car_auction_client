<script setup>
import { ref, computed, reactive } from 'vue'
import { isEmpty } from 'lodash-es'
import { useRouter } from 'vue-router'

const router = useRouter()

const errorList = ref([])
const form = reactive({
  name: '',
  email: '',
  password: '',
  country_id: 2,
  type: '',
  company_name: '',
  company_address: '',
  company_email: '',
  city: '',
  requested_car: '',
  port: '',
  contact_person: '',
  contact_no: '',
})

const submitForm = () => {
  errorList.value = []
  if (isEmpty(form.type))
    errorList.value.push({ message: 'Account type is required.', type: true })
  if (isEmpty(form.name))
    errorList.value.push({ message: 'Full name is required.', name: true })
  if (!form.contact_no)
    errorList.value.push({
      message: 'Contact number is required.',
      contactNo: true,
    })
  if (isEmpty(form.email))
    errorList.value.push({ message: 'email is required.', email: true })

  if (errorList.value.length) return

  try {
    router.push({
      name: 'RegisterStep',
      query: {
        type: form.type,
        name: form.name,
        contactNo: form.contact_no,
        email: form.email,
      },
    })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div class="flex-coloum">
        <div
          class="ml-3 mt-3 text-2xl text-blue-900 font-bold tracking-wider text-center"
        >
          <a href="#">New User Registration</a>
        </div>
        <div
          class="p-4 py-6 text-white md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly mt-10"
        >
          <div class="img">
            <img
              src="../../assets/images/portal/register/image_68.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="p-5 bg-white md:flex-1">
        <div class="img">
          <img src="../../assets/images/portal/login/image_2.png" alt="" />
        </div>
        <form action="#" class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500"
              >Are you an individual or a car dealer?</label
            >
            <div class="mb-4">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="1"
                  v-model="form.type"
                  :class="
                    errorList.some((e) => e.type)
                      ? 'border-red-800'
                      : 'border-gray-300'
                  "
                />
                <span class="ml-2">Individual</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="2"
                  v-model="form.type"
                  :class="
                    errorList.some((e) => e.type)
                      ? 'border-red-800'
                      : 'border-gray-300'
                  "
                />
                <span class="ml-2">Car Dealer</span>
              </label>
            </div>
            <div class="error-list">
              <div
                :class="[
                  'error text-red-900 font-bold',
                  idx !== 0 ? 'mb-1' : '',
                ]"
                v-for="(error, idx) in errorList.filter((e) => e.type)"
                :key="idx"
              >
                {{ error.message }}
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-1">
            <label for="name" class="text-sm font-semibold text-gray-500"
              >Enter Your Full Name</label
            >
            <input
              type="text"
              id="name"
              autofocus
              class="px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              :class="
                errorList.some((e) => e.name)
                  ? 'border-red-800'
                  : 'border-gray-300'
              "
              v-model="form.name"
            />
            <div class="error-list">
              <div
                :class="[
                  'error text-red-900 font-bold',
                  idx !== 0 ? 'mb-1' : '',
                ]"
                v-for="(error, idx) in errorList.filter((e) => e.name)"
                :key="idx"
              >
                {{ error.message }}
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500"
              >Enter Your Contact Number</label
            >
            <input
              type="number"
              id="contact_no"
              class="px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              v-model="form.contact_no"
              :class="
                errorList.some((e) => e.contactNo)
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
                v-for="(error, idx) in errorList.filter((e) => e.contactNo)"
                :key="idx"
              >
                {{ error.message }}
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between">
              <label for="password" class="text-sm font-semibold text-gray-500"
                >Enter Your Email Address</label
              >
            </div>
            <input
              type="email"
              id="email"
              class="px-4 py-2 transition duration-300 border rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              v-model="form.email"
              :class="
                errorList.some((e) => e.email)
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
                v-for="(error, idx) in errorList.filter((e) => e.email)"
                :key="idx"
              >
                {{ error.message }}
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-900 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              @click="submitForm"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
