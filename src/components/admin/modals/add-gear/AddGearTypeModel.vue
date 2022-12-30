<template>
  <QuickAddGearForm
    v-model="state.dialog"
    title="Add Gear"
    button-label="Confirm"
    has-cancel
    @quickAddGear="triggerParent"
  >
  </QuickAddGearForm>
</template>
<script>
import QuickAddGearForm from '@/components/admin/modals/add-gear/QuickAddGearForm.vue'
import { reactive } from '@vue/reactivity'

export default {
  // emits: ['triggerParent'],

  components: {
    QuickAddGearForm,
  },

  setup(props) {
    const state = reactive({ dialog: false })

    // expose the state to the template
    return {
      state,
    }
  },

  methods: {
    openGearModal() {
      this.state.dialog = true
    },
    closeGearModal() {
      this.state.dialog = false
    },
    triggerParent() {
      this.closeGearModal()
      $emits('quickAddGear')
    },
  },
}
</script>
