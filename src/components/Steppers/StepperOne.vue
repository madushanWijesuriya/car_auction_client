<script setup></script>

<template>
  <div class="stepper-one">
    <el-steps direction="vertical" :active="0">
      <el-step
        title="Fully tested car"
        description="The motors we export are fully inspected. We guarantee you that you will get a satisfying car at the lowest price. The condition of the car is the same as the public sale list, as there are fair inspectors who guarantee complete satisfaction to customers around the world."
      />
      <el-step
        title="Lowest price"
        description="Jamex Motors achieves the lowest price for a car by avoiding the hidden costs that directly increase the overall value of the used car."
        status="process"
      />
      <el-step
        title="Prompt delivery"
        description="Transportation has become faster and easier thanks to our public sale houses near the harbor. We have a strong connection with the Sri Lankan shipping company."
        status="process"
      />
      <el-step
        title="Well paid network"
        description="Our well-distributed community of more than 140 public housing in Japan provides 145,000 vehicles to our customers each week."
        status="process"
      />
      <el-step
        title="Full buyer support"
        description="We have 24/7 buyer support exclusively for clients who want to get informationon the safe transportation of vehicles in Sri Lanka. With the support of Sri Lanka's Logistics Agency, additional secure customs clearance is permitted."
        status="process"
      />
    </el-steps>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/stepperOne.scss";
</style>
