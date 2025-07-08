<template>
  <div class="form-control">
    <h3>Which languages do you know?</h3>
    <div>
      <input
        @change="change"
        type="checkbox"
        name="language"
        value="english"
        id="english"
      />
      <label for="english"> English </label>
    </div>
    <div>
      <input
        @change="change"
        type="checkbox"
        name="language"
        value="russian"
        id="russian"
      />
      <label for="russian"> Russian </label>
    </div>
    <div>
      <input
        @change="change"
        type="checkbox"
        name="language"
        value="german"
        id="german"
      />
      <label for="german"> German </label>
    </div>
    <div>
      <input
        @change="change"
        type="checkbox"
        name="language"
        value="spanish"
        id="spanish"
      />
      <label for="spanish"> Spanish </label>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string[]
}>()

const emit = defineEmits<{
  'update:modelValue': [string[]]
}>()

let newValue = []
const change = (e: Event) => {
  if (e.target.checked) {
    newValue.push(e.target.value)
  } else {
    newValue = newValue.filter((item) => item !== e.target.value)
  }
  emit('update:modelValue', newValue)
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
    position: relative;
    font-size: 18px;
    line-height: 150%;
    display: inline-flex;
    align-items: center;

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
