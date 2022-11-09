<template>
    <div class="text-white text-sm">
        <div class="flex flex-col gap-5 justify-center items-center w-full md:px-[5%] md:mt-2 xl:mt-3 xl:mb-[15vh]">
            <div class="relative w-full md:px-[5%]">
                <img class="lg:rounded-[15px] md:rounded-[10px] w-full h-[300px] lg:h-[400px] xl:h-[20%] object-cover"
                    src="@/assets/images/company-profile/company-profile.svg" />
                <div
                    class="absolute w-full text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 md:px-[12%]">
                    <div class="flex flex-col gap-3 xl:gap-4 text-white w-full xl:w-[60%]">
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
            <div class="p-3">
                <div class="border space-y-3 p-5 border-color-[#E7E7E7]">
                    <div class="font-h2">
                        Company Profile
                    </div>
                    <div class="font-para">
                        Jamex Auction House is the leading auto trading company of Japan that is working in the same
                        niche
                        for over 10 year. We have satisfied customers in different parts of the world including Europe
                        Oceania, Caribbean, Asia and Africa. The used car are provided at very competitive cost. Our
                        access
                        to all auction houses in Japan make us the most reliable and successful auto trading company. In
                        Japan we have access to most of the auction houses including those located in Yokohama, Tokyo,
                        Chubu
                        Industrial Region and Nagoya.

                        At Auction House Japan we have always explored and found export quality vehicles that are
                        properly
                        reconditioned. Our diversified team for automobile auction suppliers make us the best reputed
                        company for the supply of good quality vehicles in different parts of the world.

                        We can fulfill the needs of fully reconditioned cars with fit tires, replaced defective parts
                        and
                        new batteries. To improve the condition upholstery and engine are properly cleaned. Painting and
                        spraying are done. Although Sedans are well-maintained by their previous owners, we make sure to
                        perform reconditioning work as per the demand of the customers.

                        To get full knowledge of our services we will ask you to browse through the list of the cars in
                        our
                        auction house after which you will feel confident to peruse business and create an alliance with
                        us.
                        You can contact us anytime via phone calls. Emails and fax to gain additional information about
                        our
                        vehicle trading business.
                    </div>
                    <div class="space-y-3">
                        <div class="">
                            <p class="font-contact-details-headers">
                                Company Name

                            </p>
                            <p class="font-contact-details-line">
                                JAMEX CO., LTD
                            </p>
                        </div>
                        <div class="">
                            <p class="font-contact-details-headers">
                                MEMBER 

                            </p>
                            <p class="font-contact-details-line">
                                Tokyo Chamber Of Commerce Industry (C2725053).
                            </p>
                        </div>
                        <div class="">
                            <p class="font-contact-details-headers">
                                EXPORTING AREA 
                            </p>
                            <p class="font-contact-details-line">
                                AFRICA, ASIA, EUROPE, CARIBBEAN, OCEANIA, & CIS
                            </p>
                        </div>
                        <div class="">
                            <p class="font-contact-details-headers">
                                LOCATION 
                            </p>
                            <p class="font-contact-details-line">
                                140-0004 TOKYO, SHINAGAWAKU, MINAMI SHINAGAWA 1-3-6 JAPAN
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/companyProfile.scss";

@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}

@media only screen and (min-width: 640px) {

    /* For mobile phones: */
    [class*="font-baner-h1"] {
        font-size: 50px;
        line-height: 115%;
        color: white;
    }
}

@media only screen and (min-width: 1300px) {

    /* For mobile phones: */
    [class*="font-baner-h1"] {
        font-size: 64px;
        line-height: 73.6px;
        color: white;
    }

    [class*="font-baner-h2"] {
        font-size: 20px;
        line-height: 20px;
        color: white;
    }

    [class*="font-baner-number"] {
        font-size: 75px;
        line-height: 90px;
        color: white;
    }
}
</style>
  