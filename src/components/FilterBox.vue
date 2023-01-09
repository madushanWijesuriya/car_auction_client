<template>
  <div class="filter-box">
    <div class="container mx-auto p-5 px-5">
      <el-form label-position="top" label-width="100%" style="width: 100%">
        <div
          class="grid grid-rows-6 grid-flow-col gap-3 md:grid-rows-2 md:gap-2"
        >
          <div class="group">
            <el-form-item label="Search using Keyword">
              <el-input
                placeholder="Search Car / Brand / Model / Type"
                v-model="form.search_text"
                style="width: 100%"
              ></el-input>
            </el-form-item>
          </div>
          <div class="group">
            <div class="grid grid-cols-2 gap-2">
              <div class="inner-group" style="width: 100%">
                <el-form-item label="Year From">
                  <el-date-picker
                    v-model="form.from"
                    type="date"
                    placeholder="Pick a Date"
                    format="YYYY/MM/DD"
                    value-format="YYYY-MM-DD"
                  >
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="inner-group">
                <el-form-item label="Year To">
                  <el-date-picker
                    v-model="form.to"
                    type="date"
                    placeholder="Pick a day"
                    format="YYYY/MM/DD"
                    value-format="YYYY-MM-DD"
                  >
                  </el-date-picker>
                </el-form-item>
              </div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <div class="inner-group">
                <el-form-item label="Brand Name">
                  <el-select
                    v-model="form.maker"
                    style="width: 100%"
                    placeholder="Select the Brand"
                    @change="changeMaker"
                  >
                    <el-option
                      v-for="maker in makersList"
                      :key="maker.id"
                      :label="maker.label"
                      :value="maker.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="inner-group">
                <el-form-item label="Model">
                  <el-select
                    v-model="form.model_id"
                    placeholder="Select the Model"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="maker in modelsList"
                      :key="maker.id"
                      :label="maker.label"
                      :value="maker.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <div class="inner-group">
                <el-form-item label="Engine CC">
                  <el-select
                    v-model="form.engine"
                    placeholder="Select the Engine CC"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="engine in engineTypeList"
                      :key="engine.id"
                      :label="engine.label"
                      :value="engine.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="inner-group">
                <el-form-item label="Lot Numbers">
                  <el-select
                    v-model="form.lot"
                    placeholder="Enter Lot Number"
                    style="width: 100%"
                    filterable
                  >
                    <el-option
                      v-for="lot in lotList"
                      :key="lot.id"
                      :label="lot.label"
                      :value="lot.label"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <div class="inner-group">
                <el-form-item label="Vehicle Type">
                  <el-select
                    v-model="form.body_type_id"
                    placeholder="Select the Type"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="maker in bodyTypeList"
                      :key="maker.id"
                      :label="maker.label"
                      :value="maker.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="inner-group">
                <el-form-item label="Driver">
                  <el-select
                    v-model="form.drive_type_id"
                    placeholder="Select the Side"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="maker in driveTypeList"
                      :key="maker.id"
                      :label="maker.label"
                      :value="maker.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <div class="inner-group">
                <button type="button" class="btn-search" @click="applyFilters">
                  Search
                </button>
              </div>
              <div class="inner-group">
                <button
                  class="btn-clear"
                  type="button"
                  @click="clearAllFilters"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from '@vue/reactivity'
import httpResource from '@/http/httpResource'
import { onMounted } from '@vue/runtime-core'
import { useCarsStore } from '@/stores/cars'
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
  links: null,
})

const applyFilters = async () => {
  try {
    // let filterQuery = '/api/guest/vehicle?'
    // if (form.search_text)
    //   filterQuery += `filter[search_text]=${form.search_text}`
    // if (form.make_id) filterQuery += `filter[make_id]=${form.make_id}`
    // if (form.make_id) filterQuery += `&filter[model_id]=${form.model_id}`
    // if (form.status_id) filterQuery += `&filter[status_id]=${form.status_id}`
    // if (form.body_type_id)
    //   filterQuery += `&filter[body_type_id]=${form.body_type_id}`
    // if (form.transmission_id)
    //   filterQuery += `&filter[transmission_id]=${form.transmission_id}`
    // if (form.streeing_id)
    //   filterQuery += `&filter[streeing_id]=${form.streeing_id}`
    // if (form.door_type_id)
    //   filterQuery += `&filter[door_type_id]=${form.door_type_id}`
    // if (form.driver_type_id)
    //   filterQuery += `&filter[driver_type_id]=${form.driver_type_id}`
    // if (form.fuel_type_id)
    //   filterQuery += `&filter[fuel_type_id]=${form.fuel_type_id}`
    // if (form.engine) filterQuery += `&filter[engine_id]=${form.engine}`
    // if (form.exterior_color_id)
    //   filterQuery += `&filter[exterior_color_id]=${form.exterior_color_id}`
    // if (form.feature_id) filterQuery += `&filter[feature_id]=${form.feature_id}`
    // if (form.chassis_no) filterQuery += `&filter[chassis_no]=${form.chassis_no}`
    // if (form.from || form.to)
    //   filterQuery += `&filter[make_at]=${form.from} - ${form.to}`

    // const response = await httpResource.get(filterQuery)
    router.push({
      name: 'StockList',
      query: {
        body_type_id: form.body_type_id,
        drive_type_id: form.drive_type_id,
        engine: form.engine,
        from: form.from,
        lot: form.lot,
        brands: [form.maker],
        models: [form.model_id],
        search_text: form.search_text,
        to: form.to,
      },
    })
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

const initialState = {
  search_text: '',
  maker: '',
  model_id: '',
  body_type_id: '',
  drive_type_id: '',
  to: '',
  from: '',
  engine: '',
  lot: '',
}
let form = reactive({ ...initialState })

let makersList = ref([])
let modelsList = ref([])
let bodyTypeList = ref([])
let engineTypeList = ref([])
let driveTypeList = ref([])
let lotList = ref([])

const getMakers = async () => {
  try {
    const response = await httpResource.get('/api/resources/maker')
    makersList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {}
}
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
const getEngineTypes = async () => {
  try {
    const response = await httpResource.get('/api/resources/engine-types')
    engineTypeList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}
const getLotumbers = async () => {
  try {
    const response = await httpResource.get('/api/resources/lot_numbers')
    lotList.value = response.data.data.map((d) => ({
      ...d,
      label: d.lot_number,
    }))
  } catch (error) {
    console.error(error)
  }
}
const getDriverTypes = async () => {
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

const clearAllFilters = () => {
  Object.assign(form, initialState)
}

onMounted(async () => {
  getMakers()
  getBodyTypes()
  getDriverTypes()
  getEngineTypes()
  getLotumbers()
})
</script>
<style scoped lang="scss">
@import '@/assets/scss/filterBox.scss';
</style>
