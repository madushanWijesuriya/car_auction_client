<script>
import FormField from '@/components/admin/FormField.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import FormControl from '@/components/admin/FormControl.vue'
import { useToast } from 'vue-toastification'
import httpResource from '@/http/httpResource'
import NotificationBar from '@/components/admin/NotificationBar.vue'
import { mdiCarEstate } from '@mdi/js'
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import { reactive, ref, onMounted } from 'vue'

export default {
  setup() {
    const state = reactive({ validationErrors: null, dialogMaker: false })
    const toast = useToast()

    const validateForm = () => {
      // handle frontend validations
      submitForm()
    }

    const resetForm = () => {
      Object.assign(form, initialState)
    }

    const submitForm = async () => {
      try {
        const response = await httpResource.post('/api/staff/payment', {
          ...form,
        })
        if (response.status === 200) {
          toast.success('Successfully Added', {
            timeout: 2000,
          })
          state.validationErrors = null
          resetForm()
        }
      } catch (error) {
        if (error.response.status == 422) {
          state.validationErrors = error.response.data.errors
          window.scrollTo(0, 0)
        } else {
          console.error(error?.response?.data?.message)
          if (error?.response?.data?.message) {
            toast.error(error?.response?.data?.message, {
              timeout: 2000,
            })
          } else {
            toast.error('Something went wrong', {
              timeout: 2000,
            })
          }
        }
      }
    }

    onMounted(async () => {
      getCustomers()
      getVehicles()
    })

    const initialState = {
      vehicle_id: '',
      customer_id: '',
      agent: '',
      paid_amount: 0,
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

    let form = reactive({ ...initialState })
    const imageUploaderRef = ref(null)
    const uploaderKey = ref(1)

    return {
      form,
      validateForm,
      resetForm,
      state,
      getCustomers,
      getVehicles,
      customerList,
      vehicleList,
    }
  },
}
</script>
<template>
  <div class="add-car">
    <LayoutAuthenticated>
      <SectionMain>
        <CardBox form @submit.prevent="submit">
          <div v-if="state.validationErrors">
            <div
              v-for="(v, k) in state.validationErrors"
              :key="k"
              class="alert alert-primary"
              role="alert"
            >
              <div v-for="error in v" :key="error">
                <NotificationBar
                  :isDismissed="false"
                  color="danger"
                  :icon="mdiAlertCircle"
                  :outline="notificationsOutline"
                >
                  <b>Invalid input !</b>{{ error }}
                </NotificationBar>
                <br />
              </div>
            </div>
          </div>
          <SectionTitleLineWithButton
            :icon="mdiCarEstate"
            title="Add new payment"
            main
          >
          </SectionTitleLineWithButton>
          <FormField label="Agent">
            <FormControl v-model="form.agent" type="text" />
          </FormField>
          <div class="grid grid-cols-2">
            <div>
              <FormField label="Vehicle">
                <el-select
                  v-model="form.vehicle_id"
                  class="m-2"
                  placeholder="Select Vehicle"
                  size="large"
                  filterable
                >
                  <el-option
                    v-for="item in vehicleList"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id"
                  />
                </el-select>
              </FormField>
            </div>
            <div>
              <FormField label="Customer">
                <el-select
                  v-model="form.customer_id"
                  class="m-2"
                  placeholder="Select Customer"
                  size="large"
                  filterable
                >
                  <el-option
                    v-for="item in customerList"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id"
                  />
                </el-select>
              </FormField>
            </div>
          </div>
          <FormField label="Subject">
            <FormControl v-model="form.paid_amount" type="number" />
          </FormField>
        </CardBox>
      </SectionMain>
      <SectionMain>
        <CardBox>
          <template #footer>
            <BaseButtons>
              <BaseButton
                type="submit"
                color="info"
                label="Submit"
                @click="validateForm"
              />
              <BaseButton
                type="reset"
                color="info"
                outline
                label="Reset"
                @click="resetForm"
              />
            </BaseButtons>
          </template>
        </CardBox>
      </SectionMain>
    </LayoutAuthenticated>
  </div>
</template>
