<template lang="html">
  <div class="text-center">
    <!-- <img src="../../../assets/hello-monster.jpg" alt=""> -->
    <div class="label q-pa-md text-h5 text-weight-bold">
      {{ $trim(label) }}
      <div v-if="subLabel">
        {{ $trim(subLabel) }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  subLabel: {
    type: String,
    required: false,
    default: ''
  }
})
</script>
