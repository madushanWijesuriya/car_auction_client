<script setup>
import { ref, reactive, computed } from "vue";
</script>

<template>
   
  <div class="grid place-items-center m-5 relative lg:ml-24">
    <div class="hidden group fixed-group lg:flex absolute right-[-20px] top-[-170px] lg:h-[99%] ">
        <img
          class="back_image"
          src="/background_image.svg"
          alt="backfround_image"
        />
        <img
          class="jap_map absolute top-32 right-0"
          src="/jap_map.svg"
          alt="jap_map"
        />
      </div>
   
    <div class="p-4 grid gap-4 lg:grid-cols-2">
      <div class="topic-text-01 color-03 font-semibold lg:mt-10 lg:col-span-2">
        Japan
        <span class="sub-text-one color-02 font-semibold"> Auction</span>
        Calendar
      </div>
      <div class="service-para-text">
        Jamex Auction House is the leading auto trading company of Japan that is
        working in the same niche for over 10 year. We have satisfied customers
        in different parts of the world including Europe Oceania, Caribbean,
        Asia and Africa. The used car are provided at very competitive cost. Our
        access to all auction houses in Japan make us the most reliable and
        successful auto trading company. In Japan we have access to most of the
        auction houses including those located in Yokohama, Tokyo, Chubu
        Industrial Region and Nagoya.
      </div>
      <div>
        <img class="2xl:-mt-28" src="@/assets/images/services/main01.svg" />
      </div>
      <div
        class="topic-text-03 h-10 lg:h-20 border-b-2 border-blue-1000-500/100 lg:col-span-2"
      >
        Have any car in mind?
      </div>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <div class="contact-text-01">Office</div>
          <img
            class="svg-icon inline mr-3"
            src="@/assets/images/services/Location.svg"
          />
          <div class="contact-text-02 inline">
            123 Anywhere St., Any City, ST 12345
          </div>
        </div>
        <div>
          <div class="contact-text-01">Phone Number</div>
          <img
            class="svg-icon inline mr-3"
            src="@/assets/images/services/Call.svg"
          />
          <div class="contact-text-02 inline">+123-456-789 0</div>
        </div>
        <div>
          <div class="contact-text-01">Email</div>
          <img
            class="svg-icon inline mr-3"
            src="@/assets/images/services/Email.svg"
          />
          <div class="contact-text-02 inline">hello@reallygreatsite.com</div>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:m-28 overflow-scroll w-50 bg-gray-300">
    <img class="table-img" src="@/assets/images/services/table.png" />
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/carouselType01.scss";
@import "@/assets/scss/services.scss";
</style>
