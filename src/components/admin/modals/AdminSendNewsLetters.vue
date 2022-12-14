<script>
import FormField from '@/components/admin/FormField.vue'
import FormControl from '@/components/admin/FormControl.vue'
import { onMounted, reactive, ref, toRefs } from 'vue'
import BaseDivider from '@/components/admin/BaseDivider.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import httpResource from '@/http/httpResource'
import { useToast } from 'vue-toastification'
import NotificationBar from '@/components/admin/NotificationBar.vue'
import SectionMain from '@/components/admin/SectionMain.vue'

export default {
  props: {
    inquery: {
      type: Object,
      default: () => undefined,
    },
  },

  setup(props, { emit }) {
    const { inquery } = toRefs(props)

    const resetForm = () => {
      Object.assign(form, initialState)
      // uploaderKey.value += uploaderKey.value + 1
    }

    const submitForm = async () => {
      try {
        const response = await httpResource.patch(
          '/api/staff/staffuser/' + inquery.value.id,
          {
          ...form
          }
        )
        if (response.status === 200) {
          state.validationErrors = null
          toast.success('Successfully Updated', {
            timeout: 2000,
          })
          emit('closeModal')
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

    const validateForm = () => {
      // handle frontend validations
      submitForm()
    }

    let roleIds = ref([])
    const getRoles = async () => {
      try {
        const response = await httpResource.get('/api/resources/roles')
        roleIds.value = response.data.data.map((d) => ({
          ...d,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }
    const initialState = {
      name: '',
      subject: '',
      html_content: ''
    }
    const state = reactive({ validationErrors: null, dialogMaker: false })
    const toast = useToast()
    let form = reactive({ ...initialState })

    onMounted(async () => {
      // await nextTick()
      

      // setTimeout(() => {
      //     form.model = modelsList.value.find(
      //         (i) => i.id === vehicle.value?.model_id?.id
      //     )
      // }, 2000)
    })

    return {
      form,
      roleIds,
      validateForm,
      resetForm,
      getRoles,
    }
  },
}
</script>
<template>
  <div class="edit-car-modal">
    <CardBox form @submit.prevent="submit">
      <FormField label="Name" help="">
        <FormControl v-model="form.name" type="text" placeholder="User Name" />
      </FormField>
      <FormField label="Subject">
        <FormControl v-model="form.subject" type="text" placeholder="subject" />
      </FormField>
      <FormField label="Content" help="">
        <FormControl v-model="form.html_content" type="textarea" placeholder="Content" />
      </FormField>
    </CardBox>

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
  </div>
</template>

<styles scoped lang="scss">
.edit-car-modal {
  max-height: calc(100vh - 350px);
  overflow-y: auto;
}
</styles>
