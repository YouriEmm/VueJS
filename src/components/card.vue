<template>
  <div
    class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition cursor-pointer"
    @click="goToProduct"
  >
    <img :src="image" :alt="name" class="w-full h-60 object-contain" />
    <div class="p-4">
      <h4 class="font-semibold text-lg">{{ name }}</h4>
      <p class="text-gray-600">{{ description }}</p>
      <p class="font-bold mt-2">{{ price }} €</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  name: String,
  description: String,
  price: Number,
  image: String,
})

const router = useRouter()

const goToProduct = () => {
  router.push({
    name: 'produit',
    query: {
      name: props.name,
      description: props.description,
      price: props.price,
      image: props.image,
    },
  })
}
</script>
