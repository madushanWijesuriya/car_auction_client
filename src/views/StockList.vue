<script setup>
import Filter from '../components/StockList/Filter/Filter.vue'
import CustomerFeedback from '../components/StockList/CustomerFeedback/CustomerFeedback.vue'
import VehicalList from '../components//StockList/VehicalList/VehicalList.vue'
import { useCarsStore } from '@/stores/cars'
import { onMounted, reactive, ref } from 'vue'
import httpResource from '@/http/httpResource'
import { useRouter } from 'vue-router'

const router = useRouter()

const carsStore = useCarsStore()
const indexingDetails = reactive({
  perPage: 0,
  currentPage: 0,
  lastPage: 0,
  total: 0,
  from: 0,
  to: 0,
  links: {
    next: null,
  },
})

const getAllCars = async (pageId) => {
  try {
    const url = `/api/guest/vehicle?sort=id${pageId ? '&page=' + pageId : ''}`
    const response = await httpResource.get(url)
    setCars(response)
  } catch (error) {
    console.error(error)
  }
}

function setCars(response) {
  carsStore.$patch({
    cars: response.data.data,
  })
  indexingDetails.currentPage = response.data.meta.current_page
  indexingDetails.perPage = response.data.meta.per_page
  indexingDetails.lastPage = response.data.meta.last_page
  indexingDetails.total = response.data.meta.total
  indexingDetails.from = response.data.meta.from
  indexingDetails.to = response.data.meta.to
  indexingDetails.links = response.data.meta.links
}

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
const getModels = async (makersIds) => {
  try {
    let list = []
    for (let x = 0; x < makersIds.length; x++) {
      const response = await httpResource.get(
        '/api/resources/model/' + makersIds[x]
      )
      list = [
        ...list,
        ...response.data.data.map((d) => ({
          ...d,
          label: d.name,
        })),
      ]
    }
    modelsList.value = list
  } catch (error) {
    console.error(error)
  }
}

let driveTypeList = ref([])
const getDriveTypes = async () => {
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

const changeMaker = (e) => {
  getModels(e)
}

const applyFilters = async (form) => {
  try {
    const response = await httpResource.get(
      `/api/staff/vehicle?filter[make_id]=${form.maker.join(
        ','
      )}&filter[model_id]=${form.model.join(',')}`
    )
    setCars(response)
  } catch (error) {
    console.error(error)
  }
}

const resetFilters = () => {
  getAllCars()
}

const goToFirstPage = () => {
  getAllCars(1)
}

const goToLastPage = () => {
  getAllCars(indexingDetails.lastPage)
}

const changePage = (pageId) => {
  if (!pageId) return
  getAllCars(pageId)
}

onMounted(async () => {
  if (router.currentRoute.value.name !== 'HomeStockList') await getAllCars()

  await getMakers()
  await getDriveTypes()
})
</script>
<template>
  <div class="text-white text-sm p-2">
    <div class="flex flex-col gap-5 w-full m">
      <div class="relative w-full md:px-[5%] xl:mb-[12vh]">
        <img
          class="lg:rounded-[15px] md:rounded-[10px] w-full h-[70vw] lg:h-[400px] xl:h-[20%] object-cover"
          src="@/assets/images/stock-list/vehical-list/stock-list-main.svg"
        />
        <div
          class="absolute w-full text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 md:px-[12%]"
        >
          <div
            class="flex flex-col gap-3 xl:gap-2 text-white w-full xl:w-[50%]"
          >
            <div>
              <h1 class="font-header-photo">Toyota</h1>
              <p class="font-header-photo-2">Gazoo Racing</p>
            </div>
          </div>
        </div>
      </div>
      <p class="font-main-title text-center lg:text-start lg:pl-[16%]">
        Search Japan Used Vehicles
      </p>
      <div class="flex flex-col px-4 lg:flex-row gap-2 xl:px-[2vw] w-full">
        <Filter
          :makers="makersList"
          :models="modelsList"
          :drives="driveTypeList"
          @maker-changed="changeMaker"
          @apply-filters="applyFilters"
          @reset-filters="resetFilters"
        />
        <VehicalList
          :indexingDetails="indexingDetails"
          @go-to-first-page="goToFirstPage"
          @go-to-last-page="goToLastPage"
          @change-page="changePage"
        />
        <CustomerFeedback />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/stock-list/vehicalDetailsCard.scss';
</style>
