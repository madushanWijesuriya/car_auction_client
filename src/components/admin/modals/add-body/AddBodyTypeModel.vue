<template>
  <QuickAddBodyForm
    v-model="state.dialog"
    title="Add Body"
    button-label="Confirm"
    has-cancel
    @quickAddBody="triggerParent"
  >
  </QuickAddBodyForm>
</template>
<script>
import QuickAddBodyForm from '@/components/admin/modals/add-body/QuickAddBodyForm.vue'
import { reactive } from '@vue/reactivity'

export default {
  // emits: ['triggerParent'],

  components: {
    QuickAddBodyForm,
  },

  setup(props) {
    const state = reactive({ dialog: false })

    // expose the state to the template
    return {
      state,
    }
  },

  methods: {
    openBodyModal() {
      this.state.dialog = true
    },
    closeBodyModal() {
      this.state.dialog = false
    },
    triggerParent() {
      this.closeBodyModal()
      $emits('quickAddBody')
    },
  },
}
</script>
