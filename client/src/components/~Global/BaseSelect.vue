<template>
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
  <select
    class="field"
    v-bind="{
      ...$attrs,
      onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
    }"
    :value="modelValue"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
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
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number]
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
