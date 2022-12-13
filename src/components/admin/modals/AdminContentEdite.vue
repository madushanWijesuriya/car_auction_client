<script>
import FormField from '@/components/admin/FormField.vue'
import FormControl from '@/components/admin/FormControl.vue'
import {
    onMounted,
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
        content: {
            type: Object,
            default: () => undefined,
        },
    },
    setup(props, { emit }) {
        const { content } = toRefs(props)


        const validateForm = () => {
            // handle frontend validations
            submitForm()
        }


        const resetForm = () => {
            Object.assign(form, initialState)
            // uploaderKey.value += uploaderKey.value + 1
        }

        const initialState = {
            content: '',
        }

        const state = reactive({ validationErrors: null, dialogMaker: false })
        const toast = useToast()
        let form = reactive({ ...initialState })

        onMounted(async () => {
            // await nextTick()
            form.content = content.value?.content
            // setTimeout(() => {
            //     form.model = modelsList.value.find(
            //         (i) => i.id === vehicle.value?.model_id?.id
            //     )
            // }, 2000)
        })


        const submitForm = async () => {
            try {
                const response = await httpResource.patch('/api/staff/content/' + content.value.id, {
                    "contents": form?.content,
                })
              
                if (response.status === 200) {
                    state.validationErrors = null
                    toast.success('Successfully Updated', {
                        timeout: 2000,
                    })
                    emit('closeModal')
                }
            } catch (error) {
                console.log(error,'roerer');
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
            validateForm,
            resetForm
        }
    }


}

</script>
<template>
    <div class="edit-car-modal">
        <CardBox form @submit.prevent="submit">
            <FormField label="Content" help="">
                <FormControl v-model="form.content" type="text" placeholder="User Name" />
            </FormField>
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
