<template>
  <div class="form-control">
    <h3>Your message:</h3>
    <textarea
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      name="message"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{
  'update:modelValue': [string]
}>()
</script>

<style scoped lang="scss">
textarea {
  resize: vertical;
  width: 100%;
  min-height: 100px;
  padding: 20px 20px;
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  border: none;
  margin-bottom: 30px;
  &:focus {
    box-shadow: 0 0 15px #29a54b;
    transition: all 0.3s ease 0s;
  }
}
</style>
