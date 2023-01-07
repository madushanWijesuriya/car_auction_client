<script setup>
import VehicalDetailCardVue from './components/VehicalDetailCard.vue'
import Pagination from '../pagination/pagination.vue'
import { storeToRefs } from 'pinia'
import { computed, onMounted, toRefs } from 'vue'
import { useCarsStore } from '@/stores/cars'
import { ArrowDown } from '@element-plus/icons-vue'

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

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
</script>

<template>
  <div class="w-full flex flex-col gap-3 text-black">
    <div class="flex justify-between w-full items-center">
      <p class="text-center md:text-right font-main-title">
        Search Japan Used Vehicles
      </p>
      <div class="hidden lg:flex pr-3">
        <el-dropdown>
          <el-button
            type="primary"
            class="bg-white text-black border border-[#CECECE]"
          >
            USD<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>USD</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
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
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

@import '@/assets/scss/stock-list/vehicalDetailsCard.scss';
</style>
