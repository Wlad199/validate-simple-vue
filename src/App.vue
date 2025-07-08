<template>
  <h1>Form of participant</h1>
  <form @submit.prevent="submitHandler">
    <InputApp
      v-model.trim="user.name"
      :error="user.errors.name"
      label="Wtat's your name?"
      placeholder="Enter your name"
      type="text"
    />
    <InputApp
      v-model.trim.number="user.age"
      :error="user.errors.age"
      label="How old are you?"
      placeholder="Enter your age"
      type="number"
    />
    <InputApp
      v-model="user.email"
      :error="user.errors.email"
      label="What's your e-mail?"
      placeholder="Enter your email"
      type="text"
    />
    <CitySelect v-model="user.city" />
    <EducationRadio v-model="user.education" />
    <LanguageCheckbox v-model="user.languages" />
    <Message v-model="user.message" />
    <AgreeWithData v-model="user.agreement" :error="user.errors.agreement" />
    <SubmitButton />
  </form>
  <Popup v-if="showResult" :user="user" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IUser from './types/user'
import InputApp from '@/components/InputApp.vue'
import CitySelect from '@/components/CitySelect.vue'
import EducationRadio from '@/components/EducationRadio.vue'
import LanguageCheckbox from '@/components/LanguageCheckbox.vue'
import Message from '@/components/Message.vue'
import AgreeWithData from '@/components/AgreeWithData.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import Popup from '@/components/Popup.vue'

const showResult = ref<boolean>(false)

const user = ref<IUser>({
  name: '',
  age: 18,
  email: '',
  city: 'Moscow',
  education: 'elementary',
  languages: [],
  message: '',
  agreement: false,
  errors: {
    name: null,
    age: null,
    email: null,
    agreement: null,
  },
})

const formIsValid = () => {
  let isValid = true

  if (user.value.name.length === 0) {
    isValid = false
    user.value.errors.name = 'Enter your name'
  } else {
    user.value.errors.name = ''
  }

  if (user.value.age <= 0 || user.value.age > 120) {
    isValid = false
    user.value.errors.age = 'Enter correct age'
  } else {
    user.value.errors.age = ''
  }

  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(user.value.email)) {
    isValid = false
    user.value.errors.email = 'Wrong email'
  } else {
    user.value.errors.email = ''
  }

  if (!user.value.agreement) {
    isValid = false
    user.value.errors.agreement =
      'Please, give consent to the processing of your personal data'
  } else {
    user.value.errors.agreement = ''
  }

  return isValid
}

const submitHandler = () => {
  if (formIsValid()) {
    showResult.value = true
    document.body.classList.add('_locked')
  }
}
</script>

<style scoped lang="scss"></style>
