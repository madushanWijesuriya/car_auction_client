import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useClientsStore = defineStore('clients', () => {
    const clients = ref([
        {
            id: 1,
            country_id: 1,
            content_id: 1,
            country: '',
            isActive:'',
            email:''
        },
    ])

    const countries = ref([
        { id: 1, label: '' }

    ])

    const tableHeaders = reactive([
        {
            name: 'No',
            order: 1,
        },
        {
            name: 'Name',
            order: 2,
        },
        {
            name: 'Email',
            order: 3,
        },
        {
            name: 'Country',
            order: 3,
        },
        {
            name: 'Active',
            order: 3,
        },

        {
            name: 'Actions',
            order: 3,
        }
    ])

    return { clients, countries, tableHeaders }
})
