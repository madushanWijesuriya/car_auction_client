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
    payment: {
      type: Object,
      default: () => undefined,
    },
    vehicleList: {
      type: Array,
      default: [],
    },
    customerList: {
      type: Array,
      default: [],
    },
  },

  setup(props) {
    const { payment, vehicleList, customerList } = toRefs(props)
    const initialState = {
      vehicle_id: '',
      customer_id: '',
      agent: '',
      paid_amount: 0,
    }
    const state = reactive({ validationErrors: null, dialogMaker: false })
    const toast = useToast()
    let form = reactive({ ...initialState })
    let validation = reactive({ ...initialState })

    const resetForm = () => {
      Object.assign(form, initialState)
      // uploaderKey.value += uploaderKey.value + 1
    }

    const submitForm = async () => {
      try {
        form.vehicle_id = form?.vehicle_id?.id
        form.customer_id = form?.customer_id?.id
        form.agent = form?.agent
        form.paid_amount = form?.paid_amount
        const response = await httpResource.post(
          '/api/staff/payment/update/' + payment.value.id,
          {
            ...form,
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
          setValidationMessages(state.validationErrors)
          window.scrollTo(0, 0)
        } else {
          if (error?.response?.data?.message) {
            toast.error(error?.response?.data?.message, {
              timeout: 2000,
            })
          } else {
            toast.error('Something went wronge', {
              timeout: 2000,
            })
          }
          console.error(error?.response?.data?.message)
        }
      }
    }

    const validateForm = () => {
      // handle frontend validations
      submitForm()
    }

    let paymentRed = ref([])
    const getPaymentById = async (id) => {
      try {
        const response = await httpResource.get('/api/staff/payment/' + id)
        paymentRed.value = response.data.data
      } catch (error) {
        console.error(error)
      }
    }
    onMounted(async () => {
      await getPaymentById(payment.value.id)
      // await nextTick()
      console.log(paymentRed)
      form.vehicle_id = vehicleList.value.find(
        (i) => i.id === paymentRed.value?.vehicle_id
      )
      form.customer_id = customerList.value.find(
        (i) => i.id === paymentRed.value?.customer_id?.id
      )
      form.agent = paymentRed.value?.agent
      form.paid_amount = paymentRed.value?.paid_amount
    })
    return {
      form,
      vehicleList,
      customerList,
      validateForm,
      resetForm,
    }
  },
}
</script>
<template>
  <div class="edit-car-modal">
    <CardBox form @submit.prevent="submit">
      <FormField label="Agent">
        <FormControl v-model="form.agent" type="text" />
        <span v-if="true" style="color: red; font-weight: bold">{{
          isNotValid.message
        }}</span>
      </FormField>
      <div class="grid grid-cols-2">
        <div>
          <FormField label="Vehicle">
            <el-select
              v-model="form.vehicle_id"
              class="m-2"
              placeholder="Select Vehicle"
              size="large"
              filterable
            >
              <el-option
                v-for="item in vehicleList"
                :key="item.id"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
          </FormField>
        </div>
        <div>
          <FormField label="Customer">
            <el-select
              v-model="form.customer_id"
              class="m-2"
              placeholder="Select Customer"
              size="large"
              filterable
            >
              <el-option
                v-for="item in customerList"
                :key="item.id"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
          </FormField>
        </div>
      </div>
      <FormField label="Subject">
        <FormControl v-model="form.paid_amount" type="number" />
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
