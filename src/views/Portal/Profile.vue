<script setup>
import { ref } from 'vue'
import httpResource from '@/http/httpResource'
import camelCase from 'camelcase'

// data
const profileData = ref({
  name: '',
  contactNo: '',
  email: '',
  companyName: '',
  companyAddress: '',
  contactPerson: '',
  companyEmail: '',
  countryName: '',
  countryId: 0,
})
let countryList = ref([])

//methods
const getUserProfile = async () => {
  try {
    const {
      data: { data },
      status,
    } = await httpResource.get('/api/customer/user')
    if (status === 200) {
      profileData.value = camelCaseKeys(data)
      profileData.value.countryName = countryList.value.find(
        (c) => c.id === profileData.value.countryId
      )?.label
    }
  } catch (error) {
    console.error(error)
  }
}
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
function camelCaseKeys(object) {
  return Object.entries(object).reduce((carry, [key, value]) => {
    carry[camelCase(key)] = value
    return carry
  }, {})
}
const updateProfile = async () => {
  try {
    //
  } catch (error) {
    console.error(error)
  }
}

// LC hooks
const onCreated = async () => {
  await getCountries()
  await getUserProfile()
}
onCreated()
</script>
<template>
  <div class="bg-white h-full pt-8">
    <div class="text-start w-full text-grey-darkest">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="mb-4 p-2">
            <label for="">Are you an individual or a car dealer?</label>
            <div class="mb-4">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="1"
                  checked
                />
                <span class="ml-2">Yes</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="2"
                />
                <span class="ml-2">No</span>
              </label>
            </div>
          </div>
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1"
              >Enter Your Full Name</label
            >
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="Hana Kaito Takashi "
              v-model="profileData.name"
            />
          </div>
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1"
              >Enter Your Contact Number</label
            >
            <div class="flex">
              <select
                class="w-2/6 block appearance-none bg-white-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option selected>Sri Lanka +94</option>
                <option>With options</option>
              </select>
              <input
                class="w-4/6 mx-2 border rounded outline-none focus:shadow-outline"
                type="number"
                name="email"
                id="email"
                placeholder="014 56 7808"
                v-model="profileData.contactNo"
              />
            </div>
          </div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1"
              >Enter Your Email Address</label
            >
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Hanakaito@jamex.com"
              v-model="profileData.email"
            />
          </div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1">Company Name</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="JAMEX AUCTION HOUSE"
              v-model="profileData.companyName"
            />
          </div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1">Company Address</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="No 44, JAMEX AUCTION HOUSE pvt, Wellawatta, Colombo"
              v-model="profileData.companyAddress"
            />
          </div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1">Contact Person</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="tel"
              name="email"
              id="email"
              placeholder="+94 738 49 3094"
              v-model="profileData.contactPerson"
            />
          </div>
        </div>
        <!-- ... -->
        <div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1">Contact Number</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="tel"
              name="email"
              id="email"
              placeholder="+94 738 49 3094"
              v-model="profileData.contactNo"
            />
          </div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1"
              >Company Email Address</label
            >
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Hanakaito@jamex.com"
              v-model="profileData.companyEmail"
            />
          </div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1">Select Country</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="JAMEX AUCTION HOUSE"
              v-model="profileData.countryName"
            />
          </div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1">Port</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="No 44, JAMEX AUCTION HOUSE pvt, Wellawatta, Colombo"
              v-model="profileData.port"
            />
          </div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1">Requested Car</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="+94 738 49 3094"
            />
          </div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1">Requested Car</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="+94 738 49 3094"
              v-model="profileData.requestedCar"
            />
          </div>
          <!--  -->
          <div class="mb-4 p-2">
            <label for="email" class="text-start mb-1">Requested Car</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="+94 738 49 3094"
            />
          </div>
        </div>
      </div>
      <el-button
        type="primary"
        class="ml-2 mb-5 bt-2 px-[60px] py-4 text-black"
        @click="updateProfile"
        >Update</el-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/clientPortalSidebarOther.scss';
</style>
