<script setup>
import CardOne from "../components/Cards/CardOne.vue";
</script>
<template>
  <div class="container mx-auto">
    <br />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div v-for="item in [1, 2, 3, 4]" :key="item">
        <div class="..."><CardOne :price="100.0" /></div>
      </div>
    </div>
  </div>
</template>
<style></style>
