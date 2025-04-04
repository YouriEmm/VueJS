<template>
  <div class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
    <img :src="image" :alt="name" class="w-full h-60 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold text-lg">{{ name }}</h4>
      <p class="text-gray-600">{{ description }}</p>
      <p class="font-bold mt-2">{{ price }} €</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  price: Number,
  image: String,
})
</script>
