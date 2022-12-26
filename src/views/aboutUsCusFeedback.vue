<script setup>
import { reactive, ref, computed } from 'vue'
const base_url = window.location.origin
const items = reactive([
  {
    id: 1,
    order: 1,
    avatar: '/customer-feeback/avatar1.svg',
    avatarAlt: 'image-1',
    para: 'I bought this car from Jamex Auction House at a very low price. The quality and service are satisfying and the process of shipping is safe. My account was well-managed by the account officer of the company I am glad that I have chosen this company.',
    name: 'Christina',
    location: 'Los Angeles, CA',
    selected: true,
  },
  {
    id: 2,
    order: 2,
    avatar: '/customer-feeback/avatar2.svg',
    avatarAlt: 'image-2',
    para: 'Thank you very much Jamex Auto Auctions for providing me with the wonderful service and a perfect car. I look forward to doing business with you in the future as well.',
    name: 'Pillar',
    location: 'Los Angeles, CA',
    selected: false,
  },
  {
    id: 3,
    order: 3,
    avatar: '/customer-feeback/avatar3.svg',
    avatarAlt: 'image-3',
    para: 'I usually do not write reviews to the companies but efficient services and honest behavior of the employees has made me to do so. I must say it is the best choice to go for AHJ if you intend to buy a used car from Japan.',
    name: 'Lara Madrigal',
    location: 'Los Angeles, CA',
    selected: false,
  },
])

let cardTimer = ref(null)

const activeObj = computed(() => {
  const active = items.find((i) => i.selected)
  return active || ''
})

cardTimer.value = setInterval(() => {
  changeImage()
}, 4000)

const changeImage = (image = null) => {
  const selectedItem = items.find((i) => i.selected)
  if (image) {
    clearInterval(cardTimer.value)
    const imageToChnage = items.find((item) => item.id === image.id)
    const indexToChnage =
      items.indexOf(imageToChnage) > -1 ? items.indexOf(imageToChnage) : 0
    items.forEach((item, index) => {
      if (index === indexToChnage) {
        item.selected = true
      } else {
        item.selected = false
      }
    })
    cardTimer.value = setInterval(changeImage, 4000)
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
  <div class="text-white text-sm customer-feedback">
    <div
      class="flex flex-col gap-10 justify-center items-center w-full md:px-[10%] md:mt-2 xl:mt-3 xl:mb-[15vh]"
    >
      <div class="relative w-full" data-aos="zoom-in">
        <img
          class="lg:rounded-[15px] md:rounded-[10px] w-full h-[300px] lg:h-[400px] xl:h-[20%] object-cover"
          src="@/assets/images/customer-feedback/cus-feedback.jpg"
        />
        <div
          class="absolute text-white top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2"
        >
          <div class="text-white">
            <div class="flex flex-col md:flex-col md:gap-2 lg:gap-2">
              <div>
                <h1 class="text-3xl lg:text-5xl xl:text-7xl font-Nunito">
                  Latest Customer's
                </h1>
              </div>
              <div>
                <h1 class="text-3xl lg:text-5xl xl:text-7xl font-Nunito">
                  Feedback
                </h1>
              </div>
            </div>
            <p class="mt-1 text-[12px] md:text-sm md:mt-3 font-Nunito">
              Africa, Asia, Europe, Caribbean, Oceania, CIS, etc., is the our
              most exporting country
            </p>
          </div>
        </div>
      </div>
      <div class="mx-16 md:mt-10 xl:mt-20">
        <p
          class="text-center text-[20px] xl:text-[36px] xl:leading-normal font-nunito font-bold text-[#08246C]"
        >
          Loved by businesses, and individuals across the globe.
        </p>
      </div>

      <div class="md:flex md:w-full md:px-10 lg:px-20 flex-row justify-between">
        <div
          v-for="item in items"
          :key="item.id"
          :class="[
            'review-card border-[1px] border-[#08246C] w-[355px] md:w-[20vw] xl:w-[20vw] h-[350px] md:h-[35vw]  xl:h-[20vw]  flex-col gap-2 space-y-5 py-7 px-5 rounded-lg flex md:static',
            activeObj.id === item.id ? 'show' : 'hide absolute',
          ]"
        >
          <div class="flex gap-1">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6004 0.779602C10.6726 0.543977 11.0062 0.543976 11.0784 0.779601L13.2408 7.8324C13.2729 7.93742 13.3699 8.00912 13.4798 8.00912H20.5067C20.7454 8.00912 20.8483 8.31161 20.6592 8.45721L14.9498 12.8533C14.8672 12.9169 14.8328 13.025 14.8633 13.1247L17.0382 20.2183C17.1096 20.4512 16.8396 20.6383 16.6466 20.4897L10.9919 16.1357C10.902 16.0665 10.7768 16.0665 10.6869 16.1357L5.0322 20.4897C4.83918 20.6383 4.56926 20.4512 4.64066 20.2183L6.8155 13.1247C6.84605 13.025 6.81158 12.9169 6.729 12.8533L1.01959 8.45721C0.830493 8.31161 0.933455 8.00912 1.17211 8.00912H8.19905C8.30889 8.00912 8.40587 7.93742 8.43806 7.8324L10.6004 0.779602Z"
                fill="#FBB040"
              />
            </svg>

            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6004 0.779602C10.6726 0.543977 11.0062 0.543976 11.0784 0.779601L13.2408 7.8324C13.2729 7.93742 13.3699 8.00912 13.4798 8.00912H20.5067C20.7454 8.00912 20.8483 8.31161 20.6592 8.45721L14.9498 12.8533C14.8672 12.9169 14.8328 13.025 14.8633 13.1247L17.0382 20.2183C17.1096 20.4512 16.8396 20.6383 16.6466 20.4897L10.9919 16.1357C10.902 16.0665 10.7768 16.0665 10.6869 16.1357L5.0322 20.4897C4.83918 20.6383 4.56926 20.4512 4.64066 20.2183L6.8155 13.1247C6.84605 13.025 6.81158 12.9169 6.729 12.8533L1.01959 8.45721C0.830493 8.31161 0.933455 8.00912 1.17211 8.00912H8.19905C8.30889 8.00912 8.40587 7.93742 8.43806 7.8324L10.6004 0.779602Z"
                fill="#FBB040"
              />
            </svg>

            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6004 0.779602C10.6726 0.543977 11.0062 0.543976 11.0784 0.779601L13.2408 7.8324C13.2729 7.93742 13.3699 8.00912 13.4798 8.00912H20.5067C20.7454 8.00912 20.8483 8.31161 20.6592 8.45721L14.9498 12.8533C14.8672 12.9169 14.8328 13.025 14.8633 13.1247L17.0382 20.2183C17.1096 20.4512 16.8396 20.6383 16.6466 20.4897L10.9919 16.1357C10.902 16.0665 10.7768 16.0665 10.6869 16.1357L5.0322 20.4897C4.83918 20.6383 4.56926 20.4512 4.64066 20.2183L6.8155 13.1247C6.84605 13.025 6.81158 12.9169 6.729 12.8533L1.01959 8.45721C0.830493 8.31161 0.933455 8.00912 1.17211 8.00912H8.19905C8.30889 8.00912 8.40587 7.93742 8.43806 7.8324L10.6004 0.779602Z"
                fill="#FBB040"
              />
            </svg>

            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6004 0.779602C10.6726 0.543977 11.0062 0.543976 11.0784 0.779601L13.2408 7.8324C13.2729 7.93742 13.3699 8.00912 13.4798 8.00912H20.5067C20.7454 8.00912 20.8483 8.31161 20.6592 8.45721L14.9498 12.8533C14.8672 12.9169 14.8328 13.025 14.8633 13.1247L17.0382 20.2183C17.1096 20.4512 16.8396 20.6383 16.6466 20.4897L10.9919 16.1357C10.902 16.0665 10.7768 16.0665 10.6869 16.1357L5.0322 20.4897C4.83918 20.6383 4.56926 20.4512 4.64066 20.2183L6.8155 13.1247C6.84605 13.025 6.81158 12.9169 6.729 12.8533L1.01959 8.45721C0.830493 8.31161 0.933455 8.00912 1.17211 8.00912H8.19905C8.30889 8.00912 8.40587 7.93742 8.43806 7.8324L10.6004 0.779602Z"
                fill="#FBB040"
              />
            </svg>
          </div>
          <div class="h-[200px] text-ellipsis overflow-hidden">
            <p class="text-[#333333] font-Nunito font-bold">
              {{ item.para }}
            </p>
          </div>
          <div class="flex gap-2 text-gray-900 h-[50px] items-end">
            <img
              class="lg:rounded-[15px] md:rounded-[10px] h-[40px] w-[40px] object-cover"
              :src="item.avatar"
            />
            <div>
              <p class="text-[16px] font-bold font-nunito">{{ item.name }}</p>
              <p class="text-[14px] font-nunito">{{ item.location }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-3 md:hidden">
        <div
          :class="[
            'dot rounded-full w-5 h-5 cursor-pointer',
            item.id === activeObj.id ? 'active-dot' : 'non-active-dot',
          ]"
          v-for="item in items"
          :key="item.id"
          @click="changeImage(item)"
        ></div>
      </div>

      <div
        class="md:hidden text-white text-center font-bold font-Nunito rounded-md text-md bg-[#08246C] w-[350px] py-4"
      >
        See More
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.customer-feedback {
  .dot {
    background-color: #fff;
    transition: all 0.4s;
  }
  .active-dot {
    background-color: #ffffff;
    border: 6px solid #08246c;
  }
  .non-active-dot {
    background-color: rgba(8, 36, 108, 0.2);
  }

  .review-card {
    // position: absolute;
    left: -1200px;
    transition: all 0.4s;
  }

  .review-card.show {
    left: 0;
  }

  .review-card.hide {
    left: -1200px;
  }
}
</style>
