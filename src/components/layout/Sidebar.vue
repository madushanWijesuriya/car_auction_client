<script setup></script>
<template>
    <div class=" text-black md:hidden">
        <div class="space-y-5">
            <div>
                <a href="https://car-auction-staging.netlify.app//">Home</a>
            </div>
            <div>
                <div @click="isOpen = !isOpen">
                    Services
                </div>
                <div>

                    <ul class="" v-if="isOpen">
                <li class="" @click="isOpen = !isOpen">
                    <a class="" href="#" data-bs-toggle="dropdown">
                        <div class="flex w-full justify-between items-center">
                            <p class=" font-semibold">
                                Auction
                            </p>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 11.5V6.5M6.5 6.5V1.5M6.5 6.5H11.5M6.5 6.5H1.5" stroke="#08246C"
                                    stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>

                    </a>
                    <ul  apear>
                        <li ><a  :href="url + 'countries-vehicle-details'">Auction
                                Calendar</a></li>
                        <li ><a  :href="url + 'services-auction-guru'">Auction
                                Guide</a></li>
                        <li ><a  :href="url + 'services-auction-vs-stock'">Auction
                                Vs Stock</a></li>
                        <li ><a  :href="url + 'services-auction-houses'">Auction
                                Houses</a></li>
                    </ul>
                </li>
                <li ><a  >Quality Control</a></li>
                <li ><a >
                        <div class="flex w-full  justify-between items-center">
                            <p class=" font-semibold">
                                Certifications
                            </p>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 11.5V6.5M6.5 6.5V1.5M6.5 6.5H11.5M6.5 6.5H1.5" stroke="#08246C"
                                    stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                    </a>
                    <ul  apear>
                        <li ><a  :href="url + 'countries-vehicle-details'">EAA</a>
                        </li>
                        <li ><a >Intertek</a></li>
                        <li ><a  >JAAI </a></li>
                        <li ><a >JEVIC</a></li>
                        <li ><a >VCA</a></li>
                        <li ><a  >QISJ Calendar</a></li>
                    </ul>
                </li>
                <li class=""><a class="" href="">Shipment Schedule</a></li>
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
