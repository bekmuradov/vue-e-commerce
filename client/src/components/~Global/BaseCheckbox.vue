<template>
  <input
    v-bind="{ ...$attrs, onChange: ($event) => { $emit('update:modelValue', $event.target.checked) } }"
    :checked="modelValue"
    :id="uuid"
    type="checkbox"
    class="field"
  />
  <label
    :for="uuid"
    v-if="label"
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

<script>
import UniqueID from '@/features/UniqueID'

export default {
  props: {
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
  },
  setup (props) {
    const uuid = UniqueID().getID()

    return {
      uuid
    }
  }
}
</script>
