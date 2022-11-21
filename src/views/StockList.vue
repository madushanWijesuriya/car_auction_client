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
    <div class="text-white text-sm">
        <div class="flex flex-col gap-5 justify-center items-center w-full m">
            <div class="relative w-full md:px-[5%]">
                <img class="lg:rounded-[15px] md:rounded-[10px] w-full h-[300px] lg:h-[400px] xl:h-[20%] object-cover"
                    src="@/assets/images/company-profile/company-profile.svg" />
                <div
                    class="absolute w-full text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 md:px-[12%]">
                    <div class="flex flex-col gap-3 xl:gap-2 text-white w-full xl:w-[45%]">
                        <div class="">
                            <div>
                                <h1 class="font-baner-h1">Biggest Vehicle
                                    trading company of Japan.
                                </h1>
                            </div>
                        </div>
                        <p class="font-baner-h2 mt-1 md:mt-3">In Japan we have access to most of
                            the auction houses including those located in Yokohama, Tokyo, Chubu Industrial Region and
                            Nagoya.</p>
                        <p class="font-baner-number mt-5 md:mt-5">
                            5</p>
                        <p class="font-baner-number mt-1">
                            Cars in Stock</p>
                    </div>
                </div>
            </div>
            <p class="font-main-title text-center">Search Japan Used Vehicles</p>
            <div class="flex flex-col xl:flex-row gap-2 xl:px-[2vw] w-full">
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