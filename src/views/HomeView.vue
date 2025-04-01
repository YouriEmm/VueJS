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
        <div class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Chaussure"
            class="w-full h-60 object-cover"
          />
          <div class="p-4">
            <h4 class="font-semibold text-lg">Chaussure Classique</h4>
            <p class="text-gray-600">Cuir véritable - Confort ultime</p>
            <p class="font-bold mt-2">89,99 €</p>
          </div>
        </div>

        <div class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Chaussure"
            class="w-full h-60 object-cover"
          />
          <div class="p-4">
            <h4 class="font-semibold text-lg">Sneakers Moderne</h4>
            <p class="text-gray-600">Design urbain - Respirant</p>
            <p class="font-bold mt-2">74,99 €</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
