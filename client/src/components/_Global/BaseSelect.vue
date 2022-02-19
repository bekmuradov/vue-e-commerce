<template>
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
  <select
    v-bind="{
      ...$attrs,
      onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
    }"
    :id="uuid"
    class="field"
    :value="modelValue"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
  <BaseErrorMessage
    v-if="error"
    :id="`${uuid}-error`"
  >
    {{ error }}
  </BaseErrorMessage>
</template>

<script setup>
import UniqueID from '@/features/UniqueID'
defineProps({
  options: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    required: false,
    default: ''
  },
  error: {
    type: String,
    required: false,
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
