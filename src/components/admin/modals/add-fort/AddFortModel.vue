<template>
  <QuickAddFortForm
    v-model="state.dialog"
    title="Add Vehical Model"
    button-label="Confirm"
    has-cancel
    @quickAddFort="triggerParent"
    :countryList="props.countryList"
  >
  </QuickAddFortForm>
</template>
<script>
import QuickAddFortForm from '@/components/admin/modals/add-fort/QuickAddFortForm.vue'
import { reactive } from '@vue/reactivity'

export default {
  components: {
    QuickAddFortForm,
  },
  props: {
    countryList: null,
  },
  setup(props) {
    const state = reactive({ dialog: false })

    // expose the state to the template
    return {
      state,
      props,
    }
  },

  methods: {
    openAddfortModal() {
      this.state.dialog = true
    },
    closeAddfortModal() {
      this.state.dialog = false
    },
    triggerParent() {
      this.closeAddfortModal()
    },
  },
}
</script>
