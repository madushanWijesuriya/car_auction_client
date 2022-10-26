<template>

  <div class="text-white text-sm">
    <div class="flex flex-row p-3 px-2 md:px-5 lg:px-10 justify-between item-center w-full text-[#08246C]">
      <div class="visible md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="24" height="24"
             viewBox="0 0 24 24"
             style=" fill:#000000;">
          <path
              d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
        </svg>
      </div>
      <div class="flex items-center">
        logo
      </div>
      <div class="hidden md:flex lg:flex flex-row gap-10 items-center">
        <div class="font-semibold">
          Home
        </div>
        <div class="font-semibold">
          Service
        </div>
        <div class="font-semibold">
          Countries
        </div>
        <div class="font-semibold">
          How to Order
        </div>
        <div class="font-semibold">
          About Us
        </div>
        <div class="font-semibold">
          Reach Us
        </div>
      </div>
      <div class="hidden md:flex lg:flex flex-row gap-2 items-center justify-center">
        <div class="flex flex-row justify-center font-semibold items-center">
          Log in
        </div>
        <div class="rounded bg-[#08246C] text-white p-1 px-3">
          Register
        </div>
      </div>
    </div>
    <div class="container mx-auto w-full">
      <div class="relative w-full">
        <img class="w-full rounded-[15px]" src="./abc.jpg" alt="Girl in a jacket">
        <img
            class=" rounded-[15px]"
            src="../assets/images/aboutus/aboutus-img-1.svg"
        />
        <div class="absolute text-white top-1/2 left-1/2 lg:top-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div class="flex flex-col md:flex-row lg:flex-row md:gap-2 lg:gap-2">
            <div>
              <h1 class="text-lg md:text-2xl lg:text-7xl">Corporate </h1>
            </div>
            <div>
              <h1 class="text-lg md:lg:text-7xl">Philosophy</h1>
            </div>
          </div>
          <p class="md:lg:text-lg text-xs">Our company strives to assure the provision of affordable and good quality cars to our</p>
          <p class="md:lg:text-lg text-xs"> customers all over the world.</p>
        </div>
      </div>
      <div class="py-5 mt-10">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="flex flex-col gap-3">
            <div class="flex justify-center text-lg font-bold text-bold text-[#08246C] items center">
              Vision Statement
            </div>
            <div class="flex justify-start items-center text-black">
              Jamex Auction House has the vision to create awareness about the used cars and their affordability to
              assure access of customers to these vehicles. We intend to improve our market share in the automobile
              industry and make our company the market leader.
            </div>

          </div>
          <div>
            <div class="text-center font-bold text-bold text-[#08246C] ">
              Core Values
            </div>
            <div class="grid-cols-4">
              <div class="text-start">
                We consider our customers as an asset and strive hard to keep them satisfied with our services. Our
                customers come at the top of our priority list and for that purpose, AHJ team has always promoted
                customer-driven corporate environment.
              </div>
            </div>
          </div>

          <div class="">

          </div>
        </div>
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
