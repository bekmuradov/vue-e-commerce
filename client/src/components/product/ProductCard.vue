<template lang="html">
  <div class="Product-card">
    <div class="Product-card__image">
      <img :src="image" :alt="name" />
    </div>
    <div class="Product-card__content px-sm">
      <div class="Product-card__content__title truncate">{{ name }}</div>
      <div class="Product-card__content__price">{{ $filters.currencyUSD(price) }}</div>
      <div class="Product-card__content__material badge">Type: &nbsp;<span>{{ material }}</span></div>
    </div>
    <div class="Product-card__actions">
      <base-button @click="addToCart" type="button">Add to Cart</base-button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: {
    id: Number,
    image: String,
    name: String,
    price: String,
    material: String,
    stock: Number
  },
  setup (props) {
    const $store = useStore()

    const addToCart = (e) => {
      $store.dispatch('cart/addToCart', {
        ...props,
        quantity: 1
      })
    }
    return {
      addToCart
    }
  }
}
</script>
