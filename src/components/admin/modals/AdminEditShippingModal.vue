<script>
import { mdiCalendarRange } from '@mdi/js'
import FormField from '@/components/admin/FormField.vue'
import FormControl from '@/components/admin/FormControl.vue'

import {
  reactive,
  ref,
  onMounted,
  computed,
  toRefs,
  onBeforeMount,
  nextTick,
} from 'vue'
import FormCheckRadioGroup from '@/components/admin/FormCheckRadioGroup.vue'
import BaseDivider from '@/components/admin/BaseDivider.vue'
import FormFilePicker from '@/components/admin/FormFilePicker.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import UploadImages from 'vue-upload-drop-images'
import httpResource from '@/http/httpResource'
import Editor from '@tinymce/tinymce-vue'
import { useToast } from 'vue-toastification'
import NotificationBar from '@/components/admin/NotificationBar.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import AddModal from '@/components/admin/modals/AddModal.vue'
import AddBodyTypeModel from '@/components/admin/modals/add-body/AddBodyTypeModel.vue'
import AddTransmitionModal from '@/components/admin/modals/transmition/AddTransmitionModal.vue'

export default {
  emits: ['closeModel', 'edit'],

  props: {
    vehicleList: {
      type: Array,
      default: [],
    },
    customerList: {
      type: Array,
      default: [],
    },
    countryList: {
      type: Array,
      default: [],
    },
    shipping: {
      type: Object,
      default: () => undefined,
    },
  },
  setup(props, { emit }) {
    const base_url_api = import.meta.env.VITE_BASE_URL_API
    const { countryList, customerList, vehicleList, shipping } = toRefs(props)

    const state = reactive({ validationErrors: null, dialogMaker: false })
    const toast = useToast()
    const imageLimit = ref(0) // 0 -> will submit all images / any other number -> will limit image to that number

    // methods

    const range = (start, stop, step) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      )

    const handleImages = (event) => {
      console.log(event)
      const files = Array.from(event)
      form.photos = [...files]
    }

    const validateForm = () => {
      // handle frontend validations
      submitForm()
    }

    const resetForm = () => {
      Object.assign(form, initialState)
      uploaderKey.value += uploaderKey.value + 1
    }

    const submitForm = async () => {
      try {
        const formData = new FormData()
        console.log(form, 'formformform')
        console.log(form?.vehicle_id, 'form?.vehicle_id')
        formData.append(
          'vehicle_id',
          form?.vehicle_id ? form?.vehicle_id?.id : ''
        )
        formData.append(
          'country_id',
          form?.country_id ? form?.country_id?.id : ''
        )
        formData.append(
          'customer_id',
          form?.customer_id ? form?.customer_id?.id : ''
        )
        formData.append('etd', form?.etd)
        formData.append('eta', form?.eta)

        formData.append('pol', form?.pol)

        formData.append('pod', form?.pod)

        formData.append('consignee_name', form?.consignee_name)

        formData.append('yard_location', form?.yard_location)

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
          '/api/staff/shipping/update/' + shipping.value.id,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        console.log(response)
        if (response.status === 200) {
          toast.success('Successfully Added', {
            timeout: 2000,
          })
          state.validationErrors = null
          resetForm()

          emit('edit')
          emit('closeModel')
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

    let mainKey = ref(1)
    let shippingRec = ref([])
    const getShippingById = async (id) => {
      try {
        const response = await httpResource.get('/api/staff/shipping/' + id)
        shippingRec.value = response.data.data
      } catch (error) {
        console.error(error)
      }
    }
    onMounted(async () => {
      await getShippingById(props.shipping.id)

      await nextTick()
      form.vehicle_id = vehicleList.value.find(
        (i) => i.id === shippingRec.value?.vehicle_id?.id
      )
      form.country_id = countryList.value.find(
        (i) => i.id === shippingRec.value?.country_id?.id
      )
      form.customer_id = customerList.value.find(
        (i) => i.id === shippingRec.value?.customer_id?.id
      )
      form.etd = shippingRec.value?.etd
      form.eta = shippingRec.value?.eta
      form.pol = shippingRec.value?.pol
      form.pod = shippingRec.value?.pod
      form.consignee_name = shippingRec.value?.consignee_name
      form.yard_location = shippingRec.value?.yard_location
      form.photos = [
        { path: shippingRec.value.doc_1 },
        { path: shippingRec.value.doc_2 },
        { path: shippingRec.value.doc_3 },
      ]

      console.log(shippingRec, 'shipping')
      // form.current_images = shipping.value?.
      mainKey.value += 1

      console.log(form, 'form')
    })

    return {
      form,
      handleImages,
      validateForm,
      resetForm,
      imageUploaderRef,
      uploaderKey,
      state,
      mainKey,
      base_url_api,
    }
  },
  components: {
    UploadImages,
  },
  methods: {},
}
</script>
<template>
  <div class="edit-car-modal el-scrollbar" :key="mainKey">
    <SectionMain>
      <CardBox form @submit.prevent="() => {}">
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
          <FormField label="Yard Location">
            <el-form-item>
              <el-input v-model="form.yard_location" />
            </el-form-item>
          </FormField>
        </div>
        <div class="grid grid-cols-5">
          <div v-for="(image, key) in form.photos" :key="key">
            <img :src="base_url_api + image.path" download="filename" />
          </div>
        </div>
        <div
          class="text-2xl text-gray-500 dark:text-slate-400 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center"
        >
          Upload Shipping Documents
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
  </div>
</template>

<styles scoped lang="scss">
.edit-car-modal {
  max-height: calc(100vh - 260px);
  overflow-y: auto;

  .image-uploader-wrapper {
    max-width: calc(24vw);
    overflow-x: auto;
  }
}
</styles>
