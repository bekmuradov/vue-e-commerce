<template lang="html">
  <div class="absolute-center text-center">
    <div class="text-size-18 text-weight-bold text-light">
      {{ $filters.trim(label) }}
    </div>
    <div class="text-size-16 text-gray">
      {{ $filters.trim(subtitle) }}
    </div>
    <router-link
      to="/"
      class="text-positive"
    >
      Go Shopping Now
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'Add some items to the cart!'
  },
  subtitle: {
    type: String,
    default: 'Browse our awesome deals now!'
  }
})
</script>
