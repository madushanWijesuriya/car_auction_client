<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import Table from '@/components/admin/Table.vue'
import StaffUserTable from '@/components/Tables/Admin/StaffUserTable.vue'
import { useStaffUsersStore } from '../stores/staffuser'
import { computed, onMounted, reactive, ref } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toastification'
const toast = useToast()

const usersStore = useStaffUsersStore()
const { users: items } = storeToRefs(usersStore)
const headers = computed(() => usersStore.tableHeaders)
const decoratedItems = computed(() => {
  if (!items.value || !Array.isArray(items.value)) return []
  return items.value.map((i) => {
    return {
      id: i?.id,
      name: i?.name,
      email: i?.email,
      email_verified_at: i?.email_verified_at,
      created_at: i?.created_at,
      updated_at: i?.updated_at,
      // deleted_at: i?.deleted_at,
      roles: i?.roles[0]?.name,
    }
  })
})

const getAllUsers = async () => {
  try {
    const response = await httpResource.get('/api/staff/staffuser')
    usersStore.$patch({
      users: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

const applyFilters = async () => {
  try {
    let filterQuery = '/api/staff/staffuser?'
    if (form.email) filterQuery += `filter[email]=${form.email}`
    if (form.role_id) filterQuery += `filter[roles.id]=${form.role_id.id}`
    const response = await httpResource.get(filterQuery)
    usersStore.$patch({
      users: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await getAllUsers()
  getRoles()
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
  fromYear: new Date().getFullYear(),
  toYear: new Date().getFullYear(),
  email: '',
  role_id: '',
}
let roleIds = ref([])

const getRoles = async () => {
  try {
    const response = await httpResource.get('/api/resources/roles')
    roleIds.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
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
              <FormField label="Email">
                <FormControl
                  v-model="form.email"
                  :icon="mdiCalendarRange"
                  type="text"
                />
              </FormField>
            </el-col>
            <el-col :span="8">
              <FormField label="Role">
                <FormControl
                  v-model="form.role_id"
                  :icon="mdiCalendarRange"
                  :options="roleIds"
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
            title="All Users"
            main
          ></SectionTitleLineWithButton>
          <StaffUserTable
            @edit-user="getAllUsers"
            :items="decoratedItems"
            :headers="headers"
          >
          </StaffUserTable>
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
