<script setup>
import { computed, toRefs } from 'vue'
const props = defineProps(['vehicle'])
const { vehicle } = toRefs(props)
const base_url_api = import.meta.env.VITE_BASE_URL_API

const cover_image = computed(() => {
  return base_url_api + props.vehicle.cover_image_full_url
})
</script>
<template>
  <div @click="$router.push(`/vehical-details/${vehicle?.id}`)"
    class="w-full p-2 rounded-md border space-y-3 border-[#E7E7E7] md:flex md:justify-between md:gap-2">
    <img class="lg:rounded-[15px] md:rounded-[10px] w-full md:w-[30vw] lg:w-[18vw] object-cover" :src="cover_image" />

    <div class="px-2 py-2 space-y-3 w-full md:relative">
      <div class="text-center font-vehical-name">
        {{
    `${vehicle?.make_id?.name} ${vehicle?.model_id?.name} ${new Date(
      vehicle?.make_at
    ).getFullYear()}`
}}
        <div></div>
      </div>
      <div class="grid grid-cols-2 gap-5 xl:gap-3 lg:grid-cols-4 w-full">
        <div class="w-full">
          <p class="font-vehical-details-title">Body</p>
          <p class="font-vehical-details-content">
            {{ vehicle?.body_type_id?.name }}
          </p>
        </div>
        <div class="w-full">
          <p class="font-vehical-details-title">Condition</p>
          <p class="font-vehical-details-content">
            {{ vehicle?.isUsed ? 'Used' : 'New' }}
          </p>
        </div>
        <div class="w-full">
          <p class="font-vehical-details-title">Mileage</p>
          <p class="font-vehical-details-content">{{ vehicle.mileage }} KM</p>
        </div>
        <div class="w-full">
          <p class="font-vehical-details-title">Chassis No.</p>
          <p class="font-vehical-details-content">{{ vehicle.chassis_no }}</p>
        </div>
        <div class="w-full">
          <p class="font-vehical-details-title">Now On Sale</p>
          <p class="font-vehical-details-content">Ref# {{ vehicle.id }}</p>
        </div>
      </div>
      <div class="lg:flex">
        <div class="flex font-button-row flex-wrap gap-2 justify-start">
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow">
            {{ vehicle?.fuel_type_id?.name }}
          </div>
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow">
            {{ vehicle?.door_type_id?.name }}
          </div>
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow">
            {{ vehicle?.streeing_id?.name }} Hand
          </div>
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow">
            {{ vehicle?.driver_type_id?.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-[35vw] lg:w-[55%] px-2 space-y-2">
      <div class="flex flex-col w-full h-[100%]">
        <div class="flex flex-row md:flex-wrap w-full justify-between h-[100%]">
          <div class="w-full flex-col">
            <div class="flex flex-col md:items-end lg:flex-row lg:justify-end lg:gap-3">
              <p class="font-car-price-1">Car Price :</p>
              <p class="font-car-price-3">¥ {{ vehicle.fob_price }}</p>
            </div>
          </div>
          <div class="flex w-full flex-col md: items-end">
            <p class="font-car-price-2">¥ {{ vehicle.fob_price }}</p>
            <p class="font-shipping-price">Total Price with Shipping</p>
          </div>
        </div>
        <div class="flex w-full pb-2 pt-2">
          <div class="flex w-full items-end justify-center lg:justify-end">
            <div class="font-add-wishlist bg-blue-600 px-8 py-2 items-end rounded-md">+ Add to Wish list</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/stock-list/vehicalDetailsCard.scss';
</style>
