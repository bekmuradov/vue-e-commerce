<template>
  <div class="container">
    <header>
      <NavBar />
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    NavBar: require('@/components/core/Navbar').default
  },
  setup () {
    const $store = useStore()

    // These functions will be executed on components created life cycle
    const fetchProducts = () => $store.dispatch('product/fetchProducts')
    const initLocalCart = () => $store.dispatch('cart/initLocalCart')
    fetchProducts()
    initLocalCart()

    return {}
  }
}
</script>
