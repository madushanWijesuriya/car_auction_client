<script setup>
import { computed, ref, reactive, onMounted } from 'vue'
import httpResource from '@/http/httpResource'
import camelCase from 'camelcase'

// data
const shippingDocs = ref([])

// methods
const getShippingDocs = async () => {
  try {
    const filterStr = '?'
    const {
      data: { data },
      status,
    } = await httpResource.get(`/api/staff/shipping${filterStr}`)
    if (status === 200) {
      shippingDocs.value = data.map((obj) => {
        return camelCaseKeys(obj)
      })
    }
    console.log(shippingDocs.value)
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

// LC hooks
const onCreated = async () => {
  await getShippingDocs()
}

onCreated()
</script>
<template>
  <div class="h-screen">
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <div class="flex flex-row">
        <div class="basis-1/6">
          <div class="mb-4 p-1">
            <label for="edt_from" class="text-start mb-1">ETD From</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="date"
              name="edt_from"
              id="edt_from"
              placeholder="ETD From"
            />
          </div>
        </div>
        <div class="basis-1/6">
          <div class="mb-4 p-1">
            <label for="edt_to" class="text-start mb-1">ETD To</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="date"
              name="edt_to"
              id="edt_to"
              placeholder="EDT To "
            />
          </div>
        </div>
        <div class="basis-1/3">
          <div class="mb-4 p-1">
            <label for="chassis_number" class="text-start mb-1"
              >Chassis Number</label
            >
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="text"
              name="chassis_number"
              id="chassis_number"
              placeholder="Enter Chassis Number"
            />
          </div>
        </div>
        <div class="basis-1/3">
          <div class="mb-4 p-1">
            <label for="email" class="text-start mb-1">Car Name</label>
            <input
              class="w-full border rounded outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="Enter Car Name"
            />
          </div>
        </div>
        <div class="basis-1/6 mx-2">
          <button
            class="bg-blue-800 w-full py-2 border rounded text-white text-xl mt-7"
          >
            Search
          </button>
        </div>
        <div class="basis-1/6 mx-2">
          <button
            class="border-blue-800 w-full py-2 border rounded text-blue-800 text-xl mt-7"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-lg mt-4">
      <table class="table-auto">
        <thead>
          <tr>
            <th>
              <label class="block">
                <input class="mr-2 leading-tight" type="checkbox" />
              </label>
            </th>
            <th>Country</th>
            <th>Chassis No</th>
            <th>ETD</th>
            <th>ETA</th>
            <th>POL</th>
            <th>POD</th>
            <th>Consingee Name</th>
            <th>Yard Location</th>
            <th>Downloads</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label class="block">
                <input class="mr-2 leading-tight" type="checkbox" />
              </label>
            </td>
            <td>Sri Lanka</td>
            <td>JZX100-6036994</td>
            <td>04/08/2022</td>
            <td>24/11/2022</td>
            <td>NAGURA</td>
            <td>24/11/2022</td>
            <td>段ちきぽ写心べが</td>
            <td>BREMERHAVEN</td>
            <td>Action Sheet</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/clientPortalSidebarOther.scss';
</style>
