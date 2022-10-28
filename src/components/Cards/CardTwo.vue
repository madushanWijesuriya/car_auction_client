<script setup>
const props = defineProps({
  iconPath: String,
  title: String,
  content: String,
});
</script>

<template>
  <div class="card-type-02">
    <div class="icon-wrapper">
      <slot name="icon"></slot>
    </div>
    <div
      class="title-wrapper color-01 text-xl sm:text-3xl mt-3 sm:mt-5 font-bold"
    >
      {{ props.title }}
    </div>
    <div class="content-wrapper text-sm sm:text-xl mt-2 sm:mt-3 color-04">
      {{ props.content }}
    </div>
  </div>
</template>
