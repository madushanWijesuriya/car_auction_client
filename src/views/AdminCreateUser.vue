<script>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate, mdiCalendarRange } from '@mdi/js'
import FormField from '@/components/admin/FormField.vue'
import FormControl from '@/components/admin/FormControl.vue'
import { reactive, ref, onMounted, computed } from 'vue'
import BaseDivider from '@/components/admin/BaseDivider.vue'
import BaseButtons from '@/components/admin/BaseButtons.vue'
import BaseButton from '@/components/admin/BaseButton.vue'
import httpResource from '@/http/httpResource'

export default {
    setup() {
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

                console.log(form, 'form');
                const response = await httpResource.post('/api/staff/staffuser', {
                    name: form?.name,
                    email: form?.email,
                    password: form?.password,
                    password_confirmation: form?.password_confirmation,
                    role_id: form?.role_id.id
                })
                if (response.status === 200) {
                    resetForm()
                }
            } catch (error) {
                console.error(error?.response?.data?.message)
            }
        }

        let roleIds = ref([{ id:1,label:'Admin'},{id:2 , label:'Test'}])
        const initialState = {
            name: '',
            email: null,
            password: '',
            role_id: '1',
            password_confirmation: ''
        }

        let form = reactive({ ...initialState })
        return {
            form,
            roleIds,
            validateForm,
            resetForm,
        }
    }
}
</script>
<template>
    <div class="add-car">
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
