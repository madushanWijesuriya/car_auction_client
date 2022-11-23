<script setup>
import Filter from "../components/StockList/Filter/Filter.vue";
import CustomerFeedback from "../components/StockList/CustomerFeedback/CustomerFeedback.vue";
import VehicalList from "../components//StockList/VehicalList/VehicalList.vue";

const getImageUrl = (name) => {
    if (!name) return "";
    return new URL(name, import.meta.url).href;
};
</script>
<template>
    <div class="text-white text-sm p-2">
        <div class="flex flex-col gap-5 justify-center items-center w-full m">
            <div class="relative w-full md:px-[5%]">
                <img class="lg:rounded-[15px] md:rounded-[10px] w-full h-[70vw] lg:h-[400px] xl:h-[20%] object-cover"
                    src="@/assets/images/stock-list/vehical-list/stock-list-main.svg" />
                <div
                    class="absolute w-full text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 md:px-[12%]">
                    <div class="flex flex-col gap-3 xl:gap-2 text-white w-full xl:w-[50%]">
                        <div>
                            <h1 class="font-header-photo">Toyota
                               
                            </h1>
                            <p class="font-header-photo-2">
                                Gazoo Racing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="font-main-title text-center">Search Japan Used Vehicles</p>
            <div class="flex flex-col px-4 lg:flex-row gap-2 xl:px-[2vw] w-full">
                <Filter />
                <VehicalList />
                <CustomerFeedback />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/stock-list/vehicalDetailsCard.scss";
</style>