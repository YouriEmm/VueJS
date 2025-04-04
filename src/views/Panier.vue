<script setup>
import { computed, ref } from 'vue'

const productsInCheckout = ref([
  { id: 1, name: 'Basket Blanche', quantity: 2, price: 28.99 },
  { id: 2, name: 'Basket Noire', quantity: 2, price: 18.99 },
  { id: 3, name: 'Basket Rose', quantity: 2, price: 24.99 },
  { id: 4, name: 'Basket Rouge', quantity: 2, price: 30.99 },
])

const totalPrice = computed(() => {
  return productsInCheckout.value.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)
  return result
})

const removeProduct = (id) => {
  productsInCheckout.value = productsInCheckout.value.filter((product) => product.id !== id)
  console.log('produit supprimé')
}
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold mb-6">Mon Panier</h2>

    <div class="space-y-6">
      <div
        v-for="product in productsInCheckout"
        :key="product.id"
        class="flex items-center justify-between border-b pb-4"
      >
        <div class="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/100"
            class="w-20 h-20 object-cover rounded"
            alt="Produit"
          />
          <div>
            <p class="font-medium">{{ product.name }}</p>
            <p class="text-gray-500 text-sm">Quantité : {{ product.quantity }}</p>
          </div>
        </div>
        <div class="text-right">
          <p class="font-bold">{{ product.price * product.quantity }} €</p>
          <button
            @click="removeProduct(product.id)"
            class="text-red-500 text-sm hover:underline mt-1"
          >
            Supprimer
          </button>
        </div>
      </div>

      <div class="text-right mt-10">
        <p class="text-lg font-semibold">
          Total : <span class="text-blue-600">{{ totalPrice }} €</span>
        </p>
        <button
          class="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Commander
        </button>
      </div>
    </div>
  </main>
</template>
