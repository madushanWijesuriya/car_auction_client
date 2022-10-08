<script setup>
import { ref, reactive, computed } from "vue";
const items = reactive([
  {
    id: 1,
    image: "../assets/images/carousel/car02.svg",
    order: 1,
    alt: "image-1",
    selected: false,
  },
  {
    id: 2,
    image: "../assets/images/carousel/car03.svg",
    order: 2,
    alt: "image-2",
    selected: false,
  },
  {
    id: 3,
    image: "../assets/images/carousel/car01.svg",
    order: 3,
    alt: "image-3",
    selected: false,
  },
  {
    id: 4,
    image: "../assets/images/carousel/car04.svg",
    order: 4,
    alt: "image-4",
    selected: true,
  },
]);
const activeImageObj = computed(() => {
  const activeObj = items.find((i) => i.selected);
  return activeObj || "";
});
const getImageUrl = (name) => {
  if (!name) return "";
  return new URL(name, import.meta.url).href;
};
</script>

<template>
  <div class="container mx-auto carousel-type-01 px-4">
    <!-- <div v-for="item in items" :key="item.id">
      <img :src="getImageUrl(item.image)" :alt="item.alt" />
    </div> -->
    <div class="">
      <div
        class="left-content grid grid-cols-1 sm:grid-cols-8 gap-3 sm:gap-y-0"
      >
        <div class="para-text-01 col-span-full">
          <span class="color-01 font-medium sub-text-one">Welcome to </span
          ><span class="color-02">Jamex Auction House</span>
        </div>
        <div
          class="para-text-02 color-03 font-semibold col-span-full sm:col-span-5"
        >
          We are a strong member of
          <span class="sub-text-one color-02">120+</span> Japanese Auction
          houses
        </div>
        <div
          class="para-text-03 order-1 sm:order-2 sm:pr-24 sm:pt-9 sm:col-span-5 col-span-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
          malesuada ipsum feugiat quis in. Eros neque purus convallis tellus
          elementum faucibus lacinia eu integer.
        </div>
        <img
          class="order-2 sm:order-1 sm:row-span-6 col-span-3 self-center xl:self-auto"
          :src="getImageUrl(activeImageObj.image || '')"
          :alt="items[0].alt"
        />
        <div
          class="mt-4 grid grid-cols-5 gap-6 order-3 sm:order-3 sm:col-span-5 col-span-full"
        >
          <img
            src="../assets/images/sub-logos/brand-logo-01.svg"
            alt="logo-01"
            class=""
          />
          <img
            src="../assets/images/sub-logos/brand-logo-02.svg"
            alt="logo-02"
            class=""
          />
          <img
            src="../assets/images/sub-logos/brand-logo-03.svg"
            alt="logo-03"
            class=""
          />
          <img
            src="../assets/images/sub-logos/brand-logo-04.svg"
            alt="logo-04"
            class=""
          />
          <img
            src="../assets/images/sub-logos/brand-logo-05.svg"
            alt="logo-05"
            class=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/carouselType01.scss";
</style>
