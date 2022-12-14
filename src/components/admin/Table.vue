<script setup>
import { computed, ref, toRefs, reactive, onMounted, nextTick } from 'vue'
// import { useMainStore } from '@/stores/main'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import CardBoxModal from '@/components/admin/CardBoxModal.vue'
import TableCheckboxCell from '@/components/admin/TableCheckboxCell.vue'
import BaseLevel from '@/components/admin/BaseLevel.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import UserAvatar from '@/components/admin/UserAvatar.vue'
import httpResource from '@/http/httpResource'
import AdminEditCarModal from '@/components/admin/modals/AdminEditCarModal.vue'
const base_url_api = import.meta.env.VITE_BASE_URL_API

const props = defineProps({
  checkable: Boolean,
  items: {
    type: Array,
    default: () => [],
  },
  headers: {
    type: Array,
    default: [],
  },
  actions: {
    type: Array,
    default: [
      {
        color: 'info',
        icon: mdiEye,
      },
      {
        color: 'danger',
        icon: mdiTrashCan,
      },
    ],
  },
  rowItemsData: {
    type: Array,
    default: () => [],
  },
})

const { items, headers, actions, rowItemsData } = toRefs(props)
let vehicle = ref(null)
const openEditModel = async (vehicleId) => {
  // debugger
  if (rowItemsData.value && rowItemsData.value.length > 0) {
    vehicle.value = rowItemsData.value.find((v) => v.id === vehicleId)
  }
  await nextTick()
  isModalActive.value = true
}

function deleteVehicle(vehicleId) {
  console.log('delete vehicle clicked!', vehicleId)
}

const action = {
  defaultAction: () => (isModalActive = true),
}

// const mainStore = useMainStore()

// const items = computed(() => mainStore.clients)

let isModalActive = ref(false)

const isModalDangerActive = ref(false)

const perPage = ref(5)

const currentPage = ref(0)

const checkedRows = ref([])

const itemsPaginated = computed(() => {
  return items.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
})

const numPages = computed(() => {
  return Math.ceil(items.value.length / perPage.value)
})

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }

  return pagesList
})

const remove = (arr, cb) => {
  const newArr = []

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })

  return newArr
}

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(checkedRows.value, (row) => row.id === client.id)
  }
}

function isValidHttpUrl(string) {
  let url
  try {
    url = new URL(string)
  } catch (_) {
    return false
  }
  return url.protocol === 'http:' || url.protocol === 'https:'
}

///
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

let makersList = ref([])
const getMakers = async () => {
  try {
    const response = await httpResource.get('/api/resources/maker')
    makersList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {}
}
let modelsList = ref([])
const getModels = async (moakerId) => {
  try {
    const response = await httpResource.get('/api/resources/model/' + moakerId)
    modelsList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}

const changeMaker = (id) => {
  getModels(id)
}

let statusList = ref([])
const getStatus = async () => {
  try {
    const response = await httpResource.get('/api/resources/status')
    statusList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}

const yearsList = range(
  new Date().getFullYear(),
  new Date().getFullYear() - 50,
  -1
)
const monthsList = Array.from({ length: 12 }, (e, i) => {
  return {
    id: i + 1,
    label: new Date(null, i + 1, null).toLocaleDateString('en', {
      month: 'short',
    }),
  }
})
let bodyTypeList = ref([])
const getBodyTypes = async () => {
  try {
    const response = await httpResource.get('/api/resources/body-type')
    bodyTypeList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}
let transmissionList = ref([])
const getTransmitions = async () => {
  try {
    const response = await httpResource.get('/api/resources/transmission')
    transmissionList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}
let streeingList = ref([])
const getStreeings = async () => {
  try {
    const response = await httpResource.get('/api/resources/streeings')
    streeingList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}
let doorTypesList = ref([])
const getDoorTypes = async () => {
  try {
    const response = await httpResource.get('/api/resources/door-types')
    doorTypesList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}
let driveTypeList = ref([])
const getDriveTypeList = async () => {
  try {
    const response = await httpResource.get('/api/resources/drive-types')
    driveTypeList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}

let fuleTypeList = ref([])
const getfuleTypes = async () => {
  try {
    const response = await httpResource.get('/api/resources/fuel-types')
    fuleTypeList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}
let exteriorColorList = ref([])
const getExteriorColors = async () => {
  try {
    const response = await httpResource.get('/api/resources/exterior-colors')
    exteriorColorList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}
let featuresList = ref([])
const getFeatures = async () => {
  try {
    const response = await httpResource.get('/api/resources/features')
    featuresList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  getMakers()
  getStatus()
  getBodyTypes()
  getTransmitions()
  getStreeings()
  getDoorTypes()
  getfuleTypes()
  getExteriorColors()
  getFeatures()
  getDriveTypeList()
})
///
</script>

<template>
  <div>
    <CardBoxModal
      v-model="isModalActive"
      title="Edit vehicle"
      v-if="isModalActive"
    >
      <AdminEditCarModal
        :makersList="makersList"
        :modelsList="modelsList"
        :statusList="statusList"
        :bodyTypeList="bodyTypeList"
        :transmissionList="transmissionList"
        :streeingList="streeingList"
        :doorTypesList="doorTypesList"
        :fuleTypeList="fuleTypeList"
        :exteriorColorList="exteriorColorList"
        :featuresList="featuresList"
        :yearsList="yearsList"
        :monthsList="monthsList"
        :driveTypeList="driveTypeList"
        :vehicle="vehicle"
        @changeMaker="changeMaker"
        @closeModal="isModalActive = false"
      />
    </CardBoxModal>
  </div>

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Please confirm"
    button="danger"
    has-cancel
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
    >
      {{ checkedRow.name }}
    </span>
  </div>
  <div class="table-scrollable" style="overflow: auto">
    <table>
      <thead>
        <tr>
          <th v-if="checkable" />

          <th v-for="header in headers">{{ header.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in itemsPaginated" :key="index">
          <TableCheckboxCell
            v-if="checkable"
            @checked="checked($event, client)"
          />
          <td v-for="dataPoint in row">
            <span v-if="!isValidHttpUrl(dataPoint)">
              {{ dataPoint }}
            </span>
            <span v-else>
              <img :src="dataPoint" alt="img" />
            </span>
          </td>
          <td class="before:hidden lg:w-1 whitespace-nowrap">
            <BaseButtons type="justify-start lg:justify-end" no-wrap>
              <div v-for="(item, index) in actions" :key="index">
                <BaseButton
                  :label="item.label ? item.label : ''"
                  :color="item?.color"
                  :icon="item?.icon"
                  small
                  v-on="
                    index === 0 // ? { click: () => openEditModel(row.id) } // : { click: deleteVehicle }
                      ? item.clickFunc
                        ? { click: () => item.clickFunc(row.id) }
                        : { click: () => openEditModel(row.id) }
                      : item.clickFunc
                      ? { click: () => item.clickFunc(row.id) }
                      : { click: () => deleteVehicle(row.id) }
                  "
                />
              </div>

              <!-- <BaseButton color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true" /> -->
            </BaseButtons>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
