import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import QuizView from '@/views/QuizView.vue'
import ResultsView from '@/views/ResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView,
    },
  ],
})

export default router
