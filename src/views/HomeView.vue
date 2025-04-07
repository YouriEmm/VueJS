<template>
  <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-4">Trouvez la paire parfaite</h2>
      <p class="text-lg text-gray-600 mb-8">
        Découvrez notre sélection de chaussures pour toutes les occasions, avec un style moderne et
        raffiné.
      </p>
      <a href="#" class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >Découvrir la collection</a
      >
    </div>
  </section>

  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-semibold mb-8 text-center">Produits en vedette</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card
          v-for="(product, index) in products"
          :key="index"
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :image="product.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from '../components/card.vue'

const products = [
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
]
</script>
