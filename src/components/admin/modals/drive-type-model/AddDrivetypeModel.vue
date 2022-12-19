<template>
    <QuickDriveTypesForm
      v-model="state.dialog"
      title="Add Drive Types"
      button-label="Confirm"
      has-cancel
      @quickDriveType="triggerParent"
      >
      
    </QuickDriveTypesForm>
  </template>
  <script>
  import QuickDriveTypesForm from '@/components/admin/modals/drive-type-model/QuickDriveTypesForm.vue'
  import { reactive } from '@vue/reactivity'
  
  export default {
    components: {
        QuickDriveTypesForm,
    },
    setup(props) {
      const state = reactive({ dialog: false })
  
      // expose the state to the template
      return {
        state,
      }
    },
  
    methods: {
        openAddDrivetypeModel() {
        this.state.dialog = true
      },
      closeModal() {
        this.state.dialog = false
      },
      triggerParent() {
      this.closeModal()
      $emits('quickDriveType')
    },
    },
  }
  </script>
  