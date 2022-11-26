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
      notify({
        title: 'form reseted',
      })
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
          feature_id: 1 /*form?.Feautes*/,
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

    // const modelsList = [
    //   { id: 1, label: 'Model1' },
    //   { id: 1, label: 'Model2' },
    //   { id: 1, label: 'Model3' },
    //   { id: 1, label: 'Model4' },
    //   { id: 1, label: 'Model5' },
    // ]

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
      } catch (error) {}
    }

    const changeMaker = (e) => {
      getModels(e.id)
    }

    const statusList = [
      { id: 1, label: 'Available' },
      { id: 1, label: 'Unavailable' },
      { id: 1, label: 'Out of stock' },
      { id: 1, label: 'Pendding' },
    ]

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
    const bodyTypeList = [
      { id: 1, label: '--' },
      { id: 2, label: 'Sedan' },
      { id: 3, label: 'Hatchback' },
      { id: 4, label: 'SUV' },
      { id: 5, label: 'MUV' },
      { id: 6, label: 'Coupe' },
      { id: 7, label: 'Convertibles' },
      { id: 8, label: 'Other' },
    ]
    const transmissionList = [
      { id: 1, label: 'Automatic Transmission' },
      { id: 2, label: 'Manual Transmission' },
      { id: 3, label: 'Automated Manual Transmission' },
      { id: 4, label: 'Continuously Variable Transmission' },
    ]
    const streeingList = [
      { id: 1, label: 'Left' },
      { id: 2, label: 'Right' },
    ]
    const doorTypesList = [
      { id: 1, label: '--' },
      { id: 2, label: 'Butterfly Doors ' },
      { id: 3, label: 'Scissor Doors ' },
      { id: 4, label: 'Regular or Conventional Doors ' },
      { id: 5, label: 'Regular or Conventional Doors ' },
      { id: 6, label: 'Dihedral Doors ' },
    ]
    const driveTypeList = [{ id: 1, label: '--' }]
    const fuleTypeList = [
      { id: 1, label: '--' },
      { id: 2, label: 'Petrol' },
      { id: 3, label: 'Diesel' },
      { id: 4, label: 'Flex-fuel' },
    ]
    const exteriorColorList = [{ id: 1, label: '--' }]

    onMounted(async () => {
      await getMakers()
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
      Feautes: '',
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
    }
  },
  components: {
    UploadImages,
    editor: Editor,
  },
}
</script>
<template>
  <div class="add-car">
    <LayoutAuthenticated>
      <SectionMain>
        <CardBox form @submit.prevent="submit">
          <SectionTitleLineWithButton :icon="mdiCarEstate" title="Add Car" main>
          </SectionTitleLineWithButton>
          <FormField label="Maker">
            <FormControl
              v-model="form.maker"
              :options="makersList"
              @update:modelValue="changeMaker"
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

          <FormField label="Body Type">
            <FormControl v-model="form.bodyType" :options="bodyTypeList" />
          </FormField>
          <FormField label="Transmission">
            <FormControl
              v-model="form.transmission"
              :options="transmissionList"
            />
          </FormField>
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
