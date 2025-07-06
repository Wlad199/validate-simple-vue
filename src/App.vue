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
    <div class="form-control">
      <h3>What's your city?</h3>
      <label for="city">
        <select id="city" v-model="user.city">
          <option value="Yaroslavl">Yaroslavl</option>
          <option value="Moscow">Moscow</option>
          <option value="Tver">Tver</option>
          <option value="Murmansk">Murmansk</option>
        </select>
      </label>
    </div>
    <div class="form-control education">
      <h3>What's your Education?</h3>
      <div>
        <input
          v-model="user.education"
          type="radio"
          name="education"
          value="elementary"
          id="elementary"
        />
        <label for="elementary"> Elementary Education </label>
      </div>
      <div>
        <input
          v-model="user.education"
          type="radio"
          name="education"
          value="secondary"
          id="secondary"
        />
        <label for="secondary"> Secondary Education </label>
      </div>
      <div>
        <input
          v-model="user.education"
          type="radio"
          name="education"
          value="higher"
          id="higher"
        />
        <label for="higher"> Higher Education </label>
      </div>
    </div>
    <div class="form-control language">
      <h3>Which languages do you know?</h3>
      <div>
        <input
          v-model="user.languages"
          type="checkbox"
          name="language"
          value="english"
          id="english"
        />
        <label for="english"> English </label>
      </div>
      <div>
        <input
          v-model="user.languages"
          type="checkbox"
          name="language"
          value="russian"
          id="russian"
        />
        <label for="russian"> Russian </label>
      </div>
      <div>
        <input
          v-model="user.languages"
          type="checkbox"
          name="language"
          value="german"
          id="german"
        />
        <label for="german"> German </label>
      </div>
      <div>
        <input
          v-model="user.languages"
          type="checkbox"
          name="education"
          value="spanish"
          id="spanish"
        />
        <label for="spanish"> Spanish </label>
      </div>
    </div>
    <div class="form-control">
      <h3>Your message:</h3>
      <textarea v-model="user.message" name="message"></textarea>
    </div>
    <div class="form-control data-agree">
      <input v-model="user.agreement" id="agree" type="checkbox" />
      <label for="agree">
        I give my consent to the processing of my personal data
      </label>
      <small v-if="!user.agreement">{{ user.errors.agreement }}</small>
    </div>
    <button type="submit">Send request</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IUser from './types/user'
import InputApp from '@/components/InputApp.vue'

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
    console.log(user.value)
  }
}
</script>

<style scoped lang="scss"></style>
