import { createRouter, createWebHistory } from 'vue-router'
import MainPAge from '../views/MainPageView.vue'
import OutputViewVue from '@/views/OutputView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPAge
    },
    {
      path: '/output',
      name: 'output',
      component: OutputViewVue
    }
  ]
})

export default router
