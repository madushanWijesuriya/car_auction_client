<script setup>
import CardThree from "../components/Cards/CardThree.vue";
</script>


<template>
  <div class="lg:container mt-8 lg:mx-auto lg:px-20">
    <h1 class="text-2xl md:text-6xl text-sky-800">Quality <span class="text-red-600">Control</span></h1>
    <div class="hero columns-1 xl:columns-2">
      <div class="hero-header">
        <p class="text-sm md:text-xl pt-5 pb-5">Top-quality, risk-free used Japanese cars are available at Japan Auto
          Auction.
          We are the Japan Auto
          Auction Agents who find ourselves fully responsible for providing customers with the quality that we have
          promised. Special care is given to the process of quality control. Shipment is done via a carefully designed
          system. Japan auto auction agents with our certified inspectors will mark the product with all the qualities
          that
          the seller claims.</p>
      </div>
      <div class="car-image mt-4">
        <img class="" src="@/assets/images/services-quality-control/image-60.png" />
      </div>
    </div>
    <div class="features">
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <CardThree title="Seamless Selection Process"
          desc="Japan's Auto Auction process of delivery allows easy selection of new cars in Japan. Regular listing of cars is performed. In contrast to this, the quality of the car might not be assured when the car is bought from the stock. Japan Auto Auction Agents allow you to get used cars and new cars in japan with a hassle-free system"
          src="../../assets/images/card-three/photo-two-smart-elegant-men-which-have-deal-about-car-they-are-doing-handshake.png">
        </CardThree>
        <CardThree title="Easy Inspection"
          desc="Auction house japan only bid on the cars with good condition. For this purpose, we perform complete homework by visiting the auction sites and performing a quality assessment for mechanical state and covered mileage.">
        </CardThree>
        <CardThree title="Chassis / Cleaning"
          desc="Used cars in the japan auction house are sent to the workshop where the process of maintenance and servicing is done. Vehicle parts are steam cleaned and washed. Special attention is given to every part including parts under the chassis. Used Japanese cars are sometimes given special treatment when needed.">
        </CardThree>
        <CardThree title="Maintenance Work"
          desc="Japan auto auction assures that if customers need specific work before shipment it is done with full care. For that purpose, Japan auto auction agents will perform the process of maintenance with customers that will be hare to the end-user with our customer care team members.">
        </CardThree>
        <CardThree title="Reconditioning of used cars Japan"
          desc="Reconditioning work of used Japanese cars is performed as per the requirement of the customer that may include lubrication, oil change, tire replacement, battery change, etc. All these surveys are delivered to our customers at the Japan auto auction.">
        </CardThree>
        <CardThree title="Panel beating with painting"
          desc="Our specialized units of painting and panel beating are maintained in our yards where experienced professionals are involved in the maintenance process. Activities that are performed include surface treatment, spray, colour mix for painting and bodywork. We perform all these procedures for the cars that are purchased for our customers.">
        </CardThree>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/servicesQualityControl.scss";
</style>
