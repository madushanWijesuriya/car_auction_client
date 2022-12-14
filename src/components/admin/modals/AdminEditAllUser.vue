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
    user: {
      type: Object,
      default: () => undefined,
    },
  },
  emits: ['edit-user'],

  setup(props, { emit }) {
    const { user } = toRefs(props)

    const validateForm = () => {
      // handle frontend validations
      submitForm()
    }

    const resetForm = () => {
      Object.assign(form, initialState)
      // uploaderKey.value += uploaderKey.value + 1
    }

    let roleIds = ref([])

    const initialState = {
      name: '',
      email: null,
      password: '',
      role_id: '1',
      password_confirmation: '',
    }

    const state = reactive({ validationErrors: null, dialogMaker: false })
    const toast = useToast()
    let form = reactive({ ...initialState })

    onMounted(async () => {
      // await nextTick()
      getRoles()
      form.name = user.value?.name
      form.email = user.value?.email
      form.password = user.value?.password
      form.role_id = roleIds?.value?.filter((i) => i.label == 'Admin')[0].id

      // setTimeout(() => {
      //     form.model = modelsList.value.find(
      //         (i) => i.id === vehicle.value?.model_id?.id
      //     )
      // }, 2000)
    })

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
    const submitForm = async () => {
      try {
        const response = await httpResource.patch(
          '/api/staff/staffuser/' + user.value.id,
          {
            name: form?.name,
            email: form?.email,
            password: form?.password,
            password_confirmation: form?.password_confirmation,
            role_id: form?.role_id.id,
          }
        )
        if (response.status === 200) {
          state.validationErrors = null
          toast.success('Successfully Updated', {
            timeout: 2000,
          })
          emit('edit-user')
          emit('closeModal')
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
      <FormField label="Email">
        <FormControl v-model="form.email" type="email" placeholder="Email" />
      </FormField>
      <FormField label="Password" help="">
        <FormControl v-model="form.password" type="password" placeholder="" />
      </FormField>
      <FormField label="Confirm Password">
        <FormControl
          v-model="form.password_confirmation"
          name="password_confirmation"
          type="Password"
          placeholder=""
        />
      </FormField>
      <FormField label="Role">
        <FormControl v-model="form.role_id" :options="roleIds" />
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
