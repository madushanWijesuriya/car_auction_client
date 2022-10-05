<script setup>
import MenuNavbar from "../components/MenuNavbar.vue";
import CarouselType01 from "../components/CarouselType01.vue";
</script>

<template>
  <div class="home">
    <div class="top">
      <div class="right-fade"></div>
      <MenuNavbar class="menu-navbar" />
    </div>
    <div class="bottom">
      <div class="content-01">
        <CarouselType01 />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/homeView.scss";
</style>
