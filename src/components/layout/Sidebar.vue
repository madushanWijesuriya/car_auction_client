<script setup></script>
<template>
  <div class="text-black md:hidden">
    <div class="space-y-5">
      <div>
        <a href="https://car-auction-staging.netlify.app//">Home</a>
      </div>
      <div>
        <div @click="isOpen = !isOpen">Services</div>
        <div>
          <ul v-if="isOpen">
            <li class="" @click="isOpen = !isOpen">
              <div class="" href="#" data-bs-toggle="dropdown">Auction</div>
              <ul class="dropdown-menu" apear>
                <li class="">
                  <a class="" href="services.html">Auction Calendar</a>
                </li>
                <li class=""><a class="" href="">Auction Guide</a></li>
                <li class=""><a href="">Auction Vs Stock</a></li>
                <li class=""><a href="">Auction Houses</a></li>
              </ul>
            </li>
            <li class=""><a class="" href="">Quality Control</a></li>
            <li class="">
              <a class="" href="#" data-bs-toggle="dropdown"
                >Certifications
                <!-- <img src="@/assets/images/dropdown/plus.svg" alt="" -->
                /></a
              >
              <ul class="dropdown-menu" apear>
                <li class=""><a href="services.html">EAA</a></li>
                <li class=""><a href="services2.html">Intertek</a></li>
                <li><a href="services2.html">JAAI </a></li>
                <li><a href="services2.html">JEVIC</a></li>
                <li><a href="services2.html">VCA</a></li>
                <li><a href="services2.html">QISJ Calendar</a></li>
              </ul>
            </li>
            <li><a href="onepage.html">Shipment Schedule</a></li>
          </ul>
        </div>
        <!-- <div class="w-[10px] h-[10px]">
                    <svg width="100%" height="100%" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#08246C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div> -->
      </div>
      <div class="font-semibold">
        <a
          class="font-semibold"
          href="https://car-auction-staging.netlify.app//countries-vehicle-details"
          >Countries</a
        >
      </div>
      <div class="font-semibold">How to Order</div>
      <div class="flex items-center gap-2">
        <a
          class="font-semibold"
          href="https://car-auction-staging.netlify.app//about"
          >About Us</a
        >
        <div class="w-[10px] h-[10px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#08246C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div class="font-semibold">
        <a
          class="font-semibold"
          href="https://car-auction-staging.netlify.app//reachus"
          >Reach Us</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: ['title'],
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style></style>
