<template>
  <QuickAddExteriorColorForml v-model="state.dialog" title="Add Exterior Color" button-label="Confirm" has-cancel
    @quickExteriorColor="triggerParent">

  </QuickAddExteriorColorForml>
</template>
<script>
import QuickAddExteriorColorForml from '@/components/admin/modals/add-exterior-color-model/QuickAddExteriorColorForml.vue'
import { reactive } from '@vue/reactivity'

export default {
  components: {
    QuickAddExteriorColorForml,
  },
  setup(props) {
    const state = reactive({ dialog: false })

    // expose the state to the template
    return {
      state,
    }
  },

  methods: {
    openAddExteriorColorModal() {
      this.state.dialog = true
    },
    closeModal() {
      this.state.dialog = false
    },
    triggerParent() {
      this.closeModal()
      $emits('quickExteriorColor')
    },
  },
}
</script>
  