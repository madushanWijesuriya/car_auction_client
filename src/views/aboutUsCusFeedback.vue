<script>
var base_url = window.location.origin;
</script>
<template>
    <div class="text-white text-sm">
        <div
            class="flex flex-row md:p-3 lg:p-10 px-2 md:px-3 lg:px-10 justify-between item-center w-full text-[#08246C]">
            <div class="visible flex items-center  md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
                    style=" fill:#000000;">
                    <path
                        d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z">
                    </path>
                </svg>
            </div>
            <div class="flex items-center">
                <div class="lg:w-[150px] xl:w-[250px] md:w-[120px]">
                    <img class="w-full" src="@/assets/images/logo.svg" />
                </div>

            </div>
            <div
                class="hidden md:flex flex-row md:gap-4 xl:gap-[2vw] items-center font-semibold md:text-[12px] lg:text-[15px] xl:text-[20px]">
                <div>
                    <a class="font-semibold" href="http://127.0.0.1:5173/">Home</a>
                </div>
                <div class="flex items-center gap-2">
                    <a class="font-semibold" href="http://127.0.0.1:5173/service">Services</a>
                    <div class="w-[10px] h-[10px]">
                        <svg width="100%" height="100%" viewBox="0 0 14 9" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L13 1" stroke="#08246C" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div class="font-semibold">
                    <a class="font-semibold" href="http://127.0.0.1:5173/countries-vehicle-details">Countries</a>
                </div>
                <div class="font-semibold">
                    How to Order
                </div>
                <div class="flex items-center gap-2">
                    <a class="font-semibold" href="http://127.0.0.1:5173/about">About Us</a>
                    <div class="w-[10px] h-[10px]">
                        <svg width="100%" height="100%" viewBox="0 0 14 9" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L13 1" stroke="#08246C" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div class="font-semibold">
                    <a class="font-semibold" href="http://127.0.0.1:5173/reachus">Reach Us</a>
                </div>
            </div>
            <div class="hidden md:flex lg:flex flex-row gap-5 items-center justify-center">
                <div
                    class="flex flex-row justify-center md:text-[12px] lg:text-[15px] xl:text-[20px] font-semibold items-center">
                    Log in
                </div>
                <div
                    class="rounded xl:rounded-lg bg-[#08246C] px-5 p-1 md:text-[12px] lg:text-[15px] xl:text-[20px] text-white lg:p-2 lg:px-8 xl:px-[3vw] xl:py-4">
                    Register
                </div>
            </div>
            <div class="visible flex items-center md:hidden">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V3.59C0 4.113 0.213 4.627 0.583 4.997L6 10.414V18C6.0002 18.1704 6.04387 18.3379 6.1269 18.4867C6.20992 18.6354 6.32955 18.7605 6.47444 18.8502C6.61934 18.9398 6.78471 18.9909 6.9549 18.9988C7.1251 19.0066 7.29447 18.9709 7.447 18.895L11.447 16.895C11.786 16.725 12 16.379 12 16V10.414L17.417 4.997C17.787 4.627 18 4.113 18 3.59V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0ZM10.293 9.293C10.2 9.38571 10.1262 9.4959 10.0759 9.61724C10.0256 9.73857 9.99981 9.86866 10 10V15.382L8 16.382V10C8.00019 9.86866 7.9744 9.73857 7.92412 9.61724C7.87383 9.4959 7.80004 9.38571 7.707 9.293L2 3.59V2H16.001L16.003 3.583L10.293 9.293Z"
                        fill="black" />
                </svg>

            </div>
        </div>
        <div
            class="flex flex-col gap-10 justify-center items-lcenters w-full md:px-[60px] lg:px-[80px] xl:px-[180px] md:mt-2 xl:mt-3">
            <div class="relative w-full">
                <img class="lg:rounded-[15px] md:rounded-[10px] w-full h-[300px] object-cover"
                    src="@/assets/images/customer-feedback/cus-feedback.svg" />
                <div class="absolute text-white top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2">
                    <div class="text-white">
                        <div class="flex flex-col md:flex-col md:gap-2 lg:gap-2">
                            <div>
                                <h1 class="text-3xl lg:text-5xl xl:text-7xl font-Nunito">Latest Customer's</h1>
                            </div>
                            <div>
                                <h1 class="text-3xl lg:text-5xl xl:text-7xl font-Nunito">Feedback</h1>
                            </div>
                        </div>
                        <p class="mt-1 text-[12px] md:text-sm md:mt-3 font-Nunito">Africa, Asia, Europe, Caribbean,
                            Oceania, CIS, etc., is the our most exporting country</p>
                    </div>
                </div>
            </div>
            <div class="mx-16">
               <p class="text-center text-[20px] font-nunito font-bold text-[#08246C]">Loved by businesses, and individuals across the globe.</p> 
            </div>
            <div class="border border-[#08246C] py-5 px-3 ">
                <div>
                    *****
                </div>
                <p class="text-[#333333]">
                    I bought this car from Jamex Auction House at a very low price. The quality and service are satisfying and the process of shipping is safe. My account was well-managed by the account officer of the company I am glad that I have chosen this company. Thank you very much Jamex Auto Auctions for providing me with the wonderful service and a perfect car. 
                </p>
            </div>
            <div class="text-gray-900">
                a
            </div>
            <div class="text-gray-900">
                a
            </div>
        </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
