<template>
  <BaseInput
    :type="isPwd ? 'password' : 'text'"
    :color="color"
    :text-color="textColor"
    :bg-color="bgColor"
    placeholder="password"
    lazy-rules
    :rules="[val => !!val || 'Password is required']"
  >
    <template #append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </BaseInput>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  color: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'backdrop'
  },
  textColor: {
    type: String,
    default: 'primary'
  }
})

const isPwd = ref(true)
</script>
