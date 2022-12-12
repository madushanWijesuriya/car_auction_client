<script setup>
import { computed } from '@vue/runtime-core'
const url = computed(() => {
  return import.meta.env.VITE_BASE_URL_CLIENT
})
</script>

<template>
  <div class="menu-sub relative" @click="isOpen = !isOpen">
    <a class="font-semibold">
      {{ title }}
    </a>

    <transition name="fade" apear>
      <div
        class="grid grid-cols-4 mt-6 border text-xs text-black p-4 gap-4 bg-white w-[800px] z-[1000] absolute"
        v-if="isOpen"
      >
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Bangladesh'">
            <h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\twemoji_flag-bangladesh.svg"
              />Bangladesh
            </h1>
          </a>
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Malawi'">
            <h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-malawi.svg"
              />Malawi
            </h1>
          </a>
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Trinidad'">
            <h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-trinidad-and-tobago.svg"
              />Trinidad & Tobago
            </h1>
          </a>
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Botswana'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-botswana.svg"
              />Botswana
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Malta'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-malta.svg"
              />Malta
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Tanzania'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-tanzania.svg"
              />Tanzania
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'DR Congo'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-congo-brazzaville.svg"
              />DR Congo
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'New Zealand'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-new-zealand.svg"
              />New Zealand
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Turkey'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-turkey.svg"
              />Turkey
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Cyprus'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\twemoji_flag-cyprus.svg"
              />Cyprus
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Pakistan'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-pakistan.svg"
              />Pakistan
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Myanmar'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-myanmar.svg"
              />Myanmar
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Fiji'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-fiji.svg"
              />Fiji
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Russia'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-russia.svg"
              />Russia
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Uganda'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-uganda.svg"
              />Uganda
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Jamaica'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-jamaica.svg"
              />Jamaica
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Srilanka'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-sri-lanka.svg"
              />Srilanka
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'UnitedKingdom'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-united-kingdom.svg"
              />United Kingdom
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Kenya'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-kenya.svg"
              />Kenya
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Haiti'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-haiti.svg"
              />Haiti
            </h1></a
          >
        </div>
        <div>
          <a :href="url + 'countries-vehicle-details/' + 'Zambia'"
            ><h1 class="footer-contect-text">
              <img
                class="inline mr-2"
                src="@\assets\images\footer\flags\emojione-v1_flag-for-zambia.svg"
              />Zambia
            </h1></a
          >
        </div>
      </div>
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
  },
}
</script>
<style>
@import '@/assets/scss/topMenu.scss';
</style>
