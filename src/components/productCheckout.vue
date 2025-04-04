<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  product: Object,
})

const emit = defineEmits(['remove'])

const removeItem = () => {
  emit('remove', props.product.id)
}
</script>

<template>
  <div class="flex items-center justify-between border-b pb-4">
    <div class="flex items-center gap-4">
      <img :src="product.image" class="w-20 h-20 object-contain rounded" alt="Produit" />
      <div>
        <p class="font-medium">{{ product.name }}</p>
        <p class="text-gray-500 text-sm">Quantité : {{ product.quantity }}</p>
      </div>
    </div>
    <div class="text-right">
      <p class="font-bold">{{ (product.price * product.quantity).toFixed(2) }} €</p>
      <button @click="removeItem" class="text-red-500 text-sm hover:underline mt-1">
        Supprimer
      </button>
    </div>
  </div>
</template>
