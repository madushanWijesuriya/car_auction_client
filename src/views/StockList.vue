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
    <div>
        <div
            class="flex flex-col justify-center items-lcenters w-full text-black">
            <div class="relative w-full lg:px-[5vw]">
                <img class="lg:rounded-[15px] md:rounded-[10px] w-full h-[40vh] md:h-auto object-cover"
                    src="@/assets/images/aboutus/aboutus-img-1.svg" />
                <div class="absolute text-white top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2">
                    <div class="text-white">
                        <div class="flex flex-col md:flex-row md:gap-2 lg:gap-2">
                            <div>
                                <h1 class="text-3xl lg:text-5xl xl:text-7xl font-Nunito">
                                    Corporate
                                </h1>
                            </div>
                            <div>
                                <h1 class="text-3xl lg:text-5xl xl:text-7xl font-Nunito">
                                    Philosophy
                                </h1>
                            </div>
                        </div>
                        <p class="mt-1 text-[12px] md:text-sm md:mt-3 font-Nunito">
                            Our company strives to assure the provision of affordable and good
                            quality cars to our customers all over the world.
                        </p>
                    </div>
                </div>
            </div>
            <div class="px-[25%] text-center">Search Japan Used Vehicles</div>
            <div class="flex flex-col p-2 lg:flex-row gap-2 lg:px-[2vw]">
                <Filter />
                <VehicalList />
                <CustomerFeedback />
            </div>
        </div>
    </div>
</template>

  