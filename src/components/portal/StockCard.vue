<script setup>
import { ref, reactive, computed, onMounted, toRefs } from 'vue'

// props
const props = defineProps(['stock'])
const { stock } = toRefs(props)

const baseUrl = ref(import.meta.env.VITE_BASE_URL_API)
</script>

<template>
  <div class="stock_card flex flex-nowrap w-full p-4">
    <div class="image-container w-[123px] grow-0 mr-4">
      <div class="flex flex-col h-[132px]">
        <!-- <img src="/placeholderstock.png" alt="image-001" /> -->
        <img
          :src="baseUrl + stock?.vehicle?.cover_image_full_url"
          alt="image-001"
          class="h-[100px] w-[123px]"
        />
        <span
          class="bg-color-01 text-white flex gap-2 justify-center items-center h-[32px]"
        >
          <span class="font-size-12">Stock No</span>
          <span class="font-size-16">#5749</span>
        </span>
      </div>
    </div>
    <div>
      <div class="flex items-center">
        <div class="font-size-20 color-01 font-bold">
          {{
            `${stock?.vehicle?.make_id?.name} ${
              stock?.vehicle?.model_id?.name
            } ${new Date(stock?.vehicle?.make_at).getFullYear()}`
          }}
        </div>
        <div>
          <div
            v-if="stock?.status?.balance_amount"
            class="text-white font-size-16 font-normal bg-[#FF7A00] py-[5px] px-[20px] rounded-3xl ml-6"
          >
            Balance : {{ stock?.status?.balance_amount }}
          </div>
          <div
            v-else
            class="text-white font-size-16 font-normal py-[5px] px-[20px] rounded-3xl ml-6 bg-[#009B63]"
          >
            {{ stock?.status?.name }}
          </div>
        </div>
      </div>
      <div class="flex gap-14 mt-4">
        <div class="flex gap-6 font-size-14">
          <div class="flex flex-col flex-nowrap">
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Engine Capacity :</span>
              <span class="text-black font-extrabold">{{
                stock?.vehicle?.displacement
              }}</span>
            </div>
            <div class="flex gap-1">
              <span class="color-01 font-bold"> Grade : </span>
              <span class="text-black font-extrabold">
                {{ stock?.vehicle?.grade }}
              </span>
            </div>
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Year/Month : </span>
              <span class="text-black font-extrabold">{{
                `${new Date(stock?.vehicle?.make_at).getFullYear()}/${new Date(
                  stock?.vehicle?.make_at
                ).getMonth()}`
              }}</span>
            </div>
          </div>
          <div class="flex flex-col flex-wrap">
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold"> Mileage : </span>
              <span class="text-black font-extrabold">
                {{ stock?.vehicle?.mileage }} KM
              </span>
            </div>
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold"> Transmission : </span>
              <span class="text-black font-extrabold">
                {{ stock?.vehicle?.transmission_id?.name }}
              </span>
            </div>
            <div flex gap-1 flex-wrap>
              <span class="color-01 font-bold">Model :</span>
              <span class="text-black font-extrabold">{{
                stock?.vehicle?.model_id.name
              }}</span>
            </div>
          </div>
          <div class="flex flex-col flex-wrap">
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold"> Chassis No. :</span>
              <span class="text-black font-extrabold">{{
                stock?.vehicle?.chassis_no
              }}</span>
            </div>
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Seats :</span>
              <span class="text-black font-extrabold">{{
                stock?.vehicle?.seats
              }}</span>
            </div>
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Odometer :</span>
              <span class="text-black font-extrabold">{{
                stock?.vehicle?.odometer_id?.name
              }}</span>
            </div>
          </div>
          <div class="flex flex-col flex-wrap">
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Now On Sale :</span>
              <span class="text-black font-extrabold">Ref# 22830T</span>
            </div>
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">2WD/4WD :</span>
              <span class="text-black font-extrabold">2</span>
            </div>
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Fuel :</span>
              <span class="text-black font-extrabold">{{
                stock?.vehicle?.fuel_type_id?.name
              }}</span>
            </div>
          </div>
          <div class="flex flex-col flex-wrap">
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Make :</span>
              <span class="text-black font-extrabold">{{
                stock?.vehicle?.make_id?.name
              }}</span>
            </div>
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Exterior Cond. :</span>
              <span class="text-black font-extrabold">3.5</span>
            </div>
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Drive :</span>
              <span class="text-black font-extrabold"> Right Hand</span>
            </div>
          </div>
          <div class="flex flex-col flex-wrap">
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Type :</span>
              <span class="text-black font-extrabold">{{
                stock?.vehicle?.model_id?.name
              }}</span>
            </div>
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Color :</span>
              <span class="text-black font-extrabold">{{
                stock?.vehicle?.exterior_color_id?.name
              }}</span>
            </div>
            <div class="flex gap-1 flex-wrap">
              <span class="color-01 font-bold">Interior Cond. :</span>
              <span class="text-black font-extrabold">D</span>
            </div>
          </div>
        </div>
        <button
          class="button bg-color-01 text-white px-[30px] py-[15px] font-size-20 rounded-md"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stock_card {
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 100%);
  border: 1px solid #e7e7e7;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.03), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
</style>
