<script>
import FormField from '@/components/admin/FormField.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import FormControl from '@/components/admin/FormControl.vue'
import { useToast } from 'vue-toastification'
import httpResource from '@/http/httpResource'
import NotificationBar from '@/components/admin/NotificationBar.vue'
import { mdiCarEstate } from '@mdi/js'
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import { reactive, ref, onMounted } from 'vue'

export default {
    setup() {
        const state = reactive({ validationErrors: null, dialogMaker: false })
        const toast = useToast()

        const validateForm = () => {
            // handle frontend validations
            submitForm()
        }

        const resetForm = () => {
            Object.assign(form, initialState)
        }

        const submitForm = async () => {
            try {
                const response = await httpResource.post(
                    '/api/staff/news-letter',
                    { ...form }
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

        onMounted(async () => {

        })

        const initialState = {
            name: '',
            subject: null,
            html_content: ''
        }

        let form = reactive({ ...initialState })
        const imageUploaderRef = ref(null)
        const uploaderKey = ref(1)

        return {
            form,
            validateForm,
            resetForm,
            state,
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
                        <div v-for="(v, k) in state.validationErrors" :key="k" class="alert alert-primary" role="alert">
                            <div v-for="error in v" :key="error">
                                <NotificationBar :isDismissed="false" color="danger" :icon="mdiAlertCircle"
                                    :outline="notificationsOutline">
                                    <b>Invalid input !</b>{{ error }}
                                </NotificationBar>
                                <br />
                            </div>
                        </div>
                    </div>
                    <SectionTitleLineWithButton :icon="mdiCarEstate" title="Add news and letter" main>
                    </SectionTitleLineWithButton>
                    <FormField label="Name">
                        <FormControl v-model="form.name" type="text" />
                    </FormField>
                    <FormField label="Subject">
                        <FormControl v-model="form.subject" type="text" />
                    </FormField>
                    <FormField label="Content" help="Description">
                        <FormControl type="textarea" placeholder="" v-model="form.html_content" height="500px" />
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
        </LayoutAuthenticated>
    </div>
</template>
