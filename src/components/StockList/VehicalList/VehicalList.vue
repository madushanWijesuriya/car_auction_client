<script setup>
import VehicalDetailCardVue from './components/VehicalDetailCard.vue'
import Pagination from '../pagination/pagination.vue'
import { storeToRefs } from 'pinia'
import { computed, onMounted, toRefs } from 'vue'
import { useCarsStore } from '@/stores/cars'

const carsStore = useCarsStore()
const { cars: items } = storeToRefs(carsStore)

const props = defineProps(['indexingDetails'])
const { indexingDetails } = toRefs(props)
</script>

<template>
  <div class="w-full flex flex-col gap-3 text-black">
    <VehicalDetailCardVue
      v-for="item in items"
      :key="item.id"
      :vehicle="item"
    />
    <Pagination :indexingDetails="indexingDetails" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/stock-list/vehicalDetailsCard.scss';
</style>
