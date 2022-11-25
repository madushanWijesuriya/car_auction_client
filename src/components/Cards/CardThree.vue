<script setup>
defineProps({
  price: {
    type: Number,
    required: false,
  },
  title: {
    type: String
  },
  desc: {
    type: String
  }
});
</script>
<template>
  <div class="card">
    <img class="cardThreeImg"
      src="../../assets/images/card-three/photo-two-smart-elegant-men-which-have-deal-about-car-they-are-doing-handshake.png"
      alt="Card image cap" />
    <div class="">
      <h2 class="cardTitle text-center">{{ title }}</h2>
    </div>
    <p class="text-center cardDescText"> {{ desc }}</p>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/cardThree";
</style>
