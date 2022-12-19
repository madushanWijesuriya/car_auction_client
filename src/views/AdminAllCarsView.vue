<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import Table from '@/components/admin/Table.vue'
import { useCarsStore } from '@/stores/cars'
import { computed, onMounted, reactive, ref } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'
const toast = useToast()

const base_url_api = import.meta.env.VITE_BASE_URL_API
const carsStore = useCarsStore()
const { cars: items } = storeToRefs(carsStore)
const headers = computed(() => carsStore.tableHeaders)

const decoratedItems = computed(() => {
  if (!items.value || !Array.isArray(items.value)) return []
  return items.value.map((i) => {
    return {
      id: i.id,
      photo: base_url_api + i?.cover_image_full_url,
      make: i?.make_id?.name,
      model: i?.model_id?.name,
      fob: i?.fob_price,
      status: i?.status_id?.name,
      inquery: i?.inqueries?.length,
    }
  })
})

const applyFilters = async () => {
  try {
    let filterQuery = '/api/guest/vehicle?noPagination'

    if (form.make_id.id) filterQuery += `filter[make_id]=${form.make_id.id}`
    if (form.make_id.id) filterQuery += `&filter[model_id]=${form.model_id.id}`
    if (form.status_id.id)
      filterQuery += `&filter[status_id]=${form.status_id.id}`
    if (form.body_type_id.id)
      filterQuery += `&filter[body_type_id]=${form.body_type_id.id}`
    if (form.transmission_id.id)
      filterQuery += `&filter[transmission_id]=${form.transmission_id.id}`
    if (form.streeing_id.id)
      filterQuery += `&filter[streeing_id]=${form.streeing_id.id}`
    if (form.door_type_id.id)
      filterQuery += `&filter[door_type_id]=${form.door_type_id.id}`
    if (form.driver_type_id.id)
      filterQuery += `&filter[driver_type_id]=${form.driver_type_id.id}`
    if (form.fuel_type_id.id)
      filterQuery += `&filter[fuel_type_id]=${form.fuel_type_id.id}`
    if (form.exterior_color_id.id)
      filterQuery += `&filter[exterior_color_id]=${form.exterior_color_id.id}`
    if (form.feature_id.id)
      filterQuery += `&filter[feature_id]=${form.feature_id.id}`
    if (form.chassis_no) filterQuery += `&filter[chassis_no]=${form.chassis_no}`
    if (form.make_at) filterQuery += `&filter[make_at]=${form.make_at}`
    const response = await httpResource.get(filterQuery)
    carsStore.$patch({
      cars: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

const getAllCars = async () => {
  try {
    const response = await httpResource.get('/api/staff/vehicle')
    carsStore.$patch({
      cars: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

function filter() {}
onMounted(async () => {
  await getAllCars()
  getMakers()
  getStatus()
  getBodyTypes()
  getTransmitions()
  getStreeings()
  getDoorTypes()
  getDriverTypes()
  getfuleTypes()
  getExteriorColors()
  getFeatures()
})

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

const validateForm = () => {
  // handle frontend validations
  submitForm()
}

const resetForm = () => {
  Object.assign(form, initialState)
  getAllCars()
}
const submitForm = async () => {
  try {
    // console.log(form)
    const response = await httpResource.post('/api/staff/vehicle', {})
    // console.log(response)
    if (response.status === 200) {
      resetForm()
      toast.success('Successfully Added', {
        timeout: 2000,
      })
    }
  } catch (error) {
    console.error(error?.response?.data?.message)
  }
}
let makersList = ref([])
let modelsList = ref([])
let statusList = ref([])
let bodyTypeList = ref([])
let streeingList = ref([])
let transmissionList = ref([])
let doorTypesList = ref([])
let driveTypeList = ref([])
let fuleTypeList = ref([])
let exteriorColorList = ref([])
let featuresList = ref([])
let conditionList = [
  { id: 1, label: 'Used' },
  { id: 2, label: 'New' },
]

const yearsList = range(
  new Date().getFullYear(),
  new Date().getFullYear() - 50,
  -1
)

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

const changeMaker = (e) => {
  getModels(e.id)
}

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

const monthsList = Array.from({ length: 12 }, (e, i) => {
  return {
    id: i + 1,
    label: new Date(null, i + 1, null).toLocaleDateString('en', {
      month: 'short',
    }),
  }
})
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

const initialState = {
  make_id: '',
  model_id: '',
  status_id: '',
  body_type_id: '',
  transmission_id: '',
  streeing_id: '',
  door_type_id: '',
  driver_type_id: '',
  fuel_type_id: '',
  exterior_color_id: '',
  feature_id: '',
  chassis_no: '',
  make_at: '',
  isUsed: '',
}

let form = reactive({ ...initialState })
</script>
<template>
  <div class="all-cars">
    <LayoutAuthenticated>
      <SectionMain>
        <CardBox>
          <SectionTitleLineWithButton
            :icon="mdiCarEstate"
            title="Search"
            main
          ></SectionTitleLineWithButton>
          <el-row :gutter="20">
            <el-col :span="3">
              <FormField label="Make">
                <FormControl
                  v-model="form.make_id"
                  :options="makersList"
                  @update:modelValue="changeMaker"
                /> </FormField
            ></el-col>
            <el-col :span="3">
              <FormField label="Model">
                <FormControl v-model="form.model_id" :options="modelsList" />
              </FormField>
            </el-col>
            <el-col :span="3">
              <FormField label="Body Type">
                <FormControl
                  v-model="form.body_type_id"
                  :options="bodyTypeList"
                /> </FormField
            ></el-col>
            <el-col :span="3">
              <FormField label="Status">
                <FormControl
                  v-model="form.status_id"
                  :options="statusList"
                /> </FormField
            ></el-col>
            <el-col :span="3">
              <FormField label="Make at">
                <FormControl
                  v-model="form.make_at"
                  :icon="mdiCalendarRange"
                  :options="yearsList"
                />
              </FormField>
            </el-col>
            <el-col :span="3">
              <FormField label="Transmission">
                <FormControl
                  v-model="form.transmission_id"
                  :options="transmissionList"
                /> </FormField
            ></el-col>
            <el-col :span="3">
              <FormField label="Streeing">
                <FormControl
                  v-model="form.streeing_id"
                  :options="streeingList"
                /> </FormField
            ></el-col>

            <el-col :span="3">
              <FormField label="Door Type">
                <FormControl
                  v-model="form.door_type_id"
                  :options="doorTypesList"
                /> </FormField
            ></el-col>
            <el-col :span="3">
              <FormField label="Chassis No" help="">
                <FormControl
                  v-model="form.chassis_no"
                  type="text"
                  placeholder="Vehicle chassis no"
                />
              </FormField>
            </el-col>
            <el-col :span="3">
              <FormField label="Drive">
                <FormControl
                  v-model="form.driver_type_id"
                  :options="driveTypeList"
                /> </FormField
            ></el-col>
            <el-col :span="3">
              <FormField label="Fuel">
                <FormControl
                  v-model="form.fuel_type_id"
                  :options="fuleTypeList"
                /> </FormField
            ></el-col>
            <el-col :span="3">
              <FormField label="Color">
                <FormControl
                  v-model="form.exterior_color_id"
                  :options="exteriorColorList"
                /> </FormField
            ></el-col>
            <el-col :span="3">
              <FormField label="Feature">
                <FormControl
                  v-model="form.feature_id"
                  :options="featuresList"
                /> </FormField
            ></el-col>
            <el-col :span="3">
              <FormField label="Condition">
                <FormControl
                  v-model="form.isUsed"
                  :options="conditionList"
                /> </FormField
            ></el-col>
          </el-row>
          <BaseButtons>
            <BaseButton
              type="submit justify-end lg:justify-end"
              color="info"
              label="Search"
              @click="applyFilters"
              no-wrap
            />
            <BaseButton
              type="reset justify-end lg:justify-end"
              color="info"
              outline
              label="Reset"
              @click="resetForm"
              no-wrap
            />
          </BaseButtons>
        </CardBox>
        <CardBox style="margin-top: 40px">
          <SectionTitleLineWithButton
            :icon="mdiCarEstate"
            title="All Cars"
            main
          ></SectionTitleLineWithButton>
          <Table
            :items="decoratedItems"
            :headers="headers"
            :rowItemsData="items"
          >
          </Table>
        </CardBox>
      </SectionMain>
    </LayoutAuthenticated>
  </div>
</template>
<style>
.el-row {
  margin-bottom: 20px;
}
</style>
