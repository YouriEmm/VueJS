<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const name = ref(route.query.name || 'Produit inconnu')
const description = ref(route.query.description || '')
const price = ref(route.query.price || 0)
const image = ref(route.query.image || 'https://via.placeholder.com/600x400')

const sizes = ref([])
onMounted(() => {
  const minSize = 39
  const maxSize = 45
  const sizeCount = Math.floor(Math.random() * 4) + 3
  const generated = new Set()

  while (generated.size < sizeCount) {
    const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize
    generated.add(size)
  }

  sizes.value = Array.from(generated).sort()
})
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
    <div>
      <img :src="image" class="w-full rounded-xl object-cover" :alt="name" />
    </div>
    <div>
      <h2 class="text-3xl font-bold mb-4">{{ name }}</h2>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <p class="text-2xl font-bold mb-4">{{ price }} €</p>

      <div class="mb-4">
        <label class="block font-medium mb-1">Pointure</label>
        <select class="w-full border px-3 py-2 rounded">
          <option v-for="size in sizes" :key="size">{{ size }}</option>
        </select>
      </div>

      <button
        class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full"
      >
        Ajouter au panier
      </button>
    </div>
  </main>
</template>
