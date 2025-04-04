<script setup>
import { computed, ref } from 'vue'
import CartItem from '../components/productCheckout.vue'

const productsInCheckout = ref([
  {
    id: 1,
    name: 'Nike Air Force 1 Low 07',
    quantity: 2,
    price: 78,
    image:
      'https://images.stockx.com/360/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img13.jpg?w=576&q=60&dpr=1&updated_at=1635275427&h=384',
  },
  {
    id: 2,
    name: 'Jordan 12 rétro',
    quantity: 2,
    price: 244.99,
    image:
      'https://images.stockx.com/360/Air-Jordan-12-Retro-Flu-Game-2025/Images/Air-Jordan-12-Retro-Flu-Game-2025/Lv2/img13.jpg?w=576&q=60&dpr=1&updated_at=1740507702&h=384',
  },
  {
    id: 3,
    name: 'Addidas D Rose 10',
    quantity: 4,
    price: 266,
    image:
      'https://images.stockx.com/images/adidas-D-Rose-10-Metallic-Gold.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1644449664',
  },
  {
    id: 4,
    name: 'Jordan 1 Retro High OG SP',
    quantity: 2,
    price: 226.99,
    image:
      'https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-SP-Union-LA-Chicago-Shadow/Images/Air-Jordan-1-Retro-High-OG-SP-Union-LA-Chicago-Shadow/Lv2/img01.jpg?w=576&q=60&dpr=1&updated_at=1740687534&h=384',
  },
])

const totalPrice = computed(() => {
  return productsInCheckout.value.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  )
})

const removeProduct = (id) => {
  productsInCheckout.value = productsInCheckout.value.filter((product) => product.id !== id)
}
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold mb-6">Mon Panier</h2>

    <div class="space-y-6">
      <CartItem
        v-for="product in productsInCheckout"
        :key="product.id"
        :product="product"
        @remove="removeProduct"
      />
    </div>

    <div class="text-right mt-10">
      <p class="text-lg font-semibold">
        Total : <span class="text-blue-600">{{ totalPrice }} €</span>
      </p>
      <button class="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
        Commander
      </button>
    </div>
  </main>
</template>
