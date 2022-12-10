<template>
    <QuickAddModelForm
      v-model="state.dialog"
      title="Add Vehical Model"
      button-label="Confirm"
      has-cancel
      @quickAddModel="triggerParent"
    >
      
    </QuickAddModelForm>
  </template>
  <script>
  import QuickAddModelForm from '@/components/admin/modals/add-model/QuickAddModelForm.vue'
  import { reactive } from '@vue/reactivity'
  
  export default {
    components: {
      QuickAddModelForm,
    },
    setup(props) {
      const state = reactive({ dialog: false })
  
      // expose the state to the template
      return {
        state,
      }
    },
  
    methods: {
      openAddCarModal() {
        this.state.dialog = true
      },
      closeModal() {
        this.state.dialog = false
      },
      triggerParent() {
      this.closeModal()
      $emits('quickAddModel')
    },
    },
  }
  </script>
  