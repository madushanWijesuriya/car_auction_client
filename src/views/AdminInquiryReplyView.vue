<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import { computed, onMounted, onBeforeMount, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import httpResource from '@/http/httpResource'
import VehicalDetailCardVue from '@/components/StockList/VehicalList/components/VehicalDetailCard.vue'
import FormField from '@/components/admin/FormField.vue'
import FormControl from '@/components/admin/FormControl.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadImages from 'vue-upload-drop-images'
import { useToast } from 'vue-toastification'
import NotificationBar from '@/components/admin/NotificationBar.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import { isEmpty } from 'lodash'

const props = defineProps(['inquiryId'])
const route = useRoute()
const inquiryId = computed(() => route?.query?.inquiryId)
let inquery = ref(null)
const uploaderKey = ref(1)
let editor = ref(ClassicEditor)
const editorData = ref('<p>Enter email body</p>')
const editorConfig = ref({})
const imageLimit = ref(5)
const state = reactive({ validationErrors: null, dialogMaker: false })
const toast = useToast()

const getInquiryData = async () => {
  try {
    const response = await httpResource.get(
      `/api/staff/inquery/${inquiryId.value}`
    )
    inquery.value = response.data.data
  } catch (error) {
    console.error(error)
  }
}

let initialState = {
  emailSubject: '',
  photos: [],
}

let form = reactive({ ...initialState })

onMounted(() => {})
onBeforeMount(async () => {
  await getInquiryData()
})

const handleImages = (event) => {
  const files = Array.from(event)
  form.photos = [...files]
}

const resetForm = () => {
  Object.assign(form, initialState)
  editorData.value = '<p>Enter email body</p>'
  uploaderKey.value += uploaderKey.value + 1
}

const replyToCustomer = async () => {
  try {
    if (isEmpty(form.emailSubject) || isEmpty(editorData.value)) {
      toast.error('Subject and body cannot be empty', {
        timeout: 2000,
      })
      return
    }

    const formData = new FormData()
    formData.append('inquiry_id', inquiryId.value)
    formData.append('subject', form.emailSubject)
    formData.append('body', editorData.value)
    if (form.photos && form.photos.length > 0) {
      const imgLimit =
        imageLimit.value !== 0 && form.photos.length >= imageLimit.value
          ? imageLimit.value
          : form.photos.length
      for (let x = 0; x < imgLimit; x++) {
        formData.append(`attachment[${x}]`, form.photos[x])
      }
    }

    const response = await httpResource.post('/api/staff/inquery', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    if (response.status === 200) {
      state.validationErrors = null
      resetForm()
      toast.success('Successfully Added', {
        timeout: 2000,
      })
    }
  } catch (error) {
    if (error?.response?.status == 422) {
      state.validationErrors = error.response.data.errors
      window.scrollTo(0, 0)
    } else {
      console.error(error)
    }
  }
}
</script>
<template>
  <div class="inquiry-reply">
    <LayoutAuthenticated>
      <SectionMain>
        <CardBox>
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
            title="Inquery Reply"
            main
          ></SectionTitleLineWithButton>
          <br />
          <VehicalDetailCardVue
            v-if="inquery && inquery.vehicle_id"
            :vehicle="inquery.vehicle_id"
          />
          <br />
          <div>
            <FormField label="Email subject" help="">
              <FormControl
                v-model="form.emailSubject"
                type="text"
                placeholder="Email subject"
              />
            </FormField>
            <ckeditor
              :editor="editor"
              v-model="editorData"
              :config="editorConfig"
            ></ckeditor>
            <br />
            <UploadImages @changed="handleImages" :key="uploaderKey" />
          </div>

          <template #footer>
            <BaseButtons>
              <BaseButton
                type="button"
                color="info"
                label="Send Reply"
                @click="replyToCustomer"
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
