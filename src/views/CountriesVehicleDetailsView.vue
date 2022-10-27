<script setup>
const getImageUrl = (name) => {
  if (!name) return "";
  return new URL(name, import.meta.url).href;
};
</script>

<template>
  <div class="counties-vehicle-details-view">
    <div class="content-01 container mt-6">
      <div class="text-2xl font-semibold text-black px-4">
        <div>Fully <span class="color-02">Transparent</span></div>
        <div>Fully in <span class="color-02">Control</span></div>
      </div>
      <div class="text-sm font-normal text-black leading-5 mt-2 mb-4 px-4">
        say hello to an online shopping experience that pute you right in the
        driver's seat.
      </div>
      <div class="px-2">
        <img
          :src="
            getImageUrl(
              '../assets/images/countries-details/car-01-counties.jpg'
            )
          "
          alt="car-01-counties-details"
        />
      </div>
      <div>
        <div class="text-base font-medium text-black mb-4 px-2 mt-4">
          <div class="mb-1">Contact Us</div>
          <hr />
        </div>
        <div>
          <div class="mb-3">
            <div>Office</div>
            <div class="mt-3 color-01">
              123 Anywhere St., Any City, ST 12345
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div>
              <div>Phone Number</div>
              <div class="mt-3 color-01">+123-456-789 0</div>
            </div>
            <div>
              <div>Email</div>
              <div class="mt-3 color-01">hello@reallygreatsite.com</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <img
          :src="getImageUrl('../assets/images/countries-details/QR-code.jpg')"
          alt="QR-CODE"
        />
      </div>
    </div>
    <div class="content-02 container px-6 mt-6">
      <div class="color-01 mb-4 text-xl font-bold leading-7">
        Why do <span class="color-02 font-bold">Sri Lankan</span> customers
        choose JAMAX to buy a car in Japan?
      </div>
      <div class="text-sm leading-5 font-normal color-06">
        We will give you a member registration form that you can use to register
        with us. Jamex Auto Auctions will give you due assistance regarding the
        procedure with which you can place your bids and control them for the
        deposit, auction, and payments.
      </div>
    </div>
    <div class="content-03 container mt-8">
      <div class="color-01 px-6 text-xl font-bold mb-4">
        Process of Ordering
      </div>
      <div class="grid grid-cols-2 px-4">
        <div>tree</div>
        <div>content</div>
      </div>
    </div>
  </div>
</template>
