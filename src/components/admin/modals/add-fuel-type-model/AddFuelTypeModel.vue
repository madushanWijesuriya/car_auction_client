<template>
    <QuickAddFuelTypeForm
      v-model="state.dialog"
      title="Add Fuel Type"
      button-label="Confirm"
      has-cancel
      @quickFuel="triggerParent"
    >
      
    </QuickAddFuelTypeForm>
  </template>
  <script>
  import QuickAddFuelTypeForm from '@/components/admin/modals/add-fuel-type-model/QuickAddFuelTypeForm.vue'
  import { reactive } from '@vue/reactivity'
  
  export default {
    components: {
        QuickAddFuelTypeForm,
    },
    setup(props) {
      const state = reactive({ dialog: false })
  
      // expose the state to the template
      return {
        state,
      }
    },
  
    methods: {
      openAddFuelTypeModal() {
        this.state.dialog = true
      },
      closeModal() {
        this.state.dialog = false
      },
      triggerParent() {
      this.closeModal()
      $emits('quickFuel')
    },
    },
  }
  </script>
  