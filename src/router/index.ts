import { createRouter, createWebHistory } from 'vue-router'
import MainPAge from '../views/MainPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPAge
    }
  ]
})

export default router
