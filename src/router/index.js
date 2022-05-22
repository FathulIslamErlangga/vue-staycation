import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentDetails from '../views/ComponentDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Staycation-home',
    component: HomeView
  },
  {
    path: '/detail-penginapan/:slug',
    name: 'Staycation | detail penginapan',
    component: ComponentDetails
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
