<script setup lang="ts">
import { provide } from 'vue';
import Hello from './components/Hello.vue';

// Function to handle the greet event
function handleGreet() {
  alert('Hello from App.vue');
}

// Provide a global value for all descendants
provide('appName', 'My Vue App');

</script>

<template>
  <div>
    <p>Hello from App.vue</p>
    <Hello name="Vue 3" @greet="handleGreet" />
  </div>
</template>
