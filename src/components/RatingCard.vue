<script setup></script>

<template>
  <div class="rating_card">
    <div>
      <slot name="header" />
      <slot name="body" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/ratingCard.scss';
</style>
