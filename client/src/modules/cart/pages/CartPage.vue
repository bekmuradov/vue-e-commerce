<template>
  <div class="container-md">
    <div
      v-if="paymentProcessing"
      class="container-center"
    >
      <div class="loader" />
    </div>
    <div v-else>
      <div v-if="!cartItems.length">
        <NothingHere label="Oops, Your Shopping Cart is Empty" />
      </div>
      <div
        v-else
        class="Cart-list"
      >
        <div class="Cart-list__content container-sm">
          <CartItem
            v-for="item in cartItems"
            :key="item.id"
            v-bind="item"
          />
        </div>
        <div class="Cart-list__actions fixed -bottom">
          <div class="text-center">
            <div class="Cart-list__actions__section">
              Total Quantity:
              <span class="text-weight-bold">{{ cartQuantity }}</span>
            </div>
            <BaseButton
              class="-size-md -danger"
              :disabled="!cartItems.length"
              type="button"
              @click="emptyCart"
            >
              Remove All
            </BaseButton>
            <BaseButton
              class="-size-md"
              :disabled="!cartItems.length"
              type="button"
              @click="handleCheckout"
            >
              Checkout (<span class="text-weight-bold">{{ $filters.currencyUSD(cartTotalPrice) }}</span>)
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import CartItem from '@/modules/cart/components/CartItem.vue'
import NothingHere from '@/components/core/NothingHere.vue'

const $store = useStore()
const $router = useRouter()

const cartItems = computed(() => $store.getters['cart/getCartItems'])

const cartQuantity = computed(() => $store.getters['cart/getCartQuantity'])
const cartTotalPrice = computed(() => $store.getters['cart/getCartTotalPrice'])

const emptyCart = () => $store.dispatch('cart/emptyCart')

const paymentProcessing = ref(false)

const handleCheckout = () => {
  paymentProcessing.value = true
  setTimeout(() => {
    emptyCart()
    alert('Payment Successfull')
    $router.push({
      name: 'ProductModule'
    })
    paymentProcessing.value = false
  }, 3000)
}
</script>
