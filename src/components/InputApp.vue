<template>
  <div :class="['form-control', { invalid: error }]">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="change"
    />
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'

const id = nanoid()

defineProps<{
  modelValue: string | number
  error: string | null
  label: string
  placeholder: string
  type: 'text' | 'number' | 'email'
}>()

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const change = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<!--/////////////////////////////////////////////-->

<style scoped lang="scss">
.form-control {
  margin-bottom: 25px;
  label {
    font-size: 24px;
    display: block;
    margin-bottom: 12px;
    @media (max-width: 500px) {
      font-size: 22px;
    }
  }
  input {
    height: 50px;
    padding: 0 20px;
    border-radius: 5px;
    width: 100%;
    font-size: 18px;
    outline: none;
    border: none;
    &:focus {
      box-shadow: 0 0 15px #29a54b;
      transition: all 0.3s ease 0s;
    }
  }
}
.form-control.invalid input {
  box-shadow: 0 0 15px #ff0000;
}
</style>
