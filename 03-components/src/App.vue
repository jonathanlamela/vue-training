<script setup>
import AnimatedClock from './components/AnimatedClock.vue';


const italyValues = {
  timeZone: 'Europe/Rome',
  label: 'Italy',

}

const newYorkValues = {
  timeZone: 'America/New_York',
  label: 'New York',

}

</script>

<template>
  <div class="flex flex-grow items-center justify-center">
    <div class="flex flex-col space-y-4">
      <AnimatedClock v-bind="italyValues"></AnimatedClock>
      <AnimatedClock v-bind="newYorkValues"></AnimatedClock>
    </div>
  </div>
</template>
