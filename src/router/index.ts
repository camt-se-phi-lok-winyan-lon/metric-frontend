import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from "@/views/MainPageView.vue";
import InputPageView from "@/views/InputPageView.vue";
import OutputPageView from "@/views/OutputPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPageView,
      props:true,
      children: [
        {
          name: 'input-page',
          path: '',
          component: InputPageView
        },
        {
          name: 'output-page',
          path: '/result',
          component: OutputPageView
        }
      ]
    },

  ]
})

export default router
