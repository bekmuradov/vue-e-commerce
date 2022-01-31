<template>
  <div class="container-md">
    <div v-if="paymentProcessing" class="container-center">
      <div class="loader"></div>
    </div>
    <div v-else>
      <div v-if="!cartItems.length" class="">
        <NothingHere label="Oops, Your Shopping Cart is Empty" />
      </div>
      <div v-else class="Cart-list">
        <div class="Cart-list__content container-sm">
          <CartItem v-for="item in cartItems" :key="item.id" v-bind="item"/>
        </div>
        <div class="Cart-list__actions fixed -bottom">
          <div class="text-center">
            <div class="Cart-list__actions__section">
              Total Quantity:
              <span class="text-weight-bold">{{ cartQuantity }}</span>
            </div>
            <BaseButton class="-size-md -danger" :disabled="!cartItems.length" @click="emptyCart" type="button">
              Remove All
            </BaseButton>
            <BaseButton class="-size-md" :disabled="!cartItems.length" @click="handleCheckout" type="button">
              Checkout (<span class="text-weight-bold">{{ $filters.currencyUSD(cartTotalPrice) }}</span>)
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'CartPage',
  setup () {
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

    return {
      cartItems,
      cartTotalPrice,
      cartQuantity,
      emptyCart,
      handleCheckout,
      paymentProcessing
    }
  },
  components: {
    CartItem: require('@/modules/cart/components/CartItem.vue').default,
    NothingHere: require('@/components/core/NothingHere.vue').default
  }
}
</script>
