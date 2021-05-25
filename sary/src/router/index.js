import Vue from 'vue'
import VueRouter from 'vue-router'
import AllHeroes from '../views/AllHeroes.vue'
import HeroProfile from '../views/HeroProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All Heroes',
    component: AllHeroes
  },
  {
    path: '/HeroProfile',
    name: 'Hero Profile',
    component: HeroProfile
    }
  
]

const router = new VueRouter({
  routes
})

export default router
