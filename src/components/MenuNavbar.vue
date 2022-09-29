<script setup>
import logoSVG from "@/assets/images/logo.svg";
</script>
<template>
  <div class="menu-navbar">
    <div class="logo">
      <img alt="jamex-main-logo" :src="logoSVG" />
    </div>
    <ul class="menus-group">
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
      <li>Option 4</li>
      <li>Option 5</li>
      <li>Option 6</li>
    </ul>
    <div class="buttons-group">
      <div class="login button">Log in</div>
      <div class="register button">Register</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/menuNavbar.scss";
</style>
