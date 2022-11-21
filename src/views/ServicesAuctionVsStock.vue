<script setup>
import CardThree from "../components/Cards/CardThree.vue";
</script>


<template>
  <div class="lg:container mt-8 lg:mx-auto lg:px-20">

    <div class="hero columns-1 xl:columns-2">
      <div class="hero-header">
        <h1 class="text-2xl md:text-6xl text-dark-800">Why you should buy next vehicle from Jamex auction house and
          <span class="text-red-600">not from stock</span>
        </h1>
      </div>
      <div class="car-image mt-4">
        <img class="" src="@/assets/images/services-quality-control/image-60.png" />
      </div>
    </div>
    <div class="features">
      <div class="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <CardThree title="Correct vehicle Information"
          desc="We provide authentic and unbiased information about the car we are offering. There are many auctions houses that will provide manipulated information about a car but at AHJ you do not have to worry about such manipulations."
          src="../../assets/images/card-three/photo-two-smart-elegant-men-which-have-deal-about-car-they-are-doing-handshake.png">
        </CardThree>
        <CardThree title="Low pricing"
          desc="We offer the best pricing than the cars present in stock. Most of the cars present in yards are expensive because of the cost of keeping and additional maintenance that is required to be performed regularly. However, when you buy from us, you always know the commission that is being charged from you after winning the bid">
        </CardThree>
        <CardThree title="Regular updating of the list"
          desc="Regular updating of the list is done and cars are freshly added. On the other hand, when the car is bought from the stock it has already passed a lot of time in the yard which may result in complications and rusting of parts">
        </CardThree>
        <CardThree title="No mileage hiding"
          desc="We will never do tempering of odometer for mileage hiding. We assure that the car you purchase is paid for the worth price. Odometer reading is kept real and the inspection process is done with authenticity to assure real mileage.">
        </CardThree>
        <CardThree title="Auction Sheet"
          desc="Before bidding you get a chance to see and inspect the auction sheet which is not possible when the car is being picked from the yard. The details are shared at both ends and independent analysis is performed.">
        </CardThree>
        <CardThree title="Variety of options"
          desc="We add around 145,000 vehicles each week to give you a chance to have access to a variety of vehicles. On the other hand car stock at the dealer’s yard would always be limited.">
        </CardThree>
        <CardThree title="Real pricing"
          desc="We always make the process of pricing real by giving you a chance to bid on the car of your choice. You can then do fright and customer charges to know the actual price that car is going to cost you when it reaches.">
        </CardThree>
        <CardThree title="Safety of the buyer"
          desc="The Japanese auto market is trustworthy ad the process of auction is accountable and transparent. It assures the safety of buyers. Stock dealers have to be real or otherwise they will be held accountable for their doings.">
        </CardThree>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/ServicesAuctionVsStock.scss";
</style>
