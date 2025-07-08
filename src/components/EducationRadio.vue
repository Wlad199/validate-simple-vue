<template>
  <div class="form-control">
    <h3>What's your Education?</h3>
    <div>
      <input
        @input="change"
        type="radio"
        name="education"
        value="elementary"
        id="elementary"
      />
      <label for="elementary"> Elementary Education </label>
    </div>
    <div>
      <input
        @input="change"
        type="radio"
        name="education"
        value="secondary"
        id="secondary"
        checked
      />
      <label for="secondary"> Secondary Education </label>
    </div>
    <div>
      <input
        @input="change"
        type="radio"
        name="education"
        value="higher"
        id="higher"
      />
      <label for="higher"> Higher Education </label>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const change = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style scoped lang="scss">
.form-control {
  margin-bottom: 30px;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    line-height: 140%;
    position: relative;

    &::before {
      content: '';
      align-self: flex-start;
      flex: 0 0 24px;
      height: 24px;
      background-color: #fff;
      border-radius: 50%;
      margin-right: 10px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #299b49;
      transition: all 0.3s ease 0s;
      transform: scale(0);
    }
  }
  input:checked + label::after {
    transform: scale(1);
  }
}
</style>
