<script>
import FormField from '@/components/admin/FormField.vue'
import FormControl from '@/components/admin/FormControl.vue'
import {
    reactive,
    ref,
    toRefs,
} from 'vue'
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

    setup(props, { emit }) {
        const {
            user,
        } = toRefs(props)

        const resetForm = () => {
            Object.assign(form, initialState)
            uploaderKey.value += uploaderKey.value + 1
        }

        const submitForm = async () => {
            try {
                console.log(form, 'form')
                const response = await httpResource.post('/api/staff/staffuser/' + user.value.id, {
                    name: form?.name,
                    email: form?.email,
                    password: form?.password,
                    password_confirmation: form?.password_confirmation,
                    role_id: form?.role_id.id,
                })
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

        let roleIds = ref([
            { id: 1, label: 'Admin' },
            { id: 2, label: 'Test' },
        ])
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
            await nextTick()
            form.name = user.value?.name
            form.email = user.value.email
            form.password = user.value.password
            form.role_id = roleIds.find( (i) => i.id === user.value?.role_id)

            setTimeout(() => {
                form.model = modelsList.value.find(
                    (i) => i.id === vehicle.value?.model_id?.id
                )
            }, 2000)
            mainKey.value += 1
        })

        return {
            form,
            roleIds,
            validateForm,
            resetForm,
        }
    },
}
</script>
<template>
    <div class="edit-car-modal">
        <LayoutAuthenticated>
            <SectionMain>
                <CardBox form @submit.prevent="submit">
                    <SectionTitleLineWithButton :icon="mdiCarEstate" title="Add Staff User" main>
                    </SectionTitleLineWithButton>
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
                        <FormControl v-model="form.password_confirmation" name="password_confirmation" type="Password"
                            placeholder="" />
                    </FormField>
                    <FormField label="Role">
                        <FormControl v-model="form.role_id" :options="roleIds" />
                    </FormField>
                </CardBox>
            </SectionMain>
            <SectionMain>
                <CardBox>
                    <template #footer>
                        <BaseButtons>
                            <BaseButton type="submit" color="info" label="Submit" @click="validateForm" />
                            <BaseButton type="reset" color="info" outline label="Reset" @click="resetForm" />
                        </BaseButtons>
                    </template>
                </CardBox>
            </SectionMain>

            <BaseDivider />
        </LayoutAuthenticated>
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
