<template>
  <div class="popup">
    <div class="popup__content">
      <h1>Сonfirm data</h1>
      <div class="popup__data">
        <div>
          <span>Name:</span> <span>{{ user.name }}</span>
        </div>
        <div>
          <span>Age:</span> <span>{{ user.age }}</span>
        </div>
        <div>
          <span>Email:</span> <span>{{ user.email }}</span>
        </div>
        <div>
          <span>City:</span> <span>{{ user.city }}</span>
        </div>
        <div>
          <span>Education:</span> <span>{{ user.education }}</span>
        </div>
        <div>
          <span>Languages: </span>
          <span v-for="language in user.languages"> {{ language + ' ' }}</span>
        </div>
      </div>
      <div class="popup__buttons">
        <PopupButton
          @click="showMessage"
          text="All correct"
          background="green"
          color="white"
        />
        <PopupButton
          @click="reload"
          text="Rewrite"
          background="red"
          color="white"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IUser from '@/types/user'
import PopupButton from '@/components/PopupButton.vue'
import swal from 'sweetalert'

defineProps<{
  user: IUser
}>()

const showMessage = () => {
  swal({
    title: 'Success',
    text: 'Your application has been successfully accepted',
    icon: 'success',
    dangerMode: false,
  }).then((willDelete) => {
    if (willDelete) {
      reload()
    }
  })
}

const reload = () => {
  window.location.reload()
}
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(#000, 0.8);
  padding: 15px;

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    display: inline-block;
  }
  &__data {
    font-size: 22px;
    line-height: 130%;
    margin-bottom: 30px;
    span:first-child {
      color: #29a54b;
    }
  }
}
</style>
