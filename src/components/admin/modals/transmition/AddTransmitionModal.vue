<script>
import QuickAddTransmissionForm from '@/components/admin/modals/transmition/QuickAddTransmissionForm.vue'
import { reactive } from '@vue/reactivity'

export default {
  components: {
    QuickAddTransmissionForm,
  },
  setup(props) {
    const state = reactive({ dialog: false })

    // expose the state to the template
    return {
      state,
    }
  },

  methods: {
    openTransModal() {
      this.state.dialog = true
    },
    closeTransModal() {
      this.state.dialog = false
    },
  },
}
</script>

<template>
  <QuickAddTransmissionForm
    v-model="state.dialog"
    title="Add Transmission"
    button-label="Confirm"
    has-cancel
  >
  </QuickAddTransmissionForm>
</template>
