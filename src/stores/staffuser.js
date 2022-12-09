import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useStaffUsersStore = defineStore('users', () => {
  const users = ref([
    {
      no: 100,
      name: 'No Users',
      email: '-',
      email_verified_at: '-',
      deleted_at: '-',
      created_at: '-',
      updated_at: '-',
      roles: '-',
    },
  ])

  const tableHeaders = reactive([
    {
      name: 'Id',
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
      name: 'Email verified at',
      order: 4,
    },
    {
      name: 'Created Date',
      order: 5,
    },
    {
      name: 'Updated Date',
      order: 6,
    },
    {
      name: 'Roles',
      order: 7,
    },
    {
      name: 'Actions',
      order: 8,
    },
  ])

  return { users, tableHeaders }
})
