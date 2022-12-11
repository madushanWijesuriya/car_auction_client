<template>
    <QuickAddFeaturesForm v-model="state.dialog" title="Add Feature" button-label="Confirm" has-cancel  @quickFeatureColor="triggerParent">
       

    </QuickAddFeaturesForm>
</template>
<script>
import QuickAddFeaturesForm from '@/components/admin/modals/add-feature-model/QuickAddFeaturesForm.vue'
import { reactive } from '@vue/reactivity'

export default {
    components: {
        QuickAddFeaturesForm,
    },
    setup(props) {
        const state = reactive({ dialog: false })

        // expose the state to the template
        return {
            state,
        }
    },

    methods: {
        openAddFeatureModel() {
            this.state.dialog = true
        },
        closeModal() {
            this.state.dialog = false
        },
        triggerParent() {
            this.closeModal()
            $emits('quickFeatureColor')
        },
    },
}
</script>
  