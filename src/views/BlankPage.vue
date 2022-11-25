<script setup>
import Filter from '../components/Filter.vue';
</script>

<template>
  <div class="lg:container mt-8 mb-8 lg:mx-auto lg:px-20">
    <div class="grid grid-cols-1 lg:grid-cols-[300px_minmax(600px,_1fr)_300px]">
      <div><Filter></Filter></div>
      <div></div>
      <div>03</div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/scss/ServicesAuctionGuru.scss";
</style>
