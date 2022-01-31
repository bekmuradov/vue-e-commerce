import MainLayout from '@/layouts/MainLayout.vue'
import productRoutes from '@/modules/product/routes'
import cartRoutes from '@/modules/cart/routes'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      ...productRoutes,
      ...cartRoutes
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/Error404.vue')
  }
]

export default routes
