<template>
  <div class="form-control">
    <input @change="change" id="agree" type="checkbox" :value="modelValue" />
    <label for="agree">
      I give my consent to the processing of my personal data
    </label>
    <small v-if="!props.modelValue">{{ props.error }}</small>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  error: string | null
}>()
const emit = defineEmits<{
  'update:modelValue': [boolean]
}>()

const change = (e: Event) => {
  emit('update:modelValue', !!(e.target as HTMLInputElement).checked)
}
</script>

<style scoped lang="scss">
.form-control {
  margin-bottom: 40px;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    position: relative;
    font-size: 24px;
    line-height: 140%;
    display: inline-flex;
    align-items: center;
    @media (max-width: 500px) {
      font-size: 22px;
    }

    &::before {
      content: '';
      flex: 0 0 24px;
      height: 24px;
      align-self: flex-start;
      background-color: #fff;
      border-radius: 4px;
      margin-right: 10px;
      margin-top: 4px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 8px;
      left: 4px;
      background-color: #299b49;
      border-radius: 4px;
      transform: scale(0);
      transition: all 0.3s ease 0s;
    }
  }
  input:checked + label::after {
    transform: scale(1);
  }
}
</style>
