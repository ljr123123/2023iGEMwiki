import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/HomeView.vue"),
    children:[
      {
        path:"",
        name:"home-main",
        component:() => import("@/pages/MainHome.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
