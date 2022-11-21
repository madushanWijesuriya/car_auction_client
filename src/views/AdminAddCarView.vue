<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate, mdiCalendarRange } from '@mdi/js'
import FormField from '@/components/admin/FormField.vue'
import FormControl from '@/components/admin/FormControl.vue'
import { reactive } from 'vue'
import FormCheckRadioGroup from '@/components/admin/FormCheckRadioGroup.vue'
import BaseDivider from '@/components/admin/BaseDivider.vue'
import FormFilePicker from '@/components/admin/FormFilePicker.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import SectionTitle from '@/components/admin/SectionTitle.vue'

// methods
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

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
const statusList = [
  { id: 1, label: 'Available' },
  { id: 1, label: 'Unavailable' },
  { id: 1, label: 'Out of stock' },
  { id: 1, label: 'Pendding' },
]

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
const transmissionList = [
  { id: 1, label: 'Automatic Transmission' },
  { id: 2, label: 'Manual Transmission' },
  { id: 3, label: 'Automated Manual Transmission' },
  { id: 4, label: 'Continuously Variable Transmission' },
]
const streeingList = [
  { id: 1, label: 'Left' },
  { id: 2, label: 'Right' },
]
const doorTypesList = [
  { id: 1, label: '--' },
  { id: 2, label: 'Butterfly Doors ' },
  { id: 3, label: 'Scissor Doors ' },
  { id: 4, label: 'Regular or Conventional Doors ' },
  { id: 5, label: 'Regular or Conventional Doors ' },
  { id: 6, label: 'Dihedral Doors ' },
]
const driveTypeList = [{ id: 1, label: '--' }]
const fuleTypeList = [
  { id: 1, label: '--' },
  { id: 2, label: 'Petrol' },
  { id: 3, label: 'Diesel' },
  { id: 4, label: 'Flex-fuel' },
]
const exteriorColorList = [{ id: 1, label: '--' }]
const form = reactive({
  maker: makersList[0],
  model: null,
  chassisNo: '',
  fobPrice: '',
  status: statusList[0],
  year: new Date().getFullYear(),
  month: monthsList[new Date().getMonth()],
  displacement: '',
  condition: 'new',
  bodyType: bodyTypeList[0],
  mileage: '',
  transmission: transmissionList[0],
  streeing: streeingList[0],
  doorTypes: doorTypesList[0],
  driveType: driveTypeList[0],
  fuelType: fuleTypeList[0],
  exteriorColor: exteriorColorList[0],
  gradeTrim: '',
  Feautes: '',
  coverImage: null,
})
</script>
<template>
  <div class="add-car">
    <LayoutAuthenticated>
      <SectionMain>
        <CardBox form @submit.prevent="submit">
          <SectionTitleLineWithButton :icon="mdiCarEstate" title="Add Car" main>
          </SectionTitleLineWithButton>
          <FormField label="Maker">
            <FormControl v-model="form.maker" :options="makersList" />
          </FormField>
          <FormField label="Model">
            <FormControl v-model="form.model" :options="modelsList" />
          </FormField>
          <FormField label="Chassis No" help="">
            <FormControl
              v-model="form.chassisNo"
              type="text"
              placeholder="Vehicle chassis no"
            />
          </FormField>
          <FormField label="FOB Price (USD)" help="">
            <FormControl
              v-model="form.fobPrice"
              type="text"
              placeholder="Price (USD)"
            />
          </FormField>
          <FormField label="Status">
            <FormControl v-model="form.status" :options="statusList" />
          </FormField>
          <FormField label="Grouped with icons">
            <FormControl
              v-model="form.year"
              :icon="mdiCalendarRange"
              :options="yearsList"
            />
            <FormControl
              v-model="form.month"
              :icon="mdiCalendarRange"
              :options="monthsList"
            />
          </FormField>
          <FormField label="Displacement" help="">
            <FormControl
              v-model="form.displacement"
              type="text"
              placeholder="Displacement CC"
            />
          </FormField>
          <BaseDivider />
          <FormField label="Condition">
            <FormCheckRadioGroup
              v-model="form.condition"
              name="condition-radio"
              type="radio"
              :options="{ new: 'New', used: 'Used' }"
            />
          </FormField>
          <BaseDivider />
          <FormField label="Mileage" help="">
            <FormControl
              v-model="form.mileage"
              type="text"
              placeholder="Mileage KM"
            />
          </FormField>
          <FormControl v-model="form.bodyType" :options="bodyTypeList" />

          <FormField label="Body Type">
            <FormControl v-model="form.bodyType" :options="bodyTypeList" />
          </FormField>
          <FormField label="Transmission">
            <FormControl
              v-model="form.transmission"
              :options="transmissionList"
            />
          </FormField>
          <FormField label="Streeing">
            <FormControl v-model="form.streeing" :options="streeingList" />
          </FormField>
          <FormField label="Door Type">
            <FormControl v-model="form.doorTypes" :options="doorTypesList" />
          </FormField>
          <FormField label="Drive Type">
            <FormControl v-model="form.driveType" :options="driveTypeList" />
          </FormField>
          <FormField label="Fuel Type">
            <FormControl v-model="form.fuelType" :options="fuleTypeList" />
          </FormField>
          <FormField label="Exterior Color">
            <FormControl
              v-model="form.exteriorColor"
              :options="exteriorColorList"
            />
          </FormField>
          <BaseDivider />

          <FormFilePicker v-model="form.coverImage" label="Cover Image" />

          <template #footer>
            <BaseButtons>
              <BaseButton type="submit" color="info" label="Submit" />
              <BaseButton type="reset" color="info" outline label="Reset" />
            </BaseButtons>
          </template>
        </CardBox>
      </SectionMain>
      <BaseDivider />
      <div
        class="text-2xl text-gray-500 dark:text-slate-400 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center"
      >
        Supplier Details
      </div>
      <SectionMain>
        <CardBox> </CardBox>
      </SectionMain>
    </LayoutAuthenticated>
  </div>
</template>
