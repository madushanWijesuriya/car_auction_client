<script setup>
import { ref, reactive } from "vue";
const items = reactive([
  {
    id: 1,
    image: "../assets/images/carousel/car02.svg",
    order: 1,
    alt: "image-1",
  },
  {
    id: 2,
    image: "../assets/images/carousel/car03.svg",
    order: 2,
    alt: "image-2",
  },
  {
    id: 3,
    image: "../assets/images/carousel/car01.svg",
    order: 3,
    alt: "image-3",
  },
]);

const getImageUrl = (name) => {
  return new URL(name, import.meta.url).href;
};
</script>

<template>
  <div class="carousel-type-01">
    <!-- <div v-for="item in items" :key="item.id">
      <img :src="getImageUrl(item.image)" :alt="item.alt" />
    </div> -->
    <div>Welcome to Jamex Auction House</div>
    <div>We are a strong member of 120+ Japanese Auction houses</div>
    <img :src="getImageUrl(items[0].image)" :alt="items[0].alt" />
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/carouselType01.scss";
</style>
