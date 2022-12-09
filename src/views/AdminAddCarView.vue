<script>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate, mdiCalendarRange } from '@mdi/js'
import FormField from '@/components/admin/FormField.vue'
import FormControl from '@/components/admin/FormControl.vue'
import { reactive, ref, onMounted, computed } from 'vue'
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
import AddModal from '@/components/admin/modals/AddModal.vue'
import AddBodyTypeModel from '@/components/admin/modals/add-body/AddBodyTypeModel.vue'
import AddTransmitionModal from '@/components/admin/modals/transmition/AddTransmitionModal.vue'
import AddCarModel from '@/components/admin/modals/add-model/AddCarModel.vue'
import AddStreeings from '@/components/admin/modals/add-streeings/AddStreeings.vue'
import AddDoorTypeModel from '@/components/admin/modals/add-door-types/AddDoorTypeModel.vue'
import AddDrivetypeModel from '@/components/admin/modals/drive-type-model/AddDrivetypeModel.vue'
import AddFuelTypeModel from '@/components/admin/modals/add-fuel-type-model/AddFuelTypeModel.vue'
import AddExteriorColorModel from '@/components/admin/modals/add-exterior-color-model/AddExteriorColorModel.vue'
import AddFeatureModel from '@/components/admin/modals/add-feature-model/AddFeatureModel.vue'

export default {
  setup() {
    const state = reactive({ validationErrors: null, dialogMaker: false })

    const toast = useToast()
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
        const response = await httpResource.post('/api/staff/vehicle', {
          make_id: form?.maker?.id,
          model_id: form?.model?.id,
          status_id: form?.status?.id,
          body_type_id: form?.bodyType?.id,
          transmission_id: form?.transmission?.id,
          streeing_id: form?.streeing?.id,
          door_type_id: form?.doorTypes?.id,
          driver_type_id: form?.driveType?.id,
          fuel_type_id: form?.fuelType?.id,
          exterior_color_id: form?.exteriorColor?.id,
          feature_id: form?.features?.id,
          chassis_no: form?.chassisNo,
          make_at: `${form?.year}-${form?.month?.id}-01`,
          fob_price: form?.fobPrice,
          displacement: form?.displacement,
          isUsed: form?.condition === 'used',
          mileage: form?.mileage,
          grade: form?.gradeTrim,
          cover_image: 'cover image URL' /* form.coverImage */,
          description: form.description,
          private_note: form.privateNote,
          sup_name: form.supplierName,
          sup_price: form.supplierPrice,
          sup_url: form.supplierURL,
          market_price: form.marketPrice,
          images: [
            'image_url_1',
            'image_url_2',
            'image_url_3',
            'image_url_4',
            'image_url_5',
          ],
          description: form?.description,
        })
        if (response.status === 200) {
          state.validationErrors = null
          resetForm()
          toast.success('Successfully Added', {
            timeout: 2000,
          })
        }
      } catch (error) {
        if (error.response.status == 422) {
          state.validationErrors = error.response.data.errors
          window.scrollTo(0, 0)
        } else {
          console.error(error?.response?.data?.message)
        }
      }
    }

    let makersList = ref([])
    const getMakers = async () => {
      try {
        const response = await httpResource.get('/api/resources/maker')
        makersList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {}
    }
    let modelsList = ref([])
    const getModels = async (moakerId) => {
      try {
        const response = await httpResource.get(
          '/api/resources/model/' + moakerId
        )
        modelsList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }

    const changeMaker = (e) => {
      getModels(e.id)
    }

    let statusList = ref([])
    const getStatus = async () => {
      try {
        const response = await httpResource.get('/api/resources/status')
        statusList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }

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
    let bodyTypeList = ref([])
    const getBodyTypes = async () => {
      try {
        const response = await httpResource.get('/api/resources/body-type')
        bodyTypeList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }
    let transmissionList = ref([])
    const getTransmitions = async () => {
      try {
        const response = await httpResource.get('/api/resources/transmission')
        transmissionList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }
    let streeingList = ref([])
    const getStreeings = async () => {
      try {
        const response = await httpResource.get('/api/resources/streeings')
        streeingList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }
    let doorTypesList = ref([])
    const getDoorTypes = async () => {
      try {
        const response = await httpResource.get('/api/resources/door-types')
        doorTypesList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }

    let driveTypeList = ref([])
    const getDriverTypes = async () => {
      try {
        const response = await httpResource.get('/api/resources/drive-types')
        driveTypeList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }
    let fuleTypeList = ref([])
    const getfuleTypes = async () => {
      try {
        const response = await httpResource.get('/api/resources/fuel-types')
        fuleTypeList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }
    let exteriorColorList = ref([])
    const getExteriorColors = async () => {
      try {
        const response = await httpResource.get(
          '/api/resources/exterior-colors'
        )
        exteriorColorList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }
    let featuresList = ref([])
    const getFeatures = async () => {
      try {
        const response = await httpResource.get('/api/resources/features')
        featuresList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(async () => {
      getMakers()
      getStatus()
      getBodyTypes()
      getTransmitions()
      getStreeings()
      getDoorTypes()
      getDriverTypes()
      getfuleTypes()
      getExteriorColors()
      getFeatures()
    })

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
      getMakers,
      getBodyTypes,
    }
  },
  components: {
    UploadImages,
    editor: Editor,
    AddModal,
    AddBodyTypeModel,
    AddTransmitionModal,
    AddCarModel,
    AddStreeings,
    AddDoorTypeModel,
    AddDrivetypeModel,
    AddFuelTypeModel,
    AddExteriorColorModel,
    AddFeatureModel
  },
  methods: {
    addMaker() {
      this.$refs.makeModal.openMakeModal()
    },
    addBody() {
      this.$refs.bodyTypeModel.openBodyModal()
    },
    addTransmition() {
      this.$refs.transmitionModal.openTransModal()
    },
    getResourcesLists() {
      getMakers()
      getBodyTypes()
    },
    addCarModel(){
      this.$refs.addCarModel.openAddCarModal()
    },
    addStreeingsModel(){
      this.$refs.addStreeings.openAddStreeingsModal()
    },
    addDoorTypeModel(){
      this.$refs.addDoorType.openAddDoorTypeModal()
    },
    addDrivetypeModel(){
      this.$refs.drivetypeModel.openAddDrivetypeModel()
    },
    addFuelTypeModel(){
      this.$refs.fueltypeModel.openAddFuelTypeModal()
    },
    addExteriorColorModel(){
      this.$refs.addExteriorColorModel.openAddExteriorColorModal()
    },
    addFeatureModel(){
      this.$refs.addFeatureModel.openAddFeatureModel()
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
          <SectionTitleLineWithButton :icon="mdiCarEstate" title="Add Car" main>
          </SectionTitleLineWithButton>
          <AddModal ref="makeModal" @triggerParent="getResourcesLists" />
          <FormField label="Maker">
            <FormControl
              v-model="form.maker"
              :options="makersList"
              @update:modelValue="changeMaker"
            />
          </FormField>
          <BaseButton
              type="submit"
              color="info"
              label="Add Maker"
              @click="addMaker"
            />
          <AddCarModel ref="addCarModel"/> 
          <FormField label="Model">
            <FormControl v-model="form.model" :options="modelsList" />
          </FormField>
          <BaseButton
              type="submit"
              color="info"
              label="Add Car Model"
              @click="addCarModel"
            />
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
          <AddBodyTypeModel
            ref="bodyTypeModel"
          />
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
          <AddStreeings ref="addStreeings"/>
          <FormField label="Streeing">
            <FormControl v-model="form.streeing" :options="streeingList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Streeings"
            @click="addStreeingsModel"
          />
          <AddDoorTypeModel ref="addDoorType"/>
          <FormField label="Door Type">
            <FormControl v-model="form.doorTypes" :options="doorTypesList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Door Type"
            @click="addDoorTypeModel"
          />
          <AddDrivetypeModel ref="drivetypeModel"/>
          <FormField label="Drive Type">
            <FormControl v-model="form.driveType" :options="driveTypeList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Drive Type"
            @click="addDrivetypeModel"
          />
          <addFuelTypeModel ref="fueltypeModel"/>
          <FormField label="Fuel Type">
            <FormControl v-model="form.fuelType" :options="fuleTypeList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Fuel Type"
            @click="addFuelTypeModel"
          />
          <AddExteriorColorModel ref = "addExteriorColorModel"/>
          <FormField label="Exterior Color">
            <FormControl
              v-model="form.exteriorColor"
              :options="exteriorColorList"
            />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Exterior Color"
            @click="addExteriorColorModel"
          />
          <AddFeatureModel ref="addFeatureModel"/>
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
          <BaseButton
            type="submit"
            color="info"
            label="Add Feature"
            @click="addFeatureModel"
          />
          <BaseDivider />

          <FormFilePicker v-model="form.coverImage" label="Cover Image" />

          <div
            class="text-2xl text-gray-500 dark:text-slate-400 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center"
          >
            Upload Images
          </div>
          <div
            style="height: 400px; width: 55vw; background: #f2f2f2"
            class="mt-6"
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

      <BaseDivider />
    </LayoutAuthenticated>
  </div>
</template>
