<script setup>
import StepperOne from "../components/Steppers/StepperOne.vue";

const getImageUrl = (name) => {
  if (!name) return "";
  return new URL(name, import.meta.url).href;
};
</script>

<template>
  <div class="counties-vehicle-details-view">
    <div class="content-01 container mt-6 grid grid-cols-1 sm:grid-cols-5">
      <div
        class="text-2xl sm:text-6xl font-semibold text-black px-4 sm:order-1 sm:pt-48 sm:mb-2 sm:col-span-2"
      >
        <div class="text-color-03 sm:text-color-01">
          Fully <span class="text-color-02 sm:text-color-01">Transparent</span>
        </div>
        <div class="text-color-03 sm:text-color-01">
          Fully in <span class="text-color-02 sm:text-color-01">Control</span>
        </div>
      </div>
      <div
        class="text-sm font-normal text-black leading-5 sm:leading-8 mt-2 mb-4 px-4 sm:order-3 sm:col-span-2"
      >
        say hello to an online shopping experience that pute you right in the
        driver's seat.
      </div>
      <div
        class="px-2 sm:order-2 sm:row-span-6 sm:place-self-center sm:col-span-3"
      >
        <img
          class="rounded-md shadow"
          src="@/assets/images/countries-details/car-01-counties.jpg"
          alt="car-01-counties-details"
        />
      </div>
      <div class="sm:order-5 sm:mt-16 sm:col-span-2">
        <div class="text-base sm:text-xl font-medium text-black mb-4 px-2 mt-4">
          <div class="mb-1">Contact Us</div>
          <hr class="sm:hidden" />
        </div>
        <div class="px-5">
          <div class="mb-3 text-xs sm:text-lg">
            <div class="sm:text-color-07">Office</div>
            <div class="mt-3 color-01">
              123 Anywhere St., Any City, ST 12345
            </div>
          </div>
          <div class="grid grid-cols-2 text-xs sm:text-lg">
            <div>
              <div class="sm:text-color-07">Phone Number</div>
              <div class="mt-3 color-01">+123-456-789 0</div>
            </div>
            <div>
              <div class="sm:text-color-07">Email</div>
              <div class="mt-3 color-01">hello@reallygreatsite.com</div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center mt-6 order-6 sm:absolute sm:right-2/4 sm:bottom-0"
      >
        <img
          src="@/assets/images/countries-details/QR-code.jpg"
          alt="QR-CODE"
        />
      </div>
    </div>
    <div class="content-02 container px-6 mt-6 sm:mt-16">
      <div class="color-01 mb-4 text-xl sm:text-4xl font-bold leading-7">
        Why do <span class="color-02 font-bold">Sri Lankan</span> customers
        choose JAMAX to buy a car in Japan?
      </div>
      <div
        class="text-sm sm:text-xl leading-5 sm:leading-7 font-normal color-06"
      >
        We will give you a member registration form that you can use to register
        with us. Jamex Auto Auctions will give you due assistance regarding the
        procedure with which you can place your bids and control them for the
        deposit, auction, and payments.
      </div>
    </div>
    <div class="content-03 container mt-8">
      <div class="color-01 px-6 text-xl font-bold mb-4 sm:hidden">
        Process of Ordering
      </div>
      <div class="px-4">
        <StepperOne />
      </div>
    </div>
  </div>
</template>
