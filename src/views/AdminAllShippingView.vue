<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import ShippingTable from '@/components/Tables/Admin/ShippingTable.vue'
import { useShippingStore } from '../stores/shipping'
import { computed, onMounted, reactive, ref } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'
const toast = useToast()

const shippingStore = useShippingStore()
const { shipping: items } = storeToRefs(shippingStore)
const headers = computed(() => shippingStore.tableHeaders)
const decoratedItems = computed(() => {
  if (!items.value || !Array.isArray(items.value)) return []
  return items.value.map((i) => {
    return {
      id: i?.id,
      vehicle_id: i?.vehicle_id?.chassis_no,
      country_id: i?.country_id?.name,
      customer_id: i?.customer_id?.email,
      etd: i?.etd,
      eta: i?.eta,
      pol: i?.pol,
      pod: i?.pod,
      consignee_name: i?.consignee_name,
      yard_location: i?.yard_location,
      created_at: i?.created_at,
    }
  })
})

const getAllUsers = async () => {
  try {
    const response = await httpResource.get('/api/staff/shipping')
    shippingStore.$patch({
      shipping: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

const applyFilters = async () => {
  try {
    let filterQuery = '/api/staff/shipping?'
    if (form.vehicle_name)
      filterQuery += `filter[vehicle_name]=${form.vehicle_name}`
    if (form.chassis_no) filterQuery += `filter[chassis_no]=${form.chassis_no}`
    const response = await httpResource.get(filterQuery)
    shippingStore.$patch({
      shipping: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}
let vehicleList = ref([])
const getVehicles = async () => {
  try {
    const response = await httpResource.get('/api/staff/vehicle')
    vehicleList.value = response.data.data.map((d) => ({
      id: d.id,
      label: d.chassis_no,
    }))
  } catch (error) {
    console.error(error)
  }
}
let countryList = ref([])
const getCountries = async () => {
  try {
    const response = await httpResource.get('/api/resources/countries')
    countryList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {}
}
let customerList = ref([])
const getCustomers = async () => {
  try {
    const response = await httpResource.get('/api/resources/customers')
    customerList.value = response.data.data.map((d) => ({
      ...d,
      label: d.email,
    }))
  } catch (error) {}
}
onMounted(async () => {
  await getAllUsers()
  getRoles()
  getVehicles()
  getCustomers()
  getCountries()
})

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

const validateForm = () => {
  // handle frontend validations
  submitForm()
}

const resetForm = () => {
  Object.assign(form, initialState)
  getAllUsers()
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
const yearsList = range(
  new Date().getFullYear(),
  new Date().getFullYear() - 50,
  -1
)
const initialState = {
  vehicle_name: '',
  chassis_no: '',
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
            <el-col :span="8">
              <FormField label="Vehicle Title">
                <FormControl
                  v-model="form.vehicle_name"
                  :icon="mdiCalendarRange"
                  type="text"
                />
              </FormField>
            </el-col>
            <el-col :span="8">
              <FormField label="Chassise No">
                <FormControl
                  v-model="form.chassis_no"
                  :icon="mdiCalendarRange"
                  type="text"
                />
              </FormField>
            </el-col>
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
            title="All Documents"
            main
          ></SectionTitleLineWithButton>
          <ShippingTable
            @edit-user="getAllUsers"
            :items="decoratedItems"
            :headers="headers"
            :shipping="shipping"
            :vehicleList="vehicleList"
            :customerList="customerList"
            :countryList="countryList"
          >
          </ShippingTable>
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
