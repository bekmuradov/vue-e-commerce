import ProductModule from './ProductModule'
const ProductPage = () => import('./pages/ProductPage')

const productRoutes = [
  {
    path: '',
    name: 'ProductModule',
    component: ProductModule,
    children: [
      {
        path: '',
        name: 'ProductPage',
        component: ProductPage
      }
    ]
  }
]

export default productRoutes
