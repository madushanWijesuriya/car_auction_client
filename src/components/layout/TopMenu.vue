<script setup></script>
<template>
  <div
    class="flex flex-row filter-form md:p-3 lg:p-10 px-2 md:px-3 lg:px-10 justify-between item-center w-full text-[#08246C]">
    <div class="visible flex items-center md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
        style="fill: #000000">
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
        <a class="font-semibold" href="https://car-auction-staging.netlify.app/">Home</a>
      </div>
      <div class="flex items-center gap-2">
        <a class="font-semibold" href="https://car-auction-staging.netlify.app/stock-list">Stock List</a>
      </div>
      <div class="">
        <el-dropdown class="w-full flex text-[#08246C] border-b-1 text-xl hover:border-red-600">
          <div class="flex items-center gap-2 font-semibold md:text-[12px] lg:text-[15px] xl:text-[20px]">
            Services
            <div class="w-[10px] h-[10px]">
              <svg width="100%" height="100%" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#08246C" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><a class="font-semibold"
                  href="https://car-auction-staging.netlify.app/countries-vehicle-details">Action Calender</a>
              </el-dropdown-item>
              <el-dropdown-item><a class="font-semibold"
                  href="https://car-auction-staging.netlify.app/services-auction-guru">Action Guide</a>
              </el-dropdown-item>
              <el-dropdown-item><a class="font-semibold"
                  href="https://car-auction-staging.netlify.app/services-auction-vs-stock">Action vs Stock</a>
              </el-dropdown-item>
              <el-dropdown-item><a class="font-semibold"
                  href="https://car-auction-staging.netlify.app/services-auction-houses">Action Houses</a>
              </el-dropdown-item>
              <el-dropdown-item><a class="font-semibold"
                  href="https://car-auction-staging.netlify.app/services-quality-control">Quality Control</a>
              </el-dropdown-item>
              <el-dropdown-item><a class="font-semibold"
                  href="https://car-auction-staging.netlify.app/countries-vehicle-details">Shipment Schedule</a>
              </el-dropdown-item>
              <el-dropdown-item><a class="font-semibold"
                  href="https://car-auction-staging.netlify.app/shipment-service">Shipment Schedule</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="font-semibold">
        <el-dropdown class="w-full flex text-[#08246C] font-semibold border-b-1 text-xl hover:border-red-600">
          <div class="flex items-center gap-2 font-semibold md:text-[12px] lg:text-[15px] xl:text-[20px]">
            Certifications
            <div class="w-[10px] h-[10px]">
              <svg width="100%" height="100%" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#08246C" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><a class="font-semibold"
                  href="https://car-auction-staging.netlify.app//countries-vehicle-details">EAA</a>
              </el-dropdown-item>
              <el-dropdown-item></el-dropdown-item>
              <el-dropdown-item>Intertek</el-dropdown-item>
              <el-dropdown-item>JAAI</el-dropdown-item>
              <el-dropdown-item>JEVIC</el-dropdown-item>
              <el-dropdown-item>VCA</el-dropdown-item>
              <el-dropdown-item>QISJ</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <a class="font-semibold" href="https://car-auction-staging.netlify.app/how-to-ordering">How to Order</a>
      <div class="flex items-center gap-2">
        <el-dropdown class="w-full flex text-[#08246C] font-semibold border-b-1 text-xl hover:border-red-600">
          <div class="flex items-center gap-2 font-semibold md:text-[12px] lg:text-[15px] xl:text-[20px]">
            About Us
            <div class="w-[10px] h-[10px]">
              <svg width="100%" height="100%" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#08246C" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><a class="font-semibold" href="https://car-auction-staging.netlify.app/why-us">Why
                  Us</a></el-dropdown-item>
              <el-dropdown-item><a class="font-semibold"
                  href="https://car-auction-staging.netlify.app/company-profile">Company Profile</a></el-dropdown-item>
              <el-dropdown-item><a class="font-semibold" href="https://car-auction-staging.netlify.app/about">Corparate
                  Philosophy</a></el-dropdown-item>
              <el-dropdown-item><a class="font-semibold"
                  href="https://car-auction-staging.netlify.app/customer-feedback">Customer's Feedback</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="font-semibold">
        <a class="font-semibold" href="https://car-auction-staging.netlify.app//reachus">Reach Us</a>
      </div>
    </div>
    <div class="hidden md:flex lg:flex flex-row gap-5 items-center justify-center">
      <div class="flex flex-row justify-center md:text-[12px] lg:text-[15px] xl:text-[20px] font-semibold items-center">
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
</template>
<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
  color: black;
}
</style>

