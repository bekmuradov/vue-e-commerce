<template>
  <div class="container">
    <header>
      <NavBar />
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import NavBar from '@/components/core/Navbar'

const $store = useStore()

// These functions will be executed on components created life cycle
const fetchProducts = () => $store.dispatch('product/fetchProducts')
const initLocalCart = () => $store.dispatch('cart/initLocalCart')
fetchProducts()
initLocalCart()

</script>
