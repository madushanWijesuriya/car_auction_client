<template>
    <QuickAddDoorTypeForml
      v-model="state.dialog"
      title="Add Door Type"
      button-label="Confirm"
      has-cancel
    >
      
    </QuickAddDoorTypeForml>
  </template>
  <script>
  import QuickAddDoorTypeForml from '@/components/admin/modals/add-door-types/QuickAddDoorTypeForml.vue'
  import { reactive } from '@vue/reactivity'
  
  export default {
    components: {
        QuickAddDoorTypeForml,
    },
    setup(props) {
      const state = reactive({ dialog: false })
  
      // expose the state to the template
      return {
        state,
      }
    },
  
    methods: {
      openAddDoorTypeModal() {
        this.state.dialog = true
      },
      closeModal() {
        this.state.dialog = false
      },
    },
  }
  </script>
  