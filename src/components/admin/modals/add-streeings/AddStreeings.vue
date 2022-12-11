<template>
    <QuickAddStreeingsForm
      v-model="state.dialog"
      title="Add Streeings Modal"
      button-label="Confirm"
      has-cancel
    >
      
    </QuickAddStreeingsForm>
  </template>
  <script>
  import QuickAddStreeingsForm from '@/components/admin/modals/add-streeings/QuickAddStreeingsForm.vue'
  import { reactive } from '@vue/reactivity'
  
  export default {
    components: {
        QuickAddStreeingsForm,
    },
    setup(props) {
      const state = reactive({ dialog: false })
  
      // expose the state to the template
      return {
        state,
      }
    },
  
    methods: {
      openAddStreeingsModal() {
        this.state.dialog = true
      },
      closeModal() {
        this.state.dialog = false
      },
    },
  }
  </script>
  