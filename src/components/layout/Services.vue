<script setup>
import { computed } from "@vue/runtime-core";
const url = computed(() => {
    return import.meta.env.VITE_BASE_URL_CLIENT;
});
</script>

<template>
    <div class="menu-sub" @click="isOpen = !isOpen">
        <a href='#' class="font-semibold">
            {{ title }}
        </a>

        <transition name="fade" apear>
            <ul class="dropdown-menu" v-if="isOpen">
                <li class="dropdown dropdown-submenu dropend" @click="isOpen = !isOpen">
                    <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">
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
                    <ul class="dropdown-menu" apear>
                        <li class="nav-item"><a class="dropdown-item" :href="url + 'countries-vehicle-details'">Auction
                                Calendar</a></li>
                        <li class="nav-item"><a class="dropdown-item" :href="url + 'services-auction-guru'">Auction
                                Guide</a></li>
                        <li class="nav-item"><a class="dropdown-item" :href="url + 'services-auction-vs-stock'">Auction
                                Vs Stock</a></li>
                        <li class="nav-item"><a class="dropdown-item" :href="url + 'services-auction-houses'">Auction
                                Houses</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="dropdown-item" href="pricing.html">Quality Control</a></li>
                <li class="dropdown dropdown-submenu dropend"><a class="dropdown-item dropdown-toggle" href="#"
                        data-bs-toggle="dropdown">
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
                    <ul class="dropdown-menu" apear>
                        <li class="nav-item"><a class="dropdown-item" :href="url + 'countries-vehicle-details'">EAA</a>
                        </li>
                        <li class="nav-item"><a class="dropdown-item" href="services2.html">Intertek</a></li>
                        <li class="nav-item"><a class="dropdown-item" href="services2.html">JAAI </a></li>
                        <li class="nav-item"><a class="dropdown-item" href="services2.html">JEVIC</a></li>
                        <li class="nav-item"><a class="dropdown-item" href="services2.html">VCA</a></li>
                        <li class="nav-item"><a class="dropdown-item" href="services2.html">QISJ Calendar</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="dropdown-item" href="onepage.html">Shipment Schedule</a></li>
            </ul>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'services',
    props: ['title'],
    data() {
        return {
            isOpen: false,
        }
    }
}
</script>
<style>
@import "@/assets/scss/topMenu.scss";
</style>