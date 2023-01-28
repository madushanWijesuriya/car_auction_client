<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { isEmpty } from 'lodash-es'
import httpResource from '@/http/httpResource'
import { useRouter, useRoute } from 'vue-router'
import { codes } from '@/js/countryCode'

const router = useRouter()
const route = useRoute()
const loading = ref(false)
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
  tel: '',
  tel_country_code: '',
})

const submitForm = async () => {
  errorList.value = []
  loading.value = true

  if (isEmpty(form.company_name))
    errorList.value.push({
      message: 'Company name is required.',
      companyName: true,
    })
  if (!form.country_id)
    errorList.value.push({ message: 'Country is required.', country: true })
  if (isEmpty(form.company_address))
    errorList.value.push({
      message: 'Company address is required.',
      companyAddress: true,
    })
  if (isEmpty(form.port) || !form.port)
    errorList.value.push({ message: 'Port is required.', port: true })
  if (isEmpty(form.contact_person))
    errorList.value.push({
      message: 'Contact person is required.',
      contactPerson: true,
    })
  if (isEmpty(form.requested_car))
    errorList.value.push({
      message: 'Requested car is required.',
      requestedCar: true,
    })
  if (isEmpty(form.contact_no))
    errorList.value.push({
      message: 'Contact number is required.',
      contactNo: true,
    })
  if (isEmpty(form.contact_country_code))
    errorList.value.push({
      message: 'Country code is required.',
      contactNo: true,
    })
  if (isEmpty(form.password))
    errorList.value.push({ message: 'Password is required.', password: true })
  if (isEmpty(form.company_email))
    errorList.value.push({
      message: 'Company email is required',
      companyEmail: true,
    })
  if (isEmpty(form.city))
    errorList.value.push({ message: 'City is required.', city: true })
  try {
    const response = await httpResource.post(
      '/api/customer/auth/register',
      form
    )
    if (response.status === 200 || response.status === 201)
      router.push('/log-in')
  } catch (error) {
    console.error(error)
  }
  loading.value = false
}

let countryList = ref([])
const getCountries = async () => {
  try {
    const response = await httpResource.get('/api/resources/countries')
    countryList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getCountries()
  if (route.query.type !== undefined && route.query.type !== null)
    form.type = route.query.type
  if (route.query.name) form.name = route.query.name
  if (route.query.tel) form.tel = route.query.tel
  if (route.query.tel_country_code)
    form.tel_country_code = route.query.tel_country_code
  if (route.query.email) form.email = route.query.email
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
              class="flex justify-center ml-3 mt-3 text-2xl text-blue-900 font-bold tracking-wider"
            >
              <a href="#">New User Registration</a>
            </div>
          </div>
          <div class="px-5">
            <div class="flex flex-col space-y-5">
              <div class="flex justify-center mb-4">
                <div v-if="form.type == 2" class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >Company Name</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="first_name"
                    type="text"
                    placeholder="Your company Name"
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
                  <p class="block text-grey-darker text-sm font-bold mb-2">
                    Select Country
                  </p>
                  <el-select
                    filterable
                    v-model="form.country_id"
                    class="w-full"
                    placeholder="Select"
                    size="large"
                  >
                    <el-option
                      v-for="item in countryList"
                      :key="item.id"
                      :label="item.label"
                      :value="item.id"
                    />
                  </el-select>
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
              <div class="flex justify-center mb-4">
                <div v-if="form.type == 2" class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >Company Address</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="first_name"
                    type="text"
                    placeholder="Your company Address"
                    v-model="form.company_address"
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
              <div class="flex justify-center mb-4">
                <div v-if="form.type == 2" class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >Contact Person</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="first_name"
                    type="text"
                    placeholder="Contact Person"
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
                    placeholder="Requested Car"
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
              <div class="flex justify-center mb-4">
                <div v-if="form.type == 2" class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >Contact Number</label
                  >
                  <div class="flex">
                    <select
                      v-model="form.contact_country_code"
                      class="mr-2 w-2/6 block appearance-none bg-white-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option
                        v-for="item in codes"
                        :key="item.key"
                        :label="item.code + '(' + item.dial_code + ')'"
                        :value="item.dial_code"
                      ></option>
                    </select>
                    <input
                      class="border border-gray-300 rounded w-full py-2 px-3"
                      id="contact_no"
                      type="text"
                      placeholder="Contact No"
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
                    type="password"
                    placeholder="Password"
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
              <div class="flex justify-center mb-4">
                <div v-if="form.type == 2" class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >Company Email Address</label
                  >
                  <input
                    class="border border-gray-300 rounded w-full py-2 px-3"
                    id="first_name"
                    type="text"
                    placeholder="Company Email Address"
                    v-model="form.company_email"
                  />
                  <div class="error-list">
                    <div
                      :class="[
                        'error text-red-900 font-bold',
                        idx !== 0 ? 'mb-1' : '',
                      ]"
                      v-for="(error, idx) in errorList.filter(
                        (e) => e.companyEmail
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
              <div class="flex justify-center mb-4">
                <div v-if="form.type == 2" class="w-1/2 mr-1"></div>
                <div class="w-1/2 ml-1">
                  <button
                    :disabled="loading"
                    v-loading="loading"
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
