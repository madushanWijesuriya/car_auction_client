<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import Table from '@/components/admin/Table.vue'
import PaymentsTable from '@/components/Tables/Admin/PaymentsTable.vue'
import { usePaymentsStore } from '@/stores/adminPayments'
import { computed, ref, onMounted, reactive } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'
import clientsData from '../dummy-data/clients'
import { mdiEye, mdiTrashCan, mdiBlockHelper } from '@mdi/js'
import CardBoxModal from '@/components/admin/CardBoxModal.vue'
import AdminSendNewsLetters from '@/components/admin/modals/AdminSendNewsLetters.vue'
import { useToast } from 'vue-toastification'
const toast = useToast()

const paymentsStore = usePaymentsStore()
const { payments: items } = storeToRefs(paymentsStore)
const headers = computed(() => paymentsStore.tableHeaders)

const decoratedItems = computed(() => {
  if (!items?.value || !Array?.isArray(items?.value)) return []
  return items.value.map((i) => {
    return {
      id: i?.id,
      vehicle_id: i?.vehicle?.chassis_no,
      customer_id: i?.customer_id?.email,
      paid_amount: i?.paid_amount,
      date: i?.updated_at,
      remaining_amount: i?.remaining_amount,
    }
  })
})

const actions = [
  {
    color: 'info',
    icon: mdiEye,
    onClick: 'defaultAction',
  },
]
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

const getAllPayments = async () => {
  try {
    const response = await httpResource.get('/api/staff/payment')
    paymentsStore.$patch({
      payments: response?.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

const applyFilters = async () => {
  try {
    let filterQuery = '/api/staff/payment?'

    if (form?.customer_id?.id)
      filterQuery += `filter[customer_id]=${form.customer_id?.id}`
    if (form?.vehicle_id?.id)
      filterQuery += `&filter[vehicle_id]=${form?.vehicle_id?.id}`
    if (form?.paid_amount)
      filterQuery += `&filter[paid_amount]=${form?.paid_amount}`
    if (form?.agent) filterQuery += `&filter[agent]=${form?.agent}`
    const response = await httpResource.get(filterQuery)
    paymentsStore.$patch({
      payments: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await getAllPayments()
  await getVehicles()
  await getCustomers()
})

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

const validateForm = () => {
  // handle frontend validations
  submitForm()
}

const resetForm = () => {
  Object.assign(form, initialState)
  getAllPayments()
}
const submitForm = async () => {
  try {
    // console.log(form)
    const response = await httpResource.post('/api/staff/vehicle', {})
    // console.log(response)
    if (response.status === 200) {
      toast.success('Successfully Added', {
        timeout: 2000,
      })
      resetForm()
    }
  } catch (error) {
    console.error(error?.response?.data?.message)
  }
}

let isModalActive = ref(false)

const statusOptions = [
  {
    id: 1,
    label: 'Active',
  },
  {
    id: 2,
    label: 'Deactive',
  },
]

const openModel = () => {
  isModalActive.value = true
}
const initialState = {
  vehicle_id: '',
  customer_id: '',
  agent: '',
  paid_amount: 0,
}
let form = reactive({ ...initialState })
</script>
<template>
  <div class="all-cars">
    <LayoutAuthenticated>
      <SectionMain>
        <CardBox>
          <SectionTitleLineWithButton
            title="Search"
            main
          ></SectionTitleLineWithButton>
          <el-row :gutter="20">
            <el-col :span="8">
              <FormField label="Vehicle">
                <FormControl v-model="form.vehicle_id" :options="vehicleList" />
              </FormField>
            </el-col>
            <el-col :span="8">
              <FormField label="Customer">
                <FormControl
                  v-model="form.customer_id"
                  :options="customerList"
                />
              </FormField>
            </el-col>
            <el-col :span="8">
              <FormField label="Amount">
                <FormControl v-model="form.paid_amount" type="text" />
              </FormField>
            </el-col>
            <el-col :span="8">
              <FormField label="Agent">
                <FormControl v-model="form.agent" type="text" />
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
            title="All Payments"
            main
          ></SectionTitleLineWithButton>
          <PaymentsTable
            :customerList="customerList"
            :vehicleList="vehicleList"
            :items="decoratedItems"
            :headers="headers"
            :actions="actions"
            @block-user="getAllClients"
          >
          </PaymentsTable>
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
