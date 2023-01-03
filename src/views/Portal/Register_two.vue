<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { isEmpty } from 'lodash-es'
import httpResource from '@/http/httpResource'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

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

const submitForm = async () => {
  try {
    const response = await httpResource.post(
      '/api/customer/auth/register',
      form
    )
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  if (route.query.type !== undefined && route.query.type !== null)
    form.type = route.query.type
  if (route.query.name) form.name = route.query
  if (route.query.contactNo) form.contact_no = route.query.contactNo
  if (route.query.email) form.email = route.query.contactNo
})
</script>

<template>
  <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div class="p-5 bg-white md:flex-1">
        <form action="#" class="">
          <div class="flex flex-col space-y-5 mb-10">
            <div
              class="ml-3 mt-3 text-2xl text-blue-900 font-bold tracking-wider"
            >
              <a href="#">New User Registration</a>
            </div>
          </div>
          <div class="px-5">
            <div class="flex flex-col space-y-5">
              <div class="flex mb-4">
                <div class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >Company Name</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="first_name"
                    type="text"
                    placeholder="Your first name"
                    v-model="form.company_name"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter(
                        (e) => e.companyName
                      )"
                      :key="idx"
                    >
                      {{ error.message }}
                    </div>
                  </div>
                </div>
                <div class="w-1/2 ml-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="last_name"
                    >Select Country</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="last_name"
                    type="text"
                    placeholder="Your last name"
                    v-model="form.country_id"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter((e) => e.country)"
                      :key="idx"
                    >
                      {{ error.message }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex mb-4">
                <div class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >Company Address</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="first_name"
                    type="text"
                    placeholder="Your first name"
                    v-model="form.company_name"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter(
                        (e) => e.companyAddress
                      )"
                      :key="idx"
                    >
                      {{ error.message }}
                    </div>
                  </div>
                </div>
                <div class="w-1/2 ml-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="last_name"
                    >Port</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="last_name"
                    type="text"
                    placeholder="Your last name"
                    v-model="form.port"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter((e) => e.port)"
                      :key="idx"
                    >
                      {{ error.message }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex mb-4">
                <div class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >Contact Person</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="first_name"
                    type="text"
                    placeholder="Your first name"
                    v-model="form.contact_person"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter(
                        (e) => e.contactPerson
                      )"
                      :key="idx"
                    >
                      {{ error.message }}
                    </div>
                  </div>
                </div>
                <div class="w-1/2 ml-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="last_name"
                    >Requested Car</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="last_name"
                    type="text"
                    placeholder="Your last name"
                    v-model="form.requested_car"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter(
                        (e) => e.requestedCar
                      )"
                      :key="idx"
                    >
                      {{ error.message }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex mb-4">
                <div class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >Contact Number</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="first_name"
                    type="text"
                    placeholder="Your first name"
                    v-model="form.contact_no"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter(
                        (e) => e.contactNumber
                      )"
                      :key="idx"
                    >
                      {{ error.message }}
                    </div>
                  </div>
                </div>
                <div class="w-1/2 ml-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="last_name"
                    >Password</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="last_name"
                    type="text"
                    placeholder="Your last name"
                    v-model="form.password"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter(
                        (e) => e.password
                      )"
                      :key="idx"
                    >
                      {{ error.message }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex mb-4">
                <div class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >Company Email Address</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="first_name"
                    type="text"
                    placeholder="Your first name"
                    v-model="form.company_email"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter(
                        (e) => e.emailAddress
                      )"
                      :key="idx"
                    >
                      {{ error.message }}
                    </div>
                  </div>
                </div>
                <div class="w-1/2 ml-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="last_name"
                    >City</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="last_name"
                    type="text"
                    placeholder="Your last name"
                    v-model="form.city"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter((e) => e.city)"
                      :key="idx"
                    >
                      {{ error.message }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex mb-4">
                <div class="w-1/2 mr-1"></div>
                <div class="w-1/2 ml-1">
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-900 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                    @click="submitForm"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
