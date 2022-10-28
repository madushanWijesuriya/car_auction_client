<script setup>
import { ref, reactive, computed } from "vue";
</script>

<template>
  <div
    class="container mx-auto carousel-type-01 sm:px-3 md:px-12 lg:px-12 xl:px-12"
  >
    <div class="">
      <div
        class="grid grid-cols-10 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-10 xl:grid-cols-10 gap-7"
      >
        <div
          class="col-span-5 xs:col-span-10 sm:col-span-10 md:col-span-10 lg:col-span-5 xl:col-span-5"
        >
          <div class="para-text-02 color-03 font-semibold">
            Japan
            <span class="sub-text-one color-02"> Auction</span>
            Calendar
          </div>
          <div class="para-text-03 order-1 sm:col-span-5">
            Major auction houses in japan can be easily accessed from all over
            the world. We add used cars in good condition for auction process
            each week. We provide 145,000 cars weekly to our esteemed customers.
            The process of auction is performed each week. We have highly
            skilled workforce and an efficient management system that can help
            in providing you support with a well-developed system for vehicle
            purchase.
          </div>
        </div>
        <div
          class="col-span-5 xs:col-span-10 sm:col-span-10 md:col-span-10 lg:col-span-5 xl:col-span-5"
        >
          <div class="grid grid-cols-1 pt-12">
            <div class="topic-text-01">We Provide</div>
            <div>
              <div class="topic-price-01 inline">145,000</div>
              <div class="topic-text-02 inline">Cars Weekly</div>
            </div>

            <div>
              <img
                class="order-2 sm:order-1 sm:row-span-6 col-span-3 self-center xl:self-auto"
                src="../assets/images/reachus/main.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/carouselType01.scss";
@import "@/assets/scss/reachus.scss";
</style>
