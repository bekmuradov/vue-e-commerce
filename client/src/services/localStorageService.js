export default {
  setLocalCart () {
    if (typeof (Storage) !== 'undefined') {
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]))
      }
    } else {
      throw new Error('Storage is not supported by browser!')
    }
  },
  getLocalCart () {
    return JSON.parse(localStorage.getItem('cart'))
  },
  updateLocalCart (items) {
    localStorage.setItem('cart', JSON.stringify(items))
  },
  clearLocalCart () {
    localStorage.clear()
  }
}
