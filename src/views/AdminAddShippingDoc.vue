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
import UploadImages from 'vue-upload-drop-images'

export default {
  components: { UploadImages },
  setup() {
    const state = reactive({ validationErrors: null, dialogMaker: false })
    const toast = useToast()
    const imageLimit = ref(3)
    const validateForm = () => {
      // handle frontend validations
      submitForm()
    }

    const resetForm = () => {
      Object.assign(form, initialState)
    }
    const submitForm = async () => {
      try {
        const formData = new FormData()
        console.log(form?.vehicle_id, 'form?.vehicle_id')
        formData.append('vehicle_id', form?.vehicle_id ? form?.vehicle_id : '')
        formData.append('country_id', form?.country_id ? form?.country_id : '')
        formData.append(
          'customer_id',
          form?.customer_id ? form?.customer_id : ''
        )
        formData.append('etd', form?.etd)
        formData.append('eta', form?.eta)

        formData.append('pol', form?.pol)

        formData.append('pod', form?.pod)

        formData.append('consignee_name', form?.consignee_name)

        formData.append('consignee_name', form?.consignee_name)

        if (form.photos && form.photos.length > 0) {
          const imgLimit =
            imageLimit.value !== 0 && form.photos.length >= imageLimit.value
              ? imageLimit.value
              : form.photos.length
          for (let x = 0; x < imgLimit; x++) {
            formData.append(`doc[${x}]`, form.photos[x])
          }
        }
        const response = await httpResource.post(
          '/api/staff/shipping',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

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
          toast.error('Something went wrong', {
            timeout: 2000,
          })
        }
      }
    }

    onMounted(async () => {
      getVehicles()
      getCountries()
      getCustomers()
    })

    const initialState = {
      vehicle_id: '',
      country_id: '',
      customer_id: '',
      etd: '',
      eta: '',
      pol: '',
      pod: '',
      consignee_name: '',
      yard_location: '',
      photos: [],
    }

    let form = reactive({ ...initialState })
    const imageUploaderRef = ref(null)
    const uploaderKey = ref(1)
    let vehicleList = ref([])

    const handleImages = (event) => {
      const files = Array.from(event)
      form.photos = [...files]
    }
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
    return {
      form,
      validateForm,
      resetForm,
      state,
      imageUploaderRef,
      uploaderKey,
      getVehicles,
      getCountries,
      getCustomers,
      vehicleList,
      customerList,
      countryList,
      handleImages,
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
            title="Add news and letter"
            main
          >
          </SectionTitleLineWithButton>

          <div class="grid grid-cols-3 gap-2">
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
            <FormField label="Country">
              <el-select
                v-model="form.country_id"
                class="m-2"
                placeholder="Select Country"
                size="large"
                filterable
              >
                <el-option
                  v-for="item in countryList"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id"
                />
              </el-select>
            </FormField>
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
            <FormField label="ETD">
              <el-form-item>
                <el-date-picker
                  v-model="form.etd"
                  type="date"
                  placeholder="Pick a Date"
                  format="YYYY/MM/DD"
                  value-format="YYYY-MM-DD"
                >
                </el-date-picker>
              </el-form-item>
            </FormField>
            <FormField label="ETA">
              <el-form-item>
                <el-date-picker
                  v-model="form.eta"
                  type="date"
                  placeholder="Pick a Date"
                  format="YYYY/MM/DD"
                  value-format="YYYY-MM-DD"
                >
                </el-date-picker>
              </el-form-item>
            </FormField>
            <FormField label="POL">
              <el-form-item>
                <el-input v-model="form.pol" />
              </el-form-item>
            </FormField>
            <FormField label="POD">
              <el-form-item>
                <el-input v-model="form.pod" />
              </el-form-item>
            </FormField>
            <FormField label="Consignee Name">
              <el-form-item>
                <el-input v-model="form.consignee_name" />
              </el-form-item>
            </FormField>
          </div>

          <div
            class="text-2xl text-gray-500 dark:text-slate-400 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center"
          >
            Upload Images
          </div>
          <div
            style="height: 400px; width: 100%; background: #f2f2f2"
            class="mt-6"
          >
            <UploadImages
              ref="imageUploaderRef"
              @changed="handleImages"
              :key="uploaderKey"
              max="3"
            />
          </div>
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
