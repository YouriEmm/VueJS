import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from '../views/category.vue'
import Panier from '../views/Panier.vue'

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
  ],
})

export default router
