<template>
  <input
    v-bind="{ ...$attrs, onChange: ($event) => { $emit('update:modelValue', $event.target.checked) } }"
    :id="uuid"
    :checked="modelValue"
    type="checkbox"
    class="field"
  >
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
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
  modelValue: {
    type: Boolean
  },
  error: {
    type: String,
    default: ''
  }
})

defineEmits([ 'update:modelValue' ])

const uuid = UniqueID().getID()
</script>
