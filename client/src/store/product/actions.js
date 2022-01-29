import Api from '@/services/Api'
import UniqueID from '@/features/UniqueID'

export const fetchProducts = ({ commit }, { success, fail } = {}) => {
  commit('UPDATE_PRODUCT_LOADING_STATUS', true)
  Api.getAll(
    (response) => {
      const categories = new Set()
      categories.add('All')
      const data = response.data.data.map(robot => {
        categories.add(robot.material)
        return {
          ...robot,
          id: UniqueID().getID()
        }
      })
      commit('SET_PRODUCT_CATEGORIES', Array.from(categories))
      commit('UPDATE_PRODUCT_ITEMS', data)
      commit('UPDATE_PRODUCT_LOADING_STATUS', false)
      success && success(response)
    },
    (response) => {
      commit('UPDATE_PRODUCT_LOADING_STATUS', false)
      fail && fail(response)
    }
  )
}
