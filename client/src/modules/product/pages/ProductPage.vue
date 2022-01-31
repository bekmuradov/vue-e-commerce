<template>
  <div class="container">
    <div v-if="productsStateLoading" class="container-center">
      <div class="loader"></div>
    </div>
    <div v-else class="Product-list px-md mb-xl">
      <div class="row wrap">
        <ProductCard v-for="robot in robots" :key="robot.id" v-bind="robot" />
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'ProductPage',
  setup () {
    const $store = useStore()
    const robots = computed(() => $store.getters['product/getProducts'])

    const productsStateLoading = computed(() => $store.state.product.loading)

    return {
      robots,
      productsStateLoading
    }
  },
  components: {
    ProductCard: require('@/modules/product/components/ProductCard.vue').default
  }
}
</script>
