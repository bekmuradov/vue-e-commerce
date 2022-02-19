<template lang="html">
  <div class="Product-card">
    <div class="Product-card__image">
      <img
        :src="image"
        :alt="name"
      >
    </div>
    <div class="Product-card__content px-sm">
      <div class="Product-card__content__title truncate">
        {{ name }}
      </div>
      <div class="Product-card__content__price">
        {{ $filters.currencyUSD(price) }}
      </div>
      <div class="Product-card__content__material badge">
        Type: &nbsp;<span>{{ material }}</span>
      </div>
    </div>
    <div class="Product-card__actions">
      <BaseButton
        type="button"
        @click="addToCart"
      >
        Add to Cart
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  material: {
    type: String,
    default: ''
  },
  stock: {
    type: Number,
    required: true
  }
})

const $store = useStore()

const addToCart = () => {
  $store.dispatch('cart/addToCart', {
    ...props,
    quantity: 1
  })
}
</script>
