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
const { cars: items } = storeToRefs(carsStore)
const headers = computed(() => carsStore.tableHeaders)
const decoratedItems = computed(() => {
  if (!items.value || !Array.isArray(items.value)) return []
  return items.value.map((i) => {
    return {
      id: i.id,
      photo: 'https://picsum.photos/200/200',
      make: i?.make_id?.name,
      model: i?.model_id?.name,
      fob: i?.fob_price,
      status: i?.status_id,
      inquery: '-',
    }
  })
})

const getAllCars = async () => {
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
          <Table :items="decoratedItems" :headers="headers"> </Table>
        </CardBox>
      </SectionMain>
    </LayoutAuthenticated>
  </div>
</template>
