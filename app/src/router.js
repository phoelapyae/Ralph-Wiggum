import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloAgent from './views/HelloAgent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/hello-agent', component: HelloAgent },
  ],
})

export default router
