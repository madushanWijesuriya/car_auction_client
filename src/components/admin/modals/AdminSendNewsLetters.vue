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
      selectedClients.value = []
      Object.assign(form, initialState)
      // uploaderKey.value += uploaderKey.value + 1
    }

    const submitForm = async () => {
      try {
        const response = await httpResource.post(
          'api/staff/news-letter/send',
          {
            customer_id: selectedClients.value,
            news_letter_id: form.selectedNewsAndLetter.id
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

    let users = ref([])
    let newsAndLetterList = ref([])
    let selectedClients = ref([])

    const getNewsAndLetterList = async () => {
      try {
        const response = await httpResource.get('api/resources/newsLetters')
        newsAndLetterList.value = response.data.data.map((d) => ({
          id: d.id,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }

    const getUsers = async () => {
      try {
        const response = await httpResource.get('api/staff/customer')
        users.value = response.data.data.map((d) => ({
          id: d.id,
          label: d.name,
        }))
      } catch (error) {
        console.error(error)
      }
    }

    const initialState = {
      selectedclient: '',
      selectedNewsAndLetter: ''
    }
    const state = reactive({ validationErrors: null, dialogMaker: false })
    const toast = useToast()
    let form = reactive({ ...initialState })

    onMounted(async () => {
      await getUsers()
      await getNewsAndLetterList()
    })

    const addClient = () => {
      if (form.selectedclient) selectedClients.value = [...selectedClients.value, form?.selectedclient.id]
    }

    return {
      form,
      users,
      newsAndLetterList,
      selectedClients,
      validateForm,
      resetForm,
      getUsers,
      addClient,
      getNewsAndLetterList
    }
  },
}
</script>
<template>
  <div class="edit-car-modal">
    <CardBox form @submit.prevent="submit">
      <FormField label="Clients">
        <FormControl v-model="form.selectedclient" :options="users" />
      </FormField>
      <FormField label="News and letter id">
        <FormControl v-model="form.selectedNewsAndLetter" :options="newsAndLetterList" />
      </FormField>
      <BaseButton type="submit" color="info" label="Add Client" @click="addClient" />
    </CardBox>

    <CardBox>
      <template #footer>
        <BaseButtons>
          <BaseButton type="submit" color="info" label="Submit" @click="validateForm" />
          <BaseButton type="reset" color="info" outline label="Reset" @click="resetForm" />
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
