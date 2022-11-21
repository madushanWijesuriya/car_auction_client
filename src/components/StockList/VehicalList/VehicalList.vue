<script setup>
import VehicalDetailCardVue from './components/VehicalDetailCard.vue';
</script>

<template>
    <div class="w-full flex flex-col gap-3 text-black p-3">
        <VehicalDetailCardVue />
        <VehicalDetailCardVue />
        <VehicalDetailCardVue />
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/stock-list/vehicalDetailsCard.scss";
</style>
