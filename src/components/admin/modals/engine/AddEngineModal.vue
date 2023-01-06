<script>
import QuickAddEngineForm from '@/components/admin/modals/engine/QuickAddEngineForm.vue'
import { reactive } from '@vue/reactivity'

export default {
  components: {
    QuickAddEngineForm,
  },
  setup(props) {
    const state = reactive({ dialog: false })

    // expose the state to the template
    return {
      state,
    }
  },

  methods: {
    openEngineModal() {
      this.state.dialog = true
    },
    closeEngineModal() {
      this.state.dialog = false
    },
    triggerParent() {
      this.closeTransModal()
      $emits('quickEngineModalParent')
    },
  },
}
</script>

<template>
  <QuickAddEngineForm
    v-model="state.dialog"
    title="Add Transmission"
    button-label="Confirm"
    has-cancel
    @quickEngineModal="triggerParent"
  >
  </QuickAddEngineForm>
</template>
