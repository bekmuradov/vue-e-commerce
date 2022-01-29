export default {
  setLocalCart () {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  },
  getLocalCart () {
    return JSON.parse(localStorage.getItem('cart'))
  },
  updateLocalCart (items) {
    localStorage.setItem('cart', JSON.stringify(items))
  }
}
