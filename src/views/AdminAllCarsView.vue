<script setup>
import LayoutAuthenticated from '@/components/layout/admin/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/admin/SectionTitleLineWithButton.vue'
import SectionMain from '@/components/admin/SectionMain.vue'
import { mdiCarEstate } from '@mdi/js'
import Table from '@/components/admin/Table.vue'
import { useCarsStore } from '@/stores/cars'
import { computed } from 'vue'

const carsStore = useCarsStore()
const items = computed(() => carsStore.cars)
const headers = computed(() => carsStore.tableHeaders)
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
