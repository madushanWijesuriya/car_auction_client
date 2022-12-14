<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import Table from '@/components/admin/Table.vue'
import ClientTable from '@/components/Tables/Admin/ClientTable.vue'
import { useClientsStore } from '@/stores/clientsMgt'
import { computed, onMounted, reactive } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'
import clientsData from '../dummy-data/clients'
import { mdiEye, mdiTrashCan, mdiBlockHelper } from '@mdi/js'
import { useToast } from 'vue-toastification'
const toast = useToast()

const clientsStore = useClientsStore()
const { clients: items, countries } = storeToRefs(clientsStore)
const headers = computed(() => clientsStore.tableHeaders)

const decoratedItems = computed(() => {
  if (!items.value || !Array.isArray(items.value)) return []
  return items.value.map((i) => {
    return {
      id: i?.id,
      name: i?.name,
      email: i?.email,
      country: i?.country?.name,
      
      isActive: i?.isActive ? 'Active' : 'deactivate',
    }
  })
})

const actions = [
  {
    color: 'danger',
    label: 'Block',
    icon: mdiBlockHelper,
    onClick: 'defaultAction',
  },
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
]

const getAllClients = async () => {
  try {
    const response = await httpResource.get('api/staff/customer')
    clientsStore.$patch({
      clients: response?.data?.data,
    })

    const countries = await httpResource.get('/api/resources/countries')
    clientsStore.$patch({
      countries: countries?.data?.data,
    })
  } catch (error) {
    console.error(error)
  }
}

const applyFilters = async () => {
  try {
    let filterQuery = '/api/staff/customer?'

    if (form?.country_id?.id)
      filterQuery += `filter[country_id]=${form.country_id?.id}`
    if (form?.isActive?.id)
      filterQuery += `&filter[isActive]=${form?.isActive?.id}`
    if (form?.email) filterQuery += `&filter[email]=${form?.email}`
    const response = await httpResource.get(filterQuery)
    clientsStore.$patch({
      clients: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await getAllClients()
})

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

const validateForm = () => {
  // handle frontend validations
  submitForm()
}

const resetForm = () => {
  Object.assign(form, initialState)
  getAllClients()
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
const countryList = computed(() => {
  if (!countries?.value || !Array.isArray(countries?.value)) return []
  return countries?.value.map((i) => {
    return {
      id: i?.id,
      label: i?.name,
    }
  })
})

const initialState = {
  country_id: countryList[0],
  isActive: 1,
  email: '',
}

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

const openModel = ()=>{
  
};

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
                <FormControl v-model="form.country_id" :options="countryList" />
              </FormField>
            </el-col>
            <el-col :span="6">
              <FormField label="Status">
                <FormControl v-model="form.isActive" :options="statusOptions" />
              </FormField>
            </el-col>
            <el-col :span="6">
              <FormField label="Email">
                <FormControl v-model="form.email" type="text" />
              </FormField>
            </el-col>
            <el-col :span="6">
              <BaseButton
              type="submit justify-end lg:justify-end"
              color="info"
              label="Send News and Letters"
              @click="openModel"
              no-wrap
            />
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
            title="Clients"
            main
          ></SectionTitleLineWithButton>
          <ClientTable
            :items="decoratedItems"
            :headers="headers"
            :actions="actions"
            @block-user="getAllClients"
          >
          </ClientTable>
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
