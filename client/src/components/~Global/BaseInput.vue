<template>
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
  <input
    class="field"
    v-bind="{
      ...$attrs,
      onInput: ($event) => { $emit('update:modelValue', $event.target.value) }
    }"
    :id="uuid"
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

<script>
import UniqueID from '@/features/UniqueID'

export default {
  props: {
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
  },
  setup (props) {
    const uuid = UniqueID().getID()

    return {
      uuid
    }
  }
}
</script>
