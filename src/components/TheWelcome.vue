<script setup>
const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')

import { ref } from 'vue'

let counter = ref(0)

function increment() {
  counter.value++
}

function decrement() {
  counter.value--
}
</script>

<template>
  <main>
    <p>Counter : {{ counter }}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </main>
</template>
