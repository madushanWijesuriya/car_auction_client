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
  <!-- image url src="@/assets/images/stock-list/vehical-list/list-car-1.svg" -->
  <div @click="$router.push(`/vehical-details/${vehicle?.id}`)"
    class="w-full vehical-deatils-card p-1 md:p-4 rounded-md border space-y-3 border-[#E7E7E7] md:flex md:justify-between md:gap-2">
    <div class=" md:w-[500px] flex relative">
      <img class="lg:rounded-[15px] rounded-[10px] w-full object-cover" :src="cover_image" />
      <div class="absolute left-0 right-0 top-[45%]">
        <div class="flex flex-row w-full justify-between p-1">

          <svg class=" cursor-pointer" width="11" height="17" viewBox="0 0 11 17" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9.03313 1L1.75903 8.2741L9.03313 15.5482" stroke="white" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>

          <svg class=" cursor-pointer" width="10" height="17" viewBox="0 0 10 17" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            
            <path d="M1.00007 1L8.27417 8.2741L1.00007 15.5482" stroke="white" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>

        </div>
      </div>
    </div>

    <div class="px-2 py-2 space-y-3 w-full md:relative">
      <div class="text-center font-vehical-name">
        {{
    `${vehicle?.make_id?.name} ${vehicle?.model_id?.name} ${new Date(
      vehicle?.make_at
    ).getFullYear()}`
}}
      </div>
      <div class="grid grid-cols-2 gap-5 xl:gap-3 lg:grid-cols-4 w-full">
        <div class="w-full">
          <p class="font-vehical-details-title">Body</p>
          <p class="font-vehical-details-content truncate ">
            {{ vehicle?.body_type_id?.name }}
          </p>
        </div>
        <div class="w-full">
          <p class="font-vehical-details-title">Condition</p>
          <p class="font-vehical-details-content truncate ">
            {{ vehicle?.isUsed ? 'Used' : 'New' }}
          </p>
        </div>
        <div class="w-full">
          <p class="font-vehical-details-title">Mileage</p>
          <p class="font-vehical-details-content truncate ">{{ vehicle.mileage }} KM</p>
        </div>
        <div class="w-full">
          <p class="font-vehical-details-title">Chassis No.</p>
          <p class="font-vehical-details-content truncate">{{ vehicle.chassis_no }}</p>
        </div>
        <div class="w-full">
          <p class="font-vehical-details-title">Now On Sale</p>
          <p class="font-vehical-details-content truncate ">Ref# {{ vehicle.id }}</p>
        </div>
      </div>
      <div class="lg:flex">
        <div class="flex font-button-row flex-wrap gap-2 justify-start">
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow truncate ">
            {{ vehicle?.fuel_type_id?.name }}
          </div>
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow truncate ">
            {{ vehicle?.door_type_id?.name }}
          </div>
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow truncate ">
            {{ vehicle?.streeing_id?.name }} Hand
          </div>
          <div class="px-5 py-1 bg-[#08246C] rounded-lg text-center grow truncate ">
            {{ vehicle?.driver_type_id?.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="relative md:w-[35vw] lg:w-[55%] px-2 space-y-2">
      <div class="flex flex-col w-full">
        <div class="flex flex-row md:flex-wrap w-full justify-between">
          <div class="w-full flex-col">
            <div class="flex flex-col md:items-end lg:flex-row lg:justify-end lg:gap-3 ">
              <p class="font-car-price-1">Car Price :</p>
              <p class="font-car-price-3 truncate ">¥ {{ vehicle.fob_price }}</p>
            </div>
            <div class="hidden md:flex w-full items-end justify-center lg:justify-end pt-2">
              <div class="flex flex-row gap-2 items"> <span><svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.00001 0C4.54184 0.00172024 3.1439 0.581735 2.11282 1.61281C1.08174 2.64389 0.501726 4.04184 0.500006 5.5C0.498259 6.69161 0.887496 7.85089 1.60801 8.8C1.60801 8.8 1.75801 8.9975 1.78251 9.026L6.00001 14L10.2195 9.0235C10.2415 8.997 10.392 8.8 10.392 8.8L10.3925 8.7985C11.1127 7.84981 11.5017 6.69107 11.5 5.5C11.4983 4.04184 10.9183 2.64389 9.88719 1.61281C8.85612 0.581735 7.45817 0.00172024 6.00001 0ZM6.00001 7.5C5.60444 7.5 5.21776 7.3827 4.88887 7.16294C4.55997 6.94318 4.30362 6.63082 4.15225 6.26537C4.00087 5.89991 3.96126 5.49778 4.03844 5.10982C4.11561 4.72186 4.30609 4.36549 4.58579 4.08579C4.8655 3.80608 5.22186 3.6156 5.60983 3.53843C5.99779 3.46126 6.39992 3.50087 6.76537 3.65224C7.13082 3.80362 7.44318 4.05996 7.66294 4.38886C7.88271 4.71776 8.00001 5.10444 8.00001 5.5C7.99934 6.03023 7.78842 6.53855 7.41349 6.91348C7.03856 7.28841 6.53024 7.49934 6.00001 7.5Z"
                      fill="#08246C" />
                  </svg>
                </span> Sri Lanka-Hambantota</div>
            </div>
          </div>
          <div class="flex w-full flex-col md: items-end">
            <p class="font-car-price-2">¥ {{ vehicle.fob_price }}</p>
            <p class="font-shipping-price truncate ">Total Price with Shipping</p>
          </div>
        </div>
      </div>
      <div class="md:hidden flex w-full items-end lg:justify-end py-2 truncate">
              <div class="flex flex-row gap-2 items truncate"> <span><svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.00001 0C4.54184 0.00172024 3.1439 0.581735 2.11282 1.61281C1.08174 2.64389 0.501726 4.04184 0.500006 5.5C0.498259 6.69161 0.887496 7.85089 1.60801 8.8C1.60801 8.8 1.75801 8.9975 1.78251 9.026L6.00001 14L10.2195 9.0235C10.2415 8.997 10.392 8.8 10.392 8.8L10.3925 8.7985C11.1127 7.84981 11.5017 6.69107 11.5 5.5C11.4983 4.04184 10.9183 2.64389 9.88719 1.61281C8.85612 0.581735 7.45817 0.00172024 6.00001 0ZM6.00001 7.5C5.60444 7.5 5.21776 7.3827 4.88887 7.16294C4.55997 6.94318 4.30362 6.63082 4.15225 6.26537C4.00087 5.89991 3.96126 5.49778 4.03844 5.10982C4.11561 4.72186 4.30609 4.36549 4.58579 4.08579C4.8655 3.80608 5.22186 3.6156 5.60983 3.53843C5.99779 3.46126 6.39992 3.50087 6.76537 3.65224C7.13082 3.80362 7.44318 4.05996 7.66294 4.38886C7.88271 4.71776 8.00001 5.10444 8.00001 5.5C7.99934 6.03023 7.78842 6.53855 7.41349 6.91348C7.03856 7.28841 6.53024 7.49934 6.00001 7.5Z"
                      fill="#08246C" />
                  </svg>
                </span> Sri Lanka-Hambantota</div>
            </div>
      <div class="md:absolute bottom-2 w-full ">
        <div class="md:flex w-full items-end justify-center lg:justify-end">
          <div
            class="font-add-wishlist text-center bg-[#08246C] hover:bg-[#09183d] hover:cursor-pointer px-8 py-2 items-end rounded-md truncate ">
            + Add to
            Wish list</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/stock-list/vehicalDetailsCard.scss';
</style>
