<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import httpResource from '@/http/httpResource'
import camelCase from 'camelcase'
import StockCard from '../../components/portal/StockCard.vue'

const selections = ref([
  {
    id: 1,
    name: 'My Stock',
    imagePath: '/sidebar/fin_repo.svg',
    content: 'Total Units : 81',
    selected: true,
  },
  {
    id: 2,
    name: 'Transactions',
    imagePath: '/sidebar/fi.svg',
    content: 'Total Transactions : 81',
    selected: false,
  },
  {
    id: 3,
    name: 'Ledger',
    imagePath: '/sidebar/send_inq.svg',
    content: 'Total Balance : $ 738,373.00',
    selected: false,
  },
  {
    id: 4,
    name: 'Inquiry',
    imagePath: '/sidebar/make_inv.svg',
    content: '',
    selected: false,
  },
])

const selectedSelection = computed(() => {
  const selected = selections.value.find((s) => s.selected)
  if (selected) return selected
  return selections.value[0]
})

const changeSelection = (selection) => {
  selections.value.forEach((s) => {
    s.selected = s.id === selection.id
  })
}
</script>

<template>
  <div class="financial_information_home">
    <div class="h-screen">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="grid grid-cols-4 gap-4">
          <div
            class="bg-blue-800 p-6 rounded-lg shadow-lg cursor-pointer"
            @click="changeSelection(selection)"
            v-for="(selection, idx) in selections"
            :key="idx"
          >
            <div class="flex justify-items-center content-center">
              <div class="shape border-2 border-white mx-2">
                <img
                  :src="selection.imagePath"
                  :alt="`image-${selection.name}`"
                />
              </div>
              <div>
                <h2 class="text-xl my-auto text-white">{{ selection.name }}</h2>
                <p class="text-sm text-white">{{ selection.content }}</p>
              </div>
            </div>
          </div>
          <div class="selection-data">
            <h2 class="title text-xl text-blue-800 mb-2">
              {{ selectedSelection.name }}
            </h2>
            <div>
              <div v-if="selectedSelection.id === 1">
                <StockCard> </StockCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
