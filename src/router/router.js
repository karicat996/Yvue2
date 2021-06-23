import Vue from 'vue'
import Router from 'vue-router'
// import Cart from './views/cart/Cart.Vue'
// import CateGory from './views/category/CateGory.vue'
// import HomePag from './views/HomePag/HomePag.vue'
// import profile from './views/profile/ProFile.vue'


Vue.use(Router)

//const Cart=()=>import('../views/cart/Cart')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect: '/home'
    },

    {
     // path:'/',
     // name:'Cart',
      //component:Cart
      path:'/cart',
      component:()=>import('../views/cart/Cart')
    },
    {
     // path:'/',
     // name:'category',
     // component:CateGory
     path:'/category',
     component:()=>import('../views/category/CateGory')

    },
    {
      // path:'/',
      // name:'homepag',
      // component:HomePagh
      path:'/home',
      component:()=>import('../views/home/Home')

    },
     {
    // path:'/',
    // name:'profile',
    // component:profilen
    path:'/profile1',
    component:()=>import('../views/profile1/Profile')
    }
    
  
  ]
})