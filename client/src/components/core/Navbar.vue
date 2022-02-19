<template>
  <nav
    class="Navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="Navbar__sort-products">
      <BaseSelect
        v-model="category"
        :options="productCategories"
        class="-size-small mb-none"
      />
    </div>
    <div class="Navbar__menu">
      <div class="Navbar__menu__item">
        <div class="Navbar__menu__actions">
          <router-link
            to="/"
            class=""
          >
            Products
          </router-link> |
          <router-link
            to="/cart"
            class=""
          >
            Cart items: <span> {{ cartQuantity }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, ref, watch } from 'vue'

const $store = useStore()

const category = ref('All')
watch(category, (newCategory) => {
  filterProducts(newCategory)
})
const productCategories = computed(() => $store.state.product.categories)
const cartQuantity = computed(() => $store.getters['cart/getCartQuantity'])
const fetchCartItems = () => $store.dispatch('cart/fetchCartItems')

onMounted(fetchCartItems)

const filterProducts = (material) => {
  $store.commit('product/SET_PRODUCT_FILTER', material)
}
</script>
