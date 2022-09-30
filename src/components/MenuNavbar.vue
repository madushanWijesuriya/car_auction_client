<script setup>
import logoSVG from "@/assets/images/logo.svg";
</script>
<template>
  <div class="menu-navbar">
    <div class="logo">
      <img alt="jamex-main-logo" :src="logoSVG" />
    </div>
    <ul class="menus-group">
      <li>Home</li>
      <li>Services</li>
      <li>Countries</li>
      <li>How to Order</li>
      <li>About Us</li>
      <li>Reach us</li>
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
