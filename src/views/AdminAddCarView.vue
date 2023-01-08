<script>
// import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
// import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
// import SectionMain from '@/components/admin/SectionMain.vue'
// import { mdiCarEstate, mdiCalendarRange } from '@mdi/js'
// import FormField from '@/components/admin/FormField.vue'
// import FormControl from '@/components/admin/FormControl.vue'
import { reactive, ref, onMounted, computed } from 'vue'
// import FormCheckRadioGroup from '@/components/admin/FormCheckRadioGroup.vue'
// import BaseDivider from '@/components/admin/BaseDivider.vue'
// import FormFilePicker from '@/components/admin/FormFilePicker.vue'
// import BaseButtons from '@/components/admin/BaseButtons.vue'
// import BaseButton from '@/components/admin/BaseButton.vue'
import UploadImages from 'vue-upload-drop-images'
import httpResource from '@/http/httpResource'
import Editor from '@tinymce/tinymce-vue'
import { useToast } from 'vue-toastification'
import NotificationBar from '@/components/admin/NotificationBar.vue'
import AddModal from '@/components/admin/modals/AddModal.vue'
import AddBodyTypeModel from '@/components/admin/modals/add-body/AddBodyTypeModel.vue'
import AddGearTypeModel from '@/components/admin/modals/add-gear/AddGearTypeModel.vue'
import AddEngineModal from '@/components/admin/modals/engine/AddEngineModal.vue'
import AddTransmitionModal from '@/components/admin/modals/transmition/AddTransmitionModal.vue'
import AddCarModel from '@/components/admin/modals/add-model/AddCarModel.vue'
import AddStreeings from '@/components/admin/modals/add-streeings/AddStreeings.vue'
import AddDoorTypeModel from '@/components/admin/modals/add-door-types/AddDoorTypeModel.vue'
import AddDrivetypeModel from '@/components/admin/modals/drive-type-model/AddDrivetypeModel.vue'
import AddFuelTypeModel from '@/components/admin/modals/add-fuel-type-model/AddFuelTypeModel.vue'
import AddExteriorColorModel from '@/components/admin/modals/add-exterior-color-model/AddExteriorColorModel.vue'
import AddFeatureModel from '@/components/admin/modals/add-feature-model/AddFeatureModel.vue'
import AddCountryModel from '@/components/admin/modals/add-country/AddCountryModel.vue'
import AddFortModel from '@/components/admin/modals/add-fort/AddFortModel.vue'
import AddOdometerModel from '@/components/admin/modals/add-odometer/AddOdometerModel.vue'
import { Search, Refresh, Loading } from '@element-plus/icons-vue'

export default {
  setup() {
    const state = reactive({
      validationErrors: null,
      dialogMaker: false,
      refreshAll: false,
    })
    const imageLimit = ref(0) // 0 -> will submit all images / any other number -> will limit image to that number
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
        console.log(form, 'formformform')
        const formData = new FormData()
        formData.append('make_id', form?.maker?.id ? form?.maker?.id : '')
        formData.append('model_id', form?.model?.id ? form?.model?.id : '')
        formData.append('status_id', form?.status?.id ? form?.status?.id : '')
        formData.append(
          'body_type_id',
          form?.bodyType?.id ? form?.bodyType?.id : ''
        )
        formData.append(
          'engine_id',
          form?.engine_id?.id ? form?.engine_id?.id : ''
        )
        formData.append(
          'gear_box_id',
          form?.gear_box_id?.id ? form?.gear_box_id?.id : ''
        )
        formData.append(
          'transmission_id',
          form?.transmission?.id ? form?.transmission?.id : ''
        )
        formData.append(
          'streeing_id',
          form?.streeing?.id ? form?.streeing?.id : ''
        )
        formData.append(
          'door_type_id',
          form?.doorTypes?.id ? form?.doorTypes?.id : ''
        )
        formData.append(
          'driver_type_id',
          form?.driveType?.id ? form?.driveType?.id : ''
        )
        formData.append(
          'fuel_type_id',
          form?.fuelType?.id ? form?.fuelType?.id : ''
        )
        formData.append(
          'exterior_color_id',
          form?.exteriorColor?.id ? form?.exteriorColor?.id : ''
        )
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
        formData.append(
          'feature_id',
          form?.features?.id ? form?.features?.id : ''
        )
        formData.append(
          'shipping_country_id',
          form?.shipping_country_id?.id ? form?.shipping_country_id?.id : ''
        )
        formData.append('fort_id', form?.fort_id?.id ? form?.fort_id?.id : '')
        formData.append(
          'gear_box_id',
          form?.gear_box_id?.id ? form?.gear_box_id?.id : ''
        )
        formData.append(
          'odometer_id',
          form?.odometer_id?.id ? form?.odometer_id?.id : ''
        )
        formData.append('lot_number', form?.lot_number)
        formData.append('title', form?.title)
        formData.append('seats', form?.seats)
        formData.append('interior_condition', form?.interior_condition)
        formData.append('wd', form?.wd)
        formData.append('exterior_condition', form?.exterior_condition)

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
          '/api/staff/vehicle',
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
    let fortList = ref([])
    const getForts = async (countyId) => {
      try {
        const response = await httpResource.get(
          '/api/resources/forts/' + countyId
        )
        fortList.value = response.data.data.map((d) => ({
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
    const changeCountry = (e) => {
      getForts(e.id)
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
    let gearTypeList = ref([])
    const getGearTypes = async () => {
      try {
        const response = await httpResource.get('/api/resources/gears')
        gearTypeList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }
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
    let engineList = ref([])
    const getEngines = async () => {
      try {
        const response = await httpResource.get('/api/resources/engine-types')
        engineList.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }

    let odometerList = ref([])
    const getOdometers = async () => {
      try {
        const response = await httpResource.get('/api/resources/odometers')
        odometerList.value = response.data.data.map((d) => ({
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
      getGearTypes()
      getBodyTypes()
      getTransmitions()
      getStreeings()
      getDoorTypes()
      getDriverTypes()
      getfuleTypes()
      getExteriorColors()
      getFeatures()
      getEngines()
      getGearTypes()
      getCountries()
      getOdometers()
    })

    const initialState = {
      maker: '',
      model: '',
      chassisNo: '',
      fobPrice: 0,
      status: '',
      year: new Date().getFullYear(),
      month: monthsList[new Date().getMonth()],
      displacement: '',
      condition: 'new',
      bodyType: '',
      mileage: 0,
      gear_box_id: '',
      engine_id: '',
      transmission: '',
      streeing: '',
      doorTypes: '',
      driveType: '',
      fuelType: '',
      exteriorColor: '',
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
      shipping_country_id: '',
      fort_id: '',
      title: '',
      lot_number: '',
      seats: '',
      interior_condition: '',
      wd: '',
      exterior_condition: '',
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
      engineList,
      odometerList,
      transmissionList,
      gearTypeList,
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
      getCountries,
      getForts,
      countryList,
      fortList,
      changeCountry,
      featuresList,
      state,
      getMakers,
      getBodyTypes,
      getGearTypes,
    }
  },
  components: {
    Search,
    Loading,
    Refresh,
    UploadImages,
    editor: Editor,
    AddModal,
    AddGearTypeModel,
    AddBodyTypeModel,
    AddEngineModal,
    AddTransmitionModal,
    AddCarModel,
    AddStreeings,
    AddDoorTypeModel,
    AddDrivetypeModel,
    AddFuelTypeModel,
    AddExteriorColorModel,
    AddFeatureModel,
    AddCountryModel,
    AddFortModel,
    AddOdometerModel,
  },
  methods: {
    addMaker() {
      this.$refs.makeModal.openMakeModal()
    },
    addGear() {
      this.$refs.gearModal.openGearModal()
    },
    addBody() {
      this.$refs.bodyTypeModel.openBodyModal()
    },
    addEngine() {
      this.$refs.engineModel.openEngineModal()
    },
    addOdometer() {
      this.$refs.odometerModal.openOdometerModal()
    },
    addTransmition() {
      this.$refs.transmitionModal.openTransModal()
    },
    getResourcesLists() {
      this.getMakers()
      this.getStatus()
      this.getGearTypes()
      this.getBodyTypes()
      this.getTransmitions()
      this.getStreeings()
      this.getDoorTypes()
      this.getDriverTypes()
      this.getfuleTypes()
      this.getExteriorColors()
      this.getFeatures()
      this.getEngines()
      this.getGearTypes()
      this.getCountries()
    },
    addCarModel() {
      this.$refs.addCarModel.openAddCarModal()
    },
    addStreeingsModel() {
      this.$refs.addStreeings.openAddStreeingsModal()
    },
    addDoorTypeModel() {
      this.$refs.addDoorType.openAddDoorTypeModal()
    },
    addDrivetypeModel() {
      this.$refs.drivetypeModel.openAddDrivetypeModel()
    },
    addFuelTypeModel() {
      this.$refs.fueltypeModel.openAddFuelTypeModal()
    },
    addExteriorColorModel() {
      this.$refs.addExteriorColorModel.openAddExteriorColorModal()
    },
    addFeatureModel() {
      this.$refs.addFeatureModel.openAddFeatureModel()
    },
    addCountry() {
      this.$refs.addCountryModal.openCountryModal()
    },
    addFortModal() {
      this.$refs.addFortModal.openAddfortModal()
    },
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
          <v-row>
            <div class="float-right">
              <el-button @click="refreshAllLists"
                >Refresh All
                <el-icon v-if="!state.refreshAll">
                  <Refresh />
                </el-icon>
                <el-icon v-if="state.refreshAll" class="is-loading">
                  <Loading />
                </el-icon>
              </el-button>
            </div>
          </v-row>
          <SectionTitleLineWithButton :icon="mdiCarEstate" title="Add Car" main>
          </SectionTitleLineWithButton>

          <FormField label="Title" help="">
            <FormControl v-model="form.title" type="text" placeholder="Title" />
          </FormField>
          <FormField label="Interior Condition" help="">
            <FormControl
              v-model="form.interior_condition"
              type="text"
              placeholder="Interior Condition"
            />
          </FormField>
          <FormField label="Exterior Condition" help="">
            <FormControl
              v-model="form.exterior_condition"
              type="text"
              placeholder="Exterior Condition"
            />
          </FormField>
          <FormField label="WD" help="">
            <FormControl v-model="form.wd" type="text" placeholder="WD" />
          </FormField>
          <FormField label="Lot Number" help="">
            <FormControl
              v-model="form.lot_number"
              type="text"
              placeholder="Lot Number"
            />
          </FormField>

          <FormField label="Seats" help="">
            <FormControl
              v-model="form.seats"
              type="number"
              placeholder="No of Seats"
            />
          </FormField>
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
          <AddCarModel ref="addCarModel" :makerList="makersList" />
          <FormField label="Model">
            <FormControl v-model="form.model" :options="modelsList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Car Model"
            @click="addCarModel"
          />
          <!--countries and fors-->
          <AddCountryModel ref="addCountryModal" />
          <FormField label="Shipping Country">
            <FormControl
              v-model="form.shipping_country_id"
              :options="countryList"
              @update:modelValue="changeCountry"
            />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Country"
            @click="addCountry"
          />
          <AddFortModel ref="addFortModal" :countryList="countryList" />
          <FormField label="Fort">
            <FormControl v-model="form.fort_id" :options="fortList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Fort "
            @click="addFortModal"
          />
          <!--countries and fors-->
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
          <FormField label="Body Type">
            <FormControl v-model="form.bodyType" :options="bodyTypeList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Body Type"
            @click="addBody"
          />
          <FormField label="Engine">
            <FormControl v-model="form.engine_id" :options="engineList" />
          </FormField>
          <AddEngineModal ref="engineModel" />
          <BaseButton
            type="submit"
            color="info"
            label="Add Engine Type"
            @click="addEngine"
          />
          <FormField label="Odometer">
            <FormControl v-model="form.odometer_id" :options="odometerList" />
          </FormField>
          <AddOdometerModel ref="odometerModal" />
          <BaseButton
            type="submit"
            color="info"
            label="Add Odometer"
            @click="addOdometer"
          />
          <FormField label="Gear">
            <FormControl v-model="form.gear_box_id" :options="gearTypeList" />
          </FormField>
          <AddGearTypeModel
            @quickGearModalParent="getGearTypes"
            ref="gearModal"
          />
          <BaseButton
            type="submit"
            color="info"
            label="Add Gear Type"
            @click="addGear"
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
          <AddStreeings ref="addStreeings" />
          <FormField label="Streeing">
            <FormControl v-model="form.streeing" :options="streeingList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Streeings"
            @click="addStreeingsModel"
          />
          <AddDoorTypeModel ref="addDoorType" />
          <FormField label="Door Type">
            <FormControl v-model="form.doorTypes" :options="doorTypesList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Door Type"
            @click="addDoorTypeModel"
          />
          <AddDrivetypeModel ref="drivetypeModel" />
          <FormField label="Drive Type">
            <FormControl v-model="form.driveType" :options="driveTypeList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Drive Type"
            @click="addDrivetypeModel"
          />
          <addFuelTypeModel ref="fueltypeModel" />
          <FormField label="Fuel Type">
            <FormControl v-model="form.fuelType" :options="fuleTypeList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Fuel Type"
            @click="addFuelTypeModel"
          />
          <AddExteriorColorModel ref="addExteriorColorModel" />
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
          <AddFeatureModel ref="addFeatureModel" />
          <FormField label="Features">
            <FormControl v-model="form.features" :options="featuresList" />
          </FormField>
          <BaseButton
            type="submit"
            color="info"
            label="Add Feature"
            @click="addFeatureModel"
          />
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
