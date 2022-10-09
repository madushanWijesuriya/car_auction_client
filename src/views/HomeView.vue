<script setup>
import MenuNavbar from "../components/MenuNavbar.vue";
import CarouselType01 from "../components/CarouselType01.vue";
import FilterBox from "../components/FilterBox.vue";
import CardTwo from "../components/Cards/CardTwo.vue";
import CardOne from "../components/Cards/CardOne.vue";

const getImageUrl = (name) => {
  if (!name) return "";
  return new URL(name, import.meta.url).href;
};
</script>

<template>
  <div class="home">
    <div class="main-section-01">
      <div class="top">
        <div class="right-fade"></div>
        <!-- <MenuNavbar class="menu-navbar" /> -->
      </div>
      <div class="bottom">
        <div class="content-01">
          <CarouselType01 />
        </div>
        <div class="content-02 mt-8 mb-8 sm:mt-20 sm:mb-24">
          <div class="container px-4 sm:mx-auto">
            <FilterBox />
          </div>
        </div>
        <div class="content-03"></div>
      </div>
    </div>
    <div class="main-section-02 text-xs sm:text-2xl">
      <div class="content-01">
        <div class="grid place-items-center color-02 tracking-5 font-bold">
          WHAT WE DO
        </div>
        <div
          class="grid place-items-center color-01 font-bold tracking-4 text-2xl sm:text-5xl"
        >
          Why Choose Us?
        </div>
      </div>
      <div
        class="content-02 text-sm sm:text-2xl grid place-items-center mt-3 sm:mt-11"
      >
        <div class="container px-4 sm:px-8 md:px-36 text-center color-04">
          We are a strong member of all Japanese Auction houses and hence will
          assure you the purchase of the most useful cars with cost-saving.
          Whether you are a car dealer or importer we have the best choices for
          you
        </div>
      </div>
      <div class="content-03">
        <div class="container">
          <div
            class="grid gap-6 sm:gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-8 mt-7 sm:mt-20"
          >
            <CardTwo
              :iconPath="'path'"
              :title="'Low Pricing'"
              :content="'Japanese cars from Auction House Japan are cheaper as compared to the other exporters as we do not take a huge cost of car keeping in the yard.'"
            >
              <template v-slot:icon>
                <img
                  :src="getImageUrl('../assets/images/icons/card-icon-01.svg')"
                  alt="icon-01"
                />
              </template>
            </CardTwo>
            <CardTwo
              :iconPath="'path'"
              :title="'Safety'"
              :content="'The vehicle trading market in Japan is the most trustworthy all over the world because exporters are accountable for their trading'"
            >
              <template v-slot:icon>
                <img
                  :src="getImageUrl('../assets/images/icons/card-icon-02.svg')"
                  alt="icon-02"
                />
              </template>
            </CardTwo>
            <CardTwo
              :iconPath="'path'"
              :title="'Transparent deals'"
              :content="'You will get the auction and inspection sheet before placing the bid to assure maximum transparency'"
            >
              <template v-slot:icon>
                <img
                  :src="getImageUrl('../assets/images/icons/card-icon-03.svg')"
                  alt="icon-03"
                />
              </template>
            </CardTwo>
            <CardTwo
              :iconPath="'path'"
              :title="'More options'"
              :content="'Duis aute irure dolor reprehen derit in voluptat velit.'"
            >
              <template v-slot:icon>
                <img
                  :src="getImageUrl('../assets/images/icons/card-icon-04.svg')"
                  alt="icon-04"
                />
              </template>
            </CardTwo>
          </div>
        </div>
      </div>
      <div class="content-04 container">
        <div
          class="grid place-items-center color-01 text-2xl sm:text-5xl font-bold mt-9 sm:mt-16"
        >
          New Arrival
        </div>
        <div
          class="grid gap-6 sm:gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-8 mt-7 sm:mt-20"
        >
          <CardOne />
          <CardOne />
          <CardOne />
          <CardOne />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/homeView.scss";
</style>
