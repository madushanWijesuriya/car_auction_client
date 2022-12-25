<script setup>
import { onMounted, reactive, ref } from 'vue'
import StepperOne from '../components/Steppers/StepperOne.vue'
import httpResource from '@/http/httpResource'
import { useRoute } from 'vue-router'

const route = useRoute()
let contents = ref([])

const getImageUrl = (name) => {
  if (!name) return ''
  return new URL(name, import.meta.url).href
}
const getContents = async () => {
  try {
    const response = await httpResource.get(
      '/api/guest/content/country/' + route.params.name
    )
    contents.value = response.data.data.map((d) => ({
      key: d.key,
      data: d.data,
    }))
  } catch (error) {
    console.error(error)
  }
}

function filterContent(name) {
  if (!contents.value) return []
  return contents.value.filter(function (item) {
    return item.key == name
  })
}

onMounted(() => {
  getContents()
})
</script>

<template>
  <div class="counties-vehicle-details-view">
    <div
      class="content-01 container mt-6 grid grid-cols-1 sm:grid-cols-5"
      data-aos="zoom-in"
    >
      <div
        class="text-2xl sm:text-6xl font-semibold text-black px-4 sm:order-1 sm:pt-48 sm:mb-2 sm:col-span-2"
      >
        <div class="text-color-03 sm:text-color-01">
          {{ filterContent('header_one_01')[0]?.data
          }}<span class="text-color-02 sm:text-color-01">{{
            filterContent('header_one_02')[0]?.data
          }}</span>
        </div>
        <div class="text-color-03 sm:text-color-01">
          {{ filterContent('header_one_03')[0]?.data }}
          <span class="text-color-02 sm:text-color-01">{{
            filterContent('header_one_04')[0]?.data
          }}</span>
        </div>
      </div>
      <div
        class="text-sm font-normal text-black leading-5 sm:leading-8 mt-2 mb-4 px-4 sm:order-3 sm:col-span-2"
      >
        {{ filterContent('para_one_01')[0]?.data }}
      </div>
      <div
        class="px-2 sm:order-2 sm:row-span-6 sm:place-self-center sm:col-span-3"
      >
        <img
          class="rounded-md shadow"
          src="@\assets\images\countries-details\car-01-counties.jpg"
          alt="car-01-counties-details"
        />
      </div>
      <div class="sm:order-5 sm:mt-16 sm:col-span-2">
        <div class="text-base sm:text-xl font-medium text-black mb-4 px-2 mt-4">
          <div class="mb-1">{{ filterContent('contact_us')[0]?.data }}</div>
          <hr class="sm:hidden" />
        </div>
        <div class="px-5">
          <div class="mb-3 text-xs sm:text-lg">
            <div class="sm:text-color-07">
              {{ filterContent('office')[0]?.data }}
            </div>
            <div class="mt-3 color-01">
              {{ filterContent('office_value')[0]?.data }}
            </div>
          </div>
          <div class="grid grid-cols-2 text-xs sm:text-lg">
            <div>
              <div class="sm:text-color-07">
                {{ filterContent('phone_no')[0]?.data }}
              </div>
              <div class="mt-3 color-01">
                {{ filterContent('phone_no_value')[0]?.data }}
              </div>
            </div>
            <div>
              <div class="sm:text-color-07">
                {{ filterContent('email')[0]?.data }}
              </div>
              <div class="mt-3 color-01">
                {{ filterContent('email_value')[0]?.data }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center mt-6 order-6 sm:absolute sm:right-2/4 sm:bottom-0"
      >
        <img
          src="@\assets\images\countries-details\QR-code.jpg"
          alt="QR-CODE"
        />
      </div>
    </div>
    <div class="content-02 container px-6 mt-6 sm:mt-16">
      <div class="color-01 mb-4 text-xl sm:text-4xl font-bold leading-7">
        {{ filterContent('header_two_01')[0]?.data }}
        <span class="color-02 font-bold">{{
          filterContent('header_two_country')[0]?.data
        }}</span>
        {{ filterContent('header_two_02')[0]?.data }}
      </div>
      <div
        class="text-sm sm:text-xl leading-5 sm:leading-7 font-normal color-06"
      ></div>
    </div>
    <div class="content-03 container mt-8">
      <div class="color-01 px-6 text-xl font-bold mb-4 sm:hidden">
        Process of Ordering
      </div>
      <div class="px-4">
        <StepperOne>
          <el-step
            title="Fully tested car"
            description="The motors we export are fully inspected. We guarantee you that you will get a satisfying car at the lowest price. The condition of the car is the same as the public sale list, as there are fair inspectors who guarantee complete satisfaction to customers around the world."
          />
          <el-step
            title="Lowest price"
            description="Jamex Motors achieves the lowest price for a car by avoiding the hidden costs that directly increase the overall value of the used car."
            status="process"
          />
          <el-step
            title="Prompt delivery"
            description="Transportation has become faster and easier thanks to our public sale houses near the harbor. We have a strong connection with the Sri Lankan shipping company."
            status="process"
          />
          <el-step
            title="Well paid network"
            description="Our well-distributed community of more than 140 public housing in Japan provides 145,000 vehicles to our customers each week."
            status="process"
          />
          <el-step
            title="Full buyer support"
            description="We have 24/7 buyer support exclusively for clients who want to get informationon the safe transportation of vehicles in Sri Lanka. With the support of Sri Lanka's Logistics Agency, additional secure customs clearance is permitted."
            status="process"
          />
        </StepperOne>
      </div>
    </div>
  </div>
</template>
