<script setup>
import { ref, reactive, computed, Transition } from 'vue'
const items = reactive([
  {
    id: 1,
    image: 'carousel/car02.svg',
    order: 1,
    alt: 'image-1',
    selected: false,
  },
  {
    id: 2,
    image: 'carousel/car01.svg',
    order: 2,
    alt: 'image-2',
    selected: false,
  },
  {
    id: 3,
    image: 'carousel/car04.svg',
    order: 3,
    alt: 'image-3',
    selected: true,
  },
])
const activeImageObj = computed(() => {
  const activeObj = items.find((i) => i.selected)
  return activeObj || ''
})
const getImageUrl = (name) => {
  if (!name) return ''
  return name
}

let imageTimer = ref(null)

imageTimer.value = setInterval(() => {
  changeImageTimer()
}, 4000)

const changeImageTimer = (toNext = false, toPre = false, image = null) => {
  const selectedItem = items.find((i) => i.selected)
  if (toNext || toPre || image) {
    // debugger
    clearInterval(imageTimer.value)
    let imageIndexToChnage = 0
    if (toNext) {
      imageIndexToChnage =
        items.length - 1 < items.indexOf(selectedItem) + 1
          ? 0
          : items.indexOf(selectedItem) + 1
    } else if (toPre) {
      imageIndexToChnage =
        -1 < items.indexOf(selectedItem) - 1
          ? items.indexOf(selectedItem) - 1
          : items.length - 1
    } else if (image) {
      const imageToChnage = items.find((item) => item.id === image.id)
      imageIndexToChnage =
        items.indexOf(imageToChnage) > -1 ? items.indexOf(imageToChnage) : 0
    }
    items.forEach((item, index) => {
      if (index === imageIndexToChnage) {
        item.selected = true
      } else {
        item.selected = false
      }
    })
    imageTimer.value = setInterval(changeImageTimer, 4000)
    return
  }
  let selIndex = -1
  if (selectedItem) {
    selIndex = items.indexOf(selectedItem)
  }
  if (items.length - 1 === selIndex) {
    items.forEach((item, index) => {
      if (index === 0) {
        item.selected = true
      } else {
        item.selected = false
      }
    })
  } else {
    items.forEach((item, index) => {
      if (index === selIndex + 1) {
        item.selected = true
      } else {
        item.selected = false
      }
    })
  }
}
</script>

<template>
  <div class="container mx-auto carousel-type-01 px-4">
    <!-- <div v-for="item in items" :key="item.id">
      <img :src="getImageUrl(item.image)" :alt="item.alt" />
    </div> -->
    <div class="">
      <div
        class="left-content grid grid-cols-1 sm:grid-cols-8 gap-3 sm:gap-y-0"
      >
        <div class="para-text-01 col-span-full">
          <span class="color-01 font-medium sub-text-one">Welcome to </span
          ><span class="color-02">Jamex Auction House</span>
        </div>
        <div
          class="para-text-02 color-03 font-semibold col-span-full sm:col-span-5"
        >
          We are a strong member of
          <span class="sub-text-one color-02">120+</span> Japanese Auction
          houses
        </div>
        <div
          class="para-text-03 order-1 sm:order-2 sm:pr-24 sm:pt-9 sm:col-span-5 col-span-full"
        >
          Jamex is an exporter of Japanese used cars, new cars and Japanese used
          construction equipment. We export quality used machinery and used cars
          from Japan to Asia, Africa, South America, Caribbean and Oceania. We
          attend Japanese Auto Auctions and Used Machinery Auctions. We are
          Japan's No1 Auto Auction Agent! Â Supplier of only quality used and
          new cars from Japan. JAMEX is Your best Supplier of japanese Brand new
          Cars! We can supply not only Japanese RHD Cars but we can also supply
          German and American LHD Cars!
        </div>
        <Transition appear name="slide-fade" mode="in-out">
          <div
            class="order-2 sm:order-1 sm:row-span-6 col-span-3 self-center xl:self-auto sm:mt-14 image-car relative"
          >
            <img
              class=""
              :src="getImageUrl(activeImageObj.image || '')"
              :alt="items[0].alt"
            />
            <div class="slider-controls hidden md:block absolute">
              <img
                src="/carousel/previous.svg"
                alt="previous"
                class="mb-8 cursor-pointer"
                @click="changeImageTimer(false, true, null)"
              />
              <div
                :class="[
                  'dot-control cursor-pointer rounded-full',
                  activeImageObj.id === item.id
                    ? 'bg-color-01 active-dot'
                    : 'non-active-dot',
                  { 'mt-4': idx !== 0 },
                ]"
                v-for="(item, idx) in items"
                :key="item.id"
                @click="changeImageTimer(false, false, item)"
              ></div>
              <img
                src="/carousel/next.svg"
                alt="next"
                class="mt-8 cursor-pointer"
                @click="changeImageTimer(true, false, null)"
              />
            </div>
          </div>
        </Transition>
        <div
          class="mt-4 grid grid-cols-5 gap-6 order-3 sm:order-3 sm:col-span-5 col-span-full"
        >
          <img
            src="@/assets/images/sub-logos/brand-logo-01.svg"
            alt="logo-01"
            class=""
          />
          <img
            src="@/assets/images/sub-logos/brand-logo-02.svg"
            alt="logo-02"
            class=""
          />
          <img
            src="@/assets/images/sub-logos/brand-logo-03.svg"
            alt="logo-03"
            class=""
          />
          <img
            src="@/assets/images/sub-logos/brand-logo-04.svg"
            alt="logo-04"
            class=""
          />
          <img
            src="@/assets/images/sub-logos/brand-logo-05.svg"
            alt="logo-05"
            class=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/carouselType01.scss';
</style>
