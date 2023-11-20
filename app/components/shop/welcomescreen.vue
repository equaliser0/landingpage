<script setup lang="ts">
import { useNotificationStore } from '../../stores/notifications'

const notificationStore = useNotificationStore()

const email = ref('')
const subscribing = async () => {
  try {
    if (validEmail(email.value)) {
      await subscribe(email.value)
      notificationStore.addNotification({
        type: 'success',
        msg: 'Danke fürs Abonnieren!'
      })
    } else {
      notificationStore.addNotification({
        type: 'error',
        msg: 'Not a valid e-mail-address!'
      })
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error
    })
  }
}
</script>

<template>
  <div class="flex flex-col w-full bg-base-200/70 backdrop-blur-md py-8">
    <h1 class="font-bold text-2xl">Willkommen</h1>
    <div class="flex flex-col items-center w-full">
      <p>Finde die besten Artikel!</p>
      <p>Verpasse keine Neuigkeiten und trage hier deine E-Mail-Adresse ein!</p>
      <div class="flex items-center mb-2 mt-8">
        <input class="input input-bordered w-[400px] mr-1" placeholder="E-Mail" v-model="email" @keydown.enter.prevent="subscribing()">
        <button class="btn btn-primary" @click="subscribing()">Enter</button>
      </div>
    </div>
  </div>
</template>
