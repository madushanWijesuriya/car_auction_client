<script setup></script>

<template>
  <div class="container mx-auto carousel-type-01 px-4 m-20">
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
          class="order-2 sm:order-1 sm:row-span-6 col-span-3 self-center xl:self-auto sm:mt-14"
          src="@/assets/images/services/main01.svg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/carouselType01.scss";
</style>
