import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 {
  path: '/',
  name: 'Home',
  component : () => import('../views/Home.vue')
 },
 {
  path: '/post/:id',
  name: 'Post',
  component : () => import('../views/Post.vue')
 },
 {
  path: '/add',
  name: 'AddressAdd',
  component : () => import('../views/AddressAdd.vue')
 }
  
  ]
})

export default router
