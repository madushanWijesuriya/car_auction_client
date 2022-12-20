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
  emits: ['closeModel'],

  props: {
    makersList: {
      type: Array,
      default: [],
    },
    modelsList: {
      type: Array,
      default: [],
    },
    statusList: {
      type: Array,
      default: [],
    },
    bodyTypeList: {
      type: Array,
      default: [],
    },
    transmissionList: {
      type: Array,
      default: [],
    },
    streeingList: {
      type: Array,
      default: [],
    },
    doorTypesList: {
      type: Array,
      default: [],
    },
    fuleTypeList: {
      type: Array,
      default: [],
    },
    exteriorColorList: {
      type: Array,
      default: [],
    },
    featuresList: {
      type: Array,
      default: [],
    },
    monthsList: {
      type: Array,
      default: [],
    },
    yearsList: {
      type: Array,
      default: [],
    },
    driveTypeList: {
      type: Array,
      default: [],
    },
    vehicle: {
      type: Object,
      default: () => undefined,
    },
  },
  setup(props, { emit }) {
    const {
      makersList,
      modelsList,
      statusList,
      bodyTypeList,
      transmissionList,
      streeingList,
      doorTypesList,
      fuleTypeList,
      exteriorColorList,
      featuresList,
      monthsList,
      yearsList,
      driveTypeList,
      vehicle,
    } = toRefs(props)

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
        formData.append('make_id', form?.maker?.id)
        formData.append('model_id', form?.model?.id)
        formData.append('status_id', form?.status?.id)
        formData.append('body_type_id', form?.bodyType?.id)
        formData.append('transmission_id', form?.transmission?.id)
        formData.append('streeing_id', form?.streeing?.id)
        formData.append('door_type_id', form?.doorTypes?.id)
        formData.append('driver_type_id', form?.driveType?.id)
        formData.append('fuel_type_id', form?.fuelType?.id)
        formData.append('exterior_color_id', form?.exteriorColor?.id)
        formData.append('chassis_no', form?.chassisNo)
        formData.append('make_at', `${form?.year}-${form?.month?.id}-01`)
        formData.append('fob_price', form?.fobPrice)
        formData.append('displacement', form?.displacement)
        formData.append('isUsed', form?.condition === 'used' ? 1 : 0)
        formData.append('grade', form?.gradeTrim)
        formData.append('cover_image', form.coverImage)
        // formData.append('cover_image', 'cover image')
        formData.append('description', form.description)
        formData.append('private_note', form.privateNote)
        formData.append('sup_name', form?.supplierName)
        formData.append('sup_price', form.supplierPrice)
        formData.append('sup_url', form.supplierURL)
        formData.append('mileage', form.mileage)
        formData.append('market_price', form.marketPrice)
        formData.append('feature_id', form?.features?.id)

        if (form.photos && form.photos.length > 0) {
          const imgLimit =
            imageLimit.value !== 0 && form.photos.length >= imageLimit.value
              ? imageLimit.value
              : form.photos.length
          for (let x = 0; x < imgLimit; x++) {
            formData.append(`image[${x}]`, form.photos[x])
          }
        }
        const response = await httpResource.post(
          '/api/staff/vehicle/vehicleUpdate/' + vehicle.value.id,
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
          $emits('closeModel')
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
      maker: makersList[0],
      model: null,
      chassisNo: '',
      fobPrice: 0,
      status: statusList[0],
      year: new Date().getFullYear(),
      month: monthsList[new Date().getMonth()],
      displacement: '',
      condition: 'new',
      bodyType: bodyTypeList[0],
      mileage: 0,
      transmission: transmissionList[0],
      streeing: streeingList[0],
      doorTypes: doorTypesList[0],
      driveType: driveTypeList[0],
      fuelType: fuleTypeList[0],
      exteriorColor: exteriorColorList[0],
      gradeTrim: '',
      features: '',
      coverImage: null,
      photos: [],
      description: '',
      privateNote: '',
      supplierName: '',
      supplierPrice: 0,
      supplierURL: '',
      marketPrice: 0,
    }

    let form = reactive({ ...initialState })
    const imageUploaderRef = ref(null)
    const uploaderKey = ref(1)

    const changeMaker = (e) => {
      emit('changeMaker', e.id)
    }
    let mainKey = ref(1)

    onMounted(async () => {
      await nextTick()
      form.bodyType = bodyTypeList.value.find(
        (i) => i.id === vehicle.value?.body_type_id?.id
      )
      form.chassisNo = vehicle.value?.chassis_no
      form.condition = vehicle.value?.isUsed === 1 ? 'used' : 'new'
      form.coverImage = ''
      form.description = vehicle.value?.description
      form.displacement = vehicle.value?.displacement
      form.doorTypes = doorTypesList.value.find(
        (i) => i.id === vehicle.value?.door_type_id?.id
      )
      form.driveType = driveTypeList.value.find(
        (i) => i.id === vehicle.value?.driver_type_id?.id
      )
      form.exteriorColor = exteriorColorList.value.find(
        (i) => i.id === vehicle.value?.exterior_color_id?.id
      )
      form.features = featuresList.value.find(
        (i) => i.id === vehicle.value?.feature_id?.id
      )
      form.fobPrice = vehicle.value?.fob_price
      form.fuelType = fuleTypeList.value.find(
        (i) => i.id === vehicle.value?.fuel_type_id?.id
      )
      form.gradeTrim = vehicle.value?.grade
      form.maker = makersList.value.find(
        (i) => i.id === vehicle.value?.make_id?.id
      )
      emit('changeMaker', vehicle.value?.make_id?.id)
      form.marketPrice = vehicle.value?.market_price
      form.mileage = vehicle.value?.mileage
      form.month = monthsList.value.find(
        (i) => i.id === new Date(vehicle.value?.make_at).getMonth() + 1
      )
      form.year = new Date(vehicle.value?.make_at).getFullYear()
      form.photos = []
      form.privateNote = vehicle.value?.private_note
      form.status = statusList.value.find(
        (i) => i.id === vehicle.value?.status_id?.id
      )
      form.streeing = streeingList.value.find(
        (i) => i.id === vehicle.value?.streeing_id?.id
      )
      form.supplierName = vehicle.value?.sup_name
      form.supplierPrice = vehicle.value?.sup_price
      form.supplierURL = vehicle.value?.sup_url
      form.transmission = transmissionList.value.find(
        (i) => i.id === vehicle.value?.transmission_id?.id
      )
      setTimeout(() => {
        form.model = modelsList.value.find(
          (i) => i.id === vehicle.value?.model_id?.id
        )
      }, 2000)
      mainKey.value += 1
    })

    return {
      form,
      fuleTypeList,
      driveTypeList,
      doorTypesList,
      streeingList,
      transmissionList,
      bodyTypeList,
      monthsList,
      yearsList,
      statusList,
      modelsList,
      makersList,
      exteriorColorList,
      handleImages,
      validateForm,
      resetForm,
      imageUploaderRef,
      uploaderKey,
      changeMaker,
      featuresList,
      state,
      vehicle,
      mainKey,
    }
  },
  components: {
    UploadImages,
    editor: Editor,
    AddModal,
    AddBodyTypeModel,
    AddTransmitionModal,
  },
  methods: {
    addMaker() {
      console.log(this.$refs.makeModal.openModal())
    },
    addBody() {
      console.log(this.$refs.bodyTypeModel.openModal())
    },
    addTransmition() {
      console.log(this.$refs.transmitionModal.openModal())
    },
  },
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
        <AddModal ref="makeModal" />
        <FormField label="Maker">
          <FormControl
            v-model="form.maker"
            :options="makersList"
            @update:modelValue="changeMaker"
          />
          <BaseButton
            type="submit"
            color="info"
            label="Add Maker"
            @click="addMaker"
          />
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
            type="number"
            placeholder="Price (USD)"
          />
        </FormField>
        <FormField label="Status">
          <FormControl v-model="form.status" :options="statusList" />
        </FormField>
        <FormField label="Make At">
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
            type="number"
            placeholder="Mileage KM"
          />
        </FormField>
        <AddBodyTypeModel ref="bodyTypeModel" />
        <FormField label="Body Type">
          <FormControl v-model="form.bodyType" :options="bodyTypeList" />
        </FormField>
        <BaseButton
          type="submit"
          color="info"
          label="Add Body Type"
          @click="addBody"
        />
        <FormField label="Transmission">
          <FormControl
            v-model="form.transmission"
            :options="transmissionList"
          />
        </FormField>
        <AddTransmitionModal ref="transmitionModal" />
        <BaseButton
          type="submit"
          color="info"
          label="Add Transminition"
          @click="addTransmition"
        />
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
        <FormField label="Features">
          <FormControl v-model="form.features" :options="featuresList" />
        </FormField>
        <FormField label="Grade/ Trim">
          <FormControl
            v-model="form.gradeTrim"
            type="text"
            placeholder="Grade"
          />
        </FormField>
        <BaseDivider />

        <FormFilePicker v-model="form.coverImage" label="Cover Image" />

        <div
          class="text-2xl text-gray-500 dark:text-slate-400 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center"
        >
          Upload Images
        </div>
        <div
          style="height: 400px; width: 55vw; background: #f2f2f2"
          class="mt-6 image-uploader-wrapper"
        >
          <UploadImages
            ref="imageUploaderRef"
            @changed="handleImages"
            :key="uploaderKey"
          />
        </div>

        <BaseDivider />

        <FormField label="Question" help="Description">
          <FormControl
            type="textarea"
            placeholder=""
            v-model="form.description"
          />
        </FormField>
      </CardBox>
    </SectionMain>
    <BaseDivider />
    <div
      class="text-2xl text-gray-500 dark:text-slate-400 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center"
    >
      Supplier Details
    </div>
    <SectionMain>
      <CardBox>
        <FormField label="Supplier name and price">
          <FormControl v-model="form.supplierName" type="text" />
          <FormControl v-model="form.supplierPrice" type="number" />
        </FormField>

        <FormField label="Supplier URL and market price">
          <FormControl v-model="form.supplierURL" type="text" />
          <FormControl v-model="form.marketPrice" type="number" />
        </FormField>

        <FormField label="Private note" help="Private note">
          <FormControl
            type="textarea"
            placeholder=""
            v-model="form.privateNote"
          />
        </FormField>

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
