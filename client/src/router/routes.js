import MainLayout from '@/layouts/MainLayout.vue'
import Products from '@/components/product/ProductList.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Products',
        component: Products
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/components/cart/CartList.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/Error404.vue')
  }
]

export default routes
