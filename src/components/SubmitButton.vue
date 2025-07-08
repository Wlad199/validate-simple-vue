<template>
  <button type="submit">Send request</button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  background-color: #299b49;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 5px 0 #185f2c;
  position: relative;
  top: 0;
  transition: background-color 0.2s ease 0s;
  &:hover {
    background-color: #207b39;
  }
  &:active {
    top: 3px;
    box-shadow: 0 2px 0 #185f2c;
  }
}
</style>
