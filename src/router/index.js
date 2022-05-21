import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=>import('views/layout'),
    children:[
      {
        path:'',
        name:"home",
        component:()=>import('views/home')
      },
      {
        path:'/mine',
        name:"mine",
        component:()=>import('views/mine')
      },
      {
        path:'/qa',
        component:()=>import('views/qa')
      },
      {
        path:'/search',
        component:()=>import('views/search')
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('views/login')
  }
]

const router = new VueRouter({
  mode:'hash',
  base:process.env.BASE_URL,
  routes,
})

export default router
