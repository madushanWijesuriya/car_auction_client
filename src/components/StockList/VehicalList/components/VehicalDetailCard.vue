<script setup>
import { toRefs } from 'vue'
const props = defineProps(['vehicle'])
const { vehicle } = toRefs(props)
</script>
<template>
  <div
    @click="$router.push(`/vehical-details/${vehicle?.id}`)"
    class="w-full p-2 rounded-md border space-y-3 border-[#E7E7E7] md:flex md:justify-between md:gap-2"
  >
    <img
      class="lg:rounded-[15px] md:rounded-[10px] w-full md:w-[30vw] lg:w-[18vw] object-cover"
      src="@/assets/images/stock-list/vehical-list/list-car-1.svg"
    />

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
          <p class="font-vehical-details-title">Engine Capacity</p>
          <p class="font-vehical-details-content">{{ vehicle.displacement }}</p>
        </div>
        <div class="w-full">
          <p class="font-vehical-details-title">Mileage</p>
          <p class="font-vehical-details-content">81,000 KM</p>
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
          <p class="font-vehical-details-content">Ref# 22830T</p>
        </div>
      </div>
      <div class="lg:flex">
        <div class="flex font-button-row flex-wrap gap-2 justify-start">
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow">
            Petrol
          </div>
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow">
            Auto Gear
          </div>
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow">
            Right Hand
          </div>
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow">
            4WD
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-[35vw] lg:w-[55%] px-2 space-y-2">
      <div class="flex flex-row md:flex-wrap justify-between">
        <div class="w-full flex-col">
          <div
            class="flex flex-col md:items-end lg:flex-row lg:justify-end lg:gap-3"
          >
            <p class="font-car-price-1">Car Price :</p>
            <p class="font-car-price-3">¥ {{ vehicle.sup_price }}</p>
          </div>

          <div class="flex w-full items-start md:justify-end">
            Sri Lanka-Hambantota
          </div>
        </div>
        <div class="flex w-full flex-col md: items-end">
          <p class="font-car-price-2">¥ {{ vehicle.sup_price }}</p>
          <p class="font-shipping-price">Total Price with Shipping</p>
        </div>
      </div>
      <div class="w-full lg:flex lg:justify-end">
        <div
          class="bg-[#08246C] items-center font-add text-center py-2 rounded-md px-4"
        >
          + Add to Wishlist
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/stock-list/vehicalDetailsCard.scss';
</style>
