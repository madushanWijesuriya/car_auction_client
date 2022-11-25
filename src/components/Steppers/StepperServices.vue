<script setup></script>

<template>
  <div class="stepper-service" style="height: 450px;">
    <el-steps direction="vertical" :active="0" align-center="true">
      <slot />
    </el-steps>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/StepperService";
</style>
