<template>
  <QuickAddForm
    v-model="state.dialog"
    title="Add Make"
    button-label="Confirm"
    has-cancel
    @quickAddMake="triggerParent"
  >
  </QuickAddForm>
</template>
<script>
import QuickAddForm from '@/components/admin/modals/QuickAddForm.vue'
import { reactive } from '@vue/reactivity'

export default {
  emits: ['triggerBodyType'],
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
    openMakeModal() {
      this.state.dialog = true
    },
    closeMakeModal() {
      this.state.dialog = false
    },
    triggerParent() {
      this.closeMakeModal()
      $emits('triggerBodyType')
    },
  },
}
</script>
