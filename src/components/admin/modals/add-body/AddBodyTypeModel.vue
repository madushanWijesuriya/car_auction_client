<template>
    <QuickAddForm
      v-model="state.dialog"
      title="Please confirm action"
      button-label="Confirm"
      has-cancel
    >
      
    </QuickAddForm>
  </template>
  <script>
  import QuickAddForm from '@/components/admin/modals/add-body/QuickAddForm.vue'
  import { reactive } from '@vue/reactivity'
  
  export default {
    components: {
      QuickAddForm,
    },
    setup(props) {
      const state = reactive({ dialog: false })
  
      // expose the state to the template
      return {
        state,
      }
    },
  
    methods: {
      openModal() {
        this.state.dialog = true
      },
      closeModal() {
        this.state.dialog = false
      },
    },
  }
  </script>
  