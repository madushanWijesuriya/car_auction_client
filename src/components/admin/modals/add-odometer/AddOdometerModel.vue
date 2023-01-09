<script>
import QuickAddOdometerForm from '@/components/admin/modals/add-odometer/QuickAddOdometerForm.vue'
import { reactive } from '@vue/reactivity'

export default {
  components: {
    QuickAddOdometerForm,
  },
  emits: ['quickOdometerModalParent'],
  setup(props) {
    const state = reactive({ dialog: false })

    // expose the state to the template
    return {
      state,
    }
  },

  methods: {
    openOdometerModal() {
      this.state.dialog = true
    },
    closeOdometerModal() {
      this.state.dialog = false
    },
    triggerParent() {
      this.closeOdometerModal()
      this.$emits('quickOdometerModalParent')
    },
  },
}
</script>

<template>
  <QuickAddOdometerForm
    v-model="state.dialog"
    title="Add Odometer"
    button-label="Confirm"
    has-cancel
    @quickOdometerModal="triggerParent"
  >
  </QuickAddOdometerForm>
</template>
