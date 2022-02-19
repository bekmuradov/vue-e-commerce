<template>
  <div class="Cart-item">
    <div class="Cart-item__image">
      <img :src="cartItem.image" :alt="cartItem.name" />
    </div>
    <div class="Cart-item__content">
      <div class="Cart-item__content__title truncate">{{ cartItem.name }}</div>
      <div class="Cart-item__content__price">
        {{ $filters.currencyUSD(cartItem.price) }} X {{ quantity }}
      </div>
      <div class="Cart-item__content__actions">
        <BaseButton type="button" class="outline -size-sm" @click="decreaseQty" :disabled="quantity === 0">-</BaseButton>
        <BaseButton type="button" class="outline -size-sm" @click="increaseQty" :disabled="stock === quantity">+</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, reactive } from 'vue'

const props = defineProps({
  id: Number,
  image: String,
  name: String,
  price: String,
  quantity: Number,
  stock: Number
})

const $store = useStore()
const cartItem = reactive({
  ...props
})

const decreaseQty = () => $store.dispatch('cart/decreaseItemQty', cartItem)
const increaseQty = () => $store.dispatch('cart/increaseItemQty', cartItem)
const selectedItem = ref(false)
const itemQty = ref(cartItem.quantity)
</script>
