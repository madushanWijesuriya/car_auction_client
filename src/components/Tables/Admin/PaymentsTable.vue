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
import AdminContentEdite from '@/components/admin/modals/AdminContentEdite.vue'
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
        onClick: 'defaultAction',
      },
      {
        color: 'danger',
        icon: mdiTrashCan,
        onClick: 'defaultAction',
      },
    ],
  },
  rowItemsData: {
    type: Array,
    default: () => [],
  },
})

const { items, headers, actions, rowItemsData } = toRefs(props)
let content = ref(null)
const openEditModel = async (vehicleId) => {
  // debugger
  if (items.value && items.value.length > 0) {
    content.value = items.value.find((v) => v.id === vehicleId)
  }
  await nextTick()
  isModalActive.value = true
}

function deleteVehicle(vehicleId) {
  console.log('delete content clicked!', vehicleId)
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


onMounted(async () => {
  
})
///
</script>

<template>
  <div>
    <CardBoxModal
      v-model="isModalActive"
      title="Edit content"
      v-if="isModalActive"
    >
      <AdminContentEdite
        :content="content"
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
            <!-- <BaseButtons type="justify-start lg:justify-end" no-wrap>
              <div v-for="(item, index) in actions" :key="index">
                <BaseButton
                  :label="item.label ? item.label : ''"
                  :color="item?.color"
                  :icon="item?.icon"
                  small
                  v-on="
                    index === 0
                      ? { click: () => openEditModel(row.id) }
                      : { click: deleteVehicle }
                  "
                />
              </div> -->

              <!-- <BaseButton color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true" /> -->
            <!-- </BaseButtons> -->
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
