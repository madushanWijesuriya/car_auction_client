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
                <li class="nav-item"><a class="dropdown-item" :href="url + 'why-us'">Why
                        Us</a></li>
                <li class="nav-item"><a class="dropdown-item" :href="url + 'company-profile'">Company Profile</a></li>
                <li class="nav-item"><a class="dropdown-item" :href="url + 'about'">Corparate
                        Philosophy</a></li>
                <li class="nav-item"><a class="dropdown-item" :href="url + 'customer-feedback'">Customer's Feedback</a>
                </li>
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

@media only screen and (max-width: 667px) {

    class.dropdown-menu {
        max-width: 100% !important;
    }
}
</style>