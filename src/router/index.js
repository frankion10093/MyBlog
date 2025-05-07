import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home' 
  },

  {
    //这是我的博客主界面，负责用户登录注册
    path: '/home',
    component: Home,
  },

  {
    
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
