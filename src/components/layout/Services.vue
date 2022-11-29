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
.dropdown-menu {
    position: absolute;
    z-index: 1000;
    min-width: 10rem;
    padding: 1rem 0;
    margin: 0;
    font-size: .75rem;
    color: #08246C;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid transparent;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 12px;
}

.dropdown-item {
    display: flex;
    width: 100%;
    padding: 0.3rem 1.5rem;
    clear: both;
    font-weight: 600;
    font-size: 20px;
    color: #08246C;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    justify-content: space-between;
}

.dropdown-submenu:hover>.dropdown-menu {
    top: 0;
    pointer-events: all;
    visibility: visible;
    opacity: 1;
    transition: all .25s ease-in-out;
}

.dropend>.dropdown-menu {
    right: auto;
    left: 100%;
    visibility: hidden;
    margin-top: 0;
    /* margin-left: 0; */
    margin-left: 0.5rem;
}

.dropdown-menu:before {
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    z-index: -1;
}

.dropdown,
.dropend,
.dropstart,
.dropup {
    position: relative
}

@media only screen and (min-width: 1300px) {

    

    [class*="dropdown-menu"] {
        position: absolute;
        z-index: 1000;
        min-width: 5px;
        padding: 1px 0;
        margin: 0;
        font-size: 6px;
        color: black;
        text-align: left;
        list-style: none;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid transparent;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px);
        border-radius: 12px;
    }
}
</style>