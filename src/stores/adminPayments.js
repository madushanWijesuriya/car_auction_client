import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const usePaymentsStore = defineStore('payments', () => {
    const payments = ref([
        {
            id: 1,
            country_id: 1,
            content_id: 1,
            country: '',
            isActive:'',
            email:''
        },
    ])

    const tableHeaders = reactive([
        {
            name: 'No',
            order: 1,
        },
        {
            name: 'Vehical ID',
            order: 2,
        },
        {
            name: 'Customer ID',
            order: 3,
        },
        {
            name: 'Paid Amount',
            order: 3,
        },
        {
            name: 'Date',
            order: 3,
        },

        {
            name: 'Remaining Amount',
            order: 3,
        }
    ])

    return { payments, tableHeaders }
})
