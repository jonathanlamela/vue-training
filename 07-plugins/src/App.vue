<script setup lang="ts">
const testo = 'Hello, Vue 3 with Plugins!';
</script>

<template>
  <div>{{ $truncate(testo, { maxChars: 20, dotsSymbol: ':::' }) }}</div>
</template>
