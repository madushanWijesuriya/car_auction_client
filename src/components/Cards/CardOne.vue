<script setup>
defineProps({
  price: {
    type: Number,
    required: false,
  },
});
</script>
<template>
  <div class="card">
    <img class="cardOneImg" src="../../../public/2.png" alt="Card image cap" />
    <span class="cardBatch"
      ><h1 class="text-center text-white text-lg">Now on Sale</h1></span
    >
    <h2 class="text-center cardTitleText">Starting at</h2>
    <h1 class="text-center cardTitlePrice">¥{{ price }}</h1>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/cardOne";
</style>
