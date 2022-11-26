<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import Table from '@/components/admin/Table.vue'
import { useCarsStore } from '@/stores/cars'
import { computed, onMounted } from 'vue'
import httpResource from '@/http/httpResource'
import { storeToRefs } from 'pinia'

const carsStore = useCarsStore()
// const items = computed(() => carsStore.cars)
const { cars: items } = storeToRefs(carsStore)
const headers = computed(() => carsStore.tableHeaders)

const getAllCars = async (sPage, ePage) => {
  try {
    const response = await httpResource.get('/api/staff/vehicle')
    carsStore.$patch({
      cars: response.data.data,
    })
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await getAllCars()
})
</script>
<template>
  <div class="all-cars">
    <LayoutAuthenticated>
      <SectionMain>
        <CardBox>
          <SectionTitleLineWithButton
            :icon="mdiCarEstate"
            title="All Cars"
            main
          ></SectionTitleLineWithButton>
          <Table :items="items" :headers="headers"> </Table>
        </CardBox>
      </SectionMain>
    </LayoutAuthenticated>
  </div>
</template>
