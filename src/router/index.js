import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from '../views/category.vue'
import Panier from '../views/Panier.vue'
import Produit from '../views/Produit.vue'
import test from '../views/category2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
    {
      path: '/panier',
      name: 'panier',
      component: Panier,
    },
    {
      path: '/produit',
      name: 'produit',
      component: Produit,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
  ],
})

export default router
