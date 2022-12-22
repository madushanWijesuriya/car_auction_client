<script setup>
</script>

<template>
    <div class="vehicalCard">
        <div class="grid grid-rows-3 lg:grid-rows-1 grid-flow-col gap-2">
            <div class="row-span-1 lg:row-span-1">
                <div class="vehicalImg">
                    <img src="@/assets/images/stock-list/vehical-list/list-car-1.svg" alt="">
                </div>
            </div>

            <div class="col-span-1 lg:row-span-1">
                <div class="col-span-2">
                    <div class="middleInfo">
                        <h1>Toyota Mark II E-JZX100 1997/08</h1>
                    </div>
                    <div class="endInfo">
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="...">
                                <h4>Engine Capacity</h4>
                                <span>2,490 CC</span>
                            </div>
                            <div class="...">
                                <h4>Engine Capacity</h4>
                                <span>2,490 CC</span>
                            </div>
                            <div class="...">
                                <h4>Engine Capacity</h4>
                                <span>2,490 CC</span>
                            </div>
                            <div class="...">
                                <h4>Engine Capacity</h4>
                                <span>2,490 CC</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row-span-2 col-span-2">
                    <div class="grid grid-rows-1 grid-flow-col gap-2">
                        <button class="btn btn-primary"> Petrol</button>
                        <button class="btn btn-primary"> Auto Gear</button>
                        <button class="btn btn-primary"> Right Hand</button>
                        <button class="btn btn-primary"> 4WD</button>
                    </div>
                </div>
            </div>
            <div class="col-span-1 md:row-span-1">
                <div class="grid grid-cols-2 lg:grid-cols-1 gap-4">
                    <div class="...">
                        <h2>Car Price : </h2>
                        <span>¥ 4034.00</span>
                        <div class="location">
                            <div class="icon">Sri Lanka-Hambantota</div>
                        </div>
                    </div>
                    <div class="...">
                        <h2>¥ 5634.00</h2><span>Total Price with Shipping</span>
                    </div>
                </div>
                <div class="grid grid-rows-1 grid-flow-col gap-2">
                    <button class="btn btn-primary"> + Add to Wishlist</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/stock-list/newVehicalCard.scss";
</style>
