<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import Table from '@/components/admin/Table.vue'
import { useContentStore } from '@/stores/contentMgt'
import { computed, onMounted,reactive } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'

const contentStore = useContentStore()
const { content: items ,countries } = storeToRefs(contentStore)
const headers = computed(() => contentStore.tableHeaders)

console.log(items,'items');
const decoratedItems = computed(() => {
  if (!items.value || !Array.isArray(items.value)) return []
  return items.value.map((i) => {
    return {
    id:i?.id,
    content: i?.content?.contents,
    country: i?.country?.name,
    }
  })
})

const getContent = async () => {
  try {
    const response = await httpResource.get('/api/staff/content')
    contentStore.$patch({
        content: response.data.data,
    })

    const countries = await httpResource.get('/api/resources/countries')
    contentStore.$patch({
        countries: countries?.data?.data,
    })
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await getContent()
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
const makersList =  computed(() => {
  if (!countries?.value || !Array.isArray(countries?.value)) return []
  return countries?.value.map((i) => {
    return {
        id: i?.id, label: i?.name
    }
  })
})
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
              <FormField label="Country">
                <FormControl
                  v-model="form.maker"
                  :options="makersList"
                /> </FormField
            ></el-col>
            <el-col :span="6">
              <FormField label="Content">
                <FormControl v-model="form.model" :options="modelsList" />
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
            
            title="Contents"
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