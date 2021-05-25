import { createRouter, createWebHashHistory } from 'vue-router'
import AllHeros from '../views/AllHeros.vue'
import HeroProfile from '../views/HeroProfile.vue'

const routes = [
  {
    path: '/',
    name: 'All Heros',
    component: AllHeros
  },
  {
    path: '/HeroProfile',
    name: 'Hero Profile',
    component: HeroProfile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
