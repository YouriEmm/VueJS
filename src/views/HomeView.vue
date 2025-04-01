<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import htmlContent from '../template-html/index.html?raw'
</script>

<template>
  <main v-html="htmlContent"></main>
  <!-- <TheWelcome /> -->
</template>
