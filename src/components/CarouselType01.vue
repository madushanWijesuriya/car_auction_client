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
  <div class="container mx-auto carousel-type-01">
    <!-- <div v-for="item in items" :key="item.id">
      <img :src="getImageUrl(item.image)" :alt="item.alt" />
    </div> -->
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div class="left-content">
        <div class="para-text-01">
          <span class="color-01 font-weigh-500 sub-text-one">Welcome to </span
          ><span class="color-02 font-weigh-600">Jamex Auction House</span>
        </div>
        <div class="para-text-02 color-03 font-weigh-600">
          We are a strong member of <br />
          <span class="sub-text-one color-02">120+</span> Japanese Auction
          houses
        </div>
        <div class="para-text-03">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
          malesuada ipsum feugiat quis in. Eros neque purus convallis tellus
          elementum faucibus lacinia eu integer.
        </div>
        <div
          class="brands-list grid grid-cols-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <img
            src="../assets/images/sub-logos/brand-logo-01.svg"
            alt="logo-01"
            width="120px"
          />
          <img
            src="../assets/images/sub-logos/brand-logo-02.svg"
            alt="logo-02"
            width="120px"
          />
          <img
            src="../assets/images/sub-logos/brand-logo-03.svg"
            alt="logo-03"
            width="120px"
          />
          <img
            src="../assets/images/sub-logos/brand-logo-04.svg"
            alt="logo-04"
            width="120px"
          />
          <img
            src="../assets/images/sub-logos/brand-logo-05.svg"
            alt="logo-05"
            width="120px"
          />
        </div>
        <img
          class="brands-list grid grid-cols-12 sm:grid-cols-12 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 right-content"
          :src="getImageUrl(items[0].image)"
          :alt="items[0].alt"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/carouselType01.scss";
</style>
