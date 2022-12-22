<script setup>
import moment from 'moment'
import { computed, ref, onBeforeUnmount } from 'vue'

let japanTimeNow = ref(moment().utcOffset(9).format('h:mm a, dddd'))
let timer = ref(null)

timer.value = setInterval(() => {
  japanTimeNow.value = moment().utcOffset(9).format('h:mm a, dddd')
}, 1000)

onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>
<template>
  <div
    class="navbar place-items-center place-content-center grid grid-cols-2 md:grid-cols-3 font-size-12 md:font-size-16"
  >
    <div class="date-time md:col-span-1 flex gap-1 justify-start">
      <span class="loaction-type light-text-01">Japan Time :</span>
      <span>{{ japanTimeNow }}</span>
    </div>
    <div
      class="align-right grid grid-cols-1 md:grid-cols-3 gap-2 md:col-span-2"
    >
      <span class="nav-email hidden md:inline-block">
        <span class="light-text-01">Email:</span>
        info@japanautoauctions.jp
      </span>
      <span class="part-01">
        <span class="light-text-01">24/7 Support:</span>
        +81 3 6712 4147
      </span>
      <span class="part-02">
        <span class="light-text-01"> Language: </span>
        English
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/navbar.scss';
</style>
