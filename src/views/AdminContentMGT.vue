<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import ContentTable from '@/components/Tables/Admin/ContentTable.vue'
import { useContentStore } from '@/stores/contentMgt'
import { computed, onMounted, reactive } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'
const initialState = {
  country_id: '',
}

let form = reactive({ ...initialState })
const contentStore = useContentStore()
const { content: items, countries } = storeToRefs(contentStore)
const headers = computed(() => contentStore.tableHeaders)

const decoratedItems = computed(() => {
  if (!items.value || !Array.isArray(items.value)) return []
  console.log(items)
  return items.value.map((i) => {
    return {
      id: i?.id,
      country: i?.country?.name,
      key: i?.content?.key,
      data: i?.content?.data,
      udpdated_at: i?.updated_at,
      content: i?.content?.contents
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
    let options = countries?.data?.data.map((item)=>({id:item?.id ,   label:item?.name}))
    contentStore.$patch({
      countries: options,
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
const applyFilters = async () => {
  try {
    let filterQuery = '/api/staff/content/country/'

    if (form.country_id) filterQuery += `id=${form.country_id.id}`
    const response = await httpResource.get(filterQuery)
    contentStore.$patch({
      content: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

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
                  v-model="form.country_id"
                  :options="countries"
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
            title="Contents"
            main
          ></SectionTitleLineWithButton>
          <ContentTable :items="decoratedItems" :headers="headers">
          </ContentTable>
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
