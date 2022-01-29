import { createStore } from 'vuex'

import product from './product'
import cart from './cart'

export default createStore({
  modules: {
    cart,
    product
  }
})
