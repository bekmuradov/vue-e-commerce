<template>
  <div class="Cart-item">
    <div class="Cart-item__image">
      <img
        :src="cartItem.image"
        :alt="cartItem.name"
      >
    </div>
    <div class="Cart-item__content">
      <div class="Cart-item__content__title truncate">
        {{ cartItem.name }}
      </div>
      <div class="Cart-item__content__price">
        {{ $filters.currencyUSD(cartItem.price) }} X {{ quantity }}
      </div>
      <div class="Cart-item__content__actions">
        <BaseButton
          type="button"
          class="outline -size-sm"
          :disabled="quantity === 0"
          @click="decreaseQty"
        >
          -
        </BaseButton>
        <BaseButton
          type="button"
          class="outline -size-sm"
          :disabled="stock === quantity"
          @click="increaseQty"
        >
          +
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'

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
  quantity: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
})

const $store = useStore()
const cartItem = reactive({
  ...props
})

const decreaseQty = () => $store.dispatch('cart/decreaseItemQty', cartItem)
const increaseQty = () => $store.dispatch('cart/increaseItemQty', cartItem)
</script>
