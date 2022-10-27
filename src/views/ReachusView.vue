<script setup>
import { ref, reactive, computed } from "vue";
</script>

<template>
  <div
    class="container mx-auto carousel-type-01 sm:px-3 md:px-12 lg:px-12 xl:px-12"
  >
    <div class="">
      <div class="grid grid-rows-3 m-5 lg:grid-rows-6 lg:grid-cols-2 gap-0">
        <div class="row-span-3 lg:row-span-3">
          <div class="para-text-02 color-03 font-semibold">
            Get in touch
            <span class="sub-text-one color-02"> with Us.</span>
          </div>
          <div class="para-text-03 order-1 sm:col-span-5">
            Jamex Auction House is the leading auto trading company of Japan
            that is working in the same niche for over 10 year. We have
            satisfied customers in different parts of the world including Europe
            Oceania, Caribbean, Asia and Africa. The used car are provided at
            very competitive cost. Our access to all auction houses in Japan
            make us the most reliable and successful auto trading company. In
            Japan we have access to most of the auction houses including those
            located in Yokohama, Tokyo, Chubu Industrial Region and Nagoya.
          </div>
          <br />
          <div class="para-text-03 order-1 sm:col-span-5">
            At Auction House Japan we have always explored and found export
            quality vehicles that are properly reconditioned. Our diversified
            team for automobile auction suppliers make us the best reputed
            company for the supply of good quality vehicles in different parts
            of the world.
          </div>
        </div>
        <div class="row-span-5 lg:row-span-4">
          <img
            class="order-2 sm:order-1 sm:row-span-6 col-span-3 self-center xl:self-auto"
            src="../assets/images/services/main.svg"
          />
        </div>
        <div class="row-span-3 lg:row-span-1 lg:mt-10">
          <button
            type="button"
            class="w-full lg:w-fit py-2 lg:px-10 lg:py-3 readmore text-white"
          >
            Read more
          </button>
        </div>
        <div
          class="col-span-full mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 px-5 md:gap-x-32"
        >
          <div>
            <div class="title text-black font-bold text-xl md:text-2xl">
              JAMEX Co., LTD
            </div>
            <div class="content font-medium text-base md:text-xl mt-2">
              1-3-6 Minami-Shinagawa, Shinagawaku, Tokyo 140-0004 Japan
            </div>
          </div>
          <div>
            <div class="title text-black font-bold text-xl md:text-2xl">
              Contact Info
            </div>
            <div class="content font-medium text-base md:text-xl mt-2">
              Open a chat or give us call at +81-3-6712-4147
            </div>
          </div>
          <div>
            <div class="title text-black font-bold text-xl md:text-2xl">
              Email ID
            </div>
            <div class="content font-medium text-base md:text-xl mt-2">
              info@japanautoauctons.jp
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
@import "@/assets/scss/button.scss";
</style>
