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
@import "@/assets/scss/topMenu.scss";
</style>