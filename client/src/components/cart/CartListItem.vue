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
        <base-button type="button" class="outline -size-sm" @click="decreaseQty" :disabled="quantity === 0">-</base-button>
        <base-button type="button" class="outline -size-sm" @click="increaseQty" :disabled="stock === quantity">+</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref, reactive } from 'vue'

export default {
  name: 'CartListItem',
  props: {
    id: Number,
    image: String,
    name: String,
    price: String,
    quantity: Number,
    stock: Number
  },
  setup (props) {
    const $store = useStore()
    const cartItem = reactive({
      ...props
    })

    const decreaseQty = () => $store.dispatch('cart/decreaseItemQty', cartItem)
    const increaseQty = () => $store.dispatch('cart/increaseItemQty', cartItem)

    const handleOnChange = (e) => {

    }
    return {
      cartItem,
      decreaseQty,
      increaseQty,
      selectedItem: ref(false),
      itemQty: ref(cartItem.quantity),
      handleOnChange
    }
  }
}
</script>
