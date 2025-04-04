<template>
  <div class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
    <img
      src="https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-SP-Union-LA-Chicago-Shadow/Images/Air-Jordan-1-Retro-High-OG-SP-Union-LA-Chicago-Shadow/Lv2/img20.jpg?w=576&q=60&dpr=1&updated_at=1740687534&h=384"
      :alt="name"
      class="w-full h-60 object-cover"
    />
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
})
</script>
