<template>
  <VueRecaptcha
    :sitekey="siteKey"
    :load-recaptcha-script="true"
    @verify="handleSuccess"
    @error="handleError"
  ></VueRecaptcha>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { VueRecaptcha } from 'vue-recaptcha'

export default defineComponent({
  name: 'ReCaptcha',
  components: {
    VueRecaptcha,
  },
  setup() {
    const siteKey = computed(() => {
      return 'yourSiteAPIKey'
    })

    const handleError = () => {
      // Do some validation
    }

    const handleSuccess = (response: string) => {
      // Do some validation
    }

    return {
      handleSuccess,
      handleError,
      siteKey,
    }
  },
})
</script>
