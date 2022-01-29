import LocalStorageService from '@/services/localStorageService'

const getIndex = (cartItems, item) => cartItems.findIndex(cartItem => cartItem.id === item.id)
const increaseQty = (item) => {
  if (isItemQtyLessThanStock(item)) {
    item.quantity += 1
  } else {
    alert('No more stock!')
  }
}
const decreaseQty = (item) => {
  item.quantity -= 1
  if (isItemQtyLessThanZero(item)) {
    item.quantity = 0
  }
}
const isItemQtyLessThanStock = (item) => {
  return Boolean(item.quantity <= item.stock)
}
const isItemQtyLessThanZero = (item) => {
  return Boolean(item.quantity < 0)
}

const isItemInTheCart = (cartItems, item) => cartItems.find(({ id }) => id === item.id)

export const initLocalCart = () => {
  LocalStorageService.setLocalCart()
}

export const fetchCartItems = ({ commit }) => {
  const cartItems = LocalStorageService.getLocalCart()
  commit('UPDATE_CART_ITEMS', cartItems)
}

export const addToCart = ({ state, commit }, item) => {
  let cartItems = state.cartItems
  const itemFromCart = isItemInTheCart(cartItems, item)
  if (itemFromCart) {
    increaseQty(itemFromCart)
  } else {
    cartItems = [...state.cartItems, item]
  }
  LocalStorageService.updateLocalCart(cartItems)
  commit('UPDATE_CART_ITEMS', cartItems)
}

export const increaseItemQty = ({ state, commit }, cartItem) => {
  const items = state.cartItems
  const idx = getIndex(items, cartItem)
  if (idx >= 0) {
    increaseQty(items[idx])
    LocalStorageService.updateLocalCart(items)
    commit('UPDATE_CART_ITEMS', items)
  }
}

export const decreaseItemQty = ({ state, commit }, item) => {
  const cartItems = state.cartItems
  const idx = getIndex(cartItems, item)
  if (idx >= 0) {
    decreaseQty(cartItems[idx])
    LocalStorageService.updateLocalCart(cartItems)
    commit('UPDATE_CART_ITEMS', cartItems)
  }
}

export const removeCartItem = ({ state, commit }, item) => {
  const cartItems = state.cartItems
  const idx = getIndex(cartItems, item)
  cartItems.splice(idx, 1)
  LocalStorageService.updateLocalCart(cartItems)
  commit('UPDATE_CART_ITEMS', cartItems)
}
export const emptyCart = ({ commit }) => {
  LocalStorageService.updateLocalCart([])
  commit('UPDATE_CART_ITEMS', [])
}
