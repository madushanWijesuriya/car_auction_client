<template>
    <div
        class="flex flex-col  justify-center items-lcenters gap-2 w-full  px-5 md:px-[60px] lg:px-[80px] xl:px-[180px]">

        <div class="font-vehical-name flex gap-3 items-center">
            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L1 7.5L8 14" stroke="#08246C" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <p> BMW i8 EDrive 1.5L Sport 2018</p>
        </div>

        <div class="flex flex-col gap-2">

        <div class="flex justify-between">
                <div class=" bg-blue-800 rounded-[19px] font-now-on-sales px-3 py-1">
                    Now on Sale
                </div>
                <div class="flex flex-row gap-2 items-end font-print-share">
                    <div class="flex">
                        Print
                    </div>
                    <div class="flex">
                        Share
                    </div>
                </div>
            </div>
        </div>

        <div class="xl:flex xl:gap-10">
            <div class="flex flex-col gap-4 xl:flex-1">

                <div class="w-full">
                    <img class="rounded-lg w-full h-[300px] lg:h-[400px]  object-cover"
                        src="@/assets/images/vehicalDetails/car-1.svg" />
                </div>
                <div class=" w-full">
                    <div class="flex w-full gap-3">
                        <div>
                            <img class="rounded-lg  w-full h-[20vw]" src="@/assets/images/vehicalDetails/car-2.svg" />
                        </div>
                        <div>
                            <img class="rounded-lg  w-full h-[20vw]" src="@/assets/images/vehicalDetails/car-2.svg" />
                        </div>
                        <div>
                            <img class="rounded-lg  w-full h-[20vw]" src="@/assets/images/vehicalDetails/car-2.svg" />
                        </div>
                        <div>
                            <img class="rounded-lg  w-full h-[20vw]" src="@/assets/images/vehicalDetails/car-2.svg" />
                        </div>
                        <div>
                            <img class="rounded-lg  w-full h-[20vw]" src="@/assets/images/vehicalDetails/car-2.svg" />
                        </div>
                        <div>
                            <img class="rounded-lg  w-full h-[20vw] " src="@/assets/images/vehicalDetails/car-2.svg" />
                        </div>

                    </div>
                </div>
                <div class="space-y-3 p-3">
                    <p class="font-title-1">
                        Description
                    </p>
                    <p class="font-para-1">
                        BMW i8 Driving Experience. The BMW i8 has the ability to drive up to 34 miles around town as a
                        pure
                        electric car, with zero tailpipe emissions. You can select the EV button to ensure the i8
                        doesn't
                        fire
                        up the petrol engine.
                        <br><br>
                        The intelligent eDrive propulsion system of the BMW i8 combines the benefits of an electric
                        motor
                        and a
                        petrol engine as a plug-in hybrid to create an exceptional driving experience: Outstanding
                        efficiency
                        and maximum dynamics are simultaneously possible.
                    </p>

                </div>
            </div>

            <div class="border border-[#E7E7E7] p-3 xl:flex-1">
                <div class="flex justify-between items-center ">
                    <p class="font-card-title-1">
                        Specifications
                    </p>
                    <div class="flex flex-col gap-1">
                        <P class="font-car-price-title">
                            Car Price :
                        </P>
                        <P class="font-car-price">
                            ¥ 147,500.00
                        </P>

                    </div>
                </div>
                <div class="flex flex-col w-full mt-2">
                    <div>
                        <div class="flex gap-3 justify-between w-full">
                            <p class="flex-1 font-card-line-title">
                                Stock No.
                            </p>
                            <p class="flex-1">
                                22857T
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <p class="flex-1 font-card-line-title">
                                Type
                            </p>
                            <p class="flex-1 font-card-line-content">
                                BMW
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <p class="flex-1 font-card-line-title">
                                Chassis No.
                            </p>
                            <p class="flex-1 font-card-line-content">
                                i8
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <p class="flex-1 font-card-line-title">
                                Mileage
                            </p>
                            <p class="flex-1 font-card-line-content">
                                BMW-i8-94589
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <p class="flex-1 font-card-line-title">
                                Grade
                            </p>
                            <p class="flex-1 font-card-line-content">
                                983 KM
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <p class="flex-1 font-card-line-title">
                                Transmission
                            </p>
                            <p class="flex-1 font-card-line-content">
                                i
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <p class="flex-1 font-card-line-title">
                                Seats
                            </p>
                            <p class="flex-1 font-card-line-content">
                                AT
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <p class="flex-1 font-card-line-title">
                                2WD/4WD
                            </p>
                            <p class="flex-1 font-card-line-content">
                                4
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <p class="flex-1 font-card-line-title">
                                Exterior Cond.
                            </p>
                            <p class="flex-1 font-card-line-content">
                                2
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<style>
@import "@/assets/scss/vehicalDetails.scss";
</style>
