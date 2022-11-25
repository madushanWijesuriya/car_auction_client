<script setup>
import VehicalDetailCardVue from './components/VehicalDetailCard.vue';
import Pagination from '../pagination/pagination.vue';
</script>

<template>
    <div class="w-full flex flex-col gap-3 text-black">
        <VehicalDetailCardVue />
        <VehicalDetailCardVue />
        <VehicalDetailCardVue />
        <VehicalDetailCardVue />
        <VehicalDetailCardVue />
        <VehicalDetailCardVue />
        <VehicalDetailCardVue />
        <VehicalDetailCardVue />
        <VehicalDetailCardVue />
        <Pagination />
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/stock-list/vehicalDetailsCard.scss";
</style>
