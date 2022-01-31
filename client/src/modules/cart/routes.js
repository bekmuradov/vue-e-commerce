const CartModule = () => import('./CartModule')
const CartPage = () => import('./pages/CartPage')

const cartRoutes = [
  {
    path: '/cart',
    name: 'CartModule',
    component: CartModule,
    children: [
      {
        path: '',
        name: 'CartPage',
        component: CartPage
      }
    ]
  }
]

export default cartRoutes
