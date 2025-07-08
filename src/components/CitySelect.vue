<template>
  <div class="form-control">
    <h3>What's your city?</h3>
    <label for="city">
      <select id="city" :value="modelValue" @input="change">
        <option value="Yaroslavl">Yaroslavl</option>
        <option value="Moscow">Moscow</option>
        <option value="Tver">Tver</option>
        <option value="Murmansk">Murmansk</option>
      </select>
    </label>
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
select {
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  border: none;
  margin-bottom: 30px;
}
</style>
