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

export default {
  setup() {
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
          resetForm()
        }
      } catch (error) {
        console.error(error?.response?.data?.message)
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
    const driveTypeList = [{ id: 1, label: '--' }]
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
    }
  },
  components: {
    UploadImages,
    editor: Editor,
  },
}
</script>
<template>
 <SectionMain>
        <CardBox>
          <SectionTitleLineWithButton
            :icon="mdiCarEstate"
            title="Search"
            main
          ></SectionTitleLineWithButton>
          <el-row :gutter="20">
            <el-col :span="6">
              <FormField label="Maker">
                <FormControl
                  v-model="form.maker"
                  :options="makersList"
                /> </FormField
            ></el-col>
            <el-col :span="6">
              <FormField label="Model">
                <FormControl v-model="form.model" :options="modelsList" />
              </FormField>
            </el-col>
            <el-col :span="6">
              <FormField label="Body Type">
                <FormControl
                  v-model="form.bodyType"
                  :options="bodyTypeList"
                /> </FormField
            ></el-col>
            <el-col :span="6">
              <FormField label="Chassis No" help="">
                <FormControl
                  v-model="form.chassisNo"
                  type="text"
                  placeholder="Vehicle chassis no"
                />
              </FormField>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="8">
              <FormField label="REFF" help="">
                <FormControl
                  v-model="form.reff"
                  type="text"
                  placeholder="REFF"
                />
              </FormField>
            </el-col>
            <el-col :span="8">
              <FormField label="From year">
                <FormControl
                  v-model="form.fromYear"
                  :icon="mdiCalendarRange"
                  :options="yearsList"
                />
              </FormField>
            </el-col>
            <el-col :span="8">
              <FormField label="To year">
                <FormControl
                  v-model="form.toYear"
                  :icon="mdiCalendarRange"
                  :options="yearsList"
                />
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
            :icon="mdiCarEstate"
            title="All Cars"
            main
          ></SectionTitleLineWithButton>
          <Table :items="decoratedItems" :headers="headers"> </Table>
        </CardBox>
      </SectionMain>
</template>
<style>
.el-row {
  margin-bottom: 20px;
}
</style>
