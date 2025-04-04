<template>
  <main class="max-w-7xl mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-8 text-center">Chaussures Homme</h2>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Card
        v-for="(category, index) in categories"
        :key="index"
        :name="category.name"
        :description="category.description"
        :price="category.price"
        :image="category.image"
      />
    </section>
  </main>
</template>

<script setup>
import Card from '../components/card.vue'

const categories = [
  {
    name: 'Hoodie Sp5der',
    description: 'Style streetwear avec une touche unique',
    price: 89.99,
    image:
      'https://images.stockx.com/360/Sp5der-PNK-Hoodie-Black/Images/Sp5der-PNK-Hoodie-Black/Lv2/img01.jpg?w=576&q=60&dpr=1&updated_at=1672852874&h=384',
  },
  {
    name: 'Yeezy Slide Black',
    description: 'Confort ultime pour un look décontracté',
    price: 89.99,
    image:
      'https://images.stockx.com/360/adidas-Yeezy-Slide-Black/Images/adidas-Yeezy-Slide-Black/Lv2/img01.jpg?w=576&q=60&dpr=1&updated_at=1646687558&h=384',
  },
  {
    name: 'Nike Jordan Love Hurts',
    description: 'Hoodie au design unique et tendance',
    price: 89.99,
    image:
      'https://images.stockx.com/images/Nike-Jordan-Jalen-Hurts-Love-Hurts-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1741026352',
  },
]
</script>
