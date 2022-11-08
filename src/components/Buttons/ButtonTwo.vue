<script setup>
const props = defineProps({
  text: String,
});
</script>

<template>
  <el-button type="primary" class="readmore" plain>{{ text }}</el-button>
</template>

<style scoped lang="scss"></style>
