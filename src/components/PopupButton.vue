<template>
  <button :style="{ background, color }">{{ text }}</button>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  background: string
  color: string
}>()
</script>

<style scoped lang="scss">
button {
  padding: 10px 20px;
  border-radius: 5px;
  margin: 5px;
  &:hover {
    opacity: 0.7;
    transition: 0.3s ease;
  }
}
</style>
