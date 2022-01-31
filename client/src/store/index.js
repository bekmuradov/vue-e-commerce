import { createStore } from 'vuex'

import product from '../modules/product/store'
import cart from '../modules/cart/store'

export default createStore({
  modules: {
    cart,
    product
  }
})
