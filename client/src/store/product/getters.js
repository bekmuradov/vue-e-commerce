const filterItems = (arr, query) => {
  return arr.filter(el => el.material === query)
}

export const getProducts = (state) => {
  return state.productFilter !== 'All' ? filterItems(state.products, state.productFilter) : state.products
}
