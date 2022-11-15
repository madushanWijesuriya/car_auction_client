<script setup></script>

<template>
  <div class="stepper-one">
    <el-steps direction="vertical" :active="0">
      <slot />
    </el-steps>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/stepperOne.scss";
</style>
