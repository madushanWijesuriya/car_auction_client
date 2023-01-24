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
import { mdiShareVariant } from '@mdi/js'
import { ElNotification } from 'element-plus'
import { mdiTwitter } from '@mdi/js'
import { mdiFacebook } from '@mdi/js'
import { mdiWhatsapp } from '@mdi/js'
import { mdiFacebookMessenger } from '@mdi/js'

const toast = useToast()

const shareIcon = mdiShareVariant

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
const copyToClipboard = () => {
  const pageURL = location.href
  navigator.clipboard.writeText(pageURL)
  ElNotification({
    title: 'Success',
    message: 'URL copy to clipboard Successfully',
    type: 'success',
  })
}
const shareDialogVisible = ref(false)
const handleClose = () => {
  shareDialogVisible.value = false
}

const networks = computed(() => {
  const currentURL = location.href
  return [
    {
      network: 'twitter',
      pageURL: currentURL,
      title: 'Jamex auction house',
      description: '',
      quote: '',
      hashtags: 'JAMEXAUCTIONHOUSE, Vehicle',
      color: '#1da1f2',
      icon: mdiTwitter,
    },
    {
      network: 'facebook',
      pageURL: currentURL,
      title: 'Jamex auction house',
      description: '',
      quote: '',
      hashtags: 'JAMEXAUCTIONHOUSE, Vehicle',
      color: '#1877f2',
      icon: mdiFacebook,
    },
    {
      network: 'whatsapp',
      pageURL: currentURL,
      title: 'Jamex auction house',
      description: '',
      quote: '',
      hashtags: 'JAMEXAUCTIONHOUSE, Vehicle',
      color: '#25d366',
      icon: mdiWhatsapp,
    },
    {
      network: 'messenger',
      pageURL: currentURL,
      title: 'Jamex auction house',
      description: '',
      quote: '',
      hashtags: 'JAMEXAUCTIONHOUSE, Vehicle',
      color: '#0084ff',
      icon: mdiFacebookMessenger,
    },
  ]
})
</script>
<template>
  <el-dialog
    v-model="shareDialogVisible"
    title="Share with social media"
    width="35%"
    :before-close="handleClose"
  >
    <div class="flex gap-3 justify-center">
      <ShareNetwork
        v-for="(network, idx) in networks"
        :key="idx"
        :network="network.network"
        :url="network.pageURL"
        :title="network.title"
        :description="network.description"
        :quote="network.quote"
        :style="{ backgroundColor: network.color }"
      >
        <div class="flex p-1">
          <svg
            viewBox="0 0 24 24"
            :width="'20px'"
            :height="'20px'"
            class="inline-block"
          >
            <path fill="#FFF" :d="network.icon" />
          </svg>
          <span class="text-white">Share on {{ network.network }}</span>
        </div>
      </ShareNetwork>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="shareDialogVisible = false">Cancel</el-button>
      </span>
    </template>
  </el-dialog>

  <div
    class="flex flex-col justify-center items-lcenters gap-2 w-full px-5 md:px-[60px] lg:px-[80px] xl:px-[120px]"
  >
    <div class="flex flex-col gap-2 lg:gap-2 lg:flex-row">
      <div class="flex gap-3 items-center">
        <routerLink :to="$router.options.history.state.back">
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1L1 7.5L8 14"
              stroke="#08246C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </routerLink>
        <p class="font-vehical-name">
          {{ vehicleData?.make_id?.name }}
          {{ vehicleData?.model_id?.name }} {{ vehicleData?.model_id?.year }}
        </p>
      </div>
      <div class="flex grow flex-row justify-between items-center">
        <div class="flex items-center justify-center">
          <div
            class="bg-blue-800 rounded-[19px] font-now-on-sales ml-5 px-4 py-1"
          >
            Now on Sale
          </div>
        </div>
        <div
          class="ml-auto color-01 flex justify-end items-center font-semibold font-size-14 md:font-size-18 gap-3 cursor-pointer"
          @click="shareDialogVisible = true"
        >
          <span>Share</span>
          <span>
            <svg
              viewBox="0 0 24 24"
              :width="'20px'"
              :height="'20px'"
              class="inline-block"
            >
              <path fill="#000000" :d="shareIcon" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row items-center lg:items-stretch gap-3 justify-center mt-3"
    >
      <div class="flex flex-col gap-4 lg:gap-4 lg:w-[50%]">
        <div class="w-full relative current-image-wrapper">
          <div class="right-white" @click="changeImage">
            <svg
              width="22"
              height="41"
              viewBox="0 0 22 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.47653 2.73041L19.7681 20.6395L2.47653 38.5486"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="left-white" @click="changeImage('reverse')">
            <svg
              width="22"
              height="41"
              viewBox="0 0 22 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4639 2.73041L2.17236 20.6395L19.4639 38.5486"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div v-if="currentImage">
            <img
              class="rounded-lg w-full current-image h-[232px] sm:h-[350px] md:h-[530px]"
              :src="currentImage?.name"
            />
          </div>
          <div v-else>
            <img
              class="rounded-lg w-full current-image h-[232px] sm:h-[350px] md:h-[530px]"
              :src="imagesFromBE[0]?.name"
            />
          </div>
        </div>
        <div class="w-full flex gap-2 other-images-list-wrapper">
          <div
            class="flex items-center cursor-pointer"
            @click="changeImage('reverse')"
          >
            <svg
              width="2vw"
              height="5vh"
              viewBox="0 0 22 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2915 38.6207L2 20.7116L19.2915 2.80249"
                stroke="#08246C"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="grid grid-cols-6 gap-3 grow">
            <div v-for="image in visibleImageList" :key="image.id">
              <img
                class="rounded-lg w-full cursor-pointer"
                :src="getImageUrl(image?.name)"
                @click="currentId = image.id"
              />
            </div>
          </div>
          <div class="flex items-center cursor-pointer" @click="changeImage">
            <svg
              width="2vw"
              height="5vh"
              viewBox="0 0 22 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.70846 2.80249L20 20.7116L2.70846 38.6207"
                stroke="#08246C"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
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
          <span
            class="flex gap-2 ml-auto items-center cursor-pointer"
            @click="copyToClipboard"
          >
            <div class="underline copy-to-clipboard">Copy to Clipboard</div>
            <div>
              <img src="/clipboard-icon.svg" alt="clipboard-icon" />
            </div>
          </span>
          <div class="flex flex-col gap-1 lg:hidden">
            <p class="font-car-price-title">Car Price :</p>
            <p class="font-car-price">$ {{ vehicleData?.fob_price }}</p>
          </div>
        </div>
        <div class="flex flex-col w-full mt-2 lg:p-3">
          <div>
            <div class="flex gap-3 justify-between w-full">
              <p class="flex-1 font-card-line-title-1">Stock No.</p>
              <p
                class="flex-1 font-card-line-content font-card-line-content-spec"
              >
                {{ vehicleData?.id }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Make</p>
              <p class="flex-1 font-card-line-content">BMW</p>
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
              <p class="flex-1 font-card-line-content">2</p>
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
              <p class="flex-1 font-card-line-content">
                {{ vehicleData?.engine_id?.name }}
              </p>
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
              <p class="flex-1 font-card-line-content">Right Hand</p>
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
                {{ vehicleData?.isUsed ? 'Used' : 'Brand New' }}
              </p>
            </div>
            <div class="flex gap-3">
              <p class="flex-1 font-card-line-title-1">Interior Cond.</p>
              <p class="flex-1 font-card-line-content">
                {{ vehicleData?.interior_cond }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full gap-2 justify-center mt-5">
          <p class="text-black font-freight-lable">Freight Calculator</p>
          <el-dropdown class="w-full">
            <el-button class="w-full">
              {{ vehicleData?.shipping_country_id?.name }} -
              {{ vehicleData?.fort_id?.name
              }}<el-icon class="el-icon--right">
                <ArrowRight />
              </el-icon>
            </el-button>
          </el-dropdown>
        </div>

        <div
          class="flex lg:flex-col lg:justify-start lg:items-start lg:gap-5 w-full justify-between items-end mt-5"
        >
          <div class="font-total-price lg:flex lg:flex-col lg:items-end">
            <p>$ {{ vehicleData?.market_price }}</p>
            <p class="font-total-price-label">Total Price with Shipping</p>
          </div>

          <div class="flex items-center gap-2 pt-6">
            <div>
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.25267 0 0.214844 3.03781 0.214844 6.78516C0.214844 8.03836 0.460138 9.33272 1.16406 10.2656L7 18L12.8359 10.2656C13.4753 9.41827 13.7851 7.92028 13.7851 6.78516C13.7852 3.03781 10.7473 0 7 0ZM7 3.9298C8.57674 3.9298 9.85534 5.20842 9.85534 6.78514C9.85534 8.3619 8.57674 9.6405 7 9.6405C5.42326 9.6405 4.14466 8.3619 4.14466 6.78516C4.14466 5.20842 5.42326 3.9298 7 3.9298Z"
                  fill="#08246C"
                />
              </svg>
            </div>
            {{ vehicleData?.shipping_country_id?.name }} >
            {{ vehicleData?.fort_id?.name }}
          </div>
        </div>

        <div v-if="currentImage">
          <a :href="currentImage?.name" download>
            <div
              class="w-full font-down-image text-center bg-[#08246C] rounded-md text-white py-4 px-2 mt-5"
            >
              Download Images
            </div>
          </a>
        </div>
        <div v-else>
          <a :href="imagesFromBE[0]?.name" download>
            <div
              class="w-full font-down-image text-center bg-[#08246C] rounded-md text-white py-4 px-2 mt-5"
            >
              Download Images
            </div>
          </a>
        </div>
      </div>

      <div
        class="lg:relative border w-full rounded-md space-y-3 lg:space-y-5 border-[#E7E7E7] p-4 lg:flex-1"
      >
        <p class="font-quote-title">Get Free Quote</p>
        <div>
          <p class="font-quote-form-label">Name</p>
          <el-input v-model="postData.name" placeholder="Please input" />
        </div>
        <div>
          <p class="font-quote-form-label">Select Country</p>
          <el-select
            v-model="postData.country_id"
            class="w-full"
            placeholder="Select"
            size="large"
          >
            <el-option
              v-for="item in countryList"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            />
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
          <el-input
            :autosize="{ minRows: 5, maxRows: 250 }"
            type="textarea"
            placeholder="Please input"
            v-model="postData.message"
          />
        </div>

        <div class="hidden lg:flex">
          <Recapture />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div
          class="flex lg:absolute bottom-0 gap-2 w-full lg:right-2 lg:left-0 lg:p-4"
        >
          <div
            class="lg:hidden w-full font-down-image text-center bg-[#08246C] rounded-md text-white py-4 px-2 mt-5"
          >
            Reset
          </div>
          <div
            class="w-full font-down-image text-center bg-[#08246C] cursor-pointer rounded-md text-white py-4 px-2 mt-5"
            @click="storeInquery"
          >
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
