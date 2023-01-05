<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  onUpdated,
  reactive,
} from 'vue'
import Recapture from '../components/recapture/Recapture.vue'
import { useRoute } from 'vue-router'
import httpResource from '../http/httpResource'
import { useToast } from 'vue-toastification'
const toast = useToast()

const input = ref('')
const timer = ref(null)
const textarea1 = ref('')
const textarea2 = ref('')
let countryList = ref([])
let vehicleData = ref([])
const base_url_api = import.meta.env.VITE_BASE_URL_API
let imagesFromBE = ref([])
let imagesList = computed(() => {
  return imagesFromBE.value
})
let currentId = ref(1)
const currentImage = computed(() => {
  if (!currentId.value || !visibleImageList.value) return { id: -99, name: '' }
  return visibleImageList.value.find((i) => i.id === currentId.value)
})
const visibleImageList = computed(() => {
  if (!imagesList.value || (imagesList.value && imagesList.value.length < 1))
    return []
  return imagesList.value.slice(0, 6)
})
function changeImage(val) {
  if (!visibleImageList.value) return
  if (val && val === 'reverse') {
    if (!visibleImageList.value.some((i) => i.id === currentId.value - 1)) {
      currentId.value = 1
    } else {
      currentId.value -= 1
    }
    return
  }
  if (!visibleImageList.value.some((i) => i.id === currentId.value + 1)) {
    currentId.value = 1
  } else {
    currentId.value += 1
  }
}

const route = useRoute()

const postData = reactive({
  name: null,
  vehicle_id: null,
  country_id: null,
  email: null,
  cell_no: null,
  port_name: null,
  mobile_no: null,
  message: null,
})

const storeInquery = async () => {
  try {
    const response = await httpResource.post('/api/guest/inquery', {
      name: postData?.name,
      vehicle_id: postData?.vehicle_id,
      country_id: postData?.country_id,
      email: postData?.email,
      cell_no: postData?.cell_no,
      port_name: postData?.port_name,
      mobile_no: postData?.mobile_no,
      message: postData?.message,
    })
    if (response.status === 200) {
      toast.success('Successfully Added', {
        timeout: 2000,
      })
      resetForm()
    }
  } catch (error) {
    console.error(error?.response?.data?.message)
  }
}

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}

function resetForm() {
  postData.name = null
  postData.country_id = null
  postData.email = null
  postData.cell_no = null
  postData.port_name = null
  postData.mobile_no = null
  postData.message = null
}

const getCountriesforSelect = async () => {
  try {
    const response = await httpResource.get('/api/resources/countries')
    countryList.value = response.data.data.map((d) => ({
      ...d,
      label: d.name,
    }))
  } catch (error) {
    console.error(error)
  }
}
const getVehicleDetails = async () => {
  try {
    const response = await httpResource.get(
      '/api/guest/vehicle/' + postData.vehicle_id
    )
    vehicleData.value = response.data.data
    imagesFromBE.value = response.data.data.images.map((i) => {
      return {
        ...i,
        id: i.id,
        name: base_url_api + i.full_url,
      }
    })
    /** output
     * [
     *  {
     *    id: 1,
     *    name: 'image URL'
     *  },
     * ]
     */
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  getCountriesforSelect()
  postData.vehicle_id = route.params.id
  getVehicleDetails()
  timer.value = setInterval(changeImage, 3000)
})
onBeforeUnmount(function () {
  clearInterval(timer.value)
})
onUpdated(function () {
  clearInterval(timer.value)
  timer.value = setInterval(changeImage, 3000)
})
const getImageUrl = (name) => {
  if (!name) return ''
  return name
}
</script>
<template>
  <div class="flex flex-col justify-center items-lcenters gap-2 w-full px-5 md:px-[60px] lg:px-[80px] xl:px-[120px]">
    <div class="flex flex-col gap-2 lg:gap-2 lg:flex-row">
      <div class="flex gap-3 items-center">
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1L1 7.5L8 14" stroke="#08246C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p class="font-vehical-name">
          {{ vehicleData?.make_id?.name }}
          {{ vehicleData?.model_id?.name }} {{ vehicleData?.model_id?.year }}
        </p>
      </div>
      <div class="flex grow flex-row justify-between">
        <div class="flex items-center justify-center">
          <div class="bg-blue-800 rounded-[19px] font-now-on-sales ml-5 px-4 py-1">
            Now on Sale
          </div>
        </div>
        <div class="flex flex-row gap-2 items-end font-print-share">
          <div class="flex gap-1 items-center lg:hidden">
            <div class="flex">Print</div>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.76923 12.4167H9.23077V10.25H2.76923V12.4167ZM2.76923 7H9.23077V3.75H8.07692C7.88462 3.75 7.72115 3.67101 7.58654 3.51302C7.45192 3.35503 7.38462 3.16319 7.38462 2.9375V1.58333H2.76923V7ZM11.0769 7.54167C11.0769 7.39497 11.0312 7.26801 10.9399 7.16081C10.8486 7.0536 10.7404 7 10.6154 7C10.4904 7 10.3822 7.0536 10.2909 7.16081C10.1995 7.26801 10.1538 7.39497 10.1538 7.54167C10.1538 7.68837 10.1995 7.81532 10.2909 7.92253C10.3822 8.02973 10.4904 8.08333 10.6154 8.08333C10.7404 8.08333 10.8486 8.02973 10.9399 7.92253C11.0312 7.81532 11.0769 7.68837 11.0769 7.54167ZM12 7.54167V11.0625C12 11.1359 11.9772 11.1993 11.9315 11.2529C11.8858 11.3065 11.8317 11.3333 11.7692 11.3333H10.1538V12.6875C10.1538 12.9132 10.0865 13.105 9.95192 13.263C9.81731 13.421 9.65385 13.5 9.46154 13.5H2.53846C2.34615 13.5 2.18269 13.421 2.04808 13.263C1.91346 13.105 1.84615 12.9132 1.84615 12.6875V11.3333H0.230769C0.168269 11.3333 0.114183 11.3065 0.0685096 11.2529C0.0228365 11.1993 0 11.1359 0 11.0625V7.54167C0 7.09592 0.135817 6.71365 0.407452 6.39486C0.679087 6.07606 1.00481 5.91667 1.38462 5.91667H1.84615V1.3125C1.84615 1.08681 1.91346 0.894965 2.04808 0.736979C2.18269 0.578993 2.34615 0.5 2.53846 0.5H7.38462C7.57692 0.5 7.78846 0.556424 8.01923 0.669271C8.25 0.782118 8.43269 0.917535 8.56731 1.07552L9.66346 2.36198C9.79808 2.51997 9.91346 2.73438 10.0096 3.00521C10.1058 3.27604 10.1538 3.52431 10.1538 3.75V5.91667H10.6154C10.9952 5.91667 11.3209 6.07606 11.5925 6.39486C11.8642 6.71365 12 7.09592 12 7.54167Z"
                fill="black" />
            </svg>
          </div>
          <div class="flex flex-wrap gap-1 justify-center items-center">
            <div class="flex">Share</div>
            <div>
              <svg width="15" height="15" fill="" viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5764 9.58191C3.21907 9.5801 3.83743 9.34812 4.30826 8.93219L8.90794 11.4312C8.75382 12.0038 8.82176 12.61 9.09932 13.1388C9.37687 13.6677 9.84547 14.0838 10.4193 14.311C10.9932 14.5382 11.6339 14.5613 12.2242 14.3761C12.8146 14.1908 13.3149 13.8096 13.6338 13.3023C13.9527 12.7949 14.0687 12.1953 13.9606 11.6133C13.8525 11.0312 13.5276 10.5057 13.0453 10.1328C12.5629 9.75993 11.9555 9.5647 11.3342 9.58285C10.7128 9.601 10.1192 9.83132 9.66181 10.2316L5.06213 7.73266C5.11063 7.558 5.13708 7.37706 5.14149 7.19611L9.66035 4.74045C10.0955 5.11685 10.6535 5.33952 11.2408 5.37111C11.8281 5.4027 12.409 5.24128 12.886 4.91393C13.363 4.58658 13.707 4.11323 13.8605 3.57327C14.0139 3.03332 13.9674 2.45962 13.7287 1.94842C13.49 1.43723 13.0736 1.01963 12.5495 0.765698C12.0254 0.511764 11.4253 0.436941 10.85 0.553781C10.2748 0.670622 9.75925 0.972017 9.38998 1.4074C9.02071 1.84279 8.82016 2.38568 8.82197 2.94499C8.82491 3.14619 8.85356 3.3467 8.90794 3.54091L4.73149 5.80935C4.48929 5.45309 4.15378 5.16287 3.75792 4.96721C3.36207 4.77154 2.91949 4.67716 2.47366 4.69333C2.02783 4.7095 1.5941 4.83567 1.21507 5.05945C0.836048 5.28323 0.524773 5.59691 0.311829 5.96968C0.0988857 6.34244 -0.00839991 6.76147 0.000513382 7.18559C0.00942667 7.6097 0.134232 8.02432 0.362668 8.3887C0.591103 8.75308 0.91531 9.05469 1.30343 9.26389C1.69156 9.47309 2.13025 9.58269 2.5764 9.58191Z"
                  fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-3 justify-center mt-3">
      <div class="flex flex-col gap-4 lg:gap-4 lg:w-[50%]">
        <div class="w-full relative h-[529.86px]">
          <div v-if="currentImage">
            <img class="rounded-lg w-full h-[529.86px] object-cover" :src="currentImage?.name" />
          </div>
          <div v-else>
            <img class="rounded-lg w-full h-[529.86px] object-cover" :src="imagesFromBE[0]?.name" />
          </div>
          <div class=" absolute w-full bottom-[48%] z-10">
            <div class="flex flex-row w-full justify-between px-5">
              <svg class=" cursor-pointer" width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4639 2.73041L2.17236 20.6395L19.4639 38.5486" stroke="white" stroke-width="4"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg class=" cursor-pointer" width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.47653 2.73041L19.7681 20.6395L2.47653 38.5486" stroke="white" stroke-width="4"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="hidden absolute md:flex w-full bottom-[5%] left-[5%] z-10">
            <img class="rounded-lg object-cover" src="@/assets/images/vehicalDetails/watermark.svg" />
          </div>
        </div>
        <div class="w-full flex gap-2">
          <div class="flex items-center cursor-pointer" @click="changeImage('reverse')">
            <svg width="2vw" height="5vh" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.2915 38.6207L2 20.7116L19.2915 2.80249" stroke="#08246C" stroke-width="4"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="grid grid-cols-6 gap-3 grow">
            <div v-for="image in visibleImageList" :key="image.id">
              <img class="rounded-lg w-full cursor-pointer" :src="getImageUrl(image?.name)"
                @click="currentId = image.id" />
            </div>
          </div>
          <div class="flex items-center cursor-pointer" @click="changeImage">
            <svg width="2vw" height="5vh" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.70846 2.80249L20 20.7116L2.70846 38.6207" stroke="#08246C" stroke-width="4"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="space-y-3 p-3">
          <p class="font-title-1">Description</p>
          <p class="font-para-1">
            {{ vehicleData.description }}
          </p>
        </div>
      </div>

      <div class="border w-full border-[#E7E7E7] p-4 rounded-md lg:flex-1">
        <div class="flex justify-between gap-2 items-center">
          <p class="font-card-title-1">Specifications</p>
          <div class="flex flex-col gap-1 lg:hidden">
            <p class="font-car-price-title">Car Price :</p>
            <p class="font-car-price">¥ {{ vehicleData?.fob_price }}</p>
          </div>
          <div class="hidden underline lg:flex flex-row items-center gap-2">
            <p class="copy-to-clipboard">Copy to Clipboard</p>
            <div>
              <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.8002 0.600006C3.55193 0.599876 3.30974 0.676748 3.107 0.820029C2.90426 0.963309 2.75095 1.16594 2.6682 1.40001H1.4002C1.08194 1.40001 0.776711 1.52643 0.551667 1.75148C0.326623 1.97652 0.200195 2.28175 0.200195 2.60001V12.2C0.200195 12.5183 0.326623 12.8235 0.551667 13.0485C0.776711 13.2736 1.08194 13.4 1.4002 13.4H4.4698C4.34942 13.147 4.26797 12.8773 4.2282 12.6H1.4002C1.29411 12.6 1.19237 12.5579 1.11735 12.4828C1.04234 12.4078 1.0002 12.3061 1.0002 12.2V2.60001C1.0002 2.49392 1.04234 2.39218 1.11735 2.31716C1.19237 2.24215 1.29411 2.20001 1.4002 2.20001H2.6682C2.75095 2.43407 2.90426 2.6367 3.107 2.77998C3.30974 2.92326 3.55193 3.00014 3.8002 3.00001H6.2002C6.44846 3.00014 6.69065 2.92326 6.89339 2.77998C7.09613 2.6367 7.24944 2.43407 7.3322 2.20001H8.6002C8.70628 2.20001 8.80802 2.24215 8.88304 2.31716C8.95805 2.39218 9.0002 2.49392 9.0002 2.60001V7.00001H9.8002V2.60001C9.8002 2.28175 9.67377 1.97652 9.44872 1.75148C9.22368 1.52643 8.91846 1.40001 8.6002 1.40001H7.3322C7.24944 1.16594 7.09613 0.963309 6.89339 0.820029C6.69065 0.676748 6.44846 0.599876 6.2002 0.600006H3.8002ZM3.4002 1.80001C3.4002 1.69392 3.44234 1.59218 3.51735 1.51716C3.59237 1.44215 3.69411 1.40001 3.8002 1.40001H6.2002C6.30628 1.40001 6.40802 1.44215 6.48304 1.51716C6.55805 1.59218 6.6002 1.69392 6.6002 1.80001C6.6002 1.90609 6.55805 2.00783 6.48304 2.08285C6.40802 2.15786 6.30628 2.20001 6.2002 2.20001H3.8002C3.69411 2.20001 3.59237 2.15786 3.51735 2.08285C3.44234 2.00783 3.4002 1.90609 3.4002 1.80001ZM6.6002 7.80001C6.17585 7.80001 5.76888 7.96858 5.46882 8.26864C5.16877 8.56869 5.0002 8.97566 5.0002 9.40001V12.6C5.0002 13.0244 5.16877 13.4313 5.46882 13.7314C5.76888 14.0314 6.17585 14.2 6.6002 14.2H10.6002C11.0245 14.2 11.4315 14.0314 11.7316 13.7314C12.0316 13.4313 12.2002 13.0244 12.2002 12.6V9.40001C12.2002 8.97566 12.0316 8.56869 11.7316 8.26864C11.4315 7.96858 11.0245 7.80001 10.6002 7.80001H6.6002ZM6.6002 12.2C6.6002 12.0939 6.64234 11.9922 6.71735 11.9172C6.79237 11.8421 6.89411 11.8 7.0002 11.8H10.2002C10.3063 11.8 10.408 11.8421 10.483 11.9172C10.5581 11.9922 10.6002 12.0939 10.6002 12.2C10.6002 12.3061 10.5581 12.4078 10.483 12.4828C10.408 12.5579 10.3063 12.6 10.2002 12.6H7.0002C6.89411 12.6 6.79237 12.5579 6.71735 12.4828C6.64234 12.4078 6.6002 12.3061 6.6002 12.2ZM6.6002 9.80001C6.6002 9.69392 6.64234 9.59218 6.71735 9.51716C6.79237 9.44215 6.89411 9.40001 7.0002 9.40001H10.2002C10.3063 9.40001 10.408 9.44215 10.483 9.51716C10.5581 9.59218 10.6002 9.69392 10.6002 9.80001C10.6002 9.90609 10.5581 10.0078 10.483 10.0828C10.408 10.1579 10.3063 10.2 10.2002 10.2H7.0002C6.89411 10.2 6.79237 10.1579 6.71735 10.0828C6.64234 10.0078 6.6002 9.90609 6.6002 9.80001Z"
                  fill="#08246C" />
              </svg>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full mt-2 lg:p-3">
          <div>
            <div class="flex gap-3 justify-between w-full">
              <p class="flex-1 font-card-line-title-1">Stock No.</p>
              <p class="flex-1 font-card-line-content font-card-line-content-spec">
                {{ vehicleData?.id }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Make</p>
              <p class="flex-1 font-card-line-content">
                BMW
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Type</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData?.body_type_id?.name }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Chassis No.</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData.chassis_no }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Mileage</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData.mileage }} KM
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Grade</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData.grade }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Transmission</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData.transmission_id?.name }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Seat</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData?.seats }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">2WD/4WD</p>
              <p class="flex-1 font-card-line-content">
                2
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Exterior Cond.</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData?.exterior_color_id?.name }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Year/Month</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData.make_at }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Model</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData?.model_id?.name }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Model Code</p>
              <p class="flex-1 font-card-line-content">{{}}</p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Engine</p>
              <p class="flex-1 font-card-line-content">{{ vehicleData?.engine_id?.name}}</p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Odometer</p>
              <p class="flex-1 font-card-line-content">Normal</p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Fuel</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData?.fuel_type_id?.name }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Drive</p>
              <p class="flex-1 font-card-line-content">
                Right Hand
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Doors</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData?.door_type_id?.name }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Color</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData?.exterior_color_id?.name }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Condition</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData?.isUsed? 'Used': 'Brand New' }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Interior Cond.</p>
              <p class="flex-1 font-card-line-content">   {{ vehicleData?.interior_cond }}</p>
            </div>
          </div>

          

          
        </div>

        <div class="flex flex-col w-full gap-2 justify-center mt-5">
            <p class="text-black font-freight-lable">Freight Calculator</p>
            <el-dropdown class="w-full">
              <el-button class="w-full">
                Sri Lanka-Hambantota<el-icon class="el-icon--right">
                  <ArrowRight />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>

        <div class="flex lg:flex-col lg:justify-start lg:items-start lg:gap-5 w-full justify-between items-end mt-5">
            <div class="font-total-price lg:flex lg:flex-col lg:items-end">
              <p>¥ {{ vehicleData?.market_price }}</p>
              <p class="font-total-price-label">Total Price with Shipping</p>
            </div>

            <div class="flex items-center gap-2 pt-6">
              <div>
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0C3.25267 0 0.214844 3.03781 0.214844 6.78516C0.214844 8.03836 0.460138 9.33272 1.16406 10.2656L7 18L12.8359 10.2656C13.4753 9.41827 13.7851 7.92028 13.7851 6.78516C13.7852 3.03781 10.7473 0 7 0ZM7 3.9298C8.57674 3.9298 9.85534 5.20842 9.85534 6.78514C9.85534 8.3619 8.57674 9.6405 7 9.6405C5.42326 9.6405 4.14466 8.3619 4.14466 6.78516C4.14466 5.20842 5.42326 3.9298 7 3.9298Z"
                    fill="#08246C" />
                </svg>
              </div>
              Japan > Yokohama
            </div>
          </div>

          <div v-if="currentImage">
            <a :href="currentImage?.name" download>
              <div class="w-full font-down-image text-center bg-[#08246C] rounded-md text-white py-4 px-2 mt-5">
                Download Images
              </div>
            </a>
          </div>
          <div v-else>
            <a :href="imagesFromBE[0]?.name" download>
              <div class="w-full font-down-image text-center bg-[#08246C] rounded-md text-white py-4 px-2 mt-5">
                Download Images
              </div>
            </a>
          </div>
      </div>

      <div class="lg:relative border w-full rounded-md space-y-3 lg:space-y-5 border-[#E7E7E7] p-4 lg:flex-1">
        <p class="font-quote-title">Get Free Quote</p>
        <div>
          <p class="font-quote-form-label">Name</p>
          <el-input v-model="postData.name" placeholder="Please input" />
        </div>
        <div>
          <p class="font-quote-form-label">Select Country</p>
          <el-select v-model="postData.country_id" class=" w-full" placeholder="Select" size="large">
            <el-option v-for="item in countryList" :key="item.id" :label="item.label" :value="item.id" />
          </el-select>
        </div>
        <div>
          <p class="font-quote-form-label">E-mail ID</p>
          <el-input v-model="postData.email" placeholder="Please input" />
        </div>
        <div>
          <p class="font-quote-form-label">Phone/Cell Number</p>
          <el-input v-model="postData.cell_no" placeholder="Please input" />
        </div>
        <div>
          <p class="font-quote-form-label">Port Name</p>
          <el-input v-model="postData.port_name" placeholder="Please input" />
        </div>
        <div>
          <p class="font-quote-form-label">Mobile/Whatsapp/Viber No</p>
          <el-input v-model="postData.mobile_no" placeholder="Please input" />
        </div>
        <div>
          <p class="font-quote-form-label">Message (0 / 250)</p>
          <el-input :autosize="{ minRows: 5, maxRows: 250 }" type="textarea" placeholder="Please input"
            v-model="postData.message" />
        </div>

        <div class="hidden lg:flex">
          <Recapture />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="flex lg:absolute bottom-0 gap-2 w-full lg:right-2 lg:left-0 lg:p-4">
          <div class="lg:hidden w-full font-down-image text-center bg-[#08246C] rounded-md text-white py-4 px-2 mt-5">
            Reset
          </div>
          <div
            class="w-full font-down-image text-center bg-[#08246C] cursor-pointer rounded-md text-white py-4 px-2 mt-5"
            @click="storeInquery">
            Send Inquiry
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import '@/assets/scss/vehicalDetails.scss';
</style>
