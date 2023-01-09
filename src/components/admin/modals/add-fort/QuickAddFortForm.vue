<script setup>
import { computed, reactive, ref } from 'vue'
import { mdiClose } from '@mdi/js'
import BaseButton from '@/components/admin/BaseButton.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import CardBox from '@/components/admin/CardBox.vue'
import OverlayLayer from '@/components/admin/OverlayLayer.vue'
import CardBoxComponentTitle from '@/components/admin/CardBoxComponentTitle.vue'
import httpResource from '@/http/httpResource'
import { useToast } from 'vue-toastification'
import FormField from '@/components/admin/FormField.vue'
import FormControl from '@/components/admin/FormControl.vue'

const toast = useToast()
const initialState = {
  name: '',
  id: '',
}

let form = reactive({ ...initialState })

const validateForm = () => {
  submitForm()
}

const resetForm = () => {
  Object.assign(form, initialState)
  // uploaderKey.value += uploaderKey.value + 1
}
let validation = reactive({ hasValidation: false, message: '' })
const isNotValid = computed({
  get: () => validation,
})
const submitForm = async () => {
  try {
    console.log(form, 'form')
    const response = await httpResource.post(
      '/api/staff/vehicle/fort/quickAdd',
      {
        name: form?.name,
        country_id: form?.country_id,
      }
    )
    if (response.status === 200) {
      resetForm()
      toast.success('Successfully Added', {
        timeout: 2000,
      })
    }
    emit('quickAddFort')
  } catch (error) {
    if (error?.response?.status === 422) {
      validation.hasValidation = true
      validation.message = error?.response?.data?.data?.errors?.name[0]
    }
  }
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  button: {
    type: String,
    default: 'info',
  },
  buttonLabel: {
    type: String,
    default: 'Done',
  },
  hasCancel: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
  countryList: null,
})

const emit = defineEmits([
  'update:modelValue',
  'cancel',
  'confirm',
  'quickAddFort',
])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const confirmCancel = (mode) => {
  value.value = false
  emit(mode)
}

const confirm = () => confirmCancel('confirm')

const cancel = () => confirmCancel('cancel')

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && value.value) {
    cancel()
  }
})
</script>

<template>
  <OverlayLayer v-show="value" @overlay-click="cancel">
    <CardBox
      v-show="value"
      class="shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
      is-modal
    >
      <CardBoxComponentTitle :title="title">
        <BaseButton
          v-if="hasCancel"
          :icon="mdiClose"
          color="whiteDark"
          small
          rounded-full
          @click.prevent="cancel"
        />
      </CardBoxComponentTitle>

      <div class="space-y-3">
        <div class="add-car">
          <SectionMain>
            <CardBox form @submit.prevent="submit">
              <SectionTitleLineWithButton
                :icon="mdiCarEstate"
                title="Add Fort"
                main
              >
              </SectionTitleLineWithButton>
              {{ form.country_id }}
              <el-select
                filterable
                v-model="form.country_id"
                class="m-2"
                placeholder="Country"
                size="large"
              >
                <el-option
                  v-for="item in countryList"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id"
                />
              </el-select>
              <!-- <FormField label="Shipping Country"> -->
              <!-- <FormControl v-model="form.country_id" :options="countryList" /> -->
              <!-- </FormField> -->
              <FormField label="Fort" help="">
                <FormControl
                  v-model="form.name"
                  type="text"
                  placeholder="Fort Model"
                />
              </FormField>
            </CardBox>
            <span
              v-if="isNotValid.hasValidation"
              style="color: red; font-weight: bold"
              >{{ isNotValid.message }}</span
            >
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
          <BaseDivider />
        </div>
      </div>
    </CardBox>
  </OverlayLayer>
</template>
