import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shop from '../views/Shop.vue'
import AboutUs from '../views/AboutUs.vue'
import Locations from '../views/Locations.vue'
import Login from '../views/Login.vue'
import Signup from '../views/SignUp.vue'
import PasswordReset from '../views/PasswordReset.vue'
import SellTrade from '../views/SellTrade.vue'
import Finance from '../views/Finance.vue'
import Support from '../views/Support.vue'
import TopicPage from '../components/TopicPage.vue'
import ProductPage from '../components/ProductPage.vue'







const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/passwordreset',
      name: 'passwordreset',
      component: PasswordReset
    },
    {
      path: '/selltrade',
      name: 'selltrade',
      component: SellTrade
    },
    {
      path: '/finance',
      name: 'finance',
      component: Finance
    },
    {
      path: '/support',
      name: 'support',
      component: Support
    },
    {
      path: '/topic/:name',
      name: 'TopicPage',
      component: TopicPage,
      props: true
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
