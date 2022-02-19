<template>
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
  <input
    v-bind="{
      ...$attrs,
      onInput: ($event) => { $emit('update:modelValue', $event.target.value) }
    }"
    :id="uuid"
    class="field"
    :value="modelValue"
    :placeholder="label"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
  <base-error-message
    v-if="error"
    :id="`${uuid}-error`"
  >
    {{ error }}
  </base-error-message>
</template>

<script setup>
import UniqueID from '@/features/UniqueID'
defineProps({
  label: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

defineEmits([ 'update:modelValue' ])

const uuid = UniqueID().getID()
</script>
