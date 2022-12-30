<script setup>
const base_url_api = import.meta.env.VITE_BASE_URL_API

defineProps({
  vehicle: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="card">
    <img
      class="cardOneImg pb-10"
      :src="base_url_api + vehicle?.cover_image_full_url"
      alt="Card image cap"
    />
    <span class="cardBatch"
      ><h1 class="text-center text-white text-lg">Now on Sale</h1></span
    >
    <span class="cardTitle"
      ><h1 class="text-center text-white text-lg">
        {{ vehicle?.title }}
      </h1></span
    >
    <h2 class="text-center cardTitleText">Starting at</h2>
    <h1 class="text-center cardTitlePrice">¥{{ vehicle?.fob_price }}</h1>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/cardOne';
</style>
