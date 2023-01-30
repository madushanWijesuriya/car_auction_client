<script setup>
import { ref } from 'vue'

const value1 = ref(4)
</script>

<template>
  <div class="ratings mt-3 md:mt-14 flex flex-wrap gap-8">
    <RatingCard data-aos="fade-left" data-aos-duration="1500">
      <template v-slot:header>
        <div
          class="w-full px-6 pt-6 pb-2 md:pb-6 flex items-center justify-start"
        >
          <div class="w-12 h-12">
            <img src="/home/profile-pic-01.png" alt="profile-pic" />
          </div>
          <div
            class="ml-4 text-[#171616] font-size-16 md:font-size-20 font-bold"
          >
            Hendric
          </div>
          <div class="mx-4 w-2 h-2 rounded bg-color-07"></div>
          <div><el-rate v-model="value1"  disabled /></div>
        </div>
      </template>
      <template v-slot:body>
        <div
          class="w-full pl-6 pr-6 md:pl-6 md:pr-4 pb-6 font-size-12 md:font-size-16 leading-4 md:leading-6"
        >
          It's quite tricky to get what we want before, but Recon gave us the
          best offer at a reasonable price
        </div>
      </template>
    </RatingCard>

    <RatingCard data-aos="fade-left" data-aos-duration="1500">
      <template v-slot:header>
        <div
          class="w-full px-6 pt-6 pb-2 md:pb-6 flex items-center justify-start"
        >
          <div class="w-12 h-12">
            <img src="/home/profile-pic-01.png" alt="profile-pic" />
          </div>
          <div
            class="ml-4 text-[#171616] font-size-16 md:font-size-20 font-bold"
          >
            Hendric
          </div>
          <div class="mx-4 w-2 h-2 rounded bg-color-07"></div>
          <div><el-rate v-model="value1"  disabled /></div>
        </div>
      </template>
      <template v-slot:body>
        <div
          class="w-full pl-6 pr-6 md:pl-6 md:pr-4 pb-6 font-size-12 md:font-size-16 leading-4 md:leading-6"
        >
          It's quite tricky to get what we want before, but Recon gave us the
          best offer at a reasonable price
        </div>
      </template>
    </RatingCard>

    <RatingCard data-aos="fade-left" data-aos-duration="1500">
      <template v-slot:header>
        <div
          class="w-full px-6 pt-6 pb-2 md:pb-6 flex items-center justify-start"
        >
          <div class="w-12 h-12">
            <img src="/home/profile-pic-01.png" alt="profile-pic" />
          </div>
          <div
            class="ml-4 text-[#171616] font-size-16 md:font-size-20 font-bold"
          >
            Hendric
          </div>
          <div class="mx-4 w-2 h-2 rounded bg-color-07"></div>
          <div><el-rate v-model="value1"  disabled /></div>
        </div>
      </template>
      <template v-slot:body>
        <div
          class="w-full pl-6 pr-6 md:pl-6 md:pr-4 pb-6 font-size-12 md:font-size-16 leading-4 md:leading-6"
        >
          It's quite tricky to get what we want before, but Recon gave us the
          best offer at a reasonable price
        </div>
      </template>
    </RatingCard>

    <RatingCard data-aos="fade-left" data-aos-duration="1500">
      <template v-slot:header>
        <div
          class="w-full px-6 pt-6 pb-2 md:pb-6 flex items-center justify-start"
        >
          <div class="w-12 h-12">
            <img src="/home/profile-pic-01.png" alt="profile-pic" />
          </div>
          <div
            class="ml-4 text-[#171616] font-size-16 md:font-size-20 font-bold"
          >
            Hendric
          </div>
          <div class="mx-4 w-2 h-2 rounded bg-color-07"></div>
          <div><el-rate v-model="value1" disabled/></div>
        </div>
      </template>
      <template v-slot:body>
        <div
          class="w-full pl-6 pr-6 md:pl-6 md:pr-4 pb-6 font-size-12 md:font-size-16 leading-4 md:leading-6"
        >
          It's quite tricky to get what we want before, but Recon gave us the
          best offer at a reasonable price
        </div>
      </template>
    </RatingCard>
  </div>
</template>

<style lang="scss" scoped></style>
