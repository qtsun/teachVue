import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)



const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/admin/course/:name',
        name:'detail',
        component:() => import('../views/Detail.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    meta:{
      auth:true
    },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      //判断路由是否需要守卫
      //meta数据
      if(window.isLogin){
        next()
      }else{
        next('/login?redirect='+to.fullPath)
      }
    }
  },
  {
    path: '/course/:name',
    component:() => import('../views/Detail.vue')
  },
  {
    path:'*',
    component:()=> import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局守卫
// router.beforeEach((to, from, next)=>{
//   // 判断路由是否需要守卫
//   if(to.meta.auth){
//     if(window.isLogin){
//       next()
//     }else{
//       next('/login?redirect='+to.fullPath)
//     }
//   }else{
//     next()
//   }
// })

export default router
