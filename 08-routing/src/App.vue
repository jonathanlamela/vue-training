<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col p-16 w-full space-y-8">
    <div class="flex flex-row items-center justify-center space-x-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
    </div>
    <div class="flex flex-grow bg-white shadow-md p-16">
      <router-view></router-view>
    </div>
  </div>
</template>
