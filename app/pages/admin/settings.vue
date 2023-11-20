<script setup lang="ts">
// import {
//   Settings,
//   Sticker,
//   Unplug
// } from 'lucide-vue-next';
import { useNotificationStore } from '../../stores/notifications';
import ThemeSelect from '../../components/ThemeSelect.vue';

const notificationStore = useNotificationStore()

const feedback = ref('')

const sendingFeedback = () => {
  if (!feedback.value) {
    return notificationStore.addNotification({
      type: 'error',
      msg: ' Please write something into the Textfield :)'
    })
  };
}
</script>

<template>
  <main class="flex flex-wrap justify-center overflow-scroll">
    <div class="w-full md:w-1/3 p-4">
      <div class="text-center p-4 w-full flex justify-center">
        <Settings class="mr-2 mt-5"/>
        <h1>Settings</h1>
      </div>
      <div class="card shadow bg-base-100 p-4">
        <!-- <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name?</span>
          </label>
          <input type="text" placeholder="@username" class="input input-bordered w-full max-w-xs" />
        </div> -->
        <ThemeSelect/>
      </div>
    </div>
    <div class="w-full md:w-1/3 p-4">
      <div class="text-center p-4 w-full flex justify-center">
        <Unplug class="mr-2 mt-5"/>
        <h1>Plugins</h1>
      </div>
      <div class="stats shadow stats-vertical lg:stats-horizontal hadow card w-full bg-base-100 p-4 flex tooltip" data-tip="Coming soon">
        <button class="btn btn-primary" disabled>Install</button>
      </div>
    </div>
    <div class="w-full md:w-1/3 p-4">
      <div class="text-center p-4 w-full flex justify-center">
        <Sticker class="mr-2 mt-5"/>
        <h1>Give Feedback</h1>
      </div>
      <div class="stats shadow stats-vertical lg:stats-horizontal hadow card w-full bg-base-100 p-4 flex">
        <textarea class="textarea textarea-ghost h-64 mb-4" placeholder="Type here..." v-model="feedback"></textarea>
        <p class="italic w-full text-center py-2">Anonymous</p>
        <button class="btn btn-primary" @click="sendingFeedback()">Send</button>
      </div>
    </div>
  </main>
</template>
