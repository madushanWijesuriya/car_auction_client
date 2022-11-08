<script setup>
import StepperOne from "../components/Steppers/StepperOne.vue";

const getImageUrl = (name) => {
  if (!name) return "";
  return new URL(name, import.meta.url).href;
};
</script>

<template>
  <div class="how-to-ordering">
    <div class="content-01 sm:container relative mt-2">
      <img
        :src="
          getImageUrl('../assets/images/how-to-order/how-to-order-header.jpg')
        "
        alt="header-image-01"
        class="sm:rounded-lg sm:shadow-lg"
      />
      <div class="absolute left-9 top-6 lg:top-56 text-white pr-9">
        <div class="font-bold">
          <div class="text-2xl md:text-5xl">The Process of</div>
          <div class="text-3xl md:text-6xl font-extrabold">Ordering</div>
        </div>
        <div class="text-xs leading-4 sm:text-2xl sm:leading-8 mt-5 sm:mt-9">
          To assure an outstanding experience of car purchase we provide you
          professional assistance for bid placing. You do not need to be an
          expert bidder for this purpose. We will guide you for the bidding
          procedure. Below are the steps to guide you.
        </div>
      </div>
    </div>
    <div class="content-02 container">
      <div
        class="text-xl sm:text-4xl text-color-01 font-bold mt-7 sm:mt-36 mb-6 sm:mb-8"
      >
        Process of Ordering
      </div>
      <div>
        <StepperOne>
          <el-step
            title="Free registration"
            description="We will give you a member registration form that you can use to register with us. Jamex Auto Auctions will give you due assistance regarding the procedure with which you can place your bids and control them for the deposit, auction, and payments."
          />
          <el-step title="Security Deposit/ Initial Deposit">
            <template v-slot:description>
              To patriciate in the process of the auction, you will have to
              deposit an initial fee for membership. Your bidding will start
              only after the security deposit payment is made. However, this
              payment is refundable and in case a successful bid is not made on
              your part full refund of the payment will be made. At the same
              time, this amount can also be used for future bidding if you wish
              so.

              <div class="car-prices-table mt-3 sm:mt-9">
                <table>
                  <tr class="text-xs sm:text-base">
                    <th class="pb-2">Car Price</th>
                    <th class="pb-2">Desposit</th>
                  </tr>
                  <tr class="text-xs sm:text-base">
                    <td>Under JPY 1,000,000</td>
                    <td>JPY 100,000</td>
                  </tr>
                  <tr class="text-xs sm:text-base">
                    <td>JPY 1,010,000~1,500,000</td>
                    <td>JPY 200,000</td>
                  </tr>
                  <tr class="text-xs sm:text-base">
                    <td>JPY 1,510,000~2,000,000</td>
                    <td>JPY 300,000</td>
                  </tr>
                  <tr class="text-xs sm:text-base">
                    <td>Above JPY 2,010,000</td>
                    <td>JPY 500,000</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                </table>
              </div>
            </template>
          </el-step>
          <el-step
            title="Bids placing"
            description="Once the participation fee is made, you will be assisted by our agents who will place bids on your behalf. These bids will be placed during the live session. Only successful bids will be paid at Jamex Auto Auction."
          />
          <el-step
            title="Results of Auction"
            description="At your assigned Jamex Auction House area the results of the auction process will be compiled and made available to you."
          />
          <el-step
            title="Payment"
            description="We will send you the invoice at your given email address after which you will make payment to us through the available method of payment and it will be done within the time that is given on the invoice. The original fee of the car will be determined by the auction house."
          />
          <el-step
            title="Final documentation and shipping"
            description="The process of shipment will commence once payment is done as per the agreement. Courier service will dispatch your required documents. After receipt of the documents, you will be ready to receive your car at the port. The documents that are required include the final invoice, lading bill, marine insurance (if needed), and export certificate. Along with this, JEVIC''s certificate (Japan Vehicle Inspection Association certificate), JAAI's certificate (Japan Auto Appraisal Institute's certificate of inspection), and other inspection certificates as per the demand will be needed."
          />
          <el-step
            title="Vehicle picking"
            description="You will pick up your vehicle from the assigned port. Remember you need to bring all the documents for a seamless collection of the vehicle"
          />
        </StepperOne>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/howToOrder.scss";
</style>
