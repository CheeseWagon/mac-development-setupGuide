import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideView from '../views/GuideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guide',
      name: 'guide',
      component: GuideView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Delay gives the incoming route's component time to mount on mobile
      // before we attempt to scroll to the anchor element
      const delay = to.path !== from.path ? 400 : 0
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth' })
        }, delay)
      })
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router