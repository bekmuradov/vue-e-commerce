<template>
  <div class="container">
    <header>
      <navbar />
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { onMounted, onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    navbar: require('@/components/core/Navbar').default
  },
  setup () {
    const $store = useStore()

    const fetchProducts = () => $store.dispatch('product/fetchProducts')
    const initLocalCart = () => $store.dispatch('cart/initLocalCart')

    onMounted(fetchProducts)
    onBeforeMount(initLocalCart)

    return {}
  }
}
</script>
