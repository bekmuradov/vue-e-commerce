export const UPDATE_PRODUCT_ITEMS = (state, payload) => {
  state.products = [...payload]
}

export const UPDATE_PRODUCT_LOADING_STATUS = (state, payload) => {
  state.loading = payload
}

export const SET_PRODUCT_CATEGORIES = (state, payload) => {
  state.categories = payload
}

export const SET_PRODUCT_FILTER = (state, payload) => {
  state.productFilter = payload
}
