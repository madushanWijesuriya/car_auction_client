<script setup>
import { computed, ref, reactive, onMounted } from 'vue'
import httpResource from '@/http/httpResource'
import camelCase from 'camelcase'
import { mdiTrayArrowDown } from '@mdi/js'
import JSZip from 'jszip'
import axios from 'axios'
import { saveAs } from 'file-saver'

// data
const shippingDocs = ref([])
let countryList = ref([])
const zip = new JSZip()

// methods
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

const getShippingDocs = async () => {
  try {
    const filterStr = '?'
    const {
      data: { data },
      status,
    } = await httpResource.get(`/api/staff/shipping${filterStr}`)
    if (status === 200) {
      const baseURL = import.meta.env.VITE_BASE_URL_API
      shippingDocs.value = data
        .map((obj) => {
          return camelCaseKeys(obj)
        })
        .map((obj) => {
          return {
            ...obj,
            checked: false,
            downloadsList: [
              { name: 'file1', url: baseURL + obj.doc1 },
              { name: 'file2', url: baseURL + obj.doc2 },
              { name: 'file3', url: baseURL + obj.doc3 },
            ],
          }
        })
    }
    console.log(shippingDocs.value)
  } catch (error) {
    console.error(error)
  }
}
const download = (item) => {
  //download single file as blob and add it to zip archive
  return httpResource.get(item.url, { responseType: 'blob' }).then((resp) => {
    zip.file(item.name, resp.data)
  })
}
const downloadAll = (list) => {
  const arrOfFiles = list.map((item) => download(item)) //create array of promises
  Promise.all(arrOfFiles)
    .then(() => {
      //when all promises resolved - save zip file
      zip.generateAsync({ type: 'blob' }).then(function (blob) {
        saveAs(blob, 'shipping_docs.zip')
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
function camelCaseKeys(object) {
  return Object.entries(object).reduce((carry, [key, value]) => {
    carry[camelCase(key)] = value
    return carry
  }, {})
}

const downloadDocs = (list) => {
  // console.log(list)
  downloadAll(list)
}

// computed properties
const tableData = computed(() => {
  if (!shippingDocs.value) return []
  return shippingDocs.value.map((i) => {
    const countryName = countryList.value.find((c) => c.id === i.countryId)
    return {
      ...i,
      countryName: countryName?.name,
    }
  })
})

// LC hooks
const onCreated = async () => {
  await getCountries()
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
          <tr v-for="(row, idx) in tableData" :key="idx">
            <td>
              <label class="block">
                <input
                  class="mr-2 leading-tight"
                  type="checkbox"
                  v-model="row.checked"
                />
              </label>
            </td>
            <td>{{ row.countryName }}</td>
            <td>JZX100-6036994</td>
            <td>{{ row.etd }}</td>
            <td>{{ row.eta }}</td>
            <td>{{ row.pol }}</td>
            <td>{{ row.pod }}</td>
            <td>{{ row.consigneeName }}</td>
            <td>{{ row.yardLocation }}</td>
            <td>
              <div class="flex gap-5 items-center">
                Action Sheet
                <span
                  class="cursor-pointer"
                  @click="downloadDocs(row.downloadsList)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    :width="'20px'"
                    :height="'20px'"
                    class="inline-block"
                  >
                    <path fill="#08246C" :d="mdiTrayArrowDown" />
                  </svg>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/clientPortalSidebarOther.scss';
</style>
