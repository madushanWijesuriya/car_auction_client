<script>
import QuickAddCountryForm from '@/components/admin/modals/add-country/QuickAddCountryForm.vue'
import { reactive } from '@vue/reactivity'

export default {
  components: {
    QuickAddCountryForm,
  },
  emits: ['quickCountryModalParent'],
  setup(props) {
    const state = reactive({ dialog: false })

    // expose the state to the template
    return {
      state,
    }
  },

  methods: {
    openCountryModal() {
      this.state.dialog = true
    },
    closeCountryModal() {
      this.state.dialog = false
    },
    triggerParent() {
      this.closeCountryModal()
      this.$emits('quickCountryModalParent')
    },
  },
}
</script>

<template>
  <QuickAddCountryForm
    v-model="state.dialog"
    title="Add Country"
    button-label="Confirm"
    has-cancel
    @quickCountryModal="triggerParent"
  >
  </QuickAddCountryForm>
</template>
