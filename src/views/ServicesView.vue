<script setup>
import { ref, reactive, computed } from "vue";
</script>

<template>
  <div
    class="container mx-auto carousel-type-01 sm:px-3 md:px-12 lg:px-12 xl:px-12"
  >
    <div class="">
      <div class="grid grid-rows-5 lg:grid-rows-7 lg:grid-cols-2 m-5">
        <div class="row-span-1 lg:row-span-3">
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
        <div class="row-span-1 lg:row-span-3 lg:mt-14">
          <div class="topic-text-01">We Provide</div>
          <div>
            <div class="topic-price-01 inline">145,000</div>
            <div class="topic-text-02 inline">Cars Weekly</div>
          </div>
        </div>
        <div class="row-span-1 lg:row-span-1 lg:row-start-5 topic-text-03">
          Have any car in mind?
        </div>
        <div class="row-span-1 lg:row-span-3">
          <img
            class="order-2 sm:order-1 sm:row-span-6 col-span-3 self-center xl:self-auto"
            src="@/assets/images/reachus/main.svg"
          />
        </div>
        <div class="row-span-1 mt-20 lg:row-span-1">
          <div>
            <div class="contact-text-01">Office</div>
            <img
              class="svg-icon inline m-3"
              src="@/assets/images/services/Location.svg"
            />
            <div class="contact-text-02 inline">
              123 Anywhere St., Any City, ST 12345
            </div>
          </div>
        </div>
        <div class="flex row-span-1 lg:row-span-1">
          <div class="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
            <div>
              <div class="contact-text-01">Phone Number</div>
              <img
                class="svg-icon lg:inline m-3"
                src="@/assets/images/services/Call.svg"
              />
              <div class="contact-text-02 inline">+123-456-789 0</div>
            </div>
            <div>
              <div class="contact-text-01">Email</div>

              <img
                class="svg-icon lg:inline m-3"
                src="@/assets/images/services/Email.svg"
              />
              <div class="contact-text-02 inline">
                hello@reallygreatsite.com
              </div>
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
@import "@/assets/scss/services.scss";
</style>
