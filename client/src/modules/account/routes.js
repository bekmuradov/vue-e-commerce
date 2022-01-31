const AccountModule = () => import('./AccountModule')
const LoginPage = () => import('./pages/LoginPage')

const cartRoutes = [
  {
    path: '/account',
    name: 'AccountModule',
    component: AccountModule,
    children: [
      {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
      },
      {
        path: '/register',
        name: 'RegisterPage',
        component: LoginPage
      }
    ]
  }
]

export default cartRoutes
