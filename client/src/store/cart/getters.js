export function getCartItems (state) {
  return state.cartItems
}

export function getCartTotalPrice (state) {
  const cartItemReducer = (acc, cartItem) => {
    return (cartItem.quantity * cartItem.price) + acc
  }
  return state.cartItems.length ? state.cartItems.reduce(cartItemReducer, 0).toFixed(2) : 0
}

export function getCartQuantity (state) {
  const cartItemReducer = (acc, cartItem) => {
    return cartItem.quantity + acc
  }
  return state.cartItems.length ? state.cartItems.reduce(cartItemReducer, 0) : 0
}
