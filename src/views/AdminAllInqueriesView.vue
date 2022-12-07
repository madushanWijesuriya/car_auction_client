<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import Table from '@/components/admin/Table.vue'
import { useCarsStore } from '@/stores/inqueries'
import { computed, onMounted, reactive } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'

const carsStore = useCarsStore()
const { cars: items } = storeToRefs(carsStore)
const headers = computed(() => carsStore.tableHeaders)
const decoratedItems = computed(() => {
  console.log(items)
  if (!items.value || !Array.isArray(items.value)) return []
  return items.value.map((i) => {
    return {
      id: i.id,
      type: i?.type,
      vehicle_id: i?.vehicle_id?.id,
      country_id: i?.country_id?.name,
      name: i?.name,
      email: i?.email,
      cell_no: i?.cell_no,
      port_name: i?.port_name,
      mobile_no: i?.mobile_no,
      created_at: i?.created_at,
    }
  })
})

const getAllCars = async () => {
  try {
    const response = await httpResource.get('/api/staff/inquery')
    carsStore.$patch({
      cars: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await getAllCars()
})

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

const validateForm = () => {
  // handle frontend validations
  submitForm()
}

const resetForm = () => {
  Object.assign(form, initialState)
}
const submitForm = async () => {
  try {
    // console.log(form)
    const response = await httpResource.post('/api/staff/vehicle', {})
    // console.log(response)
    if (response.status === 200) {
      resetForm()
    }
  } catch (error) {
    console.error(error?.response?.data?.message)
  }
}
const makersList = [
  { id: 1, label: 'BMW' },
  { id: 2, label: 'Benz' },
  { id: 3, label: 'Toyota' },
  { id: 4, label: 'Hyundai' },
  { id: 5, label: 'Honda' },
  { id: 6, label: 'Mitsubishi' },
  { id: 6, label: 'Audi' },
]
const modelsList = [
  { id: 1, label: 'Model1' },
  { id: 1, label: 'Model2' },
  { id: 1, label: 'Model3' },
  { id: 1, label: 'Model4' },
  { id: 1, label: 'Model5' },
]
const yearsList = range(
  new Date().getFullYear(),
  new Date().getFullYear() - 50,
  -1
)
const bodyTypeList = [
  { id: 1, label: '--' },
  { id: 2, label: 'Sedan' },
  { id: 3, label: 'Hatchback' },
  { id: 4, label: 'SUV' },
  { id: 5, label: 'MUV' },
  { id: 6, label: 'Coupe' },
  { id: 7, label: 'Convertibles' },
  { id: 8, label: 'Other' },
]
const initialState = {
  maker: makersList[0],
  model: null,
  chassisNo: '',
  fromYear: new Date().getFullYear(),
  toYear: new Date().getFullYear(),
  bodyType: bodyTypeList[0],
  reff: '',
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
            <el-col :span="6">
              <FormField label="Maker">
                <FormControl
                  v-model="form.maker"
                  :options="makersList"
                /> </FormField
            ></el-col>
            <el-col :span="6">
              <FormField label="Model">
                <FormControl v-model="form.model" :options="modelsList" />
              </FormField>
            </el-col>
            <el-col :span="6">
              <FormField label="Body Type">
                <FormControl
                  v-model="form.bodyType"
                  :options="bodyTypeList"
                /> </FormField
            ></el-col>
            <el-col :span="6">
              <FormField label="Chassis No" help="">
                <FormControl
                  v-model="form.chassisNo"
                  type="text"
                  placeholder="Vehicle chassis no"
                />
              </FormField>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="8">
              <FormField label="REFF" help="">
                <FormControl
                  v-model="form.reff"
                  type="text"
                  placeholder="REFF"
                />
              </FormField>
            </el-col>
            <el-col :span="8">
              <FormField label="From year">
                <FormControl
                  v-model="form.fromYear"
                  :icon="mdiCalendarRange"
                  :options="yearsList"
                />
              </FormField>
            </el-col>
            <el-col :span="8">
              <FormField label="To year">
                <FormControl
                  v-model="form.toYear"
                  :icon="mdiCalendarRange"
                  :options="yearsList"
                />
              </FormField>
            </el-col>
          </el-row>

          <BaseButtons>
            <BaseButton
              type="submit justify-end lg:justify-end"
              color="info"
              label="Search"
              @click="validateForm"
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
            title="All Inqueries"
            main
          ></SectionTitleLineWithButton>
          <Table :items="decoratedItems" :headers="headers"> </Table>
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
