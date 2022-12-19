<script setup>
import VehicalDetailCardVue from './components/VehicalDetailCard.vue'
import Pagination from '../pagination/pagination.vue'
import { storeToRefs } from 'pinia'
import { computed, onMounted, toRefs } from 'vue'
import { useCarsStore } from '@/stores/cars'

const carsStore = useCarsStore()
const { cars: items } = storeToRefs(carsStore)

const props = defineProps(['indexingDetails'])
const emit = defineEmits(['go-to-first-page', 'go-to-last-page', 'change-page'])
const { indexingDetails } = toRefs(props)
const goToFirstPage = () => {
  emit('go-to-first-page')
}

const goToLastPage = () => {
  emit('go-to-last-page')
}

const changePage = (pageId) => {
  emit('change-page', pageId)
}
</script>

<template>
  <div class="w-full flex flex-col gap-3 text-black">
    <VehicalDetailCardVue
      v-for="item in items"
      :key="item.id"
      :vehicle="item"
    />
    <Pagination
      :indexingDetails="indexingDetails"
      @go-to-first-page="goToFirstPage"
      @go-to-last-page="goToLastPage"
      @change-page="changePage"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/stock-list/vehicalDetailsCard.scss';
</style>
